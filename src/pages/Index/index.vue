<template>
  <q-layout view="lHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round dense icon="fas fa-bars" @click="left=!left" />
        <q-toolbar-title>Line Flex Demo</q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="fab fa-github"
          type="a"
          href="https://github.com/a062670/line_flex_demo"
          target="_blank"
        />
        <q-btn flat round dense icon="fas fa-bars" @click="right=!right" />
      </q-toolbar>
    </q-header>

    <q-drawer bordered show-if-above v-model="left" side="left">
      <q-toolbar class="bg-primary">
        <q-input dark dense standout v-model="searchText" class="full-width">
          <template v-slot:append>
            <q-icon v-if="searchText === ''" name="fas fa-search" />
            <q-icon v-else name="fas fa-times" class="cursor-pointer" @click="searchText = ''" />
          </template>
        </q-input>
      </q-toolbar>
      <q-scroll-area class="examplesList">
        <div class="full-width">
          <q-list>
            <q-expansion-item
              expand-separator
              v-for="group in examples"
              :key="group.key"
              :label="group.title"
              :caption="`${group.list.length} examples`"
            >
              <q-item
                dense
                clickable
                style="padding-left: 30px"
                v-for="ex in group.list"
                :key="`${group.key}-${ex.key}`"
                :active="selectedKey === `${group.key}-${ex.key}`"
                @click="selectEx(group, ex)"
              >
                <q-item-section>{{ex.title}}</q-item-section>
              </q-item>
            </q-expansion-item>
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-drawer bordered show-if-above v-model="right" side="right" :width="700">
      <q-scroll-area class="fit">
        <div class="jsonView">
          <json-view :data="selectedContents" v-if="selectedContents" />
        </div>
      </q-scroll-area>
      <q-btn icon="fas fa-copy" label="複製" class="copyBtn" @click="copy" v-if="selectedContents" />
    </q-drawer>

    <q-page-container>
      <q-scroll-area class="fit">
        <div class="fit contents">
          <Flex :template="selectedContents" v-if="selectedContents"></Flex>
        </div>
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
