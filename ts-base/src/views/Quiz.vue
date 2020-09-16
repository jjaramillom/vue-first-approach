<template>
  <div>
    <QuizHeader :correctAnswers="state.correctAnswers" :totalAnswers="state.totalAnswers" />
    <QuestionBox
      v-if="state.questions.length > 0"
      :question="formattedQuestion"
      :next="next"
      :onAnswered="onAnswered"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';

import QuizHeader from '@/components/quiz/QuizHeader.vue';
import QuestionBox from '@/components/quiz/QuestionBox.vue';

type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
};

export default defineComponent({
  name: 'Quiz',
  components: { QuizHeader, QuestionBox },
  setup(props, ctx) {
    const state = reactive({
      questions: new Array<Question>(),
      index: 0,
      correctAnswers: 0,
      totalAnswers: 0,
    });

    const fetchQuestions = (): void => {
      fetch('https://opentdb.com/api.php?amount=20')
        .then((res) => res.json())
        .then((data) => (state.questions = data.results));
    };

    const formattedQuestion = computed(() => {
      const question = state.questions[state.index];
      question.question = question.question.replace(/&quot;/g, '"');
      question.question = question.question.replace(/&#039;/g, "'");
      question.question = question.question.replace(/&pi;/g, 'π');
      return question;
    });

    const next = () => (state.index = state.index + 1);

    const onAnswered = (answerIsCorrect: boolean) => {
      state.index = state.index + 1;
      if (answerIsCorrect) {
        state.correctAnswers++;
      }
      state.totalAnswers++;
    };

    fetchQuestions();
    return { state, next, onAnswered, formattedQuestion };
  },
});
</script>

<style lang="scss"></style>
