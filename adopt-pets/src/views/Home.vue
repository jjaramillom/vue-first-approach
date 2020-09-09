<template>
<!-- The home-view-container class comes from the global SASS styles impoted in main.js -->
  <div class="home home-view-container">
    <h1>Adopt a new friend</h1>
    <h3>({{ animalsCount }}) available</h3>
    <button class="btn btn-primary mt-2" @click="togglePetForm">Add New Pet</button>
    <div class="card" v-if="showPetForm">
      <b-form @submit.prevent="onSubmit">
        <b-form-group id="input-group-2" label="Pet's name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            type="text"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Species:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.species"
            :options="['cats', 'dogs']"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="Pet's age:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.age"
            type="number"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-button class="form__button" type="submit" variant="primary">Submit</b-button>
        <b-button class="form__button" type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      showPetForm: false,
      form: {
        name: '',
        species: 'cats',
        age: 1,
      },
    };
  },
  computed: {
    ...mapGetters(['animalsCount', 'getAllCats', 'getAllDogs']),
  },
  methods: {
    ...mapActions(['addPet']),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    onSubmit() {
      const { species, age, name } = this.form;

      const payload = {
        species,
        pet: {
          name,
          age,
        },
      };
      this.addPet(payload);
    },
  },
};
</script>

<style scoped>
.card {
  margin: 30px auto;
  padding: 10px;
  text-align: left;
  width: 50%;
  border: thin #ccc solid;
  box-shadow: 3px 3px 2px rgba(61, 57, 57, 0.61);
}
.form__button {
  margin-right: 5px;
}
</style>
