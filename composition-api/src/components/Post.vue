<template>
  <div class="post-container">
    <h2 class="post-title">{{ title }}</h2>
    <p class="post-content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>

<style lang="scss" scoped>
.post-container {
  width: 90%;
  margin: 0 auto 10px auto;
  padding: 0px 10px;
  border: dotted thin rgba(128, 122, 179, 0.726);
  border-radius: 4px;
  background: rgba(128, 122, 179, 0.26);

  cursor: pointer;
  &:hover {
    background: rgba(126, 117, 207, 0.753);
  }
}
.post-title {
  color: rgb(74, 65, 160);
  font-weight: bold;
}
.post-content {
  text-align: left;
}
</style>
