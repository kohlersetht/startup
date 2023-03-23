# startup

A few things that I learned from the GitHub assignment:
1. Having a cloud-based repository can help with not only version control, but assist in collaboration as well.
2. The pattern to follow when developing is:
    1. Pull the repository's latest changes from GitHub (git pull)
    2. Make changes to the code
    3. Commit the changes (git commit)
    4. Push the changes to GitHub (git push)



Have you ever had a heated debate with your friends about who was the greatest basketball player of all time? Or who deserves to win the NFL MVP award this year? Or who is the who is the most overrated MLB player? Look no father than to GOATVote to help solve your endless debates. GOATVote makes it easy for a group of fans to view different polls, view all the options, and submit their picks. Poll results are displayed in real time so that you can see how the rankings currently stand. Finally, you can settle your debates once and for all!

Features:
-Secure login over HTTPS
-Ability to select desired poll
-Displays poll choices
-Ability to select top choice
-Vote totals displayed in real-time
-Results will be stored
-Ability for admin to create new polls and add/delete options


Things that I've learned from the Simon project:
-Sometimes you need to modify file permissions in order to execute a script
-Building a form with HTML is actually quite easy
-HTML without any CSS styling can look very, very boring!
-Writing HTML is similar to typing and formatting a Word document

Things that I learned from Simon CSS:
-Bootstrap is an easy way to make HTML look like an actual, legitimate website
-To add CSS, you can simply put all your CSS code in one file and link to it from each of the HTML files
-If done right, elements on a webpage should all be able to re-size depending on the size of the device that the page is being viewed on

Things that I learned from building my startup HTML and CSS:
-It is easiest to work in stages. Build out the HTML, and then style with the CSS. Don't worry about the style while you're writing the HTML
-Let Bootstrap do the heavy lifting. Don't overthink it, it's likely that there is a Bootstrap style for what you are trying to do
-Put thorough comments in your code. It makes it a lot easier to read and understand when you come back a few days later
-Don't overcomplicate it. Plan out your site before you start writing code or else you're never going to get what you actually want

Things that I learned from Simon Javascript:
-Javascript is sadly a lot less intuitive than HTML and CSS
-It really is important that you build all the HTML and CSS out first, and then add the Javascript
-Throw in console.logs to debug code FAST in the browser
-One important restriction for working with await is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword
-The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise
-Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

Notes from Startup Javascript:
-JavaScript is a weakly typed language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in.
-Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.
-A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.
-Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).
-Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.
-Destructuring, not to be confused with destructing, is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.
-The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.
-JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript Promise.
-JavaScript Promise objects are great for asynchronous execution, but as developers began build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the async/await syntax. The await keyword wraps the execution of a promise and removed the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected.

Things I learned from Simon-Service:
-Web services provide the interactive functionality of your web application. They commonly authenticate users, track their session state, provide, store, and analyze data, connect peers, and aggregate user information. Making your web service easy to use, performant, and extensible are factors that determine the success of your application. A good design will result in increased productivity, satisfied users, and lower processing costs.
-To convert a program into a working service, ,ove all the previous deliverable code files (_.html, _.js, *.css, favicon.ico, and asserts) into a sub-directory named public. We will use the HTTP Node.js based service to host the front-end application files. This is done with the static file middleware that we will add our service index.js.
-You can test that the service is working properly by running the service in the VS Code debugger and pressing F5 while viewing the index file
-When you run a program from the console the program will automatically terminate when you close the console or if the computer restarts. In order to keep programs running after a shutdown you need to register it as a daemon. The term daemon comes from the idea of something that is always there working in the background.
-When you connect to a device on the internet you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.
-Internally on your web server, you can have as many web services running as you would like. However, you must make sure that each one uses a different port to communicate on. You run your Simon service on port 3000 and therefore cannot use port 3000 for your start up service. Instead you use port 4000 for your start up service. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.
