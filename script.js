const menuToggler = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");

function openMenu(){
    menuToggler.classList.toggle("open")
    menu.classList.toggle("hidden")
};
menuToggler.addEventListener("click",openMenu)

//Arrays of Projects

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

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projectsContainer'); 
    let projectLangs;
    let projectwrap;
  
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

});

