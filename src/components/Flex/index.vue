<template>
  <div class="flex LySlider">
    <Carousel
      v-if="template.type === 'carousel'"
      :template="template"
      @scrollToBottom="$emit('scrollToBottom')"
    ></Carousel>
    <Bubble v-else :template="template" @scrollToBottom="$emit('scrollToBottom')"></Bubble>
  </div>
</template>

<script src="./index.js"></script>
