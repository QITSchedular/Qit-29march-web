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
        Machine Learning Traning
      </div>

      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label=" Machine Learning Traning" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">IT Counsulting & Traning</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Machine Learning Traning</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            Machine learning is taking over the world- and with that, there is a growing need among companies for professionals to know the Ins And outs of machine learning. If launching a Career in Machine Learning sounds right up your alley, QIT’s online Machine Learning Certification Training will definitely help you comprehend and master concepts like regression, clustering, classification, and Prediction.
          </p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            Machine Learning career opportunities are exploding worldwide. Many organizations are investing Heavily in Machine learning capabilities to maintain a cutting edge in the market. The Machine Learning training course will be of benefit to the following professional roles: Technical Project Managers, Analytics Managers, Software Developers, Information Architects, Business Analysts, Data Scientists, and Engineering Graduates.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
          <q-img src="~assets/ml.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
          <q-img src="~assets/ml.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">IT Counsulting & Traning</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Machine Learning Traning</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            Machine learning is taking over the world- and with that, there is a growing need among companies for professionals to know the Ins And outs of machine learning. If launching a Career in Machine Learning sounds right up your alley, QIT’s online Machine Learning Certification Training will definitely help you comprehend and master concepts like regression, clustering, classification, and Prediction.
          </p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            Machine Learning career opportunities are exploding worldwide. Many organizations are investing Heavily in Machine learning capabilities to maintain a cutting edge in the market. The Machine Learning training course will be of benefit to the following professional roles: Technical Project Managers, Analytics Managers, Software Developers, Information Architects, Business Analysts, Data Scientists, and Engineering Graduates.
          </p>
        </div>
      </div>
    </div>

    <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
      <span class="q-px-xl">For More information, Book Your Free Demo</span>
      <q-btn
        color="primary"
        icon="call"
        class="q-ma-md"
        outline
        rounded
        label="Contact Us"
        to="/contact-us"
      />
    </p>

    <p class="text-dark text-center q-pa-xl text-h5 lt-sm q-ma-none" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
      For More information, Book Your Free Demo
      <br /><br />
      <q-btn
        color="primary"
        icon="call"
        outline
        rounded
        label="Contact Us"
        to="/contact-us"
      />
    </p>
  </div>
</template>

<script>
import meta from '../utils/meta.js'

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
          description: 'Machine learning is taking over the world- and with that, there is a growing need among Companies for professionals to know the Ins And outs of machine learning.',
          title: 'Quantum | Machine Learning Traning',
          keywords : 'machine learning,machine learning traning,machine learning certificate,ml certification'
        }
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
};
</script>

<style scoped>
.background {
  background: linear-gradient(132deg, #028090, #00bfb2);
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
