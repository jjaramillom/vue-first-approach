<template>
  <div id="app">
    <NavigationBar />
    <div class="body-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from '@vue/composition-api';
import NavigationBar from '@/components/layout/NavigationBar.vue';

export default defineComponent({
  name: 'App',
  components: { NavigationBar },
});
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.body-container {
  margin-top: 5rem;
}
</style>
