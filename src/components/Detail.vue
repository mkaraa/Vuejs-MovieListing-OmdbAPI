<template>
  <div class="mainContainer">
    <headerbar />
    <div class="ui container" style="margin-top: 5%">
      <div class="ui relaxed divided items">
        <div class="item">
          <div class="ui medium image">
            <img
              :src="details.Poster"
              @error="setAltImg"
              style="object-fit: cover"
            />
            <span class="ui medium grey text"> {{ noImage }} </span>
          </div>
          <div class="content">
            <span class="ui huge teal text"> {{ details.Title }} </span>
            <br />
            <div style="margin-top: 3%; float: right">
              <span class="ui medium grey text">IMDB :</span>
              <span
                class="ui large red text"
                v-if="details.imdbRating != 'N/A'"
              >
                {{ details.imdbRating }} /10
              </span>
              <span class="ui medium purple text" v-else>
                No IMDB Rating Point
              </span>
              <br />
              <span class="ui medium grey text">Metascore :</span>
              <span
                class="ui large blue text"
                v-if="details.Metascore != 'N/A'"
              >
                {{ details.Metascore }} /100</span
              >
              <span class="ui medium purple text" v-else>
                No Metascore Point</span
              >
              <br />
            </div>
            <div>
              <div style="margin-top: 2%">
                <i
                  class="fas fa-flag-usa"
                  style="margin-right: 10px; color: #db2827"
                ></i>
                <span
                  v-if="details.Language != 'N/A'"
                  class="ui medium grey text"
                >
                  {{ details.Language }}
                </span>
                <span v-else class="ui medium purple text">
                  No Language Info Found
                </span>
              </div>
              <div>
                <i
                  class="fas fa-clock"
                  style="margin-right: 10px; color: #db2827"
                ></i>
                <span
                  v-if="details.Runtime != 'N/A'"
                  class="ui medium grey text"
                >
                  {{ details.Runtime }}
                </span>
                <span v-else class="ui medium purple text">
                  No Time Info Found
                </span>
              </div>
              <div>
                <i
                  class="far fa-calendar-times"
                  style="margin-right: 10px; color: #db2827"
                ></i>
                <span
                  v-if="details.Released != 'N/A'"
                  class="ui medium grey text"
                >
                  {{ details.Released }}
                </span>
                <span v-else class="ui medium purple text">
                  No Released Date Info Found
                </span>
              </div>
              <div>
                <i
                  class="fas fa-bookmark"
                  style="margin-right: 10px; color: #db2827"
                ></i>
                <span v-if="details.Genre != 'N/A'" class="ui normal grey text">
                  {{ details.Genre }}
                </span>
                <span v-else class="ui medium purple text">
                  No Genre Info Found
                </span>
              </div>
            </div>

            <div style="margin-top: 5%" class="description">
              <span v-if="details.Plot != 'N/A'" class="ui grey large text">
                {{ details.Plot }}</span
              >
              <span v-else class="ui medium purple text">
                No Plot Info Found
              </span>
            </div>

            <div style="margin-top: 5%">
              <span class="ui medium grey text">Director : </span>

              <span v-if="details.Director != 'N/A'" class="ui grey text">
                {{ details.Director }}
              </span>
              <span v-else class="ui medium purple text">
                No Director Info Found
              </span>
            </div>

            <div style="margin-top: 2%">
              <span class="ui medium grey text">Writer/s :</span>
              <span v-if="details.Writer != 'N/A'" class="ui grey text">
                {{ details.Writer }}</span
              >
              <span v-else class="ui medium purple text">
                No Writers Info Found
              </span>
            </div>

            <div style="margin-top: 2%">
              <span v-if="details.Actors != 'N/A'" class="ui grey text"
                >Actors :<a> {{ details.Actors }} </a></span
              >
              <span v-else class="ui medium purple text">
                No Actors Info Found
              </span>
            </div>
            <div style="margin-top: 2%">
              <span class="ui medium grey text">Awards :</span>
              <span
                v-if="details.Awards == 'N/A'"
                class="ui medium purple text"
              >
                Not have any awards yet.</span
              >
              <span v-else class="ui large purple text">
                {{ details.Awards }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import HeadersMenu from "./HeaderMenu.vue";
import axios from "axios";

export default {
  name: "Detail",
  components: {
    headerbar: HeadersMenu,
  },
  data() {
    return {
      details: "",
      isLoading: false,
      noImage: "",
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail: function () {
      this.isLoading = true;
      axios
        .get(
          "http://www.omdbapi.com/?apiKey=a87732dd&plot=full&i=" +
            this.$route.params.id
        )
        .then((response) => {
          this.details = response.data;
          console.log(this.details);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    setAltImg(event) {
      event.target.src =
        "https://www.niobeweb.net/blog/wp-content/uploads/404-not-found-800x400.jpg";
      this.noImage = "Cannot found an image";
    },
  },
};
</script>

<style scoped>
</style>