// Your code goes here
/*
Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus 
site more interactive. 
o	  mouseover--
o	  click--
o	  drag--
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

//MOUSEOVER - NAVIGATION ITEMS

//returns a node list with all elements matching the query string
const navigationLinks = document.querySelectorAll("nav .nav-link"); 

navigationLinks.forEach(navLink => {
    navLink.addEventListener('mouseover', (event) => {
    event.target.style.color = "orange";
    
    });

});

//CLICK - H1
const mainHeader = document.querySelector("h1");
mainHeader.addEventListener("click", (event) => {
    event.target.textContent = "The Fun Bus is Ready!!";
    
});

//WHEEL - NAV BAR CHANGES COLOR
const headerElement = document.querySelector(".main-navigation");

headerElement.addEventListener("wheel", (event) => {
    event.target.style.backgroundColor = "purple";    

});

//DRAG - CTA IMAGE DISAPPEARS
const ctaImage = document.querySelector(".container .intro img");
ctaImage.addEventListener("drag", (event) => {
   event.target.style.display = "none";
    
});


//DOUBLE CLICK - SIGN UP BUTTONS

const destinationButtons = document.querySelectorAll("section.content-pick .destination .btn");
destinationButtons.forEach (btn => {
    
    btn.addEventListener("dblclick", (event) => {
        event.target.textContent = "You are Now Signed Up!!";
        event.target.style.backgroundColor = "red";
    });

});

//COPY - PARAGRAPHS
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach (paragraph => {

    paragraph.addEventListener("copy", (event) => {
        event.target.textContent = "COPIED!";
        

    });

});

//MOUSEENTER - IMAGES
const images = document.querySelectorAll("img");

images.forEach (image => {

    image.addEventListener("mouseenter", (event) => {
       
        event.target.style.transform = "scale(1.5)";        

    });

});

//MOUSELEAVE - IMAGES
images.forEach(image => {

    image.addEventListener ("mouseleave", (event) => {
       
        event.target.style.transform = "scale(1)";
        TweenMax.to("img", 2, {rotation: 360, scale: 1});//STRETCH TASK

    });

});

// Nest two similar events somewhere in the site and prevent the event propagation properly
/*Used the sign up buttons which are nested in div elements. When the sign up button is single clicked an alert is displayed
   to indicate that the button and the parent div events were activated. Using the event.stopPropogation() method prevents 
   the event from bubbling to parent elements and now only the destination button alert is displayed.*/

const destinationDivs = document.querySelectorAll(".destination");

destinationDivs.forEach (destinationDiv => {
    destinationDiv.addEventListener("click", (event) => {       
       
        alert("Destination Div Event Activated...");
    });

});

destinationButtons.forEach (btn => {
    
    btn.addEventListener("click", (event) => {
        event.stopPropagation();        
        alert("Button Event Activated...");
        
    });

});




//Stop the navigation from items from refreshing the page by using `preventDefault()`

navigationLinks.forEach(navLink => {

    navLink.addEventListener ('click', (event) => {
        event.preventDefault();

    });

});







