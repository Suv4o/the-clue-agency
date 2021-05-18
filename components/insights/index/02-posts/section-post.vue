<template>
  <section v-view="isVisible">
    <div class="d-flex justify-content-center flex-size padding-top-bottom">
      <div :class="classFadeInOut">
        <img class="img-size" :src="img" alt="blog post image" />
        <div class="d-flex justify-content-between">
          <div class="padding-top-bottom-date-share blog-post-date">
            <slot name="date"></slot>
          </div>
          <div class="padding-top-bottom-date-share blog-post-date">
            share:
            <a
              :href="'https://www.facebook.com/sharer.php?u=' + urlSocialMedia"
              target="_blank"
              class="the-clue-text-black the-clue-hover-underline-text-yellow"
              >Facebook</a
            >
            —
            <a
              :href="'https://twitter.com/intent/tweet?url=' + urlSocialMedia"
              target="_blank' + urlSocialMedia"
              class="the-clue-text-black the-clue-hover-underline-text-yellow"
              >Twitter</a
            >
            —
            <a
              :href="
                'https://www.linkedin.com/shareArticle?mini=true&url=' +
                  urlSocialMedia
              "
              target="_blank"
              class="the-clue-text-black the-clue-hover-underline-text-yellow"
              >Linkedin</a
            >
          </div>
        </div>
        <nuxt-link :to="url">
        <p class="blog-title img-size padding-top-bottom-title the-clue-hover-underline-text-yellow animated pulseHover">
          <slot name="title"></slot>
        </p>
        </nuxt-link>
        <p class="capture-text"><slot name="capture"></slot></p>
        <nuxt-link :to="url"
          ><button
            class="read-more-text button-style the-clue-text-hover-dark-gray the-clue-hover-underline-text-yellow animated pulseHover"
          >
            OPEN ARTICLE
          </button></nuxt-link
        >
        <div class="line-divider"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["url", "img", "urlSocialMedia"],
  data() {
    return {
      classFadeInOut: "animated fast fadeOut"
    };
  },
  methods: {
    isVisible(e) {
      if (e.percentTop < 0.2) {
        // this.classFadeInOut = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.9) {
        this.classFadeInOut = "animated slow fadeIn";
      }

      if (e.percentTop > 1) {
        // this.classFadeInOut = "animated fadeOut";
      }
    }
  }
};
</script>

<style scoped>
.flex-size {
  width: 100%;
}

.padding-top-bottom {
  padding-top: 0px;
  padding-bottom: 10vw;
}

.img-size {
  width: 60vw;
}

.blog-post-date {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: 0.8px;
  text-align: justify;
  color: #161616;
}

.padding-top-bottom-date-share {
  padding-top: 0.7vw;
  padding-bottom: 0.7vw;
}

.blog-title {
  width: 54vw;
  font-family: Montserrat;
  font-size: 2.26vw;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  /* text-align: justify; */
  color: #161616;
}

.padding-top-bottom-title {
  padding-top: 2.5vw;
  padding-bottom: 0.5vw;
}

.capture-text {
  width: 60vw;
  font-family: Montserrat;
  font-size: 1.1vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: justify;
  color: #161616;
}

.read-more-text {
  font-family: Montserrat;
  font-size: 0.96vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}

.button-style {
  width: 10.5vw;
  height: 2.2vw;
  border: solid 1px #000000;
  background-color: #ffffff;
}

.button-style:hover {
  border: solid 1px #484848;
}

.line-divider {
  width: 60vw;
  height: 1px;
  background-color: #a2a2a2;
  margin-top: 4vw;
}

@media only screen and (max-width: 992px) {
  .padding-top-bottom {
    padding-top: 0px;
    padding-bottom: 14vw;
  }

  .img-size {
    width: 84vw;
  }

  .blog-post-date {
    font-family: Montserrat;
    font-size: 1.26vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.25;
    letter-spacing: 0.8px;
    text-align: justify;
    color: #161616;
  }

  .padding-top-bottom-date-share {
    padding-top: 0.98vw;
    padding-bottom: 0.98vw;
  }

  .blog-title {
    width: 75.6vw;
    font-family: Montserrat;
    font-size: 3.16vw;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    /* text-align: justify; */
    color: #161616;
  }

  .padding-top-bottom-title {
    padding-top: 3.5vw;
    padding-bottom: 0.7vw;
  }

  .capture-text {
    width: 84vw;
    font-family: Montserrat;
    font-size: 1.92vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .read-more-text {
    font-family: Montserrat;
    font-size: 1.34vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.94;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }

  .button-style {
    width: 14.7vw;
    height: 3.1vw;
    border: solid 1px #000000;
    background-color: #ffffff;
  }

  .button-style:hover {
    border: solid 1px #484848;
  }
}
</style>
