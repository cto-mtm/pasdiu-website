/**
 * WebMCP (Model Context Protocol for Web) Client Plugin
 * 
 * Exposes Pasdiu website features as structured tools for AI browser agents
 * via both the Declarative DOM API and Imperative `window.navigator.modelContext` API.
 */

export interface WebMCPToolParameter {
  type: 'string' | 'number' | 'boolean'
  description: string
  required?: boolean
  enum?: string[]
}

export interface WebMCPTool {
  name: string
  description: string
  parameters?: Record<string, WebMCPToolParameter>
  execute: (args: Record<string, unknown>) => Promise<unknown> | unknown
}

declare global {
  interface Navigator {
    modelContext?: {
      registerTool: (tool: WebMCPTool) => void
      getTools: () => WebMCPTool[]
    }
  }
  interface Window {
    webMCP?: {
      registerTool: (tool: WebMCPTool) => void
      tools: WebMCPTool[]
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined') return

  const tools: WebMCPTool[] = []

  function registerTool(tool: WebMCPTool) {
    const existingIndex = tools.findIndex((t) => t.name === tool.name)
    if (existingIndex >= 0) {
      tools[existingIndex] = tool
    } else {
      tools.push(tool)
    }
  }

  // Initialize navigator.modelContext interface if not present
  if (!navigator.modelContext) {
    navigator.modelContext = {
      registerTool,
      getTools: () => [...tools],
    }
  } else {
    const origRegister = navigator.modelContext.registerTool
    navigator.modelContext.registerTool = (tool: WebMCPTool) => {
      registerTool(tool)
      if (typeof origRegister === 'function') origRegister(tool)
    }
  }

  window.webMCP = {
    registerTool,
    tools,
  }

  // Register built-in Pasdiu tools for AI Agents

  // 1. Site Info Tool
  registerTool({
    name: 'get_site_info',
    description: 'Get key information about Pasdiu marketing site, available features, pricing tiers, and contact options.',
    parameters: {},
    execute: () => ({
      name: 'Pasdiu',
      tagline: 'Client-work logistics hub for media creators',
      pricingModel: 'Flat price per workspace — no per-seat charge. Client reviewer users are free and unlimited on every tier.',
      tiers: [
        { name: 'Free', priceMonthly: 0, priceAnnual: 0, seatAllowance: 3 },
        { name: 'Studio', priceMonthly: 49, priceAnnual: 490, seatAllowance: 20 },
        { name: 'Agency', priceMonthly: 149, priceAnnual: 1490, seatAllowance: 'Unlimited' },
        { name: 'Enterprise', price: 'Custom', seatAllowance: 'Unlimited' },
      ],
      features: [
        'Frame-accurate video & audio review',
        'Client sign-off & version comparison',
        'Real-time feedback threads',
        'Gmail notifications & automated forms',
      ],
    }),
  })

  // 2. Pricing Calculator Tool
  registerTool({
    name: 'calculate_pricing',
    description: 'Get the flat subscription cost for a Pasdiu tier. Pricing is per workspace, not per seat — team size never changes the price, it only determines which tier a team fits in.',
    parameters: {
      tier: {
        type: 'string',
        description: 'Subscription tier name',
        required: true,
        enum: ['free', 'studio', 'agency'],
      },
      teamSize: {
        type: 'number',
        description: 'Number of team members (admins, PMs, contractors). Does not affect price — used only to check the tier\'s seat allowance. Client reviewer users never count.',
        required: false,
      },
      billing: {
        type: 'string',
        description: 'Billing cycle',
        required: true,
        enum: ['monthly', 'annual'],
      },
    },
    execute: ({ tier, teamSize, billing }) => {
      // Flat per-workspace pricing: annual is 10x monthly ("2 months free").
      const plans = {
        free: { monthly: 0, annual: 0, seatAllowance: 3 },
        studio: { monthly: 49, annual: 490, seatAllowance: 20 },
        agency: { monthly: 149, annual: 1490, seatAllowance: Infinity },
      }
      const selectedTier = (tier as keyof typeof plans) in plans ? (tier as keyof typeof plans) : 'studio'
      const plan = plans[selectedTier]
      const isAnnual = billing === 'annual'
      const seats = Number(teamSize) || 0
      const fitsSeatAllowance = seats > 0 ? seats <= plan.seatAllowance : undefined

      return {
        tier: selectedTier,
        billing: isAnnual ? 'annual' : 'monthly',
        pricingModel: 'flat per workspace',
        total: isAnnual ? plan.annual : plan.monthly,
        monthlyEquivalent: isAnnual ? Math.round(plan.annual / 12) : plan.monthly,
        seatAllowance: plan.seatAllowance === Infinity ? 'unlimited' : plan.seatAllowance,
        teamSize: seats > 0 ? seats : undefined,
        fitsSeatAllowance,
        clientReviewers: 'free and unlimited — never count against the seat allowance',
        currency: 'USD',
      }
    },
  })
})
