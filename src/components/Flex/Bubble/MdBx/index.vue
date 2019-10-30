<template>
  <div class="MdBx" :class="divClass" :style="divStyle" @click.stop="doAction(template.action)">
    <template v-for="(item, idx) in template.contents">
      <MdBtn
        v-if="item.type==='button'"
        :template="item"
        :parentLayout="template.layout || 'vertical'"
        :key="idx"
        @doAction="doAction"
      ></MdBtn>
      <MdBx
        v-else-if="item.type==='box'"
        :template="item"
        :parentLayout="template.layout || 'vertical'"
        :key="idx"
        @doAction="doAction"
      ></MdBx>
      <MdBxFiller
        v-else-if="item.type==='filler'"
        :template="item"
        :parentLayout="template.layout || 'vertical'"
        :key="idx"
      ></MdBxFiller>
      <MdBxSpacer
        v-else-if="item.type==='spacer'"
        :template="item"
        :parentLayout="template.layout || 'vertical'"
        :key="idx"
      ></MdBxSpacer>
      <MdIco
        v-else-if="item.type==='icon'"
        :template="item"
        :parentLayout="template.layout || 'vertical'"
        :key="idx"
      ></MdIco>
      <MdImg
        v-else-if="item.type==='image'"
        :template="item"
        :parentLayout="template.layout || 'vertical'"
        :key="idx"
        @doAction="doAction"
      ></MdImg>
      <MdSep
        v-else-if="item.type==='separator'"
        :template="item"
        :parentLayout="template.layout || 'vertical'"
        :key="idx"
      ></MdSep>
      <MdTxt
        v-else-if="item.type==='text'"
        :template="item"
        :parentLayout="template.layout || 'vertical'"
        :key="idx"
        @doAction="doAction"
      ></MdTxt>
    </template>
  </div>
</template>

<script src="./index.js"></script>
