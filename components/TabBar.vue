<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    tabs: {
      type: Array,
      default: null,
      required: true,
    },
  })

  const activeTab = ref(props.tabs[0].value)
</script>

<template>
  <div id="tabs">
    <div id="tab-header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab"
        :class="{ active: tab.value == activeTab }"
        @click="activeTab = tab.value"
      >
        <span>{{ tab.title }}</span>
      </div>
    </div>
    <div id="tabs-content">
      <slot name="content" :active="activeTab" />
    </div>
  </div>
</template>
<style scoped>
  #tabs {
    width: 100%;

    #tab-header {
      display: flex;
      text-align: center;
      .tab {
        flex: 1;
        padding-bottom: 0.6rem;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: hsl(220, 62%, 25%);
        transition: 0.25s all ease-in-out;
        border-bottom: 2px solid hsl(214, 32%, 91%);

        &:hover {
          color: hsl(213, 48%, 47%);
        }
        & + .tab {
        }

        &.active {
          color: hsl(213, 99%, 64%);
          border-bottom: 3px solid hsl(213, 99%, 64%);
        }
      }
    }
    #tabs-content {
      margin-top: 2rem;
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
</style>
