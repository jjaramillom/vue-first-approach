<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled>Counter: {{correctAnswers}}/{{totalAnswers}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: { correctAnswers: Number, totalAnswers: Number },
};
</script>
