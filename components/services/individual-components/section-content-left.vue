<template>
    <section v-view="isVisibleSection">
        <div class="w3-display-container background-box">
        <div>
            <div class="number number-position"><slot name="number"></slot></div>
            <img :src="img" class="img-size img-position" :class="classFadeInOut" alt="Services" />
            <div class="title-text-position">
                <p class="title" :class="classTitleEffect"><slot name="title"></slot></p>
                <p class="text" :class="classTextFadeInOut"><slot name="text"></slot></p>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
  props: ["img"],
  data() {
    return {
      classFadeInOut: "animated fast fadeOut",
      classTitleEffect: "animated fast fadeOut",
      classTextFadeInOut: "animated fast fadeOut"
    };
  },
  methods: {
    isVisibleSection(e) {
      // Image
      if (e.percentTop < 0.2) {
        // this.classFadeInOut = "animated slow fadeOutLeft";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.9) {
        this.classFadeInOut = "animated slow fadeInLeftModified-10";
      }

      if (e.percentTop > 1) {
        // this.classFadeInOut = "animated slow fadeOutLeft";
      }
      // Title and Text
      if (e.percentTop < 0.2) {
        // this.classTitleEffect = "animated slow fadeOutRight";
        // this.classTextFadeInOut = "animated slow fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.9) {
        this.classTitleEffect = "animated slow fadeInLeftModified-10";
        this.classTextFadeInOut = "animated slow fadeIn";
      }

      if (e.percentTop > 1) {
        // this.classTitleEffect = "animated slow fadeOutRight";
        // this.classTextFadeInOut = "animated slow fadeOut";
      }
    }
  }
};
</script>

<style scoped>
.background-box {
  height: 50vw;
  background-color: #cbcbcb;
}

.number {
  font-family: Montserrat;
  font-size: 17vw;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.27;
  letter-spacing: -15px;
  text-align: left;
  color: #c0c0c0;
}

.number-position {
  position: absolute;
  top: 70%;
  left: 18%;
}

.img-position {
  position: absolute;
  top: 15%;
  left: 35%;
}

.img-size {
  width: 55vw;
}

.title {
  width: 30vw;
  font-size: 2.2vw;
  font-weight: bold;
  line-height: 1.33;
  letter-spacing: 2.25px;
}

.text {
  width: 36vw;
  font-family: Montserrat;
  font-size: 1.1vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: left;
  color: #000000;
}

.title-text-position {
  position: absolute;
  top: 23%;
  left: 15%;
}

@media only screen and (max-width: 992px) {
  .background-box {
    height: 80vw;
    background-color: #cbcbcb;
  }

  .number {
    font-family: Montserrat;
    font-size: 17vw;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -5px;
    text-align: left;
    color: #c0c0c0;
  }

  .number-position {
    position: absolute;
    top: 75%;
    left: 0%;
  }

  .img-position {
    position: absolute;
    top: 23%;
    left: 17%;
  }

  .img-size {
    width: 76vw;
  }

  .title {
    width: 50vw;
    font-size: 2.8vw;
    font-weight: bold;
    line-height: 1.33;
    letter-spacing: 1.8px;
  }

  .text {
    width: 70vw;
    font-family: Montserrat;
    font-size: 1.8vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.4px;
    text-align: left;
    color: #000000;
  }

  .title-text-position {
    position: absolute;
    top: 13%;
    left: 10%;
  }
}
</style>