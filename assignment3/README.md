#
# Assignment 3 - One Page Site 

## Page Description:
This page gives a small history of the Soviet Union's spying efforts in Canberra in the 1940s and 1950s in a lead up to the Petrov Royal Commission. It focuses on these issues in a timeline that runs down the page. I attempted to make the page have a dark mysterious feel to enhance the spy and espionage feel

## Features:
**NOTE:** _I have not written how the code works in the features section. I have just pointed to where the code is. This is because all the code is commented.

**_Up Button:_** There is a button that will appear as the user scrolls down that once pressed the user will be able to scroll back to the top of the page. This button uses a google API to get the button and is modified using CSS and JavaScript. 

**_Down Button:_** There is a button in the top right hand corner of the page that takes the user to the bottom of the page when clicked. This button will disappear as the user gets close to the bottom of the page. This button uses a google API to get the button and is modified using CSS and JavaScript.

**_TimeLine:_** There is a timeline that runs vertically down the page which is produced with CSS and Class tags in HTML and is modified as the user interacts with it by the JavaScript file.

**_TimeLine Events:_** The user can hover or click on the timeline boxes for images and appearance changes.

**_Police Tape Animation:_** As the user scrolls down from the header section, there is police tape that is opened to reveal the timeline. The tape is an image in HTML and all movement is made in a scroll event listener in JavaScript.

**_Scroll Bar at the top_** There is a progress bar at the top of the website that shows how far the page has progressed along.

**_Pulsing Scroll Down Text:_** There is text that grows and gets smaller in intervals of 1 second. I did this in javaScript using the interval command. I did have some trouble with this because I only wanted it to run for a short time. I acheived this with a counting variable.

## Key Issues:

**_Code vs Design:_** I spent a lot of hours learning how to code in what I thought was the best most efficient way. My idea was to make the timeline boxes easy as possible to add for the programmer. I implemented a content adder JavaScript file that I have left in the project folder for referencing. This file had arrays in it and it used innerHTML commands to add the information to each box. Because my timeline is set to always make new .events into a box in the correct position, any new information would be added automatically. The tutor Riley rightly pointed out, that if the JavaScript file did not load the website would have not content and that any future development of the site would require a designer to understand the functionality that I implemented. This has highlighted an important lesson that has been a big part of this unit, which is design and programming go hand in hand. You can not compromise the design for efficent programming because the user does not care how the programming is done as long as it works.

**_Horizontal Scrolling:_** I hade a hard time getting the horizontal to correlate with the down scrolling and make it look nice for the user. I spent a lot of correlating the movement to a scroll listener and added an increase so the tape is almost open by the time the user reaches the first part of the timeline.

**_Design Ideas:_** The innovative ideas that design students and teachers have are wonderful. When I made the buttons to scroll up and down the page, I would have just moved the screen to the top and not worried about the smooth scroll. I am glad for the introduction to the idea of what the user sees being the important element.  

**_Scroll Bar issues_** I had difficulty with the scroll bar because I have a changing height web page. I used the scrollheight variable and the y position to get a percentage but then had to work with some creative maths to get it looking alright.

**_Design choices_** I had a lot of trouble deciding what functions to add to the website. I did not know what were good choices and this was a hold up for my web pages development.

**_Need for libraries_** I had some ideas which would have been great but they either needed libraries or a lot more time to make. I did try to do a big idea but I could not get it to work and it wasted some time.

## Bibliography:

ABC, 2022. ABC. [Online] 
Available at: 
[https://www.abc.net.au/archives/80days/stories/2012/01/19/3411302.htm](https://www.abc.net.au/archives/80days/stories/2012/01/19/3411302.htm "ABC")
[Accessed 01 October 2022].

Abjorensen, N., 2018. Sydney Morning Herald. [Online] 
Available at: [https://www.smh.com.au/politics/federal/the-day-a-labor-politician-s-credibility-was-destroyed-20180719-p4zsgq.html](https://www.smh.com.au/politics/federal/the-day-a-labor-politician-s-credibility-was-destroyed-20180719-p4zsgq.html "Sydney Morning Herald")
[Accessed 10 October 2022].

Fortin, J., 2017. New York Times. [Online] 
Available at: [https://www.nytimes.com/2017/10/06/science/sputnik-launch-cia.html](https://www.nytimes.com/2017/10/06/science/sputnik-launch-cia.html "New York Times")
[Accessed 1 October 2022].

The Guardian, 2022. The Guardian. [Online] 
Available at: [https://www.theguardian.com/australia-news/2022/apr/20/a-picture-in-time-evdokia-petrov-in-the-hands-of-soviet-couriers-at-sydney-airport](https://www.theguardian.com/australia-news/2022/apr/20/a-picture-in-time-evdokia-petrov-in-the-hands-of-soviet-couriers-at-sydney-airport "The Guardian")
[Accessed 01 October 2022].

Waterford, J., 2014. Inside Story. [Online] 
Available at: [https://insidestory.org.au/secrets-within-secrets/](https://insidestory.org.au/secrets-within-secrets/ "Inside Story")
[Accessed 10 October 2022].

National Musemum of Australia, 2022. National Musemum of Australia [Online] 
Available at: [https://www.nma.gov.au/defining-moments/resources/petrov-affair](https://www.nma.gov.au/defining-moments/resources/petrov-affair "National Musemum of Australia")
[Accessed 01 October 2022].

The Sydney Institute , 2011. The Sydney Institute. [Online]
Available at: [https://thesydneyinstitute.com.au/blog/cold-war-secrets-and-the-spies-who-came-out-of-canberra/](https://thesydneyinstitute.com.au/blog/cold-war-secrets-and-the-spies-who-came-out-of-canberra/ "The Sydney Institute")

Pamela Burton, 2022 The Australian National University. [Online]
Available at: [https://press-files.anu.edu.au/downloads/press/n9744/pdf/ch25.pdf](https://press-files.anu.edu.au/downloads/press/n9744/pdf/ch25.pdf "The Australian National University")