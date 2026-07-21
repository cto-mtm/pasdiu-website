<template>
  <div class="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
    <SiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
