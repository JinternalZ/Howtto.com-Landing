<script setup lang="ts">
import { siteConfig } from "~/config/site";
import MouseTrail from '/workspaces/Howtto.com-Landing/components/sections/MouseTrail.vue';

useSeoMeta({
  title: siteConfig.name,
  description: siteConfig.description,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <SiteHeader />

  <main class="flex-1">
    <NuxtPage />
  </main>

  <SiteFooter />

  <MouseTrail />
</template>