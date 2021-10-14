// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import viola from "./images/violin-silhouette.png"
import guitar from "./images/icons8-guitar-50.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Sang-myeon Yoon",
  headerTagline: [
    //Line 1 For Header
    "Studying Frontend,",
    //Line 2 For Header
    "Instruments, and enjoy",
    //Line 3 For Header
    "new Challenges.",
  ],
  //   Header Paragraph
  headerParagraph:
    "I like learning new things, they make me see the world with deep insight. Join us.",

  //Contact Email
  contactEmail: "springyy1011@snu.ac.kr",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Frontend", //Project Title - Add Your Project Title Here
      para:
        "I am a amateur Frontend developer. I hope to evolve as a FullStack Developer. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://miro.medium.com/max/1400/1*BwJ84XJUWpPNpSKFGU8KDQ.png",
      //Project URL - Add Your Project Url Here
      url: "https://d1l8z1i7pky4jo.cloudfront.net/",
    },
    {
      title: "Viola", //Project Title - Add Your Project Title Here
      para:
        "I am a amateur Violist, a member of SNU philharmonic orchestra.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://thumbs.dreamstime.com/b/viola-bow-isolated-italian-musical-instrument-italian-viola-isolated-retro-musical-instrument-vector-wooden-violin-bow-168146564.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://www.snupo.org/",
    },
    {
      title: "Electrical and Computer Engineering", //Project Title - Add Your Project Title Here
      para:
        "I major in Electrical and Computer Engineering in SNU. I'm interested in Computer Science.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://mblogthumb-phinf.pstatic.net/20161004_182/by267_1475545735828gzWay_JPEG/%BC%AD%BF%EF%B4%EB%C7%D0%B1%B3%B7%CE%B0%ED-01.jpg?type=w800",
      //Project URL - Add Your Project Url Here
      url: "https://ee.snu.ac.kr",
    },
    {
      title: "Develop Blog", //Project Title - Add Your Project Title Here
      para:
        "My growing phase of developing", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://media.vlpt.us/images/s-yeoyul/profile/39d18e67-56ff-4e3e-9c30-88bdf0f13bdc/social.jpeg?w=240",
      //Project URL - Add Your Project Url Here
      url: "https://velog.io/@s-yeoyul",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I like learning new things. I dream to be a full-stack developer, so i challenge in many fields to get fresh experiences.",
  aboutParaTwo:
    "One of the reason i live is music, cause it fills me with determination. I usually listen korean independent music, classics, pops. And also love playing instruments(viola, guitar).",
  aboutParaThree:
    "First time for everyone. The reason someone is skilled is he has first time, and many disappointing times. I believe the power of overcoming time and effort. Someday you'll find you achieve things you can't imagine at first.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: reactIcon,
      para:
        "I'm rookie in wafflestudio, major in frontend. Since 2021 September i started to learn React. React is released by facebook develop team, and it's latest technology in Frontend. Many famous companies use this.",
    },
    {
      img: viola,
      para:
        "I'm a amateur viola player in school orchestra. I met viola in 2021 May, and it gives me a sense of challenge. I like romanticism, especially Tchaikovsky and Rachmaninoff.",
    },
    {
      img: guitar,
      para:
        "Actually my first instrument is electric bass guitar, but now i'm studying acoustic guitar. It's been about a year i learn guitar. I can play some easy kpops :D.",
    }
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  /* promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  */
  // End Promotion Section -----------------


  //   Contact Section --------------

  contactSubHeading: "Let's get further with me!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/s-yeoyul" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/s_yeoyul/",
    },
  ],

  // End Contact Section ---------------
}

