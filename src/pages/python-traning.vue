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
        Python Traning
      </div>

      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label=" Python Traning" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">IT Counsulting & Traning</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Python Traning</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            <span class="text-secondary text-bold">Quantum</span>is the biggest Python Training centre in Surat that is highly renowned for playing a chief role in offering a comprehensive Python training course to students and working professionals. The students are trained in such a way that they cultivate a liking of Python as a subject.
          </p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            Python is steadily gaining popularity among software developers because of its ability to easily integrate with other technologies and offer more stability and higher programming productivity, especially in large projects with volatile requirements. Quantum brings a Python course that will allow you to fully utilise its concepts and create code that is simple yet fully functional and robust. Opting for this Python training at our institute gives you knowledge about its architecture and design philosophy, and the basics of scripts, applications and packages through hands-on practical sessions.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
          <q-img src="~assets/python.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
          <q-img src="~assets/python.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">IT Counsulting & Traning</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Python Traning</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            <span class="text-secondary text-bold">Quantum</span>  is the biggest Python Training centre in Surat that is highly renowned for playing a chief role in offering a comprehensive Python training course to students and working professionals. The students are trained in such a way that they cultivate a liking of Python as a subject.
          </p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            Python is steadily gaining popularity among software developers because of its ability to easily integrate with other technologies and offer more stability and higher programming productivity, especially in large projects with volatile requirements. Quantum brings a Python course that will allow you to fully utilise its concepts and create code that is simple yet fully functional and robust. Opting for this Python training at our institute gives you knowledge about its architecture and design philosophy, and the basics of scripts, applications and packages through hands-on practical sessions.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2">
      <p class="text-center text-h5 text-primary q-ma-none q-py-xl" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        Our Certified Traning Will Open Your Door In Following Field
      </p>

      <div
        class="text-subtitle1 text-blue-grey-9 q-mx-xl text-justify"
        v-bind:class="{ 'q-px-xl': mobile }"
      >
        <q-timeline color="primary" style="font-family:  system-ui">
          <q-timeline-entry title="Data Science">
            <div>
              Perhaps one of the most popular applications of Python in data science. The power of the Python libraries developed for data analysis and visualization is amazing.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Machine Learning">
            <div>
              A python is an essential tool for every developer who wants to enter the fascinating area of Machine Learning. Let's see a brief introduction to Machine Learning.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Web Development">
            <div>
              Python is used in the field of web development to build the back-end of web applications. Let's start this section by talking a little bit about what the back-end is and how it helps us to create web applications.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Computer Science Education.">
            <div>
              Python currently plays a key role in computer science education around the
              world.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Computer Vision and Image Processing.">
            <div>
              Python is used for computer vision and image processing, fields that are expanding rapidly, the goal of computer vision is more complex because it tries to make the computer understand and interpret an image and its content.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Game Development.">
            <div>
              Games definitely shape lives and create timeless memories. They will
              continue to be part of our society in the years to come. Python is already
              there, lighting the spark of game creation.
            </div>
          </q-timeline-entry>

          <q-timeline-entry title="Neuroscience and Psychology.">
            <div>
              Python also has applications in neuroscience and experimental psychology
              research.
            </div>
          </q-timeline-entry>
        </q-timeline>
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
          description: 'Quantum is the biggest Python Training center in Surat that highly renowned for playing a chief role in offering a comprehensive Python training course to students and working professionals. ',
          title: 'Quantum | Python Traning',
          keywords : 'Python,python full course,python certification,python machine learning,python course in surat'
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
  background: linear-gradient(132deg, #97cc04, #2d7dd2);
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
