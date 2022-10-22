/*Craeting variables for the police tape images*/
var p1 = document.querySelector("#t1"); 
var p2 = document.querySelector("#t2");

/*Craeting variables for the top and bottom button images*/
var topBtn = document.querySelector("#topbutton");
var bottomBtn = document.querySelector("#bottombutton");

/*Creating a variable for the down arrow to take the user to*/ 
var bottom = 7500;

/*Creating variable array for the event elements which are the boxes*/
var blocks = document.querySelectorAll(".event");


/*Creating variable array for the image elements which go in the boxes*/
var img = document.querySelectorAll(".blockImg");

//This object was made so I could easily change all the colour choices of the page
var colourObject = { boxHover: "black", hoverBackground: "grey", boxBackground: "whitesmoke", boxColour: "darkslategrey" };

/*creating a scrolling event listener*/
window.addEventListener('scroll', function () {
    var yPos = window.scrollY;
    /*Calling the move function for the progress bar*/
    move(yPos);

    /*console.log(yPos);
     This was in for testing and I have left it there for future development
     */

    /*Scrolls the two police tapes sideways as the user scrolls down*/
    if (window.scrollY >= 230) {
        p1.style.left = (yPos - 268) * 2 + "px";
        p2.style.left = 0 - (yPos - 268) * 2 + "px";
        p1.style.visibility = "visible";
        p2.style.visibility = "visible";
    }
    /*makes police tape dissapear when the user scrolls down*/
    if (window.scrollY > 1310)    {
        p1.style.left = "0px";
        p2.style.left = "0px";
        p1.style.visibility = "hidden";
        p2.style.visibility = "hidden";
    }
    
    /*this makes the button that scrolls to the top appear and disappear depending on y position of the window*/
    if (this.window.scrollY <= 310) {
        topBtn.style.visibility = "hidden";
    } else {
        topBtn.style.visibility = "visible";
    }

    /*this makes the button that scrolls to the bottom appear and disappear depending on y position of the window*/
    if (this.window.scrollY >= 4000) {
        bottomBtn.style.visibility = "hidden";
    } else {
        bottomBtn.style.visibility = "visible";
    }
});

/*button variable*/
var topB = document.querySelector("#topbutton");
/*add event listener to the top button that moves the screen when the button is clicked 
 to the top of the page
 It scrolls up to it because of the smooth command*/
topB.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

/*button variable*/
var bottomB = document.querySelector("#bottombutton");
/*add event listener to the bottom button that moves the screen when the button is clicked 
 to the bottom of the page
 It scrolls up to it because of the smooth command*/
bottomB.addEventListener("click", function () {
    window.scrollTo({
        top: bottom,
        left: 0,
        behavior: "smooth"
    });
});

/*adding a mouse hovering event listener to all the blocks
 changing the background and border when the mouse is over the blocks*/
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("mouseover", function () {
        blocks[i].style.color = colourObject.boxHover;
        blocks[i].style.backgroundColor = colourObject.hoverBackground;
        blocks[i].style.border ="2px solid white";
    });

    /*reverting the boxes back to the orignal style 
     * when the mouse is not hovering*/

    blocks[i].addEventListener("mouseout", function () {
        blocks[i].style.color = colourObject.boxColour;
        blocks[i].style.backgroundColor = colourObject.boxBackground;
        blocks[i].style.border = "0px";
    });

    /*Adding an event listener to the blocks so when they are clicked they 
     increase the size of the image and make it visible*/
    blocks[i].addEventListener("click", function () {
        blocks[i].style.color = "white";
        img[i].style.visibility = "visible";
        img[i].style.height = "250px";
        img[i].style.width = "350px";
    });
}


/*Progress bar function and variables*/
var perc = 1;
var prog = document.querySelector(".scroll-tracker");
function move(y) {
    let h = document.documentElement.scrollHeight;/*web page height variable*/
    perc = Math.ceil(((y / h) * 100)*1.2);/*I had to add the 1.2 as a constant to make the bar work*/
    prog.style.width = perc+"%";/*Changing the width based on the percantage of the page that is scrolled*/
    /*console.log(perc);
     I left this in, in case of future development*/
}

//Function to control the Scroll Down Pulsing 
var small = true;
//used to add how many times the pulse works
var count = 0;

setInterval(grow, 1000);//Set an interval of 1 second to run the grow function

var t = document.querySelector(".title");

//Grow function uses a boolean that turns on and off so it switches between size every second
function grow() {
    if (count < 6) {
        if (small == true) {
            t.style.fontSize = "52px";
            small = false;
            count++;
        } else {
            t.style.fontSize = "60px";
            small = true;
            count++;
        }
    }
}






