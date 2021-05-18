<template>
  <section>
    <div class="d-lg-flex flex-lg-row justify-content-center mb-3">
      <div class="d-flex justify-content-center">
        <div class="size-width-input margin-right-flex">
          <input
            :class="classesStyle.classInputName"
            placeholder="name"
            type="text"
            name="inputName"
            v-model="inputs.name"
            v-validate="'required|alpha_spaces'"
            data-vv-as="Name"
          />
          <input
            :class="classesStyle.classInputPhone"
            placeholder="phone"
            type="text"
            name="inputPhone"
            v-model="inputs.phone"
            v-validate="'required|numeric'"
            data-vv-as="Phone"
          />
          <input
            :class="classesStyle.classInputEmail"
            placeholder="email"
            type="text"
            name="inputEmail"
            v-model="inputs.email"
            v-validate="'required|email'"
            data-vv-as="Email"
          />
          <input
            :class="classesStyle.classInputAddress"
            placeholder="address"
            type="text"
            name="inputAddress"
            v-model="inputs.address"
          />
          <input
            :class="classesStyle.classInputPhoneNumber"
            placeholder="postcode"
            type="text"
            name="inputPhoneNumber"
            v-model="inputs.phoneNumber"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="size-width-input margin-left-flex">
          <div :class="classesStyle.classInputProjectBudgetTitle">I’m applying for</div>
          <select
            class="w3-white select-placeholder height-size-input"
            name="inputProjectBudget"
            v-model="inputs.projectBudget"
          >
            <option value="" disabled selected>— SELECT AN OPTION —</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Photographer">Photographer</option>
            <option value="Content Writer">Content Writer</option>
          </select>
          <div :class="classesStyle.classResumeTitle">resume</div>
          <label for="resumeFile" class="select-placeholder the-clue-pointer-hover">— CHOOSE FILE —</label>
          <input 
          class="w3-hide" 
          id="resumeFile" 
          type="file" 
          name="inputResume" 
          ref="resumeFile"
          v-validate="'required|ext:pdf'"
          data-vv-as="File"
          >
          <div :class="classesStyle.classCommentsTitle">
            questions / comments
          </div>
          <textarea
            class="inputfield2 input-style size-height-textarea w3-border-0"
            placeholder="— TYPE HERE —"
            type="text"
            name="inputComments"
            v-model="inputs.comments"
          ></textarea>

          <div class="bottom-field-margin2"></div>
          <button
            @click="sendEnquire"
            class="button-send button-text-send the-clue-underline-text-gray-yellow animated pulseHover"
          >
            SEND ENQUIRY
          </button>
        </div>
      </div>
    </div>
    <div class="top-field-margin1"></div>
    <div class="d-flex justify-content-center">
      <div class="error-font">{{ messages.success }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.error }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorName }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorPhone }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorEmail }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorPhoneNumber }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorProjectBudget }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorResume }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorHowDid }}</div>
    </div>
    <div class="bottom-field-margin3"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputs: {
        name: "",
        phone: "",
        email: "",
        address: "",
        phoneNumber: "",
        projectBudget: "",
        resume: "",
        comments: ""
      },
      messages: {
        error: "",
        success: ""
      },
      classesStyle: {
        classButtonOff:
          "button-style-white button-text-style-black animated infinite pulseHover",
        classButtonOn:
          "button-style-black button-text-style-white animated infinite pulseHover",
        classInputName: "inputfield1 input-style input-margin-bottom",
        classInputPhone: "inputfield1 input-style input-margin-bottom",
        classInputEmail: "inputfield1 input-style input-margin-bottom",
        classInputAddress: "inputfield1 input-style input-margin-bottom",
        classInputPhoneNumber: "inputfield1 input-style input-margin-bottom",
        classInputProjectBudgetTitle: "input-style",
        classResumeTitle: "input-style top-field-margins",
        classCommentsTitle: "input-style top-field-margins"
      }
    };
  },
  methods: {
    sendEnquire() {
      let self = this;
      self.$validator.validateAll().then(result => {
        if (!result) {
          self.messages.error =
            "Please Enter valid entries into the fields! All highlighted fields are Required!";

          if (typeof self.errors.first("inputName") != "undefined") {
            self.classesStyle.classInputName =
              "inputfield1-error input-style-error input-margin-bottom w3-text-red";
            if (self.errors.first("inputName") !== "The Name field is required")
              self.messages.errorName = self.errors.first("inputName");
          } else {
            self.messages.errorName = "";
            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
          }

          if (typeof self.errors.first("inputPhone") != "undefined") {
            self.classesStyle.classInputPhone =
              "inputfield1-error input-style-error input-margin-bottom w3-text-red";
            if (
              self.errors.first("inputPhone") !== "The Phone field is required"
            )
              self.messages.errorPhone = self.errors.first("inputPhone");
          } else {
            self.messages.errorPhone = "";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
          }

          if (typeof self.errors.first("inputEmail") != "undefined") {
            self.classesStyle.classInputEmail =
              "inputfield1-error input-style-error input-margin-bottom w3-text-red";
            if (
              self.errors.first("inputEmail") !== "The Email field is required"
            )
              self.messages.errorEmail = self.errors.first("inputEmail");
          } else {
            self.messages.errorEmail = "";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
          }

          if (self.inputs.projectBudget === "") {
            self.classesStyle.classInputProjectBudgetTitle =
              "input-style-error w3-text-red";
          } else {
            self.classesStyle.classInputProjectBudgetTitle =
              "input-style top-field-margins";
          }

          if (typeof self.errors.first("inputResume") != "undefined") {
            self.classesStyle.classResumeTitle =
              "input-style-error top-field-margins w3-text-red";
            if (
              self.errors.first("inputResume") !== "The File field is required"
            )
              self.messages.errorResume = "The File field must be a PDF file";
          } else {
            self.messages.errorResume = "";
            self.classesStyle.classResumeTitle =
              "input-style top-field-margins";
          }

          if (self.inputs.comments === "") {
            self.classesStyle.classCommentsTitle =
              "input-style-error w3-text-red top-field-margins";
          } else {
            self.classesStyle.classCommentsTitle =
              "input-style top-field-margins";
          }
        } else {
          if (self.inputs.projectBudget != "" && self.inputs.comments != "") {
            self.messages.success = "Email Successfully Submitted.";

            setTimeout(function() {
              self.inputs.name = "";
              self.inputs.phone = "";
              self.inputs.email = "";
              self.inputs.address = "";
              self.inputs.phoneNumber = "";
              self.inputs.projectBudget = "";
              self.inputs.resume = "";
              self.inputs.comments = "";
            }, 500);

            setTimeout(function() {
              self.messages.success = "";
            }, 4000);
          }

          if (self.inputs.projectBudget === "") {
            self.messages.error =
              "Please Enter valid entries into the fields! All highlighted fields are Required!";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorResume = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classResumeTitle =
              "input-style top-field-margins";
            self.classesStyle.classInputProjectBudgetTitle =
              "input-style-error w3-text-red";
          } else {
            self.messages.error = "";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorResume = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classResumeTitle =
              "input-style top-field-margins";
            self.classesStyle.classInputProjectBudgetTitle = "input-style";
          }

          if (self.inputs.comments === "") {
            self.messages.error =
              "Please Enter valid entries into the fields! All highlighted fields are Required!";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorResume = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classResumeTitle =
              "input-style top-field-margins";
            self.classesStyle.classCommentsTitle =
              "input-style-error w3-text-red top-field-margins";
          } else {
            self.messages.error = "";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorResume = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classResumeTitle =
              "input-style top-field-margins";
            self.classesStyle.classCommentsTitle =
              "input-style top-field-margins";
          }
        }
      });
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
}

select {
  border: none;
  outline: none;
  scroll-behavior: smooth;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  color: #646464 !important;
}

.size-width-input {
  width: 33vw;
}

.size-height-textarea {
  height: 9.6vw;
}

.top-field-margins {
  margin-top: 0.4vw;
}

.top-field-margins2 {
  margin-top: 1.3vw;
}

.margin-right-flex {
  margin-right: 52px;
}

.margin-left-flex {
  margin-left: 52px;
}

.error-font {
  font-size: 1.55vw;
}

.input-style {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.65px;
  text-align: left;
  display: block;
  border: none;
  border-bottom: 1px solid #000000;
  width: 100%;
}

.input-style-error {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.65px;
  text-align: left;
  display: block;
  border: none;
  border-bottom: 1px solid #f44336;
  width: 100%;
}

.border-bottom {
  border-bottom: 0.14vw solid #000000 !important;
}

.input-margin-bottom {
  margin-bottom: 3.4vw;
}

.select-placeholder {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #646464;
}

.select-placeholder-error {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #f44336;
}

.inputfield1 ::-webkit-input-placeholder {
  /* Edge */
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #000000;
}

.inputfield1:-ms-input-placeholder {
  /* Internet Explorer */
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #000000;
}

.inputfield1::placeholder {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #000000;
}

.inputfield1-error ::-webkit-input-placeholder {
  /* Edge */
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #f44336;
}

.inputfield1-error:-ms-input-placeholder {
  /* Internet Explorer */
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #f44336;
}

.inputfield1-error::placeholder {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #f44336;
}

.inputfield2::-webkit-input-placeholder {
  /* Edge */
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #646464;
}

.inputfield2:-ms-input-placeholder {
  /* Internet Explorer */
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #646464;
}

.inputfield2::placeholder {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #646464;
}

.inputfield2-error::-webkit-input-placeholder {
  /* Edge */
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #f44336;
}

.inputfield2-error:-ms-input-placeholder {
  /* Internet Explorer */
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #f44336;
}

.inputfield2-error::placeholder {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #f44336;
}

.button-style-black {
  width: 7.9vw;
  height: 2.2vw;
  background-color: #000000;
  border: none;
  display: inline-block;
  text-align: center;
  margin-bottom: 0.5vw;
}

.button-style-white {
  width: 7.9vw;
  height: 2.2vw;
  background-color: #ffffff;
  border: solid 0.1vw #acacac;
  display: inline-block;
  text-align: center;
  margin-bottom: 0.5vw;
}

.bottom-field-margin1 {
  margin-bottom: 0.5vw;
}

.bottom-field-margin2 {
  margin-bottom: 4.5vw;
}

.bottom-field-margin3 {
  margin-bottom: 15vw;
}

.top-field-margin1 {
  margin-bottom: 5vw;
}

.button-text-style-white {
  font-family: Montserrat;
  font-size: 0.6vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
}

.button-text-style-black {
  font-family: Montserrat;
  font-size: 0.6vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #000000;
}

.button-send {
  width: 33vw;
  height: 3.5vw;
  border: solid 0.1vw #acacac;
  background-color: #ffffff;
}

.button-send:hover {
  width: 33vw;
  height: 3.5vw;
  /* border: solid 0.1vw #000000;
  background-color: #000000; */
}

.button-text-send {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: center;
  color: #343434;
}

.button-text-send:hover {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: center;
  color: #343434;
}

@media only screen and (max-width: 992px) {
  /* + 40% */

  .size-width-input {
    width: 60vw;
  }

  .size-height-textarea {
    height: 17.3vw;
  }

  .top-field-margins {
    margin-top: 0.72vw;
  }

  .top-field-margins2 {
    margin-top: 2.34vw;
  }

  .margin-right-flex {
    margin-right: 0px;
    margin-bottom: 7vw;
  }

  .margin-left-flex {
    margin-left: 0px;
  }

  .error-font {
    font-size: 2.8vw;
  }

  .input-style {
    font-family: Montserrat;
    font-size: 2.8vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.65px;
    text-align: left;
    display: block;
    border: none;
    border-bottom: 1px solid #000000;
    width: 100%;
  }

  .input-style-error {
    font-family: Montserrat;
    font-size: 2.8vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.65px;
    text-align: left;
    display: block;
    border: none;
    border-bottom: 1px solid #f44336;
    width: 100%;
  }

  .border-bottom {
    border-bottom: 0.25vw solid #000000 !important;
  }

  .input-margin-bottom {
    margin-bottom: 6.12vw;
  }

  .select-placeholder {
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #646464;
  }

  .select-placeholder-error {
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #f44336;
  }

  .inputfield1 ::-webkit-input-placeholder {
    /* Edge */
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #000000;
  }

  .inputfield1:-ms-input-placeholder {
    /* Internet Explorer */
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #000000;
  }

  .inputfield1::placeholder {
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #000000;
  }

  .inputfield1-error ::-webkit-input-placeholder {
    /* Edge */
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #f44336;
  }

  .inputfield1-error:-ms-input-placeholder {
    /* Internet Explorer */
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #f44336;
  }

  .inputfield1-error::placeholder {
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #f44336;
  }

  .inputfield2::-webkit-input-placeholder {
    /* Edge */
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #646464;
  }

  .inputfield2:-ms-input-placeholder {
    /* Internet Explorer */
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #646464;
  }

  .inputfield2-error::placeholder {
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #f44336;
  }

  .inputfield2-error:-ms-input-placeholder {
    /* Internet Explorer */
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #f44336;
  }

  .inputfield2-error::placeholder {
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #f44336;
  }

  .button-style-black {
    width: 28.44vw;
    height: 8vw;
    background-color: #000000;
    border: none;
    display: inline-block;
    text-align: center;
    margin-bottom: 1.6vw;
  }

  .button-style-white {
    width: 28.44vw;
    height: 8vw;
    background-color: #ffffff;
    border: solid 0.2vw #acacac;
    display: inline-block;
    text-align: center;
    margin-bottom: 1.6vw;
  }

  .bottom-field-margin1 {
    margin-bottom: 2vw;
  }

  .bottom-field-margin2 {
    margin-bottom: 8.1vw;
  }

  .bottom-field-margin3 {
    margin-bottom: 27vw;
  }

  .top-field-margin1 {
    margin-bottom: 9vw;
  }

  .button-text-style-white {
    font-family: Montserrat;
    font-size: 2.2vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: #ffffff;
  }

  .button-text-style-black {
    font-family: Montserrat;
    font-size: 2.2vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: #000000;
  }

  .button-send {
    width: 60vw;
    height: 6.3vw;
    border: solid 0.1vw #acacac;
    background-color: #ffffff;
  }

  .button-send:hover {
    width: 60vw;
    height: 6.3vw;
    /* border: solid 0.1vw #000000;
    background-color: #000000; */
  }

  .button-text-send {
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: center;
    color: #343434;
  }

  .button-text-send:hover {
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: center;
    color: #343434;
  }
}
</style>
