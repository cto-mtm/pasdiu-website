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
      tiers: [
        { name: 'Free', priceMonthly: 0, priceAnnual: 0, seats: 'Up to 2' },
        { name: 'Studio', priceMonthly: 12, priceAnnual: 10, seats: 'Per seat/mo' },
        { name: 'Agency', priceMonthly: 25, priceAnnual: 21, seats: 'Per seat/mo' },
        { name: 'Enterprise', price: 'Custom', seats: 'Unlimited' },
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
    description: 'Calculate monthly or annual subscription cost for Pasdiu based on seat count and tier.',
    parameters: {
      tier: {
        type: 'string',
        description: 'Subscription tier name',
        required: true,
        enum: ['free', 'studio', 'agency'],
      },
      seats: {
        type: 'number',
        description: 'Number of team members / seats',
        required: true,
      },
      billing: {
        type: 'string',
        description: 'Billing cycle',
        required: true,
        enum: ['monthly', 'annual'],
      },
    },
    execute: ({ tier, seats, billing }) => {
      const seatCount = Math.max(1, Number(seats) || 1)
      const prices = {
        free: { monthly: 0, annual: 0 },
        studio: { monthly: 12, annual: 10 },
        agency: { monthly: 25, annual: 21 },
      }
      const selectedTier = (tier as keyof typeof prices) in prices ? (tier as keyof typeof prices) : 'studio'
      const rate = billing === 'annual' ? prices[selectedTier].annual : prices[selectedTier].monthly
      const monthlyTotal = rate * seatCount
      const annualTotal = monthlyTotal * 12

      return {
        tier: selectedTier,
        seats: seatCount,
        billing: billing === 'annual' ? 'annual' : 'monthly',
        perSeatRate: rate,
        monthlyTotal,
        annualTotal: billing === 'annual' ? annualTotal : undefined,
        currency: 'USD',
      }
    },
  })
})
