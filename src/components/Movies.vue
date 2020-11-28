<template>
  <div class="mainContainer">
    <div v-if="movies == null">
      <header-menu />
      <no-movie/>
    </div>
    <div v-else>
      <header-menu />

      <div v-if="isLoading" class="loadingStyle">
        <span class="ui active big pink loader"></span>
      </div>

      <div
        v-else
        class="ui stackable three column very relaxed grid container"
        style="position: relative; margin-top: 5% !important"
      >
        <div class="column" v-for="(movie, index) in movies" :key="index">
          <movie
            :imgSource="movie.Poster"
            :movieTitle="movie.Title"
            :movieGenre="movie.Type"
            :imdbRating="movie.imdbID"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import HeaderMenu from "./HeaderMenu.vue";
import NoMovie from "./NoMovie.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    movie: MovieCard,
    "header-menu": HeaderMenu,
    "no-movie":NoMovie
  },
  data() {
    return {
      isLoading: false,
      movies: [],
      selectedTitle: "",
      selectedYear: "2020",
    };
  },
  created() {
    this.$route.params.title != "" ? this.getData() : this.$router.push("/");

  },
  mounted(){
    if(localStorage.movies){
      this.movies = JSON.parse(localStorage.movies);
    }
  },
  watch:{
    movies:{
      handler(allMovies){
        localStorage.movies = JSON.stringify(allMovies);
      },
      deep: true
    }
  },  
  methods: {
    getData: function () {
      this.isLoading = true;
      axios
        .get(
          "http://www.omdbapi.com/?apiKey=a87732dd&s=" +
            this.$route.params.title +
            "&y=" +
            this.selectedYear
        )
        .then((response) => {
          this.movies = response.data.Search;
          console.log(this.movies);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.mainContainer {
  min-height: 50px !important;
  margin: auto;
}

.loaderStyle{
  text-align: center;
  margin: auto;
  float: left;
}
</style>
