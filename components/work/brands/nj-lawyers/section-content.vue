<template>
  <section>
    <div class="w3-display-container">
      <!-- Large Screen -->
      <div class="d-flex flex-row-reverse">
        <div class="bacground-box margine-top">
          <div class="title-capture-position" v-view="isVisibleTitle">
            <p class="title" :class="classTitle">— NJ Lawyers</p>
            <p
              class="capture margine-left-capture margine-top-4"
              :class="classCapture"
            >
            Brand Identity, </br>
            Online Brand Experience
            </p>
          </div>
          <img
            v-view="isVisibleMainImage"
            class="main-img-position main-img-size"
            :class="classMainImage"
            src="/work-imgs/NJLawyers/01.jpg"
          />
          <div
            v-view="isVisibleMainText"
            class="d-lg-flex flex-lg-row align-items-center justify-content-center main-text-position"
            :class="classMainText"
          >
            <div class="d-flex justify-content-center">
              <p class="main-text margine-paragraph-right align-self-start">
              The vision of NJ Lawyers is to be recognized as a leading law firm on the market. Our goal for this website design was highlighting key components to the composition which will increase the perceived value and make this business look more polished and sophisticated.
              </p>
            </div>
            <div
              class="d-flex justify-content-center padding-paragraph-right align-self-start"
            >
              <p class="main-text margine-paragraph-left">
              When it comes to the monotone palette, range and variation are the keys to success. Incorporating different shades of black and gray gives depth and dimension to this brand identity while filling it with uncluttering overall aesthetic.
              </p>
            </div>
          </div>
          <img
            v-view="isVisibleTheRestImg1"
            class="main-img-position main-img-size"
            :class="classTheRestImg1"
            src="/work-imgs/NJLawyers/02.jpg"
            style="margin-top: 30px;"
          />
          <img
            v-view="isVisibleTheRestImg2"
            class="main-img-position main-img-size"
            :class="classTheRestImg2"
            src="/work-imgs/NJLawyers/04.jpg"
          />
          <img
            v-view="isVisibleTheRestImg3"
            class="main-img-position main-img-size"
            :class="classTheRestImg3"
            src="/work-imgs/NJLawyers/05.jpg"
          />
          <img
            v-view="isVisibleTheRestImg4"
            class="main-img-position main-img-size"
            :class="classTheRestImg4"
            src="/work-imgs/NJLawyers/06.jpg"
          />
          <img
            v-view="isVisibleTheRestImg5"
            class="main-img-position main-img-size"
            :class="classTheRestImg5"
            src="/work-imgs/NJLawyers/07.jpg"
          />
        </div>
      </div>

      <div
        v-view="isVisibleSeeMoreWork"
        class="d-flex justify-content-center padding-top-bottom-80"
        :class="classSeeMoreWork"
      >
        <div>
          <nuxt-link to="/work"
            ><p
              class="see-all-work the-clue-underline-text-gray-yellow animated pulseHover"
            >
              see all work
            </p></nuxt-link
          >
        </div>
      </div>
      <div
        v-view="isVisibleLine"
        class="d-flex justify-content-center"
        :class="classLine"
      >
        <div class="line"></div>
      </div>
      <div
        v-view="isVisibleRelatedWork"
        class="d-flex justify-content-center padding-top-80-bottom-30"
        :class="classRelatedWork"
      >
        <div>
          <p class="related-work">
            RELATED WORK
          </p>
        </div>
      </div>
      <SectionBrands url1="/work/mr-antonio" url2="/work/belini" color="dark" img1="/work-imgs/MrAntonio/01-small.jpg" img2="/work-imgs/Belini/01-small.jpg">
        <template v-slot:title1>
          Mr. Antonio
        </template>
        <template v-slot:text1>
          Brand Strategy, </br>
          Brand Packaging
        </template>
        <template v-slot:title2>
          Belini
        </template>
        <template v-slot:text2>
        Brand Identity
        </template>
      </SectionBrands>
      <div class="padding-bottom-200"></div>
    </div>
  </section>
</template>

<script>
import SectionBrands from "@/components/work/index/02-brands/brands";
export default {
  components: {
    SectionBrands
  },
  data() {
    return {
      classTitle: "animated slow fadeInLeftModified-10",
      classCapture: "animated slow fadeInLeftModified-30",
      classMainImage: "animated slower fadeIn",
      classMainText: "animated faster fadeOut",
      classTheRestImg1: "animated faster fadeOut",
      classTheRestImg2: "animated faster fadeOut",
      classTheRestImg3: "animated faster fadeOut",
      classTheRestImg4: "animated faster fadeOut",
      classTheRestImg5: "animated faster fadeOut",
      classTheRestImg6: "animated faster fadeOut",
      classTheRestImg7: "animated faster fadeOut",
      classTheRestImg8: "animated faster fadeOut",
      classSeeMoreWork: "animated faster fadeOut",
      classLine: "animated faster fadeOut",
      classRelatedWork: "animated faster fadeOut"
    };
  },
  methods: {
    isVisibleTitle(e) {
      // if (e.percentTop < 0.2) {
      //   this.classTitle = "animated bounceOutRight";
      //   this.classCapture = "animated bounceOutLeft";
      // }
      // if (e.percentTop > 0.2) {
      //   this.classTitle = "animated bounceInRight";
      //   this.classCapture = "animated bounceInLeft";
      // }
    },
    isVisibleMainImage(e) {
      // if (e.percentTop < 0.2) {
      //   this.classMainImage = "animated fadeOut";
      // }
      if (e.percentTop > 0.2) {
        // this.classMainImage = "animated fadeIn";
      }
    },
    isVisibleMainText(e) {
      if (e.percentTop < 0.2) {
        // this.classMainText = "animated fadeOut";
        // this.classMainImage = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 1) {
        this.classMainText = "animated slower fadeIn";
        this.classMainImage = "animated slow fadeIn";
      }

      // if (e.percentTop > 0.8) {
      //   this.classMainText = "animated fadeOut";
      // }
    },
    isVisibleTheRestImg1(e) {
      if (e.percentTop < 0.2) {
        // this.classTheRestImg1 = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classTheRestImg1 = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classTheRestImg1 = "animated fadeOut";
      }
    },
    isVisibleTheRestImg2(e) {
      if (e.percentTop < 0.2) {
        // this.classTheRestImg2 = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classTheRestImg2 = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classTheRestImg2 = "animated fadeOut";
      }
    },
    isVisibleTheRestImg3(e) {
      if (e.percentTop < 0.2) {
        // this.classTheRestImg3 = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classTheRestImg3 = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classTheRestImg3 = "animated fadeOut";
      }
    },
    isVisibleTheRestImg4(e) {
      if (e.percentTop < 0.2) {
        // this.classTheRestImg4 = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classTheRestImg4 = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classTheRestImg4 = "animated fadeOut";
      }
    },
    isVisibleTheRestImg5(e) {
      if (e.percentTop < 0.2) {
        // this.classTheRestImg5 = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classTheRestImg5 = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classTheRestImg5 = "animated fadeOut";
      }
    },
    isVisibleTheRestImg6(e) {
      if (e.percentTop < 0.2) {
        // this.classTheRestImg6 = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classTheRestImg6 = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classTheRestImg6 = "animated fadeOut";
      }
    },
    isVisibleTheRestImg7(e) {
      if (e.percentTop < 0.2) {
        // this.classTheRestImg7 = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classTheRestImg7 = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classTheRestImg7 = "animated fadeOut";
      }
    },
    isVisibleTheRestImg8(e) {
      if (e.percentTop < 0.2) {
        // this.classTheRestImg8 = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classTheRestImg8 = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classTheRestImg8 = "animated fadeOut";
      }
    },
    isVisibleSeeMoreWork(e) {
      // if (e.percentTop < 0.2) {
      //   this.classSeeMoreWork = "animated bounceOutRight";
      // }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classSeeMoreWork = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classSeeMoreWork = "animated bounceOutRight";
      }
    },
    isVisibleLine(e) {
      // if (e.percentTop < 0.2) {
      //   this.classLine = "animated fadeOut";
      // }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classLine = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classLine = "animated fadeOut";
      }
    },
    isVisibleRelatedWork(e) {
      // if (e.percentTop < 0.2) {
      //   this.classRelatedWork = "animated bounceOutLeft";
      // }
      if (e.percentTop > 0.2 && e.percentTop < 0.8) {
        this.classRelatedWork = "animated slow fadeIn";
      }

      if (e.percentTop > 0.8) {
        // this.classRelatedWork = "animated bounceOutLeft";
      }
    }
  }
};
</script>

<style scoped>
.bacground-box {
  width: 75%;
  height: 100%;
  background-color: #e5e5e5;
}

.margine-top {
  margin-top: 150px;
}

.title-capture-position {
  margin-left: -170px;
  margin-top: 30px;
}

.main-img-position {
  margin-left: -170px;
  margin-top: 60px;
}

.main-img-size {
  width: 64vw;
}

.title {
  height: 61px;
  font-family: Montserrat;
  font-size: 81px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: normal;
  text-align: left;
  color: #343434;
}

.capture {
  width: 515px;
  height: 69px;
  font-family: Montserrat;
  font-size: 31px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: 1.55px;
  text-align: left;
  color: #161616;
}

.margine-top-4 {
  margin-top: 1.5rem !important;
}

.margine-left-capture {
  margin-left: 108px;
}

.main-text-position {
  margin-top: 60px;
}

.main-text {
  width: 30vw;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: justify;
  color: #161616;
}

.margine-paragraph-right {
  margin-right: 20px;
}

.margine-paragraph-left {
  margin-left: 20px;
}

.padding-paragraph-right {
  padding-right: 100px;
}

.padding-top-bottom-80 {
  padding-top: 80px;
  padding-bottom: 80px;
}

.padding-top-80-bottom-30 {
  padding-top: 80px;
  padding-bottom: 30px;
}

.padding-bottom-200 {
  padding-bottom: 200px;
}

.see-all-work {
  width: 258px;
  height: 41px;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 1.05px;
  text-align: left;
  color: #000000;
}

.line {
  width: 57vw;
  height: 3px;
  border: solid 3px #a2a2a2;
  background-color: #a2a2a2;
}

.related-work {
  font-family: Montserrat;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: 1px;
  text-align: left;
  color: #000000;
}

@media only screen and (max-width: 1335px) {
  /* - 20% */

  .margine-top {
    margin-top: 120px;
  }

  .title-capture-position {
    margin-left: -136px;
    margin-top: 24px;
  }

  .main-img-position {
    margin-left: -136px;
    margin-top: 48px;
  }

  /* .main-img-size {
  width: 64vw;
} */

  .title {
    height: 49px;
    font-family: Montserrat;
    font-size: 65px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: left;
    color: #343434;
  }

  .capture {
    width: 425px;
    height: 55px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 1.55px;
    text-align: left;
    color: #161616;
  }

  .margine-top-4 {
    margin-top: 1.2rem !important;
  }

  .margine-left-capture {
    margin-left: 86px;
  }

  .main-text-position {
    margin-top: 48px;
  }

  .main-text {
    width: 30vw;
    font-family: Montserrat;
    font-size: 19px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .margine-paragraph-right {
    margin-right: 16px;
  }

  .margine-paragraph-left {
    margin-left: 16px;
  }

  .padding-paragraph-right {
    padding-right: 80px;
  }

  .padding-top-bottom-80 {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .padding-top-80-bottom-30 {
    padding-top: 64px;
    padding-bottom: 24px;
  }

  .padding-bottom-200 {
    padding-bottom: 160px;
  }

  .see-all-work {
    width: 215px;
    height: 33px;
    font-family: Montserrat;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 1.05px;
    text-align: left;
    color: #000000;
  }

  .line {
    width: 57vw;
    height: 3px;
    border: solid 2.4px #a2a2a2;
    background-color: #a2a2a2;
  }

  .related-work {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }
}

@media only screen and (max-width: 992px) {
  .main-img-size {
    width: 80vw;
  }

  .main-text {
    width: 65vw;
    font-family: Montserrat;
    font-size: 19px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .margine-paragraph-right {
    margin-right: 0px;
  }

  .margine-paragraph-left {
    margin-left: 0px;
  }

  .padding-paragraph-right {
    padding-right: 0px;
  }
}

@media only screen and (max-width: 860px) {
  /* - 20% */
}

@media only screen and (max-width: 640px) {
  /* - 30% */

  .margine-top {
    margin-top: 84px;
  }

  .title-capture-position {
    margin-left: -95px;
    margin-top: 17px;
  }

  .main-img-position {
    margin-left: -95px;
    margin-top: 34px;
  }

  .title {
    height: 34px;
    font-family: Montserrat;
    font-size: 46px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: left;
    color: #343434;
  }

  .capture {
    width: 310px;
    height: 39px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 1.55px;
    text-align: left;
    color: #161616;
  }

  .margine-top-4 {
    margin-top: 0.84rem !important;
  }

  .margine-left-capture {
    margin-left: 60px;
  }

  .main-text-position {
    margin-top: 34px;
  }

  .padding-top-bottom-80 {
    padding-top: 45px;
    padding-bottom: 45px;
  }

  .padding-top-80-bottom-30 {
    padding-top: 45px;
    padding-bottom: 17px;
  }

  .padding-bottom-200 {
    padding-bottom: 112px;
  }

  .main-text {
    width: 65vw;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .see-all-work {
    width: 160px;
    height: 23px;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 1.05px;
    text-align: left;
    color: #000000;
  }

  .line {
    width: 57vw;
    height: 3px;
    border: solid 1.68px #a2a2a2;
    background-color: #a2a2a2;
  }

  .related-work {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }
}

@media only screen and (max-width: 540px) {
  /* - 30% */

  .margine-top {
    margin-top: 59px;
  }

  .title-capture-position {
    margin-left: -67px;
    margin-top: 12px;
  }

  .main-img-position {
    margin-left: -67px;
    margin-top: 24px;
  }

  .title {
    height: 24px;
    font-family: Montserrat;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: left;
    color: #343434;
  }

  .capture {
    width: 250px;
    height: 27px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 1.55px;
    text-align: left;
    color: #161616;
  }

  .margine-top-4 {
    margin-top: 0.59rem !important;
  }

  .margine-left-capture {
    margin-left: 42px;
  }

  .main-text-position {
    margin-top: 24px;
  }

  .padding-top-bottom-80 {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .padding-top-80-bottom-30 {
    padding-top: 32px;
    padding-bottom: 12px;
  }

  .padding-bottom-200 {
    padding-bottom: 78px;
  }

  .main-text {
    width: 65vw;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .see-all-work {
    width: 112px;
    height: 16px;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 1.05px;
    text-align: left;
    color: #000000;
  }

  .line {
    width: 57vw;
    height: 3px;
    border: solid 1.18px #a2a2a2;
    background-color: #a2a2a2;
  }

  .related-work {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }
}
</style>
