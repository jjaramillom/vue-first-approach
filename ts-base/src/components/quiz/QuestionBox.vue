<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template v-slot:lead>
        {{ question.question }}
      </template>

      <hr class="my-4" />

      <div class="list-answers">
        <b-list-group v-for="(answer, index) in shuffledAnswers" :key="index">
          <b-list-group-item
            class="answer"
            @click.prevent="selectAnswer(index)"
            :class="getAnswerClass(index)"
          >
            {{ answer }}
          </b-list-group-item>
        </b-list-group>
      </div>

      <b-button variant="success" :disabled="selectedIndex === null" @click="submitAnswer"
        >Submit</b-button
      >
      <b-button variant="primary" :disabled="submitting" @click="next">Skip</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'QuestionBox',
  props: { question: Object, next: Function, onAnswered: Function },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: null,
      answered: false,
      submitting: false,
    };
  },
  computed: {
    answers() {
      return [...this.question.incorrect_answers, this.question.correct_answer];
    },
  },
  watch: {
    // With immediate, the mounted lifecycle hook is not needed anymore, since the callback (handler) is executed at first.
    /* question: {
      immediate: false,
      handler() {
        this.selectedIndex = null;
        this.shuffledAnswers = null;
        this.shuffleAnswers();
      },
    }, */
    //Every time the question prop changes, this function is executed
    question() {
      this.selectedIndex = null;
      this.shuffledAnswers = null;
      this.answered = false;
      this.submitting = false;
      this.shuffleAnswers();
    },
  },
  // Executed when the component is mounted, similar to onMount in React
  mounted() {
    this.shuffleAnswers();
  },
  methods: {
    shuffleAnswers() {
      this.answers.sort(() => Math.random() - 0.5);

      this.correctIndex = this.answers.indexOf(this.question.correct_answer);
      this.shuffledAnswers = this.answers;
    },
    selectAnswer(idx) {
      this.selectedIndex = idx;
    },
    submitAnswer() {
      if (this.selectedIndex === null) {
        return;
      }
      this.answered = true;
      this.submitting = true;
      setTimeout(() => {
        this.onAnswered(this.selectedIndex === this.correctIndex);
      }, 1000);
    },
    getAnswerClass(index) {
      if (!this.answered) {
        return index === this.selectedIndex ? 'selected' : '';
      } else {
        if (index === this.correctIndex) return 'correct';
        if (index === this.selectedIndex && index !== this.correctIndex) return 'incorrect';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.question-box-container {
  width: 50%;
  margin: 30px auto;
}

.list-answers {
  margin-bottom: 1.5rem;
}

.answer {
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
}

.selected {
  background-color: rgba(81, 81, 199, 0.6);
  &:hover {
    background-color: rgba(81, 81, 199, 0.6);
  }
  color: white;
}

.correct {
  background-color: rgba(74, 192, 74, 0.6);
}

.incorrect {
  background-color: rgba(199, 84, 84, 0.6);
}

button {
  margin: 0 8px;
}
</style>
