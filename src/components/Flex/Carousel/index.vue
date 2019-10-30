<template>
  <div class="flexCarousel">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(bubble, idx) in template.contents" :key="idx">
          <Bubble :template="bubble" ref="bubble" @scrollToBottom="$emit('scrollToBottom')"></Bubble>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
