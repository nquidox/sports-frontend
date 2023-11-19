<script>
import GlobalNavbar from "@/components/GlobalNavbar.vue";

export default {
  name: 'App',
  components: { GlobalNavbar },
}
</script>

<template>
  <GlobalNavbar />
  <router-view />
</template>

<style>
</style>