<template>
  <section
    class="section-color-size padding-top-bottom"
    :style="styleColor"
    v-view="isVisible"
  >
    <div
      class="d-lg-flex flex-lg-row align-items-center justify-content-center"
      :class="classFadeInOut"
    >
      <div
        class="d-flex justify-content-center mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0"
      >
        <div class="img-margin-right">
          <div class="line-brand-horizontal the-clue-absolute"></div>
          <nuxt-link :to="url1" class="the-clue-underline-text-gray-yellow"
            ><p class="title animated pulseHover">
              <slot name="title1"></slot></p
          ></nuxt-link>
              <p class="capture-text">
              <slot name="text1"></slot></p
          >
          <nuxt-link :to="url1"
            ><div class="img-margine-top image-box"><img
              :src="img1"
              class="img-size"
          /></div></nuxt-link>
        </div>
      </div>
      <div
        class="d-flex justify-content-center mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0"
      >
        <div class="img-margin-left">
          <div class="line-brand-horizontal the-clue-absolute"></div>
          <nuxt-link :to="url2" class="the-clue-underline-text-gray-yellow"
            ><p class="title animated pulseHover">
              <slot name="title2"></slot></p
          ></nuxt-link>
              <p class="capture-text">
              <slot name="text2"></slot></p
          >
          <nuxt-link :to="url2"
            ><div class="img-margine-top image-box"><img
              :src="img2"
              class="img-size"
          /></div></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["url1", "url2", "color", "img1", "img2"],
  data() {
    return {
      styleColor: "",
      classFadeInOut: "animated fast fadeOut",
      isVisibleOnce1: true,
      isVisibleOnce2: true
    };
  },
  created() {
    if (this.color === "dark") this.styleColor = "background-color: #e5e5e5";
    if (this.color === "light") this.styleColor = "background-color: #ffffff";
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
.section-color-size {
  height: 652px;
}

.img-size {
  width: 600px;
  height: 400px;
}

.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
}

.image-box img {
  transition: all 0.3s;
  display: block;
  transform: scale(1);
}

.image-box:hover img {
  transform: scale(1.1);
}

.img-margin-left {
  margin-left: 50px;
}

.img-margin-right {
  margin-right: 50px;
}

.img-margine-top {
  margin-top: 40px;
}

.padding-top-bottom {
  padding-top: 55px;
  padding-bottom: 55px;
}

.title {
  width: 250px;
  height: 27px;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #161616;
}

.capture-text {
  width: 330px;
  height: 43px;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #161616;
}

.line-brand-horizontal {
  margin-left: -15px;
  width: 1px;
  height: 540px;
  background-color: #a2a2a2;
}

@media only screen and (max-width: 1335px) {
  /* - 20% */

  .section-color-size {
    height: 522px;
    background-color: #e5e5e5;
  }

  .img-size {
    width: 480px;
    height: 320px;
  }

  .img-margin-left {
    margin-left: 40px;
  }

  .img-margin-right {
    margin-right: 40px;
  }

  .img-margine-top {
    margin-top: 32px;
  }

  .padding-top-bottom {
    padding-top: 44px;
    padding-bottom: 44px;
  }

  .title {
    width: 200px;
    height: 22px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    width: 264px;
    height: 34px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-left: -12px;
    width: 1px;
    height: 439px;
    background-color: #a2a2a2;
  }
}

@media only screen and (max-width: 1100px) {
  /* - 20% */

  .section-color-size {
    height: 418px;
    background-color: #e5e5e5;
  }

  .img-size {
    width: 384px;
    height: 256px;
  }

  .img-margin-left {
    margin-left: 32px;
  }

  .img-margin-right {
    margin-right: 32px;
  }

  .img-margine-top {
    margin-top: 26px;
  }

  .padding-top-bottom {
    padding-top: 35px;
    padding-bottom: 35px;
  }

  .title {
    width: 160px;
    height: 18px;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    width: 211px;
    height: 27px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-left: -10px;
    width: 1px;
    height: 355px;
    background-color: #a2a2a2;
  }
}

@media only screen and (max-width: 992px) {
  /* + 40% */

  .section-color-size {
    height: 100%;
    background-color: #e5e5e5;
  }

  .img-size {
    width: 600px;
    height: 400px;
  }

  .img-margin-left {
    margin-left: 0px;
  }

  .img-margin-right {
    margin-right: 0px;
  }

  .img-margine-top {
    margin-top: 40px;
  }

  .padding-top-bottom {
    padding-top: 55px;
    padding-bottom: 55px;
  }

  .title {
    width: 250px;
    height: 27px;
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    width: 330px;
    height: 43px;
    font-family: Montserrat;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-left: -15px;
    width: 1px;
    height: 540px;
    background-color: #a2a2a2;
  }
}

@media only screen and (max-width: 860px) {
  /* - 20% */
}

@media only screen and (max-width: 640px) {
  /* - 30% */
  .section-color-size {
    height: 100%;
    background-color: #e5e5e5;
  }

  .img-size {
    width: 420px;
    height: 280px;
  }

  .img-margin-left {
    margin-left: 0px;
  }

  .img-margin-right {
    margin-right: 0px;
  }

  .img-margine-top {
    margin-top: 28px;
  }

  .padding-top-bottom {
    padding-top: 39px;
    padding-bottom: 39px;
  }

  .title {
    width: 175px;
    height: 19px;
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    width: 231px;
    height: 30px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-left: -11px;
    width: 1px;
    height: 385px;
    background-color: #a2a2a2;
  }

  .mb-sm-5 {
    margin-bottom: 3em;
  }

  .mt-sm-5 {
    margin-top: 3em;
  }
}

@media only screen and (max-width: 540px) {
  /* - 30% */

  .section-color-size {
    height: 100%;
    background-color: #e5e5e5;
  }

  .img-size {
    width: 294px;
    height: 196px;
  }

  .img-margin-left {
    margin-left: 0px;
  }

  .img-margin-right {
    margin-right: 0px;
  }

  .img-margine-top {
    margin-top: 20px;
  }

  .padding-top-bottom {
    padding-top: 27px;
    padding-bottom: 27px;
  }

  .title {
    width: 123px;
    height: 13.3px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    width: 170px;
    height: 21px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-left: -8px;
    width: 1px;
    height: 280px;
    background-color: #a2a2a2;
  }

  .mb-sm-5 {
    margin-bottom: 3em;
  }

  .mt-sm-5 {
    margin-top: 3em;
  }
}
</style>
