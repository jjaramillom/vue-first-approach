<template>
  <div>
    <h1>{{animal.name}} ({{$route.params.species}})</h1>
    <p>{{animal.age}} years old</p>
    <p>Breed: {{animal.breed}} </p>
  </div>
</template>

<script>
// import cats from '@/data/cats'; // @ is a reference to the source directory provided by Vue CLI
import { mapState } from 'vuex';

export default {
  name: 'Pets',
  data() {
    return {
      animal: {},
    };
  },
  computed: {
    ...mapState(['cats', 'dogs']),
  },
  mounted() {
    const { species, id } = this.$route.params;
    this.animal = this[species][id];
  },
  methods: {
    pet() {
      const { species, id } = this.$route.params;
      return this[species][id];
    },
  },
};
</script>

<style scoped lang="scss">
.main-container {
  width: 80%;
  margin: auto;
}
</style>
