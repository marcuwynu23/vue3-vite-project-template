/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
<template>
	<MainLayout>
		Home
	</MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import { useStore } from '@/stores/store';

const store = useStore();
store.test();
</script>