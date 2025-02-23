<template>
  <app-navbar></app-navbar>
  <main>
    <router-view  />
  </main>
  <app-footer></app-footer>
</template>

<script>
  
</script>


<style scoped>
  main{
    min-height: calc(100vh - 220px);
  }
</style>
