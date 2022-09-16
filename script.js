const menuToggler = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const home_btns = document.querySelectorAll(".home");
const project_btns = document.querySelectorAll(".project");
const skill_btns = document.querySelectorAll(".skill");
const about_btns = document.querySelectorAll(".about");
const contact_btns = document.querySelectorAll(".contact");
const mob_btns = document.querySelectorAll(".mob_btn");
const home_page = document.querySelector(".homepage");
const project_page = document.querySelector(".projectpages");
const sections = document.querySelectorAll('section');

function openMenu(){
    menuToggler.classList.toggle("open")
    menu.classList.toggle("hidden")
    sections.forEach((section)=>{
    section.classList.toggle('blur')
    })
};

function show_home_tab(){
   home_btns.forEach((home_btn)=>{
    home_btn.classList.add("active_tap");
   })
   project_btns.forEach((project_btn)=>{
    project_btn.classList.remove("active_tap");
   })
   skill_btns.forEach((skill_btn)=>{
    skill_btn.classList.remove("active_tap");
   })
   about_btns.forEach((about_btn)=>{
    about_btn.classList.remove("active_tap");
   })
   contact_btns.forEach((contact_btn)=>{
    contact_btn.classList.remove("active_tap");
   })
  home_page.classList.remove("hidden")
  project_page.classList.add("hidden")
}
function show_project_tab(){
  home_btns.forEach((home_btn)=>{
   home_btn.classList.remove("active_tap");
  })
  project_btns.forEach((project_btn)=>{
   project_btn.classList.add("active_tap");
  })
  skill_btns.forEach((skill_btn)=>{
   skill_btn.classList.remove("active_tap");
  })
  about_btns.forEach((about_btn)=>{
   about_btn.classList.remove("active_tap");
  })
  contact_btns.forEach((contact_btn)=>{
   contact_btn.classList.remove("active_tap");
  })
  home_page.classList.add("hidden")
  project_page.classList.remove("hidden")
}
function close_mob_nav() {
  menuToggler.classList.remove("open")
  menu.classList.add("hidden")
} 
function show_contact_tab(){
  home_btns.forEach((home_btn)=>{
   home_btn.classList.remove("active_tap");
  })
  project_btns.forEach((project_btn)=>{
   project_btn.classList.remove("active_tap");
  })
  skill_btns.forEach((skill_btn)=>{
   skill_btn.classList.remove("active_tap");
  })
  about_btns.forEach((about_btn)=>{
   about_btn.classList.remove("active_tap");
  })
  contact_btns.forEach((contact_btn)=>{
   contact_btn.classList.add("active_tap");
  })
  home_page.classList.remove("hidden")
  project_page.classList.add("hidden")
}
function show_skill_tab(){
  home_btns.forEach((home_btn)=>{
   home_btn.classList.remove("active_tap");
  })
  project_btns.forEach((project_btn)=>{
   project_btn.classList.remove("active_tap");
  })
  skill_btns.forEach((skill_btn)=>{
   skill_btn.classList.add("active_tap");
  })
  about_btns.forEach((about_btn)=>{
   about_btn.classList.remove("active_tap");
  })
  contact_btns.forEach((contact_btn)=>{
   contact_btn.classList.remove("active_tap");
  })
  home_page.classList.remove("hidden")
  project_page.classList.add("hidden")
}
function show_about_tab(){
  home_btns.forEach((home_btn)=>{
   home_btn.classList.remove("active_tap");
  })
  project_btns.forEach((project_btn)=>{
   project_btn.classList.remove("active_tap");
  })
  skill_btns.forEach((skill_btn)=>{
   skill_btn.classList.remove("active_tap");
  })
  about_btns.forEach((about_btn)=>{
   about_btn.classList.add("active_tap");
  })
  contact_btns.forEach((contact_btn)=>{
   contact_btn.classList.remove("active_tap");
  })
  home_page.classList.remove("hidden")
  project_page.classList.add("hidden")
}


project_btns.forEach((project_btn)=>{
  project_btn.addEventListener("click",show_project_tab)
})
home_btns.forEach((home_btn)=>{
  home_btn.addEventListener("click",show_home_tab)
})
menuToggler.addEventListener("click",openMenu)
mob_btns.forEach((mob_btn)=>{
  mob_btn.addEventListener("click",close_mob_nav)
})

skill_btns.forEach((skill_btn)=>{
  skill_btn.addEventListener("click",show_skill_tab)
})
contact_btns.forEach((contact_btn)=>{
  contact_btn.addEventListener("click",show_contact_tab)
})
about_btns.forEach((about_btn)=>{
  about_btn.addEventListener("click",show_about_tab)
})

//Arrays of Projects
const Projects = [
  {

      projectTitle:"order summary",
      client:"Frontend Mentor",
      type:"Challenge",
      year:"June 2022",
      projectDescription:`This project was challenge from frontend Mentor website. This 
      is an order summary card for any website which ivolves purchasing. This 
      challenge is mostly for newbies; to train your ability to use flex or grid display.
      You can view my Solution or you can view the source code. Get more from <a class="text-1xl text-blue-600" href="#">their website</a> 
      `,
      tagLanguages:['HTML 5','CSS 3','Boostrap','CSS flex','HTML Sematics'],
      liveViewLink:"https://asumvictor.github.io/order-summary-card",
      sourceCodeLink:"https://github.io/AsumVictor/order-summary-card",
      imageLink:"screenshots/orderSummary.jpg",
      imageAltText:"order summary image", 
       
  },
  {
      projectTitle:"QR code component",
      client:"Frontend Mentor",
      type:"Challenge",
      year:"June 2022",
      projectDescription:`This project was challenge from frontend Mentor website. This 
      is an QR code component card for any website which ivolves purchasing. This 
      challenge is mostly for newbies; to train your ability to use flex or grid display.
      You can view my Solution or you can view the source code. Get more from <a class=" text-1xl text-blue-400" href="#">their website</a> 
      `,
      tagLanguages:['HTML 5','CSS 3','Boostrap','CSS flex','HTML Sematics'],
      liveViewLink:"https://asumvictor.github.io/frontendMentor-QR-code-component",
      sourceCodeLink:"https://github.io/AsumVictor/frontendMentor-QR-code-component",
      imageLink:"screenshots/qrCode.jpg",
      imageAltText:"QR code component image", 
       
  },
  {
      projectTitle:"product card",
      client:"Frontend Mentor",
      type:"Challenge",
      year:"July 2022",
      projectDescription:`This project was challenge from frontend Mentor website. This 
      is an product card for any website which ivolves purchasing. This 
      challenge is mostly for newbies; to train your ability to use flex or grid display.
      You can view my Solution or you can view the source code. Get more from <a class=" text-1xl text-blue-400" href="#">their website</a> 
      `,
      tagLanguages:['HTML 5','CSS 3','Boostrap','CSS flex','HTML Sematics'],
      liveViewLink:"https://asumvictor.github.io/Frontendmentor-product-card-challenge",
      sourceCodeLink:"https://github.com/AsumVictor/Frontendmentor-product-card-challenge",
      imageLink:"screenshots/productCard.jpg",
      imageAltText:"product card image",  
  }
];

const top3Projects = [
    {

        projectTitle:"order summary",
        client:"Frontend Mentor",
        type:"Challenge",
        year:"June 2022",
        projectDescription:`This project was challenge from frontend Mentor website. This 
        is an order summary card for any website which ivolves purchasing. This 
        challenge is mostly for newbies; to train your ability to use flex or grid display.
        You can view my Solution or you can view the source code. Get more from <a class="text-1xl text-blue-600" href="#">their website</a> 
        `,
        tagLanguages:['HTML 5','CSS 3','Boostrap','CSS flex','HTML Sematics'],
        liveViewLink:"https://asumvictor.github.io/order-summary-card",
        sourceCodeLink:"https://github.io/AsumVictor/order-summary-card",
        imageLink:"screenshots/orderSummary.jpg",
        imageAltText:"order summary image", 
         
    },
    {
        projectTitle:"QR code component",
        client:"Frontend Mentor",
        type:"Challenge",
        year:"June 2022",
        projectDescription:`This project was challenge from frontend Mentor website. This 
        is an QR code component card for any website which ivolves purchasing. This 
        challenge is mostly for newbies; to train your ability to use flex or grid display.
        You can view my Solution or you can view the source code. Get more from <a class=" text-1xl text-blue-400" href="#">their website</a> 
        `,
        tagLanguages:['HTML 5','CSS 3','Boostrap','CSS flex','HTML Sematics'],
        liveViewLink:"https://asumvictor.github.io/frontendMentor-QR-code-component",
        sourceCodeLink:"https://github.io/AsumVictor/frontendMentor-QR-code-component",
        imageLink:"screenshots/qrCode.jpg",
        imageAltText:"QR code component image", 
         
    },
    {
        projectTitle:"product card",
        client:"Frontend Mentor",
        type:"Challenge",
        year:"July 2022",
        projectDescription:`This project was challenge from frontend Mentor website. This 
        is an product card for any website which ivolves purchasing. This 
        challenge is mostly for newbies; to train your ability to use flex or grid display.
        You can view my Solution or you can view the source code. Get more from <a class=" text-1xl text-blue-400" href="#">their website</a> 
        `,
        tagLanguages:['HTML 5','CSS 3','Boostrap','CSS flex','HTML Sematics'],
        liveViewLink:"https://asumvictor.github.io/Frontendmentor-product-card-challenge",
        sourceCodeLink:"https://github.com/AsumVictor/Frontendmentor-product-card-challenge",
        imageLink:"screenshots/productCard.jpg",
        imageAltText:"product card image",  
    }
];

const languages = [
   {
     name:'Javascript',
     logo_src:'Lang_img/javascript.png',
     logo_alternation_text:'Javascript Logo',
     progress: 24,
   },
   {
    name:'HTML 5',
    logo_src:'Lang_img/html.png',
    logo_alternation_text:'JHTML Logo',
    progress: 92,
  },
  {
    name:'CSS 3',
    logo_src:'Lang_img/css.png',
    logo_alternation_text:'CSS Logo',
    progress: 87,
  },
  {
    name:'Python',
    logo_src:'Lang_img/python.png',
    logo_alternation_text:'CSS Logo',
    progress: 5,
  }
]

const Frameworks = [
  {
    name:'Bootstrap',
    logo_src:'Lang_img/bootstrap.png',
    logo_alternation_text:'Boostrap Logo',
    progress: 90,
  },
  {
   name:'Tailwind CSS',
   logo_src:'Lang_img/tailwindcss.png',
   logo_alternation_text:'Tailwind Logo',
   progress: 92,
 },
 {
   name:'React JS',
   logo_src:'Lang_img/reactjs.png',
   logo_alternation_text:'React Logo',
   progress: 2,
 }
]


document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projectsContainer'); 
    const language_card_space = document.querySelector('.skillsspace')
    const framework_card_space = document.querySelector('.frameworkspace')
    const projects_page_Container = document.querySelector('.projects_page_Container')
    let projectLangs;
    let projectwrap;
    let project;
    let langs;
  
    top3Projects.sort(() => 0.5 - Math.random());
    top3Projects.forEach((top3Project) => {
        // loop through projects languages and display them
        projectLangs = top3Project.tagLanguages.map(
          (top3lang) => `<div class="lang p-2 rounded-xl bg-gray-200 text-darkBlue font-bold m-2"><p>${top3lang}</p></div>
          `,
        );

        homeMyworksContent = `
                <!--Project Screenshot-->
                <div class="projectImagebox md:w-1/2 bg-gray-100 flex items-center p-4 ">
                   <img src="${top3Project.imageLink}" alt="${top3Project.imageAltText}" srcset="${top3Project.imageLink}">
               </div>

                <div class="projectInfo md:w-1/2 bg-white p-4">
                  <h3 class="text-2xl text-center uppercase font-bold">${top3Project.projectTitle}</h3>
                  <div class="flex flex-row flex-start">
                    <p class="px-3 font-bold"><span class=" text-darkBlue">${top3Project.client} </span>  **   
                     <span class="capitalize  text-darkGrayishBlue">${top3Project.type}</span>  **  
                     <span class="text-brightRedLight">${top3Project.year}</span> </p>
                  </div>
                  <div class="projectdetails">
                    <p class="text-1xl font-bold p-3 text-darkGrayishBlue">${top3Project.projectDescription}</p>
                  </div>
                  <div class="tagsLanguage flex flex-row justify-start flex-wrap px-4 space-x-2 mt-2">
                               ${projectLangs.join('')}
                  </div>
                  <div class="liveAndCode flex flex-row justify-start space-x-5 mt-3 p-4">
                    <button class="p-2 font-bold text-white bg-brightRed rounded-2xl text-center 
                    md:block hover:bg-brightRedLight md:self-start"><a href="${top3Project.liveViewLink}">View live</a></button>
                    <button class="p-2 font-bold text-white bg-brightRed rounded-2xl text-center 
                    md:block hover:bg-brightRedLight md:self-start"><a href="${top3Project.sourceCodeLink}">Source Code <i class="fa fa github"></i></a></button>
                  </div>
                </div>
     
     `         
        projectwrap = document.createElement('div')
        projectwrap.setAttribute("class"," relative bg-gray-100 flex flex-col md:flex-row md:p-7 mt-8 md:space-x-7 rounded-2xl")
        projectwrap.innerHTML= homeMyworksContent;
        projectsContainer.appendChild(projectwrap)
           });

  // craete projects on project main screen
  Projects.sort(() => 0.5 - Math.random());
    Projects.forEach((Project) => {
        // loop through projects languages and display them
        langs = Project.tagLanguages.map(
          (lang) => `<div class="lang p-2 rounded-xl bg-gray-200 text-darkBlue font-bold m-2"><p>${lang}</p></div>
          `,
        );

        MyworksContent = `
                <!--Project Screenshot-->
                <div class="projectImagebox md:w-1/2 bg-gray-100 flex items-center p-4 ">
                   <img src="${Project.imageLink}" alt="${Project.imageAltText}" srcset="${Project.imageLink}">
               </div>

                <div class="projectInfo md:w-1/2 bg-white p-4">
                  <h3 class="text-2xl text-center uppercase font-bold">${Project.projectTitle}</h3>
                  <div class="flex flex-row flex-start">
                    <p class="px-3 font-bold"><span class=" text-darkBlue">${Project.client} </span>  **   
                     <span class="capitalize  text-darkGrayishBlue">${Project.type}</span>  **  
                     <span class="text-brightRedLight">${Project.year}</span> </p>
                  </div>
                  <div class="projectdetails">
                    <p class="text-1xl font-bold p-3 text-darkGrayishBlue">${Project.projectDescription}</p>
                  </div>
                  <div class="tagsLanguage flex flex-row justify-start flex-wrap px-4 space-x-2 mt-2">
                               ${langs.join('')}
                  </div>
                  <div class="liveAndCode flex flex-row justify-start space-x-5 mt-3 p-4">
                    <button class="p-2 font-bold text-white bg-brightRed rounded-2xl text-center 
                    md:block hover:bg-brightRedLight md:self-start"><a href="${Project.liveViewLink}">View live</a></button>
                    <button class="p-2 font-bold text-white bg-brightRed rounded-2xl text-center 
                    md:block hover:bg-brightRedLight md:self-start"><a href="${Project.sourceCodeLink}">Source Code <i class="fa fa github"></i></a></button>
                  </div>
                </div>
     
     `         
        project = document.createElement('div')
        project.setAttribute("class"," relative bg-gray-100 flex flex-col justify-center md:flex-row md:p-7 mt-8 md:space-x-7 rounded-2xl")
        project.innerHTML= MyworksContent;
        projects_page_Container.appendChild(project)
           });

// Creating Languages card
languages.sort(() => 0.5 - Math.random());
    languages.forEach((language)=>{
     let stroke_dashoffset = Math.round(((100 - language.progress)/100)*510)
     let language_card;

     let language_card_content = `
     <div class="svg_box flex justify-center items-center">
        <svg class="absolute">
          <circle class="circle" cx="95" cy="95" r="80"></circle>
          <circle class="circle progress" cx="95" cy="95" r="80" style="stroke-dashoffset: ${stroke_dashoffset};--level:${stroke_dashoffset};"></circle>
        </svg>
        <img src="${language.logo_src}" alt="${language.logo_alternation_text}" srcset="${language.logo_src}" style="height:2.3cm;width:2.3cm;">
      </div>
      <h4 class="text-2xl font-bold">${language.name}</h4>
      
     `
     language_card = document.createElement('div')
     language_card.setAttribute("class",'progressCard mt-5 bg-gray-200 mx-5 flex flex-col items-center pb-4 pt-2 rounded-2xl cursor-pointer')
     language_card.innerHTML= language_card_content;
     language_card_space.appendChild(language_card)
    })

    Frameworks.sort(() => 0.5 - Math.random());
    Frameworks.forEach((framework)=>{
     let stroke_dashoffset = Math.round(((100 - framework.progress)/100)*510)
     let framework_card;

     let framework_card_content = `
     <div class="svg_box flex justify-center items-center">
        <svg class="absolute">
          <circle class="circle" cx="95" cy="95" r="80"></circle>
          <circle class="circle progress" cx="95" cy="95" r="80" style="stroke-dashoffset: ${stroke_dashoffset};--level:${stroke_dashoffset};"></circle>
        </svg>
        <img src="${framework.logo_src}" alt="${framework.logo_alternation_text}" srcset="${framework.logo_src}" style="height:2.3cm;width:2.3cm;">
      </div>
      <h4 class="text-2xl font-bold">${framework.name}</h4>
    
     `
     framework_card = document.createElement('div')
     framework_card.setAttribute("class",'progressCard mt-5 bg-gray-200 mx-5 flex flex-col items-center pb-4 pt-2 rounded-2xl cursor-pointer')
     framework_card.innerHTML= framework_card_content;
     framework_card_space.appendChild(framework_card)
    })

});

