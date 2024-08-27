<template>
  <section :id="sectionId" data-aos="fade-up" class="container py-4 md:py-6 lg:py-12">
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
            <div v-if="feature.title === 'Newsletter Marketing'" class="mt-4">
              <a :href="innovationWeekLink" target="_blank" rel="noopener noreferrer">
                <NuxtImg
                  class="rounded-xl"
                  :src="newImageSrc"
                  :alt="newImageAlt" />
              </a>
            </div>
            <div v-if="feature.title === 'Event Planning'" class="mt-4">
              <!-- Add buttons here -->
              <div class="mt-4 space-y-2">
                <a href="images/2021-22_IEM-Annual-Report-1.pdf" download>
                  <button class="w-full px-4 py-2 bg-blue-500 text-white rounded mt-2">Annual Report</button>
                </a>
                <a href="images/2022-23_IEM-Annual-Report.pdf" download>
                  <button class="w-full px-4 py-2 bg-blue-500 text-white rounded mt-2">Annual Report #2</button>
                </a>
                <a href="images/2022-08-August-IEM-Newsletter.pdf" download>
                  <button class="w-full px-4 py-2 bg-blue-500 text-white rounded mt-2">Newsletter Sample</button>
                </a>
                <a href="images/2022-11-November-IEM-Newsletter.pdf" download>
                  <button class="w-full px-4 py-2 bg-blue-500 text-white rounded mt-2">Newsletter Sample #2</button>
                </a>
              </div>
            </div>
          </div>
        </dl>
      </div>
      <div class="rounded-xl p-4 lg:-m-4">
        <div class="aspect-w-16 aspect-h-9 relative rounded-xl border mt-12">
          <a href="https://www.linkedin.com/groups/3930327/" target="_blank" rel="noopener noreferrer">
            <NuxtImg
              class="rounded-xl"
              :src="imageSrc"
              :alt="imageAlt" />
          </a>
        </div>
        <div class="aspect-w-16 aspect-h-9 relative rounded-xl border mt-12">
          <a href="https://med.umn.edu/iem" target="_blank" rel="noopener noreferrer">
            <NuxtImg
              class="rounded-xl"
              :src="additionalNewImageSrc"
              :alt="additionalNewImageAlt" />
          </a>
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
    default: "IEM at UMN"
  },
  description: {
    type: String,
    default: "The Institute for Engineering in Medicine markets to both engineers and doctors globally in order to bring them together for research."
  },
  featureItems: {
    type: Array,
    default: () => [
      {
        icon: "radix-icons:desktop",
        title: "Social Media Management",
        description: "I managed all channels of IEM social media, including Facebook, Twitter, Instagram and LinkedIn. I also created a campaign for LinkedIn to create a group and large online presence."
      },
      {
        icon: "radix-icons:face",
        title: "Email Marketing",
        description: "Each month I collected and created two distinct newsletters for IEM. I would create the content, design the email using HTML, and send it out to thousands of doctors and engineers."
      },
      {
        icon: "radix-icons:person",
        title: "Newsletter Marketing",
        description: "Along with the monthly newsletters, I helped created copy and content for IEM's annual report. I helped create two of these large reports in 2022 and 2023, choc full of content and information."
      },
      {
        icon: "radix-icons:rocket",
        title: "Event Planning",
        description: "I helped plan and execute many events for IEM, including the Annual Conference, Innovation Week and department events. I would plan and reserve large event spaces such as Surly Brewing, arrange event catering for food, chairs, and other party necessities."
      }
    ]
  },
  imageSrc: {
    type: String,
    default: "images/Linkedin.png"
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
    default: "images/InnovationWeek.png"
  },
  newImageAlt: {
    type: String,
    default: "New Image"
  },
  additionalNewImageSrc: {
    type: String,
    default: "images/Socials.png"
  },
  additionalNewImageAlt: {
    type: String,
    default: "Additional New Image"
  },
  instagramLink: {
    type: String,
    default: "https://www.instagram.com/fundotcom_/?hl=en"
  },
  innovationWeekLink: {
    type: String,
    default: "https://med.umn.edu/iem/conferences-and-events/additional-events/iem-innovation-week"
  }
});
</script>