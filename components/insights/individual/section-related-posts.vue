<template>
    <section v-view="isVisible" class="section-margin-top" :class="classFadeInOut">
        <div class="d-flex">
            <nuxt-link :to="url" class="the-clue-text-hover-dark-gray"><div class="mr-auto title the-clue-text-hover-dark-gray"><slot name="title"></slot></div></nuxt-link>
        </div>
        <div class="d-flex margin-top-title-capture">
            <div class="mr-auto capture"><slot name="capture"></slot></div>
        </div>
        <img class="img-size margin-top-img" :src="img" alt="blog post image" />
    </section>
</template>

<script>
export default {
  props: ["url", "img"],
  data() {
    return {
      classFadeInOut: "animated fadeOut"
    };
  },
  methods: {
    isVisible(e) {
      if (e.percentTop < 0.2) {
        this.classFadeInOut = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.9) {
        this.classFadeInOut = "animated fadeIn";
      }

      if (e.percentTop > 1) {
        this.classFadeInOut = "animated fadeOut";
      }
    }
  }
};
</script>

<style scoped>
.section-margin-top {
  margin-top: 4vw;
}

.title {
  width: 54vw;
  font-family: Montserrat;
  font-size: 1.9vw;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #161616;
}

.margin-top-title-capture {
  margin-top: 0.6vw;
}

.capture {
  width: 54vw;
  font-family: Montserrat;
  font-size: 1.3vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: justify;
  color: #161616;
}

.margin-top-img {
  margin-top: 1.7vw;
}

.img-size {
  width: 60vw;
}

@media only screen and (max-width: 992px) {
  /* +40% */
  .section-margin-top {
    margin-top: 5.6vw;
  }

  .title {
    width: 76vw;
    font-family: Montserrat;
    font-size: 2.66vw;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .margin-top-title-capture {
    margin-top: 0.84vw;
  }

  .capture {
    width: 76vw;
    font-family: Montserrat;
    font-size: 1.82vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .margin-top-img {
    margin-top: 2.38vw;
  }

  .img-size {
    width: 84vw;
  }
}
</style>