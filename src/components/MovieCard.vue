<template>
  <div
    class="ui card"
    style="box-shadow: 1px 2px #373778; min-width: 350px"
    @click="$router.push('/detail/' + imdbRating)"
  >
    <div class="ui card" style="min-width: 350px">
      <a class="image">
        <img
          :src="imgSource"
          @error="setAltImg"
          style="height: 450px; min-width: 350px; object-fit: fill"
        />
      </a>
      <div class="content">
        <a class="header">{{ movieTitle }}</a>
        <div class="meta">
          <span class="date">{{ movieGenre }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MovieCard",
  props: {
    imgSource: String,
    movieTitle: String,
    movieGenre: String,
    imdbRating: String,
  },
  methods: {
    setAltImg(event) {
      event.target.src =
        "https://www.niobeweb.net/blog/wp-content/uploads/404-not-found-800x400.jpg";
    },
  },
};
</script>

<style scoped>
.container {
  margin: auto !important;
  max-height: 560px !important;
  min-height: 450px !important;
}
.text {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #dcd9e3;
  height: 50px;
  border-radius: 0px 0px 8px 8px;
  opacity: 0.8;
}
.movie-title {
  display: inline;
  margin: 10px 10px;
  font-size: 15px;
  font-weight: bold;
  color: #5f2092;
  display: -moz-inline-grid;
}
.movie-genre {
  font-size: 12px;
  margin: 5px 10px;

  font-weight: bold;
  color: #373778;
}
</style>