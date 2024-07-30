<template>
  <section :id="sectionId" data-aos="fade-up" class="py-20">
    <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center text-center mb-12">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-6">
        {{ title }}
      </h2>
      <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        {{ description }}
      </p>
    </div>
    <div class="container max-w-4xl py-2">
      <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
          <AccordionTrigger class="text-lg">{{ item.title }}</AccordionTrigger>
          <AccordionContent class="text-lg text-muted-foreground">
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

// Define props
const props = defineProps({
  sectionId: {
    type: String,
    default: 'faq'
  },
  title: {
    type: String,
    default: 'FAQ'
  },
  description: {
    type: String,
    default: 'Here are my answers'
  },
  defaultValue: {
    type: String,
    default: 'item-1'
  },
  accordionItems: {
    type: Array,
    default: () => [
      { value: 'item-1', title: 'How many years of experience?', content: 'I have two strong professional years of marketing experience, not including the time spent on personal projects.' },
      { value: 'item-2', title: 'When are you able to work?', content: 'As soon as possible!' },
      { value: 'item-3', title: 'How is this website created?', content: 'I am proficient in JavaScript, Vue and Nuxt web development languages.' }
    ]
  }
});
</script>
