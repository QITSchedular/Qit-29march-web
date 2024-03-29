<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        class="text-bold text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        SAP Traning
      </div>

      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="SAP Traning" />
      </q-breadcrumbs>
    </div>

    <div
      class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify q-my-xl"
      v-bind:class="{ 'q-px-xl': mobile }" style="font-family:  system-ui"
    >
      <p>
        We offer trusted SAP, Machine learning, Data Science, Blockchain, DevOps and much more training with real-time experienced & genuine mentors to secure your future as a principal consultant.
      </p>
      <p>
        We provide quality learning and hands-on experience as we are recognized as one of the top online/classroom training institutions around Gujarat.
      </p>
      <p>
        As we all say “knowledge is the biggest asset”, Quantum will be here to hand it over to you. Here in the case of SAP, we are working continuously to give you updated knowledge & our SAP specialists will share their experience in a real-life business scenario. Our SAP syllabus will help you on a different level of your expertise.
      </p>
    </div>

    <div class="row items-center justify-center">
      <div class="col-12 col-md q-pa-xl q-mx-xl">
        <p class="text-h6 text-blue-grey-7">IT Counsulting & Traning</p>
        <p class="text-h4 text-primary" data-aos="fade-up" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">SAP Traning</p>
        <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
          We do create or develop the best and easily accessible mobile applications based on the end user’s requirements. Our experts develop both native and hybrid applications to reach the client’s requirements. The application we develop will stand out and make a name for itself in the market. Our team will design the applications in such a way as to prove the best experience to the user.
        </p>
      </div>
      <div class="col-12 col-md q-pa-xl q-mx-xl bg-grey-3" style="border-radius: 25px">
        <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Get Certified In SAP With Us</p>
        <p class="text-subtitle1 text-grey">
          SAP Consist the Wide Varity Of Module, based On the industry
        </p>
        <br />
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div>
            <q-input
              filled
              color="secondary"
              v-model="name"
              label="Your Name"
              hint="Your Name"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
            />
            <br />
            <q-input
              filled
              color="secondary"
              v-model="email"
              label="Email Address"
              hint="Your Email Address"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
            />
            <br />
            <q-select
              filled
              v-model="model"
              :options="options"
              label="SAP Version"
              hint="Name of the SAP version you are intrested in"
            />
          </div>
          <div>
            <q-btn label="Submit" type="submit" color="primary" rounded />
            <q-btn
              label="cancle"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
              rounded
            />
          </div>
        </q-form>
      </div>
    </div>
    <div>
      <q-tabs
        v-model="tab"
        dense
        class="text-dark q-pt-xl"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="functional" label="Functional Traning" />
        <q-tab name="technical" label="Technical Traning" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="functional" style="font-family:  system-ui">
          <div
            class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify q-my-xl"
            v-bind:class="{ 'q-px-xl': mobile }"
          >
            <p>
              A functional consultant is one who interacts with the client and understands the client's requirements. A functional consultant has to understand the business requirement and use the standard functionality provided by SAP.
            </p>
            <p>
              SAP (ERP) functional analysts act as a bridge between business (which owns requirements) and technology (software). Their job crudely involves the following: Satisfy business requirements by (re)configuring systems (software). Work with developers to identify and implement custom solutions.
            </p>
          </div>
        </q-tab-panel>
        <q-tab-panel name="technical" style="font-family:  system-ui">
          <div
            class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify q-my-xl"
            v-bind:class="{ 'q-px-xl': mobile }"
          >
            <p>
              It also includes config changes in the system. Whereas SAP technical is responsible for the build. Uses ABAP or OOABAP or JAVA languages to write the code as specified by the SAP functional. Usually deals with areas like workflows, UI, integration, reports and so on.
            </p>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import meta from "../utils/meta.js";
import firebase from "firebase";
const db = firebase.firestore();

export default {
  data() {
    return {
      mobile: false,
      name: null,
      email: null,
      model: null,
      options: ["SAP Business one", "SAP S/4 hana"],
      tab: "functional",
      metaTags: {
        description:
          "We offers trusted SAP, Machine learning, Data science, Blockchain, DevOps and many more training with real time experienced & genuine mentors to secure your future as principle consultant.",
        title: "Quantum | SAP Traning",
        keywords: "SAP , SAP Traning,ERP traning, it traning, SAP certification, SAP Job",
      },
    };
  },
  meta,
  created() {
    if (this.$q.screen.lt.sm) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
  },
  methods: {
    onSubmit() {
      if (name != null) {
        db.collection("traning")
          .add({
            email: this.email,
            name: this.name,
            module: this.model,
          })
          .then(() => {
            this.$q.notify({
              color: "primary",
              textColor: "white",
              icon: "cloud_done",
              message: "Submitted",
            });
          })
          .catch((error) => {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Try Again after some time! sorry",
            });
          });
        this.onReset();
      }
    },
    onReset() {
      this.name = null;
      this.email = null;
      this.model = null;
    },
  },
};
</script>

<style>
.background {
  background: linear-gradient(132deg, #1a2a6c, #b21f1f, #fdbb2d);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* position the div in center */
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
