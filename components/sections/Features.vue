<template>
  <section :id="sectionId" data-aos="fade-up" class="container py-8 md:py-12 lg:py-24">
    <div class="mx-auto grid max-w-7xl gap-16 px-4 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          {{ title }}
        </h2>
        <p class="mt-6 text-lg/8 text-muted-foreground">
          {{ description }}
        </p>
        <dl class="mt-6 space-y-4 leading-7">
          <div v-for="(feature, index) in featureItems" :key="index" class="relative pl-8">
            <dt class="font-semibold text-gray-900 dark:text-white">
              <Icon :icon="feature.icon" class="absolute left-0 top-1 size-5 text-primary" />
              <span v-if="feature.title === 'Twin Cities Pain Clinic'">
                <NuxtLink :to="{ path: '/TCPC' }">{{ feature.title }}</NuxtLink>
              </span>
              <span v-else>{{ feature.title }}</span>
            </dt>
            <dd class="leading-6 text-muted-foreground">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="rounded-xl p-4 lg:-m-4">
        <div class="aspect-w-16 aspect-h-9 relative rounded-xl border">
          <NuxtImg
              class="rounded-xl"
              :src="imageSrc"
              :alt="imageAlt" />
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
    default: "features"
  },
  title: {
    type: String,
    default: "Fully featured & ready."
  },
  description: {
    type: String,
    default: ""
  },
  featureItems: {
    type: Array,
    default: () => [
      {
        icon: "radix-icons:moon",
        title: "Twin Cities Pain Clinic",
        description: "Marketing Assistant - 1/1/24-8/1/24"
      },
      {
        icon: "radix-icons:moon",
        title: "Fun.com Brands",
        description: "eCommerce Specialist - 7/1/23-1/1/24"
      },
      {
        icon: "radix-icons:moon",
        title: "IEM at UMN",
        description: "Marketing Management Intern - 7/1/22-7/1/23"
      },
      {
        icon: "radix-icons:moon",
        title: "Personal Projects",
        description: "2019-2024"
      }
    ]
  },
  imageSrc: {
    type: String,
    default: "images/Marketing.png"
  },
  imageAlt: {
    type: String,
    default: "SaaS"
  }
});
</script>