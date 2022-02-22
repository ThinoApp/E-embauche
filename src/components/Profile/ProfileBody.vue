<template>
  <div class="bodySection-container" data-aos="fade-in">
    <Suggestion />
    <div class="divider"></div>
    <EntretienList />
  </div>
</template>
<script>
import Suggestion from "./ProfileBodySuggestion.vue";
import EntretienList from "./ProfileBodyEntretienList.vue";
export default {
  components: {
    Suggestion,
    EntretienList,
  },
};
</script>
<style lang="scss" scoped>
.bodySection-container {
  max-width: 100%;
  transition: 0.5s;
  padding-inline: 1em;
  display: flex;
  flex-direction: column;
}

.divider {
  width: 70%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  align-self: center;
  margin-top: 1em;
}

p {
  color: white;
}
</style>
