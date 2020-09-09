<template>
  <div id="app">
    <Header :correctAnswers="correctAnswers" :totalAnswers="totalAnswers" />
    <QuestionBox
      v-if="questions.length > 0"
      :question="questions[index] | format"
      :next="next"
      :onAnswered="onAnswered"
    />
  </div>
</template>

<script>
import Header from './components/Header';
import QuestionBox from './components/QuestionBox';
export default {
  name: 'App',
  components: { QuestionBox, Header },
  data() {
    return {
      questions: [],
      index: 0,
      correctAnswers: 0,
      totalAnswers: 0,
    };
  },
  methods: {
    next() {
      this.index++;
    },
    onAnswered(answerIsCorrect) {
      this.index++;
      // console.log(answerIsCorrect);
      if (answerIsCorrect) {
        this.correctAnswers++;
      }
      this.totalAnswers++;
    },
  },
  computed: {
    //1:10
  },
  filters: {
    format(question) {
      if (question?.question) {
        question.question = question.question.replace(/&quot;/g, '"');
        question.question = question.question.replace(/&#039;/g, "'");
        question.question = question.question.replace(/&pi;/g, 'π');
      }
      return question;
    },
  },
  mounted() {
    fetch('https://opentdb.com/api.php?amount=10')
      .then((res) => res.json())
      .then((data) => (this.questions = data.results));
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
}
</style>
