<template>
  <section :id="sectionId" data-aos="fade-up" class="py-24 sm:py-32">
    <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center text-center mb-16">
      <div class="text-primary mb-4 font-semibold">{{ sectionTitle }}</div>
      <h2 class="text-3xl max-w-[40rem] font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-6">
        {{ title }}
      </h2>
      <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        {{ description }}
      </p>
    </div>
    <div class="container flex flex-col max-w-4xl md:grid md:grid-cols-2 w-full justify-center items-center gap-8">
      <PricingPlan
          v-for="(plan, index) in plans"
          :key="index"
          :title="plan.title"
          :description="plan.description"
          :oldPrice="plan.oldPrice"
          :newPrice="plan.newPrice"
          :features="plan.features"
          :notFeatures="plan.notFeatures"
          :featured="plan.featured"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import PricingPlan from '@/components/shared/PricingPlan.vue';

const props = defineProps({
  sectionId: {
    type: String,
    default: 'pricing',
  },
  sectionTitle: {
    type: String,
    default: 'Pricing',
  },
  title: {
    type: String,
    default: 'Save a full weekend, launch and get customers!'
  },
  description: {
    type: String,
    default: 'We have two very generous options to suit projects for today and in the future.'
  },
  plans: {
    type: Array,
    default: () => [
      {
        title: 'Essential',
        description: 'Deploy your new project in one-click.',
        oldPrice: '$79',
        newPrice: '$39',
        features: [
          'Full Nuxt 3 template',
          'Shadcn UI components',
          'TypeScript components',
          'SEO & Analytics integrated',
          'AOS animations',
          'Ready-to-go configuration',
          'One-click Vercel deploy',
        ],
        notFeatures: [
          'Lifetime updates'
        ],
        featured: false,
      },
      {
        title: 'Pro',
        description: 'Get the template and future updates.',
        oldPrice: '$99',
        newPrice: '$59',
        features: [
          'Full Nuxt 3 template',
          'Shadcn UI components',
          'TypeScript components',
          'SEO & Analytics integrated',
          'AOS animations',
          'Ready-to-go configuration',
          'One-click Vercel deploy',
          'Lifetime updates'
        ],
        featured: true,
      }
    ],
  },
});
</script>
