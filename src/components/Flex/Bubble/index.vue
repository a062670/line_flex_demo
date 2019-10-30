<template>
  <div class="flexBubble lyItem" :class="divClass" ref="item">
    <div class="T1" :class="`fx${direction.toUpperCase()}`" :dir="direction">
      <!-- header -->
      <div class="t1Header" v-if="'header' in template">
        <MdBx :template="template.header" :direction="direction" @doAction="doAction"></MdBx>
      </div>
      <!-- hero -->
      <div class="t1Hero" v-if="'hero' in template">
        <MdImg :template="template.hero" :direction="direction" @doAction="doAction"></MdImg>
      </div>
      <!-- body -->
      <div class="t1Body" :class="{ExHasFooter: 'footer' in template}" v-if="'body' in template">
        <MdBx :template="template.body" :direction="direction" @doAction="doAction"></MdBx>
      </div>
      <!-- footer -->
      <div class="t1Footer" v-if="'footer' in template">
        <MdBx :template="template.footer" :direction="direction" @doAction="doAction"></MdBx>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
