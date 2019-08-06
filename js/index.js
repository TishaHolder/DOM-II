// Your code goes here
/*
Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus 
site more interactive. 
o	  mouseover--
o	  click--
o	  drag / drop--
o	  load --
o	  resize--
o	  dblclick --
      copy--      
      mouseenter--
      mousedown--
      wheel--
      
*/

//LOAD
window.addEventListener("load", (event) => {
    alert("Loading Complete!!");
  });

//RESIZE
window.addEventListener("resize", (event) => {
    
    alert("Resizing!!");
});

//MOUSEOVER

//returns a node list with all elements matching the query string
const navigationLinks = document.querySelectorAll("nav .nav-link"); 

navigationLinks.forEach(navLink => {
    navLink.addEventListener('mouseover', (event) => {
    event.target.style.color = "orange";
    
    });

});

//CLICK
const mainHeader = document.querySelector("h1");
mainHeader.addEventListener("click", (event) => {
    event.target.textContent = "The Fun Bus is Ready!!";
    
});

//WHEEL
const headerElement = document.querySelector(".main-navigation");

headerElement.addEventListener("wheel", (event) => {
    event.target.style.backgroundColor = "purple";

});

//DRAG
const ctaImage = document.querySelector(".container .intro img");
ctaImage.addEventListener("drag", (event) => {
    event.target.style.display = "none";
    
});


//DOUBLE CLICK

const destinationButtons = document.querySelectorAll("section.content-pick .destination .btn");
destinationButtons.forEach (btn => {
    
    btn.addEventListener("dblclick", (event) => {
        event.target.textContent = "You are Now Signed Up!!";
        event.target.style.backgroundColor = "red";
    });

});

//COPY
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach (paragraph => {

    paragraph.addEventListener("copy", (event) => {
        event.target.textContent = "COPIED!";
        

    });

});

//MOUSEENTER
const images = document.querySelectorAll("img");

images.forEach (image => {

    image.addEventListener("mouseenter", (event) => {
       
        event.target.style.transform = "scale(1.5)";

    });

});

//MOUSEDOWN
images.forEach(image => {

    image.addEventListener ("mousedown", (event) => {
       
        event.target.style.transform = "scale(1)";

    });

});






