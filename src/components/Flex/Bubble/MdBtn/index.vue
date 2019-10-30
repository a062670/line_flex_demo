<template>
  <div class="MdBtn" :class="divClass" :style="divStyle" @click.stop="doAction(template.action)">
    <a :style="aStyle">
      <div>{{template.action.label || template.action.text || template.action.displayText}}</div>
    </a>
  </div>
</template>

<script src="./index.js"></script>
