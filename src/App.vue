/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

<template>
  <component>
    <router-view></router-view>
  </component>
</template>
<script>
import MainLayout from '@/layouts/MainLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';

export default {
  name: 'App',
  computed: {
    resolveLayout() {
      console.log(this.$route.meta.layout);
      if (this.$route.meta.layout === 'blank') {
        return BlankLayout;
      } else {
        return MainLayout;
      }
    }
  }
};
</script>