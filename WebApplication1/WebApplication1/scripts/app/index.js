// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
define(["require", "exports", "app/friends", "app/profile", "app/items", "dojo/on", "dojo/dom-class"], function (require, exports, Friends, Profile, Items, on, domClass) {
    let friendData = [
        { id: 1, initials: "AA", name: "Some1 Name1", courses: 3, articles: 13 },
        { id: 2, initials: "BB", name: "Some2 Name2", courses: 33, articles: 3 },
        { id: 3, initials: "CC", name: "Some3 Name3", courses: 33, articles: 99 },
        { id: 4, initials: "DD", name: "Some4 Name4", courses: 16, articles: 9 }
    ];
    let friends = ReactDOM.render(React.createElement(Friends.Friends, {"initialData": friendData}), document.getElementById("friendsNode"));
    friends.getData();
    ReactDOM.render(React.createElement(Profile, null), document.getElementById("profileNode"));
    let coursesData = [
        {
            "id": 1,
            "title": "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript",
            "href": "https://app.pluralsight.com/library/courses/front-end-web-app-html5-javascript-css",
            "description": "I haven't finished this one, but so far it seems interesting.  It's nice having a primer on HTML5 and CSS3.",
            "rating": 4.0
        },
        {
            "id": 2,
            "title": "Building Web Applications with Node.js and Express 4.0",
            "href": "https://app.pluralsight.com/library/courses/nodejs-express-web-applications",
            "description": "I've enjoyed this course.  It describes alot of the basic fundamentals for structuring a Node.js app.",
            "rating": 4.5
        },
        {
            "id": 3,
            "title": "Building a Full-Stack App with React and Express",
            "href": "https://app.pluralsight.com/library/courses/react-express-full-stack-app-build",
            "description": "Can be a bit advanced at times.  But not too many other courses cover the same material.",
            "rating": 3.5
        },
        {
            "id": 4,
            "title": "Introduction to npm as a Build Tool",
            "href": "https://app.pluralsight.com/library/courses/npm-build-tool-introduction",
            "description": "This has some useful information but I'm still not sure how I will incorporate this into my build process.  Still in progress.",
            "rating": 4.0
        },
        {
            "id": 5,
            "title": "Using ES6 with TypeScript",
            "href": "https://app.pluralsight.com/library/courses/es6-with-typescript",
            "description": "I haven't taken this course yet since it was only released last month.  Looks interesting though!",
            "rating": 0.0
        }
    ];
    let articlesData = [
        {
            "id": 11,
            "title": "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy",
            "href": "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy",
            "description": "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?",
            "rating": 4.5
        },
        {
            "id": 12,
            "title": "Patterns for Large-Scale JavaScript Application Architecture",
            "href": "https://addyosmani.com/largescalejavascript/",
            "description": "Long and decent article.  Gooes over a lot of good concepts, however the article is a bit old.",
            "rating": 3.5
        },
        {
            "id": 13,
            "title": "Working with Intern Recorder",
            "href": "https://www.sitepen.com/blog/2015/08/07/working-with-intern-recorder/",
            "description": "Simple blog post on using Intern JavaScript Testing Framework to record functional test cases.  Have not read or setup yet.",
            "rating": 0.0
        },
        {
            "id": 14,
            "title": "TypeScript and JSX",
            "href": "http://www.jbrantly.com/typescript-and-jsx/",
            "description": "Great article on how to get JSX and TypeScript working together in Visual Studio 2015.  Though some concepts covered do not seem to be required, it does give alot of information in getting these two technologies working together.",
            "rating": 4.0
        },
        {
            "id": 15,
            "title": "What should I learn? React or Angular 2? What is your take? Why?",
            "href": "https://www.linkedin.com/groups/121615/121615-6087875040659984388",
            "description": "While not an article, it's a good LinkedIn discussion on the merits of both.  Seems to be an overall concensus to learn JavaScript in general, then look at a framework.",
            "rating": 4.0
        }
    ];
    let coursesComponent = ReactDOM.render(React.createElement(Items.Items, null), document.getElementById("coursesNode"));
    coursesComponent.updateData(coursesData);
    let articlesComponent = ReactDOM.render(React.createElement(Items.Items, null), document.getElementById("articlesNode"));
    articlesComponent.updateData(articlesData);
    on(window, "scroll", (e) => {
        console.info("!!!!!!!!!!!!!!!!!!!!!!!!");
        if (document.body.scrollTop > 60) {
            domClass.add(document.getElementsByTagName("nav")[0], "scrolled");
        }
        else {
            domClass.remove(document.getElementsByTagName("nav")[0], "scrolled");
        }
    });
});
//# sourceMappingURL=index.js.map