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
      wheel
      mouseenter (switch images)
      onmouseout (original images)


      
*/

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
mainHeader.addEventListener("wheel", (event) => {
    event.target.textContent = "The Fun Bus is Ready!!";
    
});

//DRAG
const ctaImage = document.querySelector(".container .intro img");
ctaImage.addEventListener("drag", (event) => {
    event.target.style.display = "none";
    
});

//LOAD
window.addEventListener("load", (event) => {
    alert("Loading Complete!!");
  });

//RESIZE
window.addEventListener("resize", (event) => {
    
    alert("Resizing!!");
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

//WHEEL

const containerEvent = document.querySelector(".container .home");
containerEvent.addEventListener ("wheel", (event) => {
    event.target.style.backgroundColor = "pink";
});