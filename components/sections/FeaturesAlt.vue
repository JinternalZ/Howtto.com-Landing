<template>
  <section :id="sectionId" data-aos="fade-up" class="container py-8 md:py-12 lg:py-24">
    <div class="mx-auto grid max-w-7xl gap-16 px-4 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
      <div class="relative rounded-xl border overflow-hidden">
        <NuxtImg
            class="rounded-xl object-cover w-full h-full"
            :src="imageSrc"
            :alt="imageAlt"/>
      </div>
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          {{ title }}
        </h2>
        <p class="mt-6 text-lg/8 text-muted-foreground">
          {{ description }}
        </p>
        <div class="mt-6 grid grid-cols-2 gap-4">
          <div v-for="(feature, index) in featureItems" :key="index" class="rounded-xl border bg-card p-4 text-card-foreground">
            <div class="relative pl-8">
              <div class="font-semibold text-gray-900 dark:text-white">
                <Icon :icon="feature.icon" class="absolute left-0 top-1 size-5 text-primary"/>
                <span>{{ feature.title }}</span>
              </div>
              <div class="leading-6 text-muted-foreground">
                {{ feature.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  sectionId: {
    type: String,
    default: "features-alt"
  },
  title: {
    type: String,
    default: "Productivity & simplicity"
  },
  description: {
    type: String,
    default: "My goal is to use cutting edge tools to help grow your business online and create a trustworthy local presence."
  },
  featureItems: {
    type: Array,
    default: () => [
      {
        icon: "radix-icons:magnifying-glass",
        title: "SEO Analytics",
        description: "SEMRush, MOZ, and Google Analytics."
      },
      {
        icon: "radix-icons:crosshair-1",
        title: "Local Marketing",
        description: "Local SEO, Google My Business, and Yelp."
      },
      {
        icon: "radix-icons:mobile",
        title: "Ad Campaigns",
        description: "Affiliate marketing, TV/Radio Ads, Google Ads, and Facebook Ads."
      },
      {
        icon: "radix-icons:face",
        title: "In-Person Marketing",
        description: "Business Development, Referral Programs, and Networking."
      }
    ]
  },
  imageSrc: {
    type: String,
    default: "images/Tools.png"
  },
  imageAlt: {
    type: String,
    default: "SaaS"
  }
});
</script>