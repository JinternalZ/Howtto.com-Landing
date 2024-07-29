<script setup lang="ts">
import Hero from '@/components/sections/Hero.vue'
import Problems from '@/components/sections/Problems.vue'
import Features from '@/components/sections/Features.vue'
import FeaturesTwo from '~/components/sections/FeaturesAlt.vue'
import CallToAction from '@/components/sections/CallToAction.vue'
import Testimonials from "@/components/sections/Testimonials.vue";
import Pricing from "@/components/sections/Pricing.vue";
import FAQ from "@/components/sections/FAQ.vue";
</script>

<template>
  <Hero />
  <FeaturedOn />
  <FeaturesTwo />
  <Features />
  <FAQ />
  <Testimonials />
  <CallToAction />
</template>