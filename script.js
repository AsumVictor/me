const menuToggler = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");

function openMenu(){
    menuToggler.classList.toggle("open")
    menu.classList.toggle("hidden")
};
menuToggler.addEventListener("click",openMenu)

//Arrays of Projects

const projects = [
    {
        projectTitle:"order summary",
        client:"Frontend Mentor",
        type:"Challenge",
        year:"June 2022",
        projectDescription:`This project was challenge from frontend Mentor website. This 
        is an order summary card for any website which ivolves purchasing. This 
        challenge is mostly for newbies; to train your ability to use flex or grid display.
        You can view my Solution or you can view the source code. Get more from <a href="#">their website</a> 
        `,
        tagLanguages:['HTML 5','CSS 3','Boostrap','CSS flex','HTML Sematics'],
        liveViewLink:"https://asumvictor.github.io/order-summary-card",
        sourceCodeLink:"https://github.io/AsumVictor/order-summary-card",
        imageLink:"screenshots/orderSummary.jpg",
        imageAltText:"order summary image", 
        row:["-reverse",""],  
    },
    {
        projectTitle:"QR code component",
        client:"Frontend Mentor",
        type:"Challenge",
        year:"June 2022",
        projectDescription:`This project was challenge from frontend Mentor website. This 
        is an QR code component card for any website which ivolves purchasing. This 
        challenge is mostly for newbies; to train your ability to use flex or grid display.
        You can view my Solution or you can view the source code. Get more from <a href="#">their website</a> 
        `,
        tagLanguages:['HTML 5','CSS 3','Boostrap','CSS flex','HTML Sematics'],
        liveViewLink:"https://asumvictor.github.io/frontendMentor-QR-code-component",
        sourceCodeLink:"https://github.io/AsumVictor/frontendMentor-QR-code-component",
        imageLink:"screenshots/qrCode.jpg",
        imageAltText:"QR code component image", 
        row:["-reverse",""],  
    }
];
document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projectsContainer'); 
    let projectLangs;
    let projectwrap;
  
    projects.sort(() => 0.5 - Math.random());
    projects.forEach((project) => {
        // loop through projects languages and display them
        projectLangs = project.tagLanguages.map(
          (lang) => `<div class="lang p-2 rounded-xl bg-gray-200 text-darkBlue font-bold"><p>${lang}</p></div>
          `,
        );

        projectContent = `
                <!--Project Screenshot-->
                <div class="projectImagebox md:w-1/2 bg-gray-100 flex items-center p-4 ">
                   <img src="${project.imageLink}" alt="${project.imageAltText}" srcset="${project.imageLink}">
               </div>

                <div class="projectInfo md:w-1/2 bg-white p-4">
                  <h3 class="text-2xl text-center uppercase font-bold">${project.projectTitle}</h3>
                  <div class="flex flex-row flex-start">
                    <p class="px-3 font-bold"><span class=" text-darkBlue">${project.client} </span> * 
                     <span class="capitalize  text-darkGrayishBlue">${project.type}</span> * 
                     <span class="text-brightRedLight">${project.year}</span> </p>
                  </div>
                  <div class="projectdetails">
                    <p class="text-1xl font-bold p-3 text-darkGrayishBlue">${project.projectDescription}</p>
                  </div>
                  <div class="tagsLanguage flex flex-row justify-start px-4 space-x-2 mt-3">
                               ${projectLangs.join('')}
                  </div>
                  <div class="liveAndCode flex flex-row justify-start space-x-5 mt-3 p-4">
                    <button class="p-2 font-bold text-white bg-brightRed rounded-2xl text-center 
                    md:block hover:bg-brightRedLight md:self-start"><a href="${project.liveLink}">View live</a></button>
                    <button class="p-2 font-bold text-white bg-brightRed rounded-2xl text-center 
                    md:block hover:bg-brightRedLight md:self-start"><a href="${project.sourceCodeLink}">Source Code <i class="fa fa github"></i></a></button>
                  </div>
                </div>
     
     `         
     projectwrap = document.createElement('div')
    projectwrap.setAttribute("class","projectwrapi relative bg-darkGrayishBlue flex flex-col md:flex-row md:p-7 mt-8 md:space-x-7 rounded-2xl")
    projectwrap.innerHTML= projectContent;
    projectsContainer.appendChild(projectwrap)
           });

});

