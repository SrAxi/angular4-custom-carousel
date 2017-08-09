Custom Carousel Assignment
===================


The main task is to create a carousel without built libraries. Extra points to create a CSS-only carousel and also for adding some test cases

----------


Usage
-------------

Clone the repository

    git clone https://github.com/SrAxi/angular4-custom-carousel.git

Install dependencies using [npm](https://www.npmjs.com/)

    npm install
Run the App

    npm start

Run unit tests

    npm test

Run end-2-end tests

    ng e2e
    
To use **compiled version**, we should have installed [http-server](https://www.npmjs.com/package/http-server):

    npm install http-server -g
And in the `dist` folder execute the following command:

    http-server -o --cors

Technologies
-------------

 - Angular 4.0
 - TypeScript 2.3
 - Angular-CLI 1.2.7
 - Bootstrap 4.0.0-alpha.6

About the project
-------------

 - Single page App separated in 2 main Components: JS based carousel and CSS based carousel
 - JS carousel: CSS with TypeScript, Angular 4 (templating syntax) and ECMAScript6.
 - CSS carousel: CSS3.
 
### JS Carousel
 I have chosen Angular 4 and Bootstrap 4 because I'm constantly trying to learn what the market and community offers while improving my knowledge in base JavaScript, CSS, etc.
 I chose Angular 4 because of the possibilities that offers in terms of dynamization, abstraction of code and the usage of web components.
 I chose Bootstrap 4 because I have always used Bootstrap and this new version it's just adding more to it, hence the class [`hidden-xs-down`](https://v4-alpha.getbootstrap.com/layout/responsive-utilities/).

### CSS Carousel 
It was a challenge to make a pure CSS carousel, and even more when it comes to responsiveness. I have learned and enjoyed much with this task.
	I solved the responsive issue by having 2 types of images: vertical  and horizontal. The downside is that the graphic department should provide 2 images for each image set. The good thing about this is that we can use 'native' images for each resolution even if this means that we are actually loading the double of images.
	This adaptation was very easily made with the new classes provided by Bootstrap 4 (`hidden-sm-up`) and the dynamic class handler of Angular 2/4 (`[ngClass]`).

Future implementations or improvements
-------------

 - Create a Component for error handling in the template, passing as parameters: error msg, etc.
 - Abstract and refactor the code for better maintenance and expansion, examples: Move the logic in abstracted classes in order to simply extend them, extend Angular's `Http` class with a custom `Http` class, etc.
 - Work on the graphic / design part of the App in order to make it look more like the company's App.
 - Create new test cases.
