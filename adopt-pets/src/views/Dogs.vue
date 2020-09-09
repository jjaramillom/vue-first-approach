<template>
  <div class="main-container">
    <PetTable species="dogs" :pets="dogs" />
  </div>
</template>

<script>
// import dogs from '@/data/dogs'; // @ is a reference to the source directory provided by Vue CLI
import { mapState } from 'vuex';
import PetTable from '../components/PetTable';
export default {
  name: 'Dogs',
  components: { PetTable },
  // data() {
  //   return {
  //     dogs,
  //   };
  // },
  computed: {
    ...mapState(['dogs']),
  },
};
</script>

<style scoped lang="scss">
.main-container {
  width: 80%;
  margin: auto;
}
</style>
