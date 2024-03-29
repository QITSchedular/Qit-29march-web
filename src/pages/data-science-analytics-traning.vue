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
        class="text-bold q-pb-sm text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        Data Science & Analytics Traning
      </div>

      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="Data Science & Analytics Traning" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl">
          <p class="text-h6 text-blue-grey-7">IT Counsulting & Traning</p>
          <p class="text-h4 text-primary">Data Science & Analytics Traning</p>
          <p class="text-subtitle1 text-blue-grey-9">
            This is a complete Data Science Certification specialization training course
            from <span class="text-secondary text-bold">Quantum</span> that provides you
            detailed learning in data science, data analytics, project life cycle, data
            acquisition, analysis, statistical methods and machine learning. You will gain
            expertise to deploy Recommends using R programming, data analysis, data
            transformation, experimentation and evaluation.
          </p>
          <p class="text-subtitle1 text-blue-grey-9">
            Become an expert in data analytics using the R and Python programming language
            in this data science certification training course. You’ll master data
            exploration, data visualization, predictive analytics and descriptive
            analytics techniques with the R and Python language. With this data science
            course, you’ll get hands-on practice on R CloudLab by implementing various
            real-life, industry-based projects in the domains of healthcare, retail,
            insurance, finance, airlines, music industry, and unemployment.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl">
          <q-img src="~assets/data.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
          <q-img src="~assets/data.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl">
          <p class="text-h6 text-blue-grey-7">IT Counsulting & Traning</p>
          <p class="text-h4 text-primary">Data Science & Analytics Traning</p>
          <p class="text-subtitle1 text-blue-grey-9">
            This is a complete Data Science Certification specialization training course
            from <span class="text-secondary text-bold">Quantum</span> that provides you
            detailed learning in data science, data analytics, project life cycle, data
            acquisition, analysis, statistical methods and machine learning. You will gain
            expertise to deploy Recommends using R programming, data analysis, data
            transformation, experimentation and evaluation.
          </p>
          <p class="text-subtitle1 text-blue-grey-9">
            Become an expert in data analytics using the R and Python programming language
            in this data science certification training course. You’ll master data
            exploration, data visualization, predictive analytics and descriptive
            analytics techniques with the R and Python language. With this data science
            course, you’ll get hands-on practice on R CloudLab by implementing various
            real-life, industry-based projects in the domains of healthcare, retail,
            insurance, finance, airlines, music industry, and unemployment.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2">
      <p class="text-center text-h5 text-primary q-ma-none q-py-xl">
        Key Features Of Our Data Science Course
      </p>

      <div
        class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify"
        v-bind:class="{ 'q-px-xl': mobile }"
      >
        <q-timeline color="primary">
          <q-timeline-entry>
            <div>
              Interactive Instructor –led Online as well as Offline Classroom or Group
              Training in Surat, Gujarat
            </div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>Course study materials designed by subject matter experts</div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>Highly qualified, expert & accredited Data Science trainers</div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>Enrich with Industry best practices and case studies</div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>
              24/7 End-to-end support via phone, mail, and chat and in class support
            </div>
          </q-timeline-entry>

          <q-timeline-entry>
            <div>
              Convenient Weekday/Weekend Data Science Certification Training schedules in
              Surat , Gujarat.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>

    <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs">
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

    <p class="text-dark text-center q-pa-xl text-h5 lt-sm q-ma-none">
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
export default {
  data() {
    return {
      mobile: false,
    };
  },
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
  background: linear-gradient(132deg, #fc415a, #591bc5, #212335);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  width: 100%;
  min-height: 200px;
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
