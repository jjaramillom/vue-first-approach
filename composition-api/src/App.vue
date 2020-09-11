<template>
  <div id="app">
    <CreatePost @createPost="createPost($event)" />
    <button @click="togglePostsList" class="big-button mb">{{ buttonTxt }} Posts</button>
    <PostList
      @postClicked="deletePost($event)"
      v-if="showPostsList && posts.length > 0"
      :posts="posts"
    />
  </div>
</template>

<script>
import { ref, defineComponent, computed } from '@vue/composition-api';

import useToggle from './cmp-functions/toggle';

import CreatePost from '@/components/CreatePost.vue';
import PostList from '@/components/PostList.vue';

export default defineComponent({
  name: 'App',
  components: { CreatePost, PostList },
  setup() {
    let posts = ref([]);

    const { show: showPostsList, toggle: togglePostsList } = useToggle();

    const buttonTxt = computed(() => (showPostsList.value ? 'Hide' : 'Show'));

    const createPost = (post) => posts.value.push(post);
    const deletePost = (id) => {
      posts.value = posts.value.filter((post) => post.id !== id);
    };
    return { posts, createPost, deletePost, showPostsList, togglePostsList, buttonTxt };
  },
});

// export default {
//   name: 'App',
//   data() {
//     return {
//       posts: [],
//     };
//   },
//   components: {
//     CreatePost,
//     PostList,
//   },
//   methods: {
//     createPost(post) {
//       this.posts.push(post);
//     },
//     deletePost(id) {
//       this.posts = this.posts.filter((post) => post.id !== id);
//     },
//   },
// };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  display: block;
  margin: 20px auto 5px auto;
  background: rgb(147, 147, 151);
  border: thin solid rgb(102, 102, 102);
  border-radius: 4px;

  padding: 5px;
  font-size: 15px;

  &:disabled {
  border: thin solid rgb(102, 102, 102);
  }

  &:hover:enabled {
    background: rgb(168, 168, 168);
  }
}

.mb {
  margin-bottom: 20px;
}

.big-button {
  width: 200px;
}
</style>
