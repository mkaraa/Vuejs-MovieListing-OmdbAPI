<template>
  <div>
    <div style="text-align: center; margin-top: 15%">
      <i
        class="fas fa-video-slash fa-10x"
        style="color: #ff7c7c !important"
      ></i>
      <br />
      <span style="font-size: 32px; font-weight: bold; color: #ff7c7c; ">
        Movie not found
      </span>
      <br />
      <button class="ui big teal button" style="margin-top: 2%">
        <a href="/" style="color:white"> Please search another</a>
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoMovive",
  data() {
    return {
      selectedTitle: "",
      inputPlaceholder: "Enter or click to search a movie in 2020..",
      buttonText: "Search",
    };
  },
};
</script>

<style scoped>