<template>
  <div class="postList-container">
    <div v-for="post in posts" :key="post.id">
      <Post @click.native="onClickPost(post.id)" :title="post.title" :content="post.content" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Post from '@/components/Post.vue';
export default defineComponent({
  components: { Post },
  props: { posts: Array },
  setup(props, context) {
    const onClickPost = (id) => {
      context.emit('postClicked', id);
    };
    return { onClickPost };
  },
});
</script>

<style lang="scss" scoped>
.postList-container {
  background: rgba(128, 122, 179, 0.479);
  width: 80%;
  border: dotted thin rgba(128, 122, 179, 0.849);
  border-radius: 4px;
  margin: 10px auto;
  padding: 10px;
}
</style>
