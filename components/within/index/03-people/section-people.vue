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
          <img :src="img1" class="img-margine-top img-size" />
          <p class="title margine-top-name">
            <slot name="title1"></slot>
          </p>
          <p class="capture-text">
            <slot name="text1"></slot>
          </p>
        </div>
      </div>
      <div
        class="d-flex justify-content-center mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0"
      >
        <div class="img-margin-left">
          <div class="line-brand-horizontal the-clue-absolute"></div>
          <img :src="img2" class="img-margine-top img-size" />
          <p class="title margine-top-name">
            <slot name="title2"></slot>
          </p>
          <p class="capture-text">
            <slot name="text2"></slot>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["color", "img1", "img2"],
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
  height: 100%;
}

.img-size {
  width: 25vw;
}

.img-margin-left {
  margin-left: 120px;
}

.img-margin-right {
  margin-right: 120px;
}

.img-margine-top {
  margin-top: 40px;
}

.padding-top-bottom {
  padding-top: 55px;
  padding-bottom: 55px;
}

.margine-top-name {
  margin-top: 2.5vw;
}

.title {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 25px;
  letter-spacing: normal;
  text-align: left;
  color: #161616;
}

.capture-text {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0px;
  letter-spacing: normal;
  text-align: left;
  color: #161616;
}

.line-brand-horizontal {
  margin-top: 40px;
  margin-left: -15px;
  width: 1px;
  height: 36vw;
  background-color: #a2a2a2;
}

@media only screen and (max-width: 1335px) {
  /* - 20% */

  .img-margin-left {
    margin-left: 96px;
  }

  .img-margin-right {
    margin-right: 96px;
  }

  .img-margine-top {
    margin-top: 32px;
  }

  .padding-top-bottom {
    padding-top: 44px;
    padding-bottom: 44px;
  }

  .title {
    font-family: Montserrat;
    font-size: 26px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 20px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-top: 32px;
    margin-left: -15px;
    width: 1px;
    height: 36.5vw;
    background-color: #a2a2a2;
  }
}

@media only screen and (max-width: 1100px) {
  /* - 20% */

  .img-margin-left {
    margin-left: 70px;
  }

  .img-margin-right {
    margin-right: 70px;
  }

  .img-margine-top {
    margin-top: 26px;
  }

  .padding-top-bottom {
    padding-top: 35px;
    padding-bottom: 35px;
  }

  .title {
    font-family: Montserrat;
    font-size: 21px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 16px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-top: 26px;
    margin-left: -15px;
    width: 1px;
    height: 36.5vw;
    background-color: #a2a2a2;
  }
}

@media only screen and (max-width: 992px) {
  /* + 40% */

  .section-color-size {
    height: 100%;
  }

  .img-size {
    width: 50vw;
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

  .margine-top-name {
    margin-top: 2.5vw;
  }

  .title {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 25px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-top: 40px;
    margin-left: -15px;
    width: 1px;
    height: 69vw;
    background-color: #a2a2a2;
  }
}

@media only screen and (max-width: 860px) {
  /* - 20% */
}

@media only screen and (max-width: 640px) {
  /* - 30% */

  .img-margine-top {
    margin-top: 28px;
  }

  .padding-top-bottom {
    padding-top: 39px;
    padding-bottom: 39px;
  }

  .title {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 18px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-top: 28px;
    margin-left: -15px;
    width: 1px;
    height: 71vw;
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

  .img-margine-top {
    margin-top: 20px;
  }

  .padding-top-bottom {
    padding-top: 27px;
    padding-bottom: 27px;
  }

  .title {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 13px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .capture-text {
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0px;
    letter-spacing: normal;
    text-align: left;
    color: #161616;
  }

  .line-brand-horizontal {
    margin-top: 20px;
    margin-left: -15px;
    width: 1px;
    height: 70vw;
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
