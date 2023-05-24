import { motion } from "framer-motion"
import React from "react"
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa"
const About = () => {
  return (
    <div className="bg-lighter dark:bg-darker h-full md:h-full">
      <div className="md:max-w-9xl items-center max-w-6xl px-8 mx-auto xl:px-5 sm:mb-auto">
        <div className="md:mx-4">
          <h2 className="my-2 text-4xl text-start md:text-justify">About</h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <h3 className="my-4 ml-4 md:text-start w-full md:text-2xl text-md text-start">
            Hello! I'm a Frontend Developer, Specializing in developing with
            HTML, CSS, JavaScript (ReactJs | VueJs).
          </h3>

          <div className="block mx-auto md:flex md:justify-center ">
            <div className="mx-auto md:w-1/2 md:px-4 md:py-4 md:text-start md:text-left ">
              <h1 className="my-2 text-4xl text-start md:text-justify ">
                Contact
              </h1>
              <p className="mx-4 my-4 md:text-xl md:mx-auto text-md text-start">
                Just message me if you have a question. I'm always open to new
                opportunities, Send me an{" "}
                <a href="mailto:Jgodito27@gmail.com" className="underline">
                  Email
                </a>
              </p>
              <div className=" block text-xl space-y-3">
                <h1 className="my-2 text-4xl text-start md:text-justify">
                  Social Links
                </h1>
                <p className="font-quick">
                  <a
                    href="https://www.facebook.com/Gyaaannn"
                    className="flex hover:text-blue-500 md:w-28 w-36"
                  >
                    <FaFacebookSquare className="mx-4 md:mx-1 my-1" /> Facebook
                  </a>
                </p>
                <p className="font-quick">
                  <a
                    href="https://www.linkedin.com/in/jn-gdt/"
                    className="flex hover:text-blue-500 md:w-28 w-36"
                  >
                    <FaLinkedin className="mx-4 md:mx-1 my-1" /> Linkedin
                  </a>
                </p>
                <p className="font-quick">
                  <a
                    href="https://github.com/secretx44"
                    className="flex hover:text-blue-500 md:w-28 w-36"
                  >
                    <FaGithub className="mx-4 md:mx-1 my-1" /> Github
                  </a>
                </p>
              </div>
            </div>
            <div className=" md:w-1/2 md:px-5 md:py-4 md:text-start">
              <p className="mx-4 my-4 text-justify md:text-justify md:mx-auto text-xl">
                As a front-end developer, I'm passionate about creating
                software. Also, I have worked on a development team for more
                than a year. and I intend to stay in this position so I can work
                toward being a Senior Front End developer.
              </p>
              <h1 className="px-2 py-2 mx-4 mt-12 text-xl font-extrabold text-center rounded-md font-cutiv dark:bg-lighter dark:text-darker text-lighter bg-darker w-43 ">
                Tech Stack
              </h1>
              <motion.div
                className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-4 place-items-center  m-auto gap-2 my-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {/* Nextjs icon */}
                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
                        fill="gray"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-quick text-lighter dark:text-darker">
                    NextJs
                  </p>
                </div>

                {/* Reactjs icon */}
                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    className="m-auto"
                    height="50"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff" />
                    <path
                      d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z"
                      fill="#00d8ff"
                    />
                    <path
                      d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z"
                      fill="#00d8ff"
                    />
                    <path
                      d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z"
                      fill="#00d8ff"
                    />
                  </svg>
                  <p className="font-quick text-lighter dark:text-darker">
                    ReactJs
                  </p>
                </div>

                {/* javascript icon */}

                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    height="50px"
                    viewBox="0 0 256.00 256.00"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                    preserveAspectRatio="xMinYMin meet"
                    fill="#000000"
                    stroke="#000000"
                    stroke-width="0.00256"
                    transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      stroke-width="0"
                      transform="translate(0,0), scale(1)"
                    >
                      <path
                        transform="translate(0, 0), scale(8)"
                        d="M16,27.750871911644936C17.701900149526463,27.314849470157725,18.549856706481947,25.343801197212944,20.140140876059455,24.59709111396119C21.751310909621466,23.8405741763541,23.988219621033966,24.62649748386954,25.274428386324008,23.396109835188973C26.530708128997137,22.194352297543787,26.533719089095925,20.156350977836073,26.598486990988153,18.41903549410194C26.657814057559072,16.827663404734423,25.962103461921853,15.359445396285535,25.632118567055848,13.801531792517302C25.297139568546214,12.2200401943436,25.812616129183624,10.219574537279582,24.628609047479955,9.118913901564792C23.395634966598944,7.9727332269275735,21.178739865388227,9.118776956962536,19.70993796751339,8.296234430502366C18.1010824573471,7.395260597369211,17.763974068569897,4.823996565173282,16,4.2868137415498495C14.331234634334656,3.77862481345531,12.719957464776575,5.279801870765477,11.014901306768365,5.648335899479715C8.814736156701303,6.123883712249748,6.229706541704305,5.413875040342341,4.444149651024068,6.784516860784249C2.6927260524263463,8.12895704192704,1.2258465843556112,10.608820054921084,1.7628475906314094,12.750462868663616C2.386389323244921,15.237243442840873,6.543232234860911,15.533029299469241,7.255324381940058,17.995915145480833C7.905552255769135,20.244833398131984,4.3600316091358975,22.430065732273405,5.193962195299166,24.617527588506142C5.915586934998149,26.51040286949069,8.748847181540647,26.452890639494914,10.694469376171227,27.017047860550218C12.430953898815362,27.520563026754655,14.24855482633597,28.199587660899947,16,27.750871911644936"
                        fill="#7ed0ec"
                        strokewidth="0"
                      ></path>
                    </g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="7.168000000000001"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M0 0h256v256H0V0z" fill="#F7DF1E"></path>
                      <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path>
                    </g>
                  </svg>
                  <p className="font-quick text-lighter dark:text-darker">
                    Javascript
                  </p>
                </div>

                {/* Vuejs icon */}
                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    height="50"
                    viewBox="0 -17.5 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                    <path
                      d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
                      fill="#41B883"
                    />
                    <path
                      d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"
                      fill="#41B883"
                    />
                    <path
                      d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"
                      fill="#35495E"
                    />
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    VueJs
                  </p>
                </div>

                {/* Bootstrap icon */}

                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    className="m-auto"
                    height="50"
                    viewBox="0 0 256 256"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z"
                        fill="#563D7C"
                      ></path>
                      <path
                        d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 
                        159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    Bootstrap
                  </p>
                </div>

                {/* Sass icon */}
                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto"
                    height="50"
                    viewBox="0 0 512 512"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="32.768"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        width="512"
                        height="512"
                        rx="15%"
                        fill="#c69"
                      ></rect>
                      <path
                        d="M258,88c-96,33-158,100-152,140s66,72,93,93h0c-35,18-79,45-78,80,2,48,54,33,76,19s44-53,30-94c31-8,58,2,66,8,31,22,15,47,4,51s-4,6,3,4,22-12,22-29c0-43-46-63-103-48-33-35-78-51-76-89,1-14,6-50,95-95s152-27,144,14c-12,62-120,104-158,68-2-4-9-7-5,4,20,50,182,27,189-79C410,79,329,64,258,88ZM172,408c-25,8-24-8-23-14,3-17,17-38,59-59C220,373,193,402,172,408Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    Sass
                  </p>
                </div>

                {/* React icon */}
                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    className="mx-auto mt-2"
                    height="40"
                    viewBox="0 0 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <defs>
                      <linearGradient
                        x1="-2.77777778%"
                        y1="32%"
                        x2="100%"
                        y2="67.5555556%"
                        id="linearGradient-1"
                      >
                        <stop stop-color="#2298BD" offset="0%"></stop>
                        <stop stop-color="#0ED7B5" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                        fill="url(#linearGradient-1)"
                      ></path>
                    </g>
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    Tailwind
                  </p>
                </div>

                {/* HTML icon */}
                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    className="mx-auto"
                    height="50"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
                    <path
                      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                      fill="white"
                    />
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    HTML
                  </p>
                </div>

                {/* CSS icon */}

                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    className="mx-auto"
                    height="50"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="CSS3"
                    role="img"
                    viewBox="0 0 512 512"
                  >
                    <path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52" />
                    <path fill="#2965f1" d="M256 37V472l149-41 35-394" />
                    <path
                      fill="#ebebeb"
                      d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"
                    />
                    <path
                      fill="#ffffff"
                      d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"
                    />
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    CSS
                  </p>
                </div>

                {/* GIT icon */}

                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    className="mx-auto"
                    height="50"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z"
                      fill="#EE513B"
                    />
                    <path
                      d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z"
                      fill="white"
                    />
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    GIT
                  </p>
                </div>

                {/* JIRA icon */}
                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    className="mx-auto"
                    height="50"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.6647 15.2165L17.2075 3.1679L16 2L6.62269 11.0697L2.33526 15.2165C1.88825 15.6494 1.88825 16.3506 2.33526 16.7835L10.9025 25.0697L16 30L25.3773 20.9303L25.5225 20.7899L29.6647 16.7835C30.1118 16.3506 30.1118 15.6494 29.6647 15.2165ZM16 20.1394L11.7202 16L16 11.8606L20.2798 16L16 20.1394Z"
                      fill="#2684FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.9999 11.8606C13.1979 9.15007 13.1842 4.75994 15.9694 2.0332L6.60352 11.0881L11.701 16.0184L15.9999 11.8606Z"
                      fill="url(#paint0_linear_87_7658)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.2912 15.9888L16 20.1392C17.3525 21.4466 18.1124 23.2202 18.1124 25.0695C18.1124 26.9189 17.3525 28.6925 16 29.9999L25.3888 20.9191L20.2912 15.9888Z"
                      fill="url(#paint1_linear_87_7658)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_87_7658"
                        x1="15.2357"
                        y1="7.67312"
                        x2="8.09646"
                        y2="10.7902"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.18" stop-color="#0052CC" />
                        <stop offset="1" stop-color="#2684FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_87_7658"
                        x1="16.8177"
                        y1="24.2786"
                        x2="23.9441"
                        y2="21.1836"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.18" stop-color="#0052CC" />
                        <stop offset="1" stop-color="#2684FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    JIRA
                  </p>
                </div>

                {/* WordPress icon */}

                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    className="mx-auto"
                    height="50"
                    viewBox="0 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g
                      id="Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-400.000000, -760.000000)"
                        fill="#00759D"
                      >
                        <path
                          d="M400,783.99925 C400,793.499047 405.520173,801.708803 413.525923,805.598425 L402.077565,774.232445 C400.747023,777.216038 400,780.519141 400,783.99925 Z M440.201556,782.788712 C440.201556,779.821619 439.135023,777.768055 438.222994,776.170505 C437.006456,774.191943 435.864921,772.517891 435.864921,770.540829 C435.864921,768.33426 437.537473,766.280696 439.895547,766.280696 C440.00205,766.280696 440.102553,766.294197 440.206056,766.300197 C435.936923,762.388075 430.247245,760 423.99955,760 C415.614288,760 408.238557,764.302134 403.946923,770.816838 C404.510941,770.834839 405.041958,770.845339 405.491972,770.845339 C408.00155,770.845339 411.888172,770.540829 411.888172,770.540829 C413.181212,770.464327 413.334217,772.366386 412.041176,772.517891 C412.041176,772.517891 410.740636,772.670896 409.29459,772.747398 L418.033864,798.743211 L423.287028,782.991218 L419.548911,772.747398 C418.25587,772.670896 417.030332,772.517891 417.030332,772.517891 C415.737292,772.441389 415.888797,770.464327 417.183337,770.540829 C417.183337,770.540829 421.146461,770.845339 423.504535,770.845339 C426.014113,770.845339 429.900734,770.540829 429.900734,770.540829 C431.195275,770.464327 431.34678,772.366386 430.053739,772.517891 C430.053739,772.517891 428.751698,772.670896 427.307153,772.747398 L435.980424,798.545205 L438.375999,790.546955 C439.411032,787.225851 440.201556,784.842276 440.201556,782.788712 Z M445.059908,772.48534 C445.163411,773.250364 445.221913,774.06939 445.221913,774.952917 C445.221913,777.387493 444.765899,780.125079 443.396356,783.549686 L436.065627,804.743848 C443.20135,800.584218 448,792.852977 448,783.9997 C448,779.82657 446.933467,775.903947 445.059908,772.48534 Z M424.421063,786.098716 L417.219338,807.022869 C419.370405,807.655889 421.644476,808.0009 423.99955,808.0009 C426.794137,808.0009 429.474721,807.517885 431.969299,806.640358 C431.906297,806.536854 431.846295,806.428851 431.798294,806.310347 L424.421063,786.098716 Z"
                          id="Wordpress"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    WordPress
                  </p>
                </div>

                {/* Firebase icon */}

                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    height="50px"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
                      fill="#1ABCFE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
                      fill="#0ACF83"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                      fill="#FF7262"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
                      fill="#F24E1E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
                      fill="#A259FF"
                    />
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    Figma
                  </p>
                </div>
                <div className="bg-darker h-20 p-2 rounded-md dark:bg-lighter">
                  <svg
                    className="mx-auto"
                    height="50px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z"
                      fill="#ffc24a"
                    />
                    <path
                      d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z"
                      fill="#ffa712"
                    />
                    <path
                      d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z"
                      fill="#f4bd62"
                    />
                    <path
                      d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z"
                      fill="#ffa50e"
                    />
                    <polygon
                      points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601"
                      fill="#f6820c"
                    />
                    <path
                      d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0"
                      fill="#fde068"
                    />
                    <path
                      d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z"
                      fill="#fcca3f"
                    />
                    <path
                      d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z"
                      fill="#eeab37"
                    />
                  </svg>
                  <p className="font-quick text-center text-lighter dark:text-darker">
                    Firebase
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
