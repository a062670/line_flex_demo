<template>
  <div class="MdTxt" :class="divClass" :style="divStyle" @click.stop="doAction(template.action)">
    <p v-if="contents.length">
      <MdSpn v-for="(item, idx) in contents" :key="idx" :template="item"></MdSpn>
    </p>
    <p :style="pStyle" v-else>{{template.text}}</p>
  </div>
</template>

<script src="./index.js"></script>
