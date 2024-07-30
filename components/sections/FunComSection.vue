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
              <div v-if="feature.title === 'Affiliate Marketing'" class="mt-4">
                <a :href="instagramLink" target="_blank" rel="noopener noreferrer">
                  <NuxtImg
                    class="rounded-xl"
                    :src="newImageSrc"
                    :alt="newImageAlt" />
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
              :src="additionalNewImageSrc"
              :alt="additionalNewImageAlt" />
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
      default: "Fun Brands"
    },
    description: {
      type: String,
      default: "Chances are, if you have bought a Halloween costume in the last twenty years, it was from HalloweenCostumes.com"
    },
    featureItems: {
      type: Array,
      default: () => [
        {
          icon: "radix-icons:desktop",
          title: "Website Management",
          description: "I was tasked with countless ad-hoc projects, including the SEO of products, fixing broken pages, and developing strategies to rank our products higher on all search engines. I worked on all of their websites for every country, including the Mexico site where I used my Spanish skills to perfect product pages."
        },
        {
          icon: "radix-icons:face",
          title: "CRM Marketing",
          description: "The marketing and webex team worked closely, and I helped develop changes to the CRM system to improve the user experience. I helped create content and landing page changes in order to promote sales and exclusive deals, in order to increase conversions."
        },
        {
          icon: "radix-icons:person",
          title: "Affiliate Marketing",
          description: "Fun Brands has a huge online presence, and I helped manage influencers on Instagram who post pictures of our products. These were known as lifestyle images and I would reach out to the influencer in order to get permission to link their image to our site. These conversion rates were extremely high, normally between twenty and thirty percent."
        },
        {
          icon: "radix-icons:rocket",
          title: "Halloween.com Launch",
          description: "Since I worked there during their busiest season, I was able to help launch their new venture, Halloween.com. I primarily helped create strategies for creating content, managing website issues, and creating exceptional copy for hundreds of products. Halloween.com reached a massive amount of people at launch, reaching into 600,000 views per month."
        }
      ]
    },
    imageSrc: {
      type: String,
      default: "images/CRMFun.png"
    },
    imageAlt: {
      type: String,
      default: "SaaS"
    },
    additionalImageSrc: {
      type: String,
      default: "images/FunLogos.png"
    },
    additionalImageAlt: {
      type: String,
      default: "Additional Image"
    },
    additionalImageLink: {
      type: String,
      default: "https://www.fun.com/"
    },
    newImageSrc: {
      type: String,
      default: "images/AffiliateFun.png"
    },
    newImageAlt: {
      type: String,
      default: "New Image"
    },
    additionalNewImageSrc: {
      type: String,
      default: "images/Halloween.png"
    },
    additionalNewImageAlt: {
      type: String,
      default: "Additional New Image"
    },
    instagramLink: {
      type: String,
      default: "https://www.instagram.com/fundotcom_/?hl=en"
    }
  });
  </script>