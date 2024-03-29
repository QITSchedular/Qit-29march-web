<template>
  <div>
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
        <li>
          <q-img src="~assets/s44.png" style="max-width: 100px" class="absolute-center" />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-img src="~assets/s44.png" style="max-width: 100px" class="absolute-center" />
        </li>
        <li></li>
        <li>
          <q-img src="~assets/s44.png" style="max-width: 100px" class="absolute-center" />
        </li>
        <li>
          <q-img src="~assets/s44.png" style="max-width: 100px" class="absolute-center" />
        </li>
        <li></li>
        <li></li>
        <li>
          <q-img src="~assets/s44.png" style="max-width: 100px" class="absolute-center" />
        </li>
      </ul>
      <div
        class="text-bold text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        SAP S/4 HANA
      </div>

      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="SAP S/4 HANA" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >SAP Solution</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            <span class="text-bold">SAP S/4 HANA</span> is the digital core – the nerve
            center – of your entire business. It consolidates internal and external
            elements into a single, living structure that goes beyond traditional ERP.
            Managing your entire workforce, from employees to contingent workers, with a
            complete system of engagement. <br />
            <span class="text-bold">Gain a comprehensive</span> suite of solutions across
            all talent processes: recruiting, onboarding, learning, performance and goals,
            compensation, succession, and development.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/uvzJyL4GEuU?rel=0"
          />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-px-xl q-pt-xl q-mx-xl">
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >SAP Solution</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            <span class="text-bold">SAP S/4 HANA</span> is the digital core – the nerve
            center – of your entire business. It consolidates internal and external
            elements into a single, living structure that goes beyond traditional ERP.
            Managing your entire workforce, from employees to contingent workers, with a
            complete system of engagement. <br />
            <span class="text-bold">Gain a comprehensive</span> suite of solutions across
            all talent processes: recruiting, onboarding, learning, performance and goals,
            compensation, succession, and development.
          </p>
        </div>
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/uvzJyL4GEuU?rel=0"
          />
        </div>
      </div>
    </div>

    <div
      class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify q-mb-xl"
      v-bind:class="{ 'q-px-xl': mobile }" style="font-family:  system-ui;"
    >
      <p>
        <span class="text-bold">Workforce and organizational information</span> is a key
        piece required to ensure compliance across the organization. SAP Success Factors
        solutions with SAP S/4 HANA allows companies to utilize a strong foundation of
        information for people to drive compliance activities, such as ensuring only the
        right people with right skills access facilities, run production, and approve
        critical decisions.
      </p>
    </div>

    <div class="gt-sm bg-grey-2">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7">SAP Solution</p>
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >SAP S/4 HANA</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            SAP S/4HANA is a future-ready enterprise resource planning (ERP) system with
            built-in intelligent technologies, including AI, machine learning, and
            advanced analytics. It transforms business processes with intelligent
            automation and runs on SAP HANA – a market-leading in-memory database that
            offers real-time processing speeds and a dramatically simplified data model.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
          <q-img src="~assets/s4hana.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center" data-aos="zoom-in">
          <q-img src="~assets/s4hana.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7">SAP Solution</p>
          <p class="text-h4 text-primary"  style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >SAP S/4 HANA</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui;">
            SAP S/4HANA is a future-ready enterprise resource planning (ERP) system with
            built-in intelligent technologies, including AI, machine learning, and
            advanced analytics. It transforms business processes with intelligent
            automation and runs on SAP HANA – a market-leading in-memory database that
            offers real-time processing speeds and a dramatically simplified data model.
          </p>
        </div>
      </div>
    </div>

    <div class="">
      <p class="text-center text-h4 text-primary q-ma-none q-pt-xl" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"  >Why SAP S/4 HANA?</p>

      <div
        class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify"
        v-bind:class="{ 'q-px-xl': mobile }"
      >
        <q-timeline color="primary" style="font-family:  system-ui;">
          <q-timeline-entry title="Become Efficient">
            <div>
              SAP S/4 HANA, enable companies to manage spend across every major category
              while reducing direct costs and administrative burden and shortening overall
              cycle time.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Hassle Free Implement">
            <div>
              S/4 HANA, available in on-premises, cloud and hybrid deployment models, is
              intended to be easier to use and administer while helping to solve more
              complex problems and handle vastly larger amounts of data than its
              predecessors.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Optimal Growth">
            <div>
              S/4 HANA is an opportunity for businesses to reinvent business models and
              generate new revenues by taking advantage of the Internet of Things (IoT)
              and big data by connecting people, devices and business networks. The main
              key component of S/4 HANA is SAP Simple Finance, which aims to streamline
              financial processes and enable real-time analysis of financial data. Simple
              Finance helps companies align their financial and non-financial data into
              what SAP refers to as a “single source of truth.” Some Business Suite users
              are deploying Simple Finance as the first step in the road to S/4 HANA.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>

    <div class="bg-grey-2">
      <p class="text-dark text-center q-pa-xl text-h5 q-ma-none gt-xs" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >
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

      <p class="text-dark text-center q-pa-xl text-h5 lt-sm q-ma-none" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" >
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
  </div>
</template>

<script>
import meta from '../utils/meta.js'

export default {
  data() {
    return {
      mobile: false,
      metaTags: {
          description: 'SAP S/4 HANA is the digital core – the nerve center – of your entire business. It consolidates internal and external elements into a single, living structure that goes beyond traditional ERP. ',
          title: 'Quantum | SAP S/4 HANA',
          keywords : 'SAP Solution,SAP Implementation,SAP Channel Partner, SAP Solution in India, SAP Business One, SAP S/4 HANA, IT Solution'
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
  background: linear-gradient(132deg, #833ab4, #fd1d1d, #fcb045);
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
