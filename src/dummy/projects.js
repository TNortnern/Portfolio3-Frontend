const projects = [
  {
    name: "Portfolio #2",
    description: "A portfolio about me.",
    images: [
      "https://i.imgur.com/YRdwYEU.jpg",
      "https://i.imgur.com/MSqKgoj.jpg",
      "https://i.imgur.com/4lVKQfe.png",
      "https://i.imgur.com/TdpYZnP.png",
    ],
    technologies: ["Vue", "HTML/CSS", "SCSS"],
    type: "Website",
    links: {
      hosted: "https://tnorthern.netlify.com",
      code: "https://github.com/TNortnern/Portfolio",
    },
  },
  {
    name: "Get Agency Reviews",
    description:
      "A real estate review website that allows agents to email clients they've done business with to leave reviews about them to help them improve or better their ratings.",
    images: [
      "https://i.imgur.com/POernas.png",
      "https://i.imgur.com/QgNfxmE.png",
      "https://i.imgur.com/iqZ8xou.png",
    ],
    technologies: ["Vue", "Laravel", "SCSS"],
    type: "Website",
    links: {
      hosted: "https://agency3.now.sh/",
      code: "https://github.com/ezl/getagentreviews-survey",
    },
  },
  {
    name: "Trello Clone",
    description:
      "An application that allows users to manage task on a more complex level. Uses Redux for global state management.",
    images: [
      "https://i.imgur.com/K0bPn8f.png",
      "https://i.imgur.com/jtzOASQ.png",
      "https://i.imgur.com/X2NQvyl.png",
    ],
    technologies: ["React", "Redux", "SCSS"],
    type: "Website",
    links: {
      hosted: "https://trello-clone-react.now.sh/",
      code: "https://github.com/TNortnern/TrelloClone-React",
    },
  },
  {
    name: "CM Dairy",
    description:
      "A dairy product shop that includes logging in, searching for products, and using a fast retainable cart to checkout.",
    images: [
      "https://i.imgur.com/k24l30h.jpg",
      "https://i.imgur.com/TwLbnLw.jpg",
      "https://i.imgur.com/Et9c3RV.png",
      "https://i.imgur.com/CiAMlYn.png",
      "https://i.imgur.com/0surIwS.png",
    ],
    technologies: ["Vue", "HTML/CSS", "SCSS", "Laravel"],
    type: "Website",
    links: {
      hosted: "https://cmdairy.netlify.com/",
      code: "https://github.com/fnicoletta/cow-milk",
    },
  },
  {
    name: "Products Overview",
    description: "Get the overview of your company products.",
    images: [
      "https://i.imgur.com/KsK1bt4.png",
      "https://i.imgur.com/0JUawwA.png",
      "https://i.imgur.com/JreAUi0.png",
    ],
    technologies: ["React", "Redux", "SCSS"],
    type: "Website",
    links: {
      hosted: "https://product-pie-chart.netlify.com/",
      code: "https://github.com/TNortnern/PieChart",
    },
  },

  {
    name: "Northern's Factory",
    description:
      "A clothing website that has a cart for multiple orders. It also has a login system that grants a discount.",
    images: [
      "https://i.imgur.com/7D6aQ5T.png",
      "https://i.imgur.com/b9Eg9f4.png",
      "https://i.imgur.com/weGHuQx.png",
      "https://i.imgur.com/MAg2BVi.png",
      "https://i.imgur.com/mmkP8IH.png",
      "https://i.imgur.com/e7AqTQJ.png",
    ],
    technologies: ["Vanilla PHP", "HTML/CSS", "Vanilla JavaScript"],
    type: "Website",
    links: {
      hosted: "https://trayvonnorthern.com/northernsfactory/",
      code: "https://github.com/TNortnern/PHPShoppingSite",
    },
  },
  // {
  //   name: "Agency Review",
  //   description:
  //     "An agency review projec that asks users to leave feedback and takes action depending on the feedback left.",
  //   images: [
  //     "https://i.imgur.com/7D6aQ5T.png",
  //     "https://i.imgur.com/b9Eg9f4.png",
  //     "https://i.imgur.com/weGHuQx.png",
  //     "https://i.imgur.com/MAg2BVi.png",
  //     "https://i.imgur.com/mmkP8IH.png",
  //     "https://i.imgur.com/e7AqTQJ.png"
  //   ],
  //   technologies: ["Vanilla PHP", "HTML/CSS", "Vanilla JavaScript"],
  //   type: "Website",
  //   links: {
  //     hosted: "https://star-rating.netlify.com/",
  //     code: "https://github.com/TNortnern/PHPShoppingSite"
  //   }
  // },
  {
    name: "AGSelect",
    description:
      "A real world project for the AGSelect food production company. The primary goal is to contact Hamilton.",
    images: [
      "https://i.imgur.com/ayHrjvT.png",
      "https://i.imgur.com/n16LDiq.png",
      "https://i.imgur.com/PJQHm4M.png",
      "https://i.imgur.com/luEEuv0.png",
    ],
    technologies: ["HTML/CSS", "Vanilla JavaScript"],
    type: "Website",
    links: {
      hosted: "https://trayvonnorthern.com/Agselect/",
      code: "https://github.com/TNortnern/AgSelect-website",
    },
  },
  {
    name: "Edgewood Creamery",
    description:
      "A real world app for the Edgewood Creamery company. Customers can order history (place the same order), place a new order, and cancel an order. After the customer submits, this order gets sent to the Creamery as a pdf and a thank you page shows up. It also has a in depth admin panel that makes the admin users feel complete in control.",
    images: [
      "https://i.imgur.com/YWqYiHG.png",
      "https://i.imgur.com/qxFfyt4.png",
      "https://i.imgur.com/Y1DH1iB.png",
      "https://i.imgur.com/rA8Ny4X.png",
      "https://i.imgur.com/PezfCJF.png",
    ],
    technologies: ["React Native", "React", "Laravel"],
    type: "Mobile Application",
    links: {
      hosted: "https://expo.io/@tnorthern/Edgewood-FE",
      code: "https://github.com/TNortnern/Edgewood-Creamery-Mobile-App",
    },
  },
  {
    name: "Portfolio #1",
    description: "A portfolio about me.",
    images: [
      "https://i.imgur.com/EubKbam.png",
      "https://i.imgur.com/bRNfCeU.png",
      "https://i.imgur.com/RHS2vxz.png",
    ],
    technologies: ["Vue", "HTML/CSS", "Vanilla JavaScript"],
    type: "Website",
    links: {
      hosted: "https://trayvonnorthern.com/portfolio1",
      code: "https://github.com/TNortnern/Portfolio-VueJs",
    },
  },
  {
    name: "UOGO College",
    description: "A prototype university website.",
    //  Students can sign up and register for courses and drop courses. Instructors can create new courses, modify course options, drop and enroll users, and see what courses their taken and what users are enrolled in their courses.
    images: [
      "https://i.imgur.com/EYobitZ.png",
      "https://i.imgur.com/jHe746Z.jpg",
      "https://i.imgur.com/ajjKm9K.png",
    ],
    technologies: ["Vue", "HTML/CSS", "SCSS"],
    type: "Website",
    links: {
      hosted: "https://uogo2.herokuapp.com/",
      code: "https://github.com/TNortnern/College",
    },
  },
];

export default projects;
