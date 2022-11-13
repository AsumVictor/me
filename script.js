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
const sections = document.querySelectorAll(`#section1,#skillsection,#projectSections,
#projectpage,#projectpage,#about_me_section`);
const dark_themes = document.querySelectorAll('.dark_theme');
const light_themes = document.querySelectorAll('.light_theme');
const theme_indicators = document.querySelectorAll('.theme_indicator');
const body_and_nav = document.querySelectorAll('body,.nav,.mob_menu');
const input1 = document.querySelector('#user_name');
const input_div1 = document.querySelector('.user_name_div');
const input2 = document.querySelector('#user_email');
const input_div2 = document.querySelector('.user_email_div');
const input3 = document.querySelector('#message_box');
const input_div3 = document.querySelector('.user_message_div');
const submit_btn = document.querySelector('#submit');
const body = document.querySelector('body');


function openMenu(){
    menuToggler.classList.toggle("open")
    menu.classList.toggle("hidden")
   
};
function checksection(){
  if (menu.classList.contains("hidden")) {
    sections.forEach((section)=>{
      section.classList.remove('blur')
      })
  } else {
    sections.forEach((section)=>{
      section.classList.add('blur')
      })
  }
}
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
function to_dark_theme() {
    theme_indicators.forEach((theme_indicator)=>{
      theme_indicator.classList.add("dark")
    })
    sections.forEach((section)=>{
      section.classList.add('dark');
    })
    body_and_nav.forEach((body)=>{
      body.classList.add('dark')
    })
    dark_themes.forEach((dark_theme)=>{
      dark_theme.classList.add('active')
    })
    light_themes.forEach((light_theme)=>{
      light_theme.classList.remove('active')
    })
}
function to_light_theme() {
  theme_indicators.forEach((theme_indicator)=>{
    theme_indicator.classList.remove("dark")
  })
  sections.forEach((section)=>{
    section.classList.remove('dark');
  })
  body_and_nav.forEach((body)=>{
    body.classList.remove('dark')
  })
  dark_themes.forEach((dark_theme)=>{
    dark_theme.classList.remove('active')
  })
  light_themes.forEach((light_theme)=>{
    light_theme.classList.add('active')
  })
}


setInterval(checksection,100)
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

dark_themes.forEach((dark_theme)=>{
  dark_theme.addEventListener('click',to_dark_theme)
})
light_themes.forEach((light_theme)=>{
  light_theme.addEventListener('click',to_light_theme)
})


//Arrays of Projects

const top3Projects = [
    
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
        video_link:'', 
        imageAltText:"QR code component image", 
        reverse:['-reverse',' '],
        privateClasses: {
           see_project: 'QR-code-image-btn',
           modalBox: 'QR-code-modalBox',
           closebtn: 'QR-code-close-btn',
        }
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
        video_link:'', 
        imageAltText:"product card image",  
        reverse:['-reverse',' '],
        privateClasses: {
         see_project: 'product-card-image-btn',
         modalBox: 'product-card-modalBox',
         closebtn: 'product-card-close-btn',
      }
    },
    {
      projectTitle:"Feed Africa Farm",
      client:"Company",
      type:"Web",
      year:"Nov 2022",
      projectDescription:`This is an ongoing project for Feed Africa Farm, a local poultry farm established in Techiman Ghana, to expand their business. `,
      tagLanguages:['Javascript','Tailwind','CSS 3','HTML 5'],
      liveViewLink:"https://asumvictor.github.io/FeedAff-company/",
      sourceCodeLink:"https://github.io/AsumVictor/FeedAff-company",
      imageLink:"screenshots/feedAff.png",
      video_link:'shortVideos/feedAff.webm', 
      imageAltText:"Feed Africa Farm", 
      reverse:['-reverse',' ']

,        privateClasses: {
        see_project: 'Feed-Africa-btn',
         modalBox: 'Feed-Africa-modalBox',
         closebtn: 'Feed-Africa-close-btn',
      }
  },
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
  },
  {
    projectTitle:"quadratic calculator",
    client:"Global",
    type:"Math",
    year:"Aug 2022",
    projectDescription:`This is a project to solve quadratic equation. It contains features
    which allow calculations involving complex numbers. It also contain history which allows user to 
    track previous calculations. NOTE: I did not get time to design this project.`,
    tagLanguages:['Javascript','HTML 5','CSS 3','CSS flex'],
    liveViewLink:"https://asumvictor.github.io/Quadratic-Calculator/",
    sourceCodeLink:"https://github.com/AsumVictor/Quadratic-Calculator",
    imageLink:"screenshots/quadratic.JPG",
    imageAltText:"claculator preview image",  
},
{
  projectTitle:"Wireframe template",
  client:"Global",
  type:"Landing",
  year:"Aug 2022",
  projectDescription:`
                        This is a wireframe template website build with bootstrap css.
                        Are you ready to create a landing web? This template is for you.
                        It is easy to use and editable;you just need to edit the source code and fill
                        you content.
  `,
  tagLanguages:['Boostrap','HTML 5','CSS 3','CSS flex'],
  liveViewLink:"https://asumvictor.github.io/Bootstrap-grid-wireframe/",
  sourceCodeLink:"https://github.com/AsumVictor/Bootstrap-grid-wireframe",
  imageLink:"screenshots/template.png",
  imageAltText:"Template short Video",  
},
{
  projectTitle:"My profile",
  client:"Personal",
  type:"Me",
  year:"July 2022",
  projectDescription:`
                       My profile conatins all my social media links. This project is 
                       quite different from my personal portfolio. Feel free to visit this 
                       awesome site.
  `,
  tagLanguages:['HTML 5','CSS 3','Boostrap','CSS flex','Javascript'],
  liveViewLink:"https://asumvictor.github.io/profile/",
  sourceCodeLink:"https://github.com/AsumVictor/profile",
  imageLink:"screenshots/Myprofile.png",
  imageAltText:"My profile card image",  
  }
]


document.addEventListener('DOMContentLoaded', () => {
  const user_curent_time = new Date();
   const user_hours = user_curent_time.getHours();
    const projectsContainer = document.querySelector('.projectsContainer'); 
    const language_card_space = document.querySelector('.skillsspace')
    const framework_card_space = document.querySelector('.frameworkspace')
    const projects_page_Container = document.querySelector('.projects_page_Container')
    let projectLangs;
    let projectwrap;
    let project;
    let langs;
    let project_modal_box;
    
    
    //Change to dark theme Automatically
    if (user_hours>=18 || user_hours <=5) {
       to_dark_theme();
    }
  
    top3Projects.sort(() => 0.5 - Math.random());
    top3Projects.forEach((top3Project) => {
      let ranDom = (Math.random()*top3Project.reverse.length).toFixed(0)
        // loop through projects languages and display them
        projectLangs = top3Project.tagLanguages.map(
          (top3lang) => `<div class="lang p-2 rounded-xl bg-blue-200 text-darkBlue font-bold m-2"><p>${top3lang}</p></div>
          `,
        );

        homeMyworksContent = `
                <!--Project Screenshot-->
                <div class="projectImagebox md:w-1/2 flex items-center p-4 ">
                   <img src="${top3Project.imageLink}" alt="${top3Project.imageAltText}" srcset="${top3Project.imageLink}">
               </div>

                <div class="projectInfo md:w-1/2 p-4">
                  <h3 class="text-2xl text-center uppercase font-bold">${top3Project.projectTitle}</h3>
                  <div class="flex flex-row flex-start">
                    <p class="px-3 font-bold"><span class=" text-brightRed">${top3Project.client} </span>  **   
                     <span class="capitalize ">${top3Project.type}</span>  **  
                     <span class="text-brightRed">${top3Project.year}</span> </p>
                  </div>
                  <div class="projectdetails">
                    <p class="text-1xl font-bold p-3 text-darkGrayishBlue">${top3Project.projectDescription}</p>
                  </div>
                  <div class="tagsLanguage flex flex-row justify-start flex-wrap px-4 space-x-2 mt-2">
                               ${projectLangs.join('')}
                  </div>
                  <div class="liveAndCode flex flex-row md:justify-start justify-center md:space-x-5 space-x-2 mt-3 md:p-4">
                    <button class="p-2 see_full_project font-bold text-white bg-brightRed ${top3Project.privateClasses.see_project} rounded-2xl text-center 
                    md:block hover:bg-brightRedLight md:self-start">See Project</button>

                </div>

            
     `         

     modal_content= `
     <div class="modal_close rounded-xl flex justify-center items-end">
         <div class='modal_close_btn rounded-full text-red-500 font-bold text-1xl ${top3Project.privateClasses.closebtn} 
         text-center items-center flex cursor-pointer justify-center'>Close</div>
     </div>

    <div class='modal_content w-10/12 bg-gray-200 flex flex-col items-center pt-10 pb-10 rounded-2xl'>
     <div class='videoBox bg-gray-300 relative w-10/12' style='height:12cm;'>
     <video width="100%" height="100%" autoplay>
     <source src="${top3Project.video_link}">
     <source src="${top3Project.video_link}">
    
   </video>
     </div>
    
     </video>
    
    </div>



     `

        projectwrap = document.createElement('div')
        projectwrap.setAttribute("class",`relative bg-gray-100 flex flex-col md:flex-row md:p-7 p-4 mt-8 md:space-x-7 rounded-2xl`)
        projectwrap.innerHTML= homeMyworksContent;
        projectsContainer.appendChild(projectwrap)
        project_modal_box = document.createElement('div')
        project_modal_box.setAttribute('class',`project_modal_box ${top3Project.privateClasses.modalBox} flex flex-col items-center`)
        project_modal_box.setAttribute('id',`${top3Project.privateClasses.modalBox}`)
        project_modal_box.innerHTML= modal_content;
        projectsContainer.appendChild(project_modal_box)
       
           });


  document.addEventListener('click',(e)=>{
    let project_modal_box;
    top3Projects.forEach((top3Project)=>{
      project_modal_box = document.getElementById(top3Project.privateClasses.modalBox);
    if (e.target.classList.contains(top3Project.privateClasses.see_project)) {
        project_modal_box.classList.add('show')
        project_modal_box.classList.remove('close')
        document.body.style.overflowY='hidden'
    }

    if (e.target.classList.contains(top3Project.privateClasses.closebtn)) {
      project_modal_box.classList.add('close')
      project_modal_box.classList.remove('show')
      document.body.style.overflowY='scroll'
  }
})
  });


          
  // craete projects on project main screen
  Projects.sort(() => 0.5 - Math.random());
    Projects.forEach((Project) => {
        // loop through projects languages and display them
        langs = Project.tagLanguages.map(
          (lang) => `<div class="lang p-2 rounded-xl bg-blue-200 text-darkBlue font-bold m-2"><p>${lang}</p></div>
          `,
        );

        MyworksContent = `
                <!--Project Screenshot-->
                <div class="projectImagebox md:w-1/2  flex items-center p-4">
                   <img src="${Project.imageLink}" alt="${Project.imageAltText}" srcset="${Project.imageLink}">
               </div>

                <div class="projectInfo md:w-1/2 p-4">
                  <h3 class="text-2xl text-center uppercase font-bold">${Project.projectTitle}</h3>
                  <div class="flex flex-row flex-start">
                    <p class="px-3 font-bold"><span class=" text-brightRed">${Project.client} </span>  **   
                     <span class="capitalize ">${Project.type}</span>  **  
                     <span class="text-brightRed">${Project.year}</span> </p>
                  </div>
                  <div class="projectdetails">
                    <p class="text-1xl font-bold p-3 text-darkGrayishBlue">${Project.projectDescription}</p>
                  </div>
                  <div class="tagsLanguage flex flex-row justify-start flex-wrap px-4 space-x-2 mt-2">
                               ${langs.join('')}
                  </div>
                  <div class="liveAndCode flex flex-row md:justify-start justify-center space-x-2 md:space-x-5 mt-3 md:p-4">
                    <button class="p-2 font-bold text-white bg-brightRed rounded-2xl text-center 
                    md:block hover:bg-brightRedLight md:self-start"><a href="${Project.liveViewLink}">View live <i class="fa fa-external-link-square"></i></a></button>
                    <button class="p-2 font-bold text-brightRed bg-transparent border-2 border-brightRed rounded-2xl text-center 
                    md:block hover:bg-brightRedLight hover:text-white md:self-start"><a href="${Project.sourceCodeLink}">Source Code <i class="fa fa-github"></i></a></button>
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
     language_card.setAttribute("class",'progressCard mt-5 bg-gray-200 mx-5 flex flex-col items-center pb-4 pt-2 rounded-2xl cursor-pointers')
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

function focus1() {
  input_div1.classList.replace('blur_input','focus')
}
function blur1() {
  if (input1.value=='') {
    input_div1.classList.replace('focus','blur_input')
  } else {
    input_div1.classList.replace('blur_input','focus')
  }
}
function focus2() {
  input_div2.classList.replace('blur_input','focus')
}
function blur2() {
  if (input2.value=='') {
    input_div2.classList.replace('focus','blur_input')
  } else {
    input_div2.classList.replace('blur_input','focus')
  }}
  
  function focus3() {
    input_div3.classList.replace('blur_input','focus')
  }
  function blur3() {
    if (input3.value=='') {
      input_div3.classList.replace('focus','blur_input')
    } else {
      input_div3.classList.replace('blur_input','focus')
    }
  }
  input1.addEventListener('focus',focus1)
  input1.addEventListener('blur',blur1)
  input2.addEventListener('focus',focus2)
  input2.addEventListener('blur',blur2)
  input3.addEventListener('focus',focus3)
  input3.addEventListener('blur',blur3)
  const offline = `<div class="no_connection bg-red-400 p-3" style="">
  <div class="aler_info flex flex-row justify-center items-center space-x-5">
    <p>Can not send message. Check your connection</p>
 <span class="close">&times;</span>
     </div>
  </div>`
  const online = `<div class="no_connection bg-green-400 p-3" style="">
  <div class="aler_info flex flex-row justify-center items-center space-x-5">
    <p>Message sent. Responding immediately</p>
    <span class="close">&times;</span>
     </div>
  </div>`
  notification_bar = document.createElement('div')
  notification_bar.setAttribute('class','notification fixed p-2 z-40')
submit_btn.addEventListener('click',(event)=>{
  home_page.appendChild(notification_bar)
  if (input1.value!='' && input2.value!='' && input3.value!='' && input2.validity.valid ) {
    event.preventDefault(); 
    if (navigator.onLine) {
     let contain = document.createElement('div')
      contain.innerHTML= online;
      notification_bar.appendChild(contain)
      setTimeout(()=>{
        notification_bar.removeChild(contain)
     },2000)
     input1.value=""
     input2.value=''
     input3.value=''
     blur1()
     blur2()
     blur3()
    } else {
      let contain = document.createElement('div')
      contain.innerHTML= offline;
      notification_bar.appendChild(contain)
      setTimeout(()=>{
        notification_bar.removeChild(contain)
     },1000)
  }
     
  }})

