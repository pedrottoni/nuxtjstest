<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
const value2 = ref(true)
const selected = ref(false)
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })
</script>
<template>
    <section>
        <div class="bg-center bg-cover bg-design-image bg-no-repeat blur-none z-0 lg:bg-design-image-large">
            <div class="pb-36 pt-2 px-6 relative rounded-3xl md:pb-48 lg:pb-72 lg:px-12">
                <div class="-mx-4 flex flex-wrap items-center justify-center lg:space-y-0 mt-24 space-y-6">
                    <div class="px-4 text-center w-full md:w-8/12 xl:w-6/12">
                        <h4 class="dark:text-secondary-200 font-bold font-serif mb-1 text-secondary-600 uppercase">
              Welcome to </h4>
                        <h1 class="capitalize leading-tight mb-2 text-white">
              Vue Designer </h1>
                        <h5 class="mb-6 text-gray-300">
              A desktop drag-and-drop editor for Mac, Windows and Linux that
              lets you visually design your Vue apps. </h5>
                        <BaseButton class="!rounded-3xl px-6 py-4" to="https://vuedesigner.com" trailing target="_blank" trailing-icon="material-symbols:open-in-new" size="xl" label="Learn More!"/>
                        <el-button text="low mano" type="success" auto-insert-space icon="material-symbols:360" class="container my-8" color="orange">Success</el-button>
                        <el-carousel :interval="4000" type="card" height="200px"> 
                            <el-carousel-item v-for="item in 3" :key="item" class="bg-red-600"> 
                                <h3 text="2xl" justify="center">{{ item }}</h3> 
                            </el-carousel-item>                             
                        </el-carousel>
                        <el-button round icon="material-symbols:18-up-rating-sharp" class="container">Round</el-button>
                        <el-switch v-model="value2"/>
                        <el-switch v-model="value" size="large" active-text="Open" inactive-text="Close"/>
                        <n-button>Default</n-button>
                    </div>
                    <UToggle v-model="selected"/>
                    <UButton icon="ph:airplane-bold" label="puta merda mano"></UButton>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
