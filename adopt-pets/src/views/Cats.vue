<template>
  <div class="main-container">
    <PetTable species="cats" :pets="cats" />
  </div>
</template>

<script>
// import cats from '@/data/cats'; // @ is a reference to the source directory provided by Vue CLI
import { mapState } from 'vuex';
import PetTable from '../components/PetTable';

export default {
  name: 'Cats',
  components: { PetTable },
  computed: {
    ...mapState(['cats']),
  },
};
</script>

<style scoped lang="scss">
.main-container {
  width: 80%;
  margin: auto;
}
</style>
