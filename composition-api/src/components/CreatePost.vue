<template>
  <div class="createPost-container">
    <h2>Create Post</h2>
    <input type="text" placeholder="Enter title" v-model="title" />
    <textarea rows="3" placeholder="Enter content" v-model="content"></textarea>
    <button @click="onCreatePost" :disabled="!validForm">create post</button>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'CreatePost',
  props: {},
  setup(props, context) {
    const title = ref('');
    const content = ref('');

    const validForm = computed(() => {
      return title.value !== '' && content.value !== '';
    });

    const onCreatePost = () => {
      context.emit('createPost', {
        title: title.value,
        content: content.value,
        id: getID(),
      });
      console.log(getID());
      title.value = '';
      content.value = '';
    };

    const getID = () =>
      `_${Math.random()
        .toString(36)
        .substr(2, 9)}`;

    return { title, content, onCreatePost, validForm };
  },
});
</script>

<style scoped lang="scss">
.createPost-container {
  max-width: 300px;
  padding: 10px;
  border: dotted thin rgb(124, 124, 124);
  color: rgb(88, 88, 88);
  border-radius: 10px;
  background: rgba(160, 160, 160, 0.425);
  margin: auto;
}

input {
  display: block;
  margin: 10px auto;
}

textarea {
  max-width: 200px;
  min-width: 200px;
  max-height: 200px;
  width: 200px;
}
</style>
