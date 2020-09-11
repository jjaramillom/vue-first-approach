<template>
  <div id="app">
    <CreatePost @createPost="createPost($event)" />
    <PostList @postClicked="deletePost($event)" v-if="posts.length > 0" :posts="posts" />
  </div>
</template>

<script>
import CreatePost from '@/components/CreatePost.vue';
import PostList from '@/components/PostList.vue';
export default {
  name: 'App',
  data() {
    return {
      posts: [],
    };
  },
  components: {
    CreatePost,
    PostList,
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
