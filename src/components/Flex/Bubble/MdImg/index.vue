<template>
  <div class="MdImg" :class="divClass" :style="divStyle" @click.stop="doAction(template.action)">
    <div>
      <a :style="{'padding-bottom':aspectRatio}">
        <span :style="imageStyle"></span>
      </a>
    </div>
  </div>
</template>

<script src="./index.js"></script>
