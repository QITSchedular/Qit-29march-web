<template>
  <div>
    <!------------------------Hero Section---------------------------------->
    <q-parallax src="../assets/bg4.png" style= "min-height:665px;"  class="active" :height="windowHeight">


  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

      <div class="full-height full-width flex flex-center  column">
        <div class="flex flex-center column  q-px-md q-py-md animated slideInUp q-ma-sm" style="border-radius:25px;
            background-color: #b8c6db;
            background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
            opacity:0.9;
            ">
          <q-img src="~assets/logo1.png" style="max-width:350px;opacity:1;" class="" />
          <div class="text-h5 text-primary q-pt-md text-center" style="font-family:'Poppins','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-weight: 600;">
            EXPLORE THE NEW POSSIBILITIES WITH SAP
          </div>
          <div class="text-subtitle1 text-dark q-pt-md" style="max-width:600px; text-align:center;border-radius: 25px;font-family: ''Poppins','system-ui';">
            Quantum IT solution is Gujarat's leading software development firm across India. We offer an integrated
            solution(s) in SAP, Machine learning, Python, Blockchain as well as IT infrastructure end-to-end solutions
            with assured quality support.
          </div>

          <div class="q-mt-md">
            <q-btn @click="icon = true" class="play-btn" />
          </div>
        </div>
        <q-icon  name="fa fa-angle-double-down"
          color="white"
          size="md"
          class="q-mt-md"
          v-bind:class="{ 'animated shakeY': jump }"/>


      </div>
    </q-parallax>
    <!------------------------Hero Section end---------------------------------->
    <q-dialog v-model="icon">
  <q-card style="" v-bind:style="{ 'min-width': wid }">
    <!-- Add the slot for the header of the dialog box -->
    <q-card-section class="q-pa-md q-gutter-sm">
      <div class="text-right">
        <!-- Add a close button to the header of the dialog box -->
        <q-icon name="close" size="2rem" class="cursor-pointer" @click="icon = false" />
      </div>
    </q-card-section>
    <q-card-section>
      <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/uvzJyL4GEuU?rel=0" />
    </q-card-section>
  </q-card>
</q-dialog>



    <!------------------------about Section end---------------------------------->
    <div class="gt-sm gen">
      <div class="row items-center q-mx-xl justify-center ">
        <div class="col-12 col-md q-pa-xl" data-aos="fade-up">
          <p class="text-h6 text-primary text-bold" style="font-family:'Poppins','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
            SAP Channel Partner
          </p>
          <p class="text-h4" style="font-family:'Poppins','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
            Innovative Solution and Business Transformation.
          </p>
          <p class="text-subtitle1 text-dark" style="font-family:  system-ui;">
            Gain greater control over your business or subsidiary with SAP Enterprise resource planning.
            This business management software connects and streamlines your processes — and grows along with you.<br/>
            Increase control over your small business with software designed to grow with you. Streamline key processes, gain greater insight into your business,
            and make decisions based on real-time information – so you can drive profitable growth.
          </p>
          <div class="text-subtitle1 text-dark" style="font-family:  system-ui;">
            <ul>
              <li>On-premise or cloud deployment</li>
              <li>Integrated business intelligence</li>
              <li>Integration with the SAP HANA platform </li>
              <li>Quick deployment</li>
            </ul>
          </div>
          <q-btn color="primary" rounded icon="check" label="Request Free Demo" @click="redirectToScheduler"/>
        </div>
        <div class="col-12 col-md q-pa-xl" data-aos="zoom-in-up">
          <q-img src="~assets/doodle.png" style="max-width:500px" />
        </div>
      </div>

    </div>
    <!------------------------about Section mobile---------------------------------->
    <div style="background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
      " class="lt-md">
      <div class="row items-center q-mx-md q-py-md  justify-center">
        <div class="col-12 col-md q-pa-md text-center ">
          <q-img src="~assets/doodle.png" style="max-width:500px" />
        </div>
        <div class="col-12 col-md q-pa-md">
          <p class="text-h6 text-primary text-bold">
            SAP Channel Partner
          </p>
          <p class="text-h4" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
            Innovative Solution and Business Transformation
          </p>
          <p class="text-subtitle1 text-dark" style="font-family:  system-ui;">
            Gain greater control over your business or subsidiary with SAP Enterprise resourse planning. This business
            management software connects and streamlines your processes — and grows along with you.<br/>
            Increase control over your small business with software designed to grow with you. Streamline key processes, gain greater insight into your business, and make decisions based on real-time information – so you can drive profitable growth.
          </p>
          <q-btn color="primary" rounded icon="check" label="Request Free Demo" @click="redirectToScheduler"/>
        </div>

      </div>

    </div>
    <!------------------------about Section end---------------------------------->

    <!------------------------Partners design---------------------------------->
    <div class="brand">

      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <p class="text-center text-h4 q-pt-xl text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
          Organization, We work with
          <br />
          <span class="text-center text-subtitle1 q-px-sm text-dark">
            Quantum is the official partner of the following brands
          </span>
        </p>
      </div>


      <div class="q-mx-lg q-pt-md q-pb-xl row items-stretch q-gutter-md justify-evenly gt-sm">
        <q-card class="my-card q-ma-md card row justify-center items-center shadow-7" data-aos="fade-right">
          <q-card-section>
            <q-img src="~assets/sap1.png" basic style="width:100px" />
          </q-card-section>
        </q-card>

        <q-card class="my-card q-ma-md card row justify-center items-center shadow-7" data-aos="fade-right">
          <q-card-section>
            <q-img src="~assets/suse.png" basic style="width:100px" />
          </q-card-section>
        </q-card>

        <q-card class="my-card q-ma-md card row justify-center items-center shadow-7" data-aos="fade-left">
          <q-card-section>
            <q-img src="~assets/power-bi.png" basic style="width:100px" />
          </q-card-section>
        </q-card>

        <q-card class="my-card q-ma-md card row justify-center items-center shadow-7" data-aos="fade-left">
          <q-card-section>
            <q-img src="~assets/micro.png" basic style="width:100px" />
          </q-card-section>
        </q-card>


      </div>

      <div class="lt-md">
        <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
          transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true"
          class="bg-transparent row justify-center items-center" style="height:250px">
          <q-carousel-slide :name="1">
            <div class="row fit justify-start item-center q-gutter-xs q-col-gutter no-wrap ">
              <q-card class="my-card  card row justify-center items-center shadow-7 q-mx-lg">
                <q-card-section>
                  <q-img src="~assets/sap1.png" basic style="width:100px" />
                </q-card-section>
              </q-card>
              <q-card class="my-card  card row justify-center items-center shadow-7">
                <q-card-section>
                  <q-img src="~assets/suse.png" basic style="width:100px" />
                </q-card-section>
              </q-card>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2">
            <div class="row fit justify-start item-center q-gutter-xs q-col-gutter no-wrap ">
              <q-card class="my-card  card row justify-center items-center shadow-7 q-mx-lg">
                <q-card-section>
                  <q-img src="~assets/power.png" basic style="width:100px" />
                </q-card-section>
              </q-card>
              <q-card class="my-card card row justify-center items-center shadow-7">
                <q-card-section>
                  <q-img src="~assets/micro.png" basic style="width:100px" />
                </q-card-section>
              </q-card>
            </div>
          </q-carousel-slide>

        </q-carousel>
      </div>

    </div>
    <!------------------------Partners design end---------------------------------->
    <div class="b1">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <p class="text-center text-bold  text-h4 q-pt-xl text-yellow" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
          SAP Business One
          <br />
          <span class="text-center text-white text-subtitle1 q-mx-sm" style="font-family:  system-ui;">
            ERP Software for Small Businesses
          </span>
        </p>
      </div>
      <div class="row items-center q-mx-xl justify-center gt-sm">
        <div class="col-12 col-md q-pa-xl " data-aos="zoom-in-up">
          <q-img src="~assets/b1.png" style="max-width:500px" />
        </div>
        <div class="col-12 col-md q-pa-xl" data-aos="fade-up">

          <p class="text-subtitle1 text-white" style="font-family:  system-ui;">
            Increase control over your small business with software designed to grow with you. Streamline key processes,
            gain greater insight into your business, and make decisions based on real-time information – so you can drive
            profitable growth.
          </p>
          <div class="text-subtitle1 text-white" style="font-family:  system-ui;">
            <ul>
              <li>On-premise or cloud deployment</li>
              <li>Integrated business intelligence</li>
              <li>Integration with the SAP HANA platform </li>
              <li>Quick deployment</li>
            </ul>
          </div>
          <q-btn color="secondary" rounded icon="check" label="Know More" to="/sap-business-one" />
        </div>

      </div>

      <div class="row items-center q-mx-md q-py-md  justify-center lt-md">
        <div class="col-12 col-md q-pa-xl text-center">
          <q-img src="~assets/b1.png" style="max-width:500px" />
        </div>
        <div class="col-12 col-md q-pa-md">

          <p class="text-subtitle1 text-white" style="font-family:  system-ui;">
            Increase control over your small business with software designed to grow with you. Streamline key processes,
            gain greater insight into your business, and make decisions based on real-time information – so you can drive
            profitable growth.
          </p>
          <div class="text-subtitle1 text-white" style="font-family:  system-ui;">
            <ul>
              <li>On-premise or cloud deployment</li>
              <li>Integrated business intelligence</li>
              <li>Integration with the SAP HANA platform </li>
              <li>Quick deployment</li>
            </ul>
          </div>
          <q-btn color="secondary" rounded icon="check" label="Know More" to="/sapb1" />
        </div>


      </div>
    </div>

    <div class="infox gt-xs">
      <div class="full-width flex flex-center ">
        <p class="text-dark text-center q-pa-xl text-h5">
          <span class="q-px-xl">Would you like more information?</span>
          <q-btn color="primary" icon="call" outline rounded label="Contact Us" to="/contact-us" />
        </p>
      </div>
    </div>

    <div class="infox  lt-sm">
      <div class="full-width flex flex-center">
        <p class="text-dark text-center q-pa-xl text-h5">
          Would you like more information?
          <br><br>
          <q-btn color="primary" icon="call" outline rounded label="Contact Us" to="/contact-us" />
        </p>
      </div>
    </div>


    <div class="s4">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <p class="text-center text-bold  text-h4 q-pt-xl text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
          SAP S/4 HANA
          <br />
          <span class="text-center text-dark text-subtitle1 q-mx-sm" style="font-family:  system-ui;">
            SAP's ERP for large enterprises.
          </span>
        </p>
      </div>

      <div class="row items-center q-mx-xl justify-center gt-sm">

        <div class="col-12 col-md q-pa-xl" data-aos="fade-up">
          <p class="text-subtitle1 text-dark" style="font-family:  system-ui;">
            SAP S/4HANA is a new generation ERP for the automation of the company's core processes (finance and management accounting, production, logistics, sales and service), which is intended to become the real digital core of your business.
          </p>

          <div class="text-subtitle1 text-dark" style="font-family:  system-ui;">
            <ul>
              <li>Production planning and accounting</li>
              <li>Sales management</li>
              <li>Procurement and inventory management</li>
              <li>Includes forms of reporting and primary accounting that are specific to indian enterprises</li>
            </ul>
          </div>
          <q-btn color="primary" rounded icon="check" label="know More" to="/sap-s4-hana" />
        </div>
        <div class="col-12 col-md q-pa-xl" data-aos="zoom-in-up">
          <q-img src="~assets/s4.png" style="max-width:500px" />
        </div>

      </div>

      <div class="row items-center q-mx-md q-py-md  justify-center lt-md">
        <div class="col-12 col-md q-pa-xl text-center">
          <q-img src="~assets/s4.png" style="max-width:500px" />
        </div>
        <div class="col-12 col-md q-pa-md">
          <p class="text-subtitle1 text-dark">
            SAP S/4HANA is a new generation ERP for the automation of the company's core processes (finance and management
            accounting, production, logistics, sales and service), which is intended to become the real digital core of
            your business.
          </p>

          <div class="text-subtitle1 text-dark">
            <ul>
              <li>Production planning and accounting</li>
              <li>Sales management</li>
              <li>Procurement and inventory management</li>
              <li>Includes forms of reporting and primary accounting that are specific to indian enterprises</li>
            </ul>
          </div>
          <q-btn color="primary" rounded icon="check" label="Know More" to="/sap-s4-hana" />
        </div>

      </div>

    </div>

  </div>
</template>
<script>
// import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
export default {
  mounted() {
    Vue.use(VueScrollTo);
  },
};
</script>
<script>
import meta from '../utils/meta.js'
export default {
  name: 'PageIndex',
  data() {
    return {
      about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores aspernatur cum voluptates similique quidem hic adipisci debitis! Tenetur blanditiis eos dolor cumque quia reiciendis voluptate ",
      slide: 1,
      autoplay: true,
      windowHeight: null,
      jump: false,
      email: null,
      icon: false,
      wid: null,
      metaTags: {
        description: ' Quantum IT solution is Gujarat leading software development firm across the India. We offer integrated solution(s) in SAP, Machine learning, Python, Blockchain',
        title: 'Quantum | SAP Trusted Channel Partner',
        keywords: 'SAP Solution,SAP Implementation,SAP Channel Partner, SAP Solution in India, SAP Business One, SAP S/4 HANA, IT Solution'
      }
    }
  },
  meta,
  mounted() {
    setInterval(this.jumping, 5000);
    this.windowHeight = window.innerHeight
  },
  created() {
    if (this.$q.screen.lt.sm) {
      this.wid = '370px'
    }
    else {
      this.wid = '800px'
    }
  },
  methods: {
    jumping() {
      this.jump = true
      setTimeout(this.nojump, 3000)
    },
    nojump() {
      this.jump = false
    },
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
    onReset() {
      this.name = null
      this.age = null
      this.accept = false
    },
    redirectToScheduler() {
    window.location.href = 'https://scheduler.qitsolution.co.in';
  }
  },
  
}
</script>
<style lang="stylus" scoped>
.gen{
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
}
.s4{
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
}
.b1{
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
}
.active {
  height: 100%;
}
.animated
  animation-duration: 1.5s
  animation-fill-mode: both
.my-card{
  border-radius:50%
  width: 150px;
  height: 150px;
}
.brand{
  background: url('~assets/bitmap4.png')
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat
}
.infox{
  background: url('~assets/bitmap4.png')
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat
}
.play-btn {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background: radial-gradient(#3663a8 50%, rgba(0, 70, 139, 0.4) 52%);
  border-radius: 50%;
  display: block;
  overflow: hidden;
  position: relative;
}
.play-btn::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.play-btn::before {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate-btn 3s;
  animation: pulsate-btn 3s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(0, 70, 139, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}
.play-btn:hover::after {
  border-left: 15px solid #3663a8;
  transform: scale(20);
}
.play-btn:hover::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}
@-webkit-keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
</style>
