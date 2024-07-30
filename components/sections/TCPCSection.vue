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
                <span>{{ feature.title }}</span>
              </dt>
              <dd class="leading-6 text-muted-foreground">
                {{ feature.description }}
              </dd>
              <div v-if="feature.title === 'Advertising Campaigns'" class="mt-4">
                <!-- Embed the iframe here -->
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7221957370535428097?compact=1" height="399" width="500" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
              </div>
              <div v-if="feature.title === 'Website Management'" class="mt-4">
                <a :href="additionalImageLink" target="_blank" rel="noopener noreferrer">
                  <NuxtImg
                    class="rounded-xl"
                    :src="additionalImageSrc"
                    :alt="additionalImageAlt" />
                </a>
              </div>
            </div>
          </dl>
        </div>
        <div class="rounded-xl p-4 lg:-m-4">
          <div class="aspect-w-16 aspect-h-9 relative rounded-xl border mt-96">
            <NuxtImg
              class="rounded-xl"
              :src="imageSrc"
              :alt="imageAlt" />
          </div>
          <!-- Add the new image here -->
          <div class="aspect-w-16 aspect-h-9 relative rounded-xl border mt-96">
            <NuxtImg
              class="rounded-xl"
              :src="newImageSrc"
              :alt="newImageAlt" />
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
      default: "Twin Cities Pain Clinic"
    },
    description: {
      type: String,
      default: ""
    },
    featureItems: {
      type: Array,
      default: () => [
        {
          icon: "radix-icons:envelope-open",
          title: "Referral Marketing",
          description: "Planning routes and executing strategies to increase referrals from outside medical practices. I successfully received patient referrals from ten new medical practices in the first quarter of 2024. Besides physically driving to the locations, I also planned and executed a long-term mail marketing campaign using tracking numbers to analyze referrals."
        },
        {
          icon: "radix-icons:ruler-square",
          title: "Advertising Campaigns",
          description: "In the first two quarters of 2024 I successfully executed $10,000 of social media ads on Google, Facebook and Linkedin. I was also one of two people responsible for a $100,000 television advertising campaign, including content creation and ad execution."
        },
        {
          icon: "radix-icons:desktop",
          title: "Website Management",
          description: "I helped code the WordPress website to include new features and improve the user experience. I also helped write copy for many blog articles, all of which rank highly on Google. Click to see an example of my copywriting."
        },
        {
          icon: "radix-icons:person",
          title: "CRM Marketing",
          description: "I helped manage the CRM system, including creating and sending email campaigns, tracking open rates and click-through rates, and analyzing data to improve future campaigns. I also helped increase and perfect the very important Google Business Profile reviews, increasing each location's ratings by an average of five percent month over month."
        }
      ]
    },
    imageSrc: {
      type: String,
      default: "images/googletcpc.png"
    },
    imageAlt: {
      type: String,
      default: "SaaS"
    },
    additionalImageSrc: {
      type: String,
      default: "images/Blogblurb.png"
    },
    additionalImageAlt: {
      type: String,
      default: "Additional Image"
    },
    additionalImageLink: {
      type: String,
      default: "https://twincitiespainclinic.com/7-tips-to-prevent-back-pain-on-the-golf-course/"
    },
    newImageSrc: {
      type: String,
      default: "images/QR.png"
    },
    newImageAlt: {
      type: String,
      default: "New Image"
    }
  });
  </script>