import { ref } from '@vue/composition-api';

export default () => {
  const show = ref(false);

  const toggle = () => (show.value = !show.value);

  return { show, toggle };
};
