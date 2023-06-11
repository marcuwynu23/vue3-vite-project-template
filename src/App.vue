<script>
import MainLayout from '@/layouts/main-layout.vue';
import BlankLayout from '@/layouts/blank-layout.vue';

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
<template>
  <component :is="resolveLayout">
    <router-view></router-view>
  </component>
</template>
