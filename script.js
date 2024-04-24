const personalInfo = {
    name: "Brandon",
    bio: "Isaih 22:20. Kind,Humble,Respective and hard working.Interested in playing soccer,cricket,watching movies and reading books,very well disceplined and also very eager and interested in learning new things,taking on new challenges such as in the IOT.",
    imageUrl: "./assets/Black and White Modern Illustrative Barbershop Logo.png",
    imageUrl2: "./assets/311232452_883926669266961_6140878398924806404_n.jpg/",
    address: " 11 St Peters Rd<br Colville , Kimberley >",
    email: "brandonvanheerden93@gmail.com",
    phone: "081 334 7048",
    facebook:"https://www.facebook.com/",
    twitter: "https://www.instagram.com/"
  };
  
  const projects = [
    {
      title: "mlab",
      description: "R548 254 46",
      
    },
    {
      title: "Project 2",
      description: "R882 325 45",} ]
      
   
  



const heroName = document.querySelector('.brandon');
const heroBio = document.querySelector('.hero p');
const heroImage = document.getElementById('image1');
const projectsList = document.getElementById('projects-list');

const contentImage = document.getElementById('image2');
const contactEmail = document.querySelector('aside a');

heroName.textContent = personalInfo.name;
heroBio.textContent = personalInfo.bio;
heroImage.src = personalInfo.imageUrl;
contactEmail.textContent = personalInfo.email;
contactPhone.textContent = personalInfo.phone;

contentImage.src = personalInfo.imageUrl2;

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

