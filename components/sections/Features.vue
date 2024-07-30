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
              <NuxtLink v-if="feature.title === 'Twin Cities Pain Clinic'" :to="{ path: '/TCPC' }">{{ feature.title }}</NuxtLink>
              <NuxtLink v-else-if="feature.title === 'Fun.com Brands'" :to="{ path: '/fun' }">{{ feature.title }}</NuxtLink>
              <span v-else>{{ feature.title }}</span>
            </dt>
            <dd class="leading-6 text-muted-foreground">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="rounded-xl p-4 lg:-m-4">
        <div class="relative rounded-xl border aspect-ratio-box">
          <NuxtImg
              class="rounded-xl aspect-ratio-content"
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
    default: "My Experiences"
  },
  description: {
    type: String,
    default: "Since graduation, I have consistently worked in marketing for two whole years, including one internship and two temp jobs. Click on one below to learn more about them."
  },
  featureItems: {
    type: Array,
    default: () => [
      {
        icon: "radix-icons:card-stack-plus",
        title: "Twin Cities Pain Clinic",
        description: "Marketing Assistant - 1/1/24-8/1/24"
      },
      {
        icon: "radix-icons:face",
        title: "Fun.com Brands",
        description: "eCommerce Specialist - 7/1/23-1/1/24"
      },
      {
        icon: "radix-icons:backpack",
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

<style scoped>
.aspect-ratio-box {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
}

.aspect-ratio-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>