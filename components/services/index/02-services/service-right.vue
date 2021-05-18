<template>
    <section v-view="isVisible">
        <div
            class="d-lg-flex flex-lg-row align-items-center justify-content-center margine-bottom-section"
            :style="styleColor"
            :class="classFadeInOut"
            >
            <div class="flex-grow-1 services-box-width2"><img class="services-img" :src="img" alt="services" /></div>
            <div class="services-box-width1 services-box-height">
                <div
                class="d-flex justify-content-center align-items-center"
                >
                    <div class="padding-around">
                        <p class="title"><slot name="title"></slot></p>
                        <p class="text margine-top-text"><slot name="text"></slot>

                            <p class="animated pulseHover"><nuxt-link class="link the-clue-underline-text w3-text-black the-clue-text-hover-dark-gray" :to="url"><slot name="link"></slot></nuxt-link></p>

                        </p>
                    </div>
                </div>
            </div>
        </div>  
    </section>
</template>

<script>
export default {
  props: ["url", "img", "color"],
  data() {
    return {
      styleColor: "",
      classFadeInOut: "animated fast fadeOut"
    };
  },
  created() {
    if (this.color === "yellow") this.styleColor = "background-color: #fff000";
    if (this.color === "white") this.styleColor = "background-color: #ffffff";
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
.margine-bottom-section {
  margin-bottom: 25px;
}

.services-box-width1 {
  width: 37%;
}

.services-box-width2 {
  width: 63%;
}

.services-img {
  width: 100%;
}

.title {
  width: 100%;
  height: 30px;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: 2.25px;
  text-align: left;
  color: #000000;
}

.text {
  width: 100%;
  height: 213px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.35px;
  text-align: left;
  color: #000000;
}

.link {
  font-size: 16px;
  letter-spacing: 1.2px;
}

.margine-top-text {
  margin-top: 70px;
}

.padding-around {
  padding: 50px;
}

@media only screen and (max-width: 1430px) {
  /* -20% */
  .margine-bottom-section {
    margin-bottom: 20px;
  }

  .title {
    width: 100%;
    height: 34px;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: 2.25px;
    text-align: left;
    color: #000000;
  }

  .text {
    width: 100%;
    height: 170px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .link {
    font-size: 13px;
    letter-spacing: 1.2px;
  }

  .margine-top-text {
    margin-top: 56px;
  }

  .padding-around {
    padding: 40px;
  }
}

@media only screen and (max-width: 1230px) {
  /* -20% */

  .margine-bottom-section {
    margin-bottom: 16px;
  }

  .title {
    width: 100%;
    height: 34px;
    font-family: Montserrat;
    font-size: 19px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: 2.25px;
    text-align: left;
    color: #000000;
  }

  .text {
    width: 100%;
    height: 136px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .link {
    font-size: 10px;
    letter-spacing: 1.2px;
  }

  .margine-top-text {
    margin-top: 45px;
  }

  .padding-around {
    padding: 32px;
  }
}

@media only screen and (max-width: 1030px) {
  /* -20% */

  .margine-bottom-section {
    margin-bottom: 13px;
  }

  .title {
    width: 100%;
    height: 27px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: 2.25px;
    text-align: left;
    color: #000000;
  }

  .text {
    width: 100%;
    height: 109px;
    font-family: Montserrat;
    font-size: 9px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .link {
    font-size: 8px;
    letter-spacing: 1.2px;
  }

  .margine-top-text {
    margin-top: 36px;
  }

  .padding-around {
    padding: 26px;
  }
}

@media only screen and (max-width: 992px) {
  .services-box-height {
    height: 100%;
  }

  .services-box-width1 {
    width: 100%;
  }

  .services-box-width2 {
    width: 100%;
  }

  .margine-bottom-section {
    margin-bottom: 25px;
  }

  .title {
    width: 100%;
    height: 30px;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: 2.25px;
    text-align: left;
    color: #000000;
  }

  .text {
    width: 100%;
    height: 213px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .link {
    font-size: 16px;
    letter-spacing: 1.2px;
  }

  .margine-top-text {
    margin-top: 70px;
  }

  .padding-around {
    padding: 50px;
  }
}

@media only screen and (max-width: 640px) {
  /* -20% */
  .margine-bottom-section {
    margin-bottom: 20px;
  }

  .title {
    width: 100%;
    height: 34px;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: 2.25px;
    text-align: left;
    color: #000000;
  }

  .text {
    width: 100%;
    height: 170px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .link {
    font-size: 13px;
    letter-spacing: 1.2px;
  }

  .margine-top-text {
    margin-top: 56px;
  }

  .padding-around {
    padding: 40px;
  }
}

@media only screen and (max-width: 540px) {
  /* -20% */

  .margine-bottom-section {
    margin-bottom: 16px;
  }

  .title {
    width: 100%;
    height: 34px;
    font-family: Montserrat;
    font-size: 19px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: 2.25px;
    text-align: left;
    color: #000000;
  }

  .text {
    width: 100%;
    height: 136px;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #000000;
  }

  .link {
    font-size: 10px;
    letter-spacing: 1.2px;
  }

  .margine-top-text {
    margin-top: 45px;
  }

  .padding-around {
    padding: 32px;
  }
}
</style>