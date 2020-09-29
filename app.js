var spans = document.querySelectorAll("span");

var darkBtn = document.querySelector(".dark");
var lightBtn = document.querySelector(".light");
var allGone = document.querySelector(".gone")


darkBtn.addEventListener("click", function() {
    document.body.classList.add("dark-mode")
    document.body.classList.remove("light-mode")
})

lightBtn.addEventListener("click", function(){
    document.body.classList.add("light-mode")
    document.body.classList.remove("dark-mode")
})


// event handler - an event obj will be passed in for you
//event.target, event.target.tagName
// an object where you have key value pairs. Sometimes you want to retrieve some data of an image. 
function handleClick(event){
    event.target.classList.add("hideBtn")
}

// FIX THE IF STATEMENT BELOW TO MAKESURE WE'RE COMPARING THE CORRECT THINGS
//     if (spans.length == ){
//         allGone.classList.add("show-p")
//     }
// }
    


for (var i = 0; i < spans.length; i++) {
    spans[i].addEventListener("click", handleClick)
}

//data- is called a dataAttribute
//target.getAttribute is for getting any attribute in a tag but you have to type in the exact thing. So for example it would be .getAttribute("data-score")


// arr.push(event.target.dataset.value)

// 1. searching
// 2. registering events
//telling things what to do in the future. A training manual. 
// for loop(){} and then finally add event listener. can put event listener within the for loop as well. 
// 3. event handlers. Functions. manipulate DOM objects in functions by updating objects and values.

// querySelectorAll("section button")
// querySelectorAll("Section .dark")
// span:first-child, etc etc

// document.querySelector("p").style.display = "block"

// gitHub will host things. Follow the rules of creating a project. 
// 1. make sure file is a repository. cd into cards git status
// 2. git init so we create repo. 
// 3. git status 
// 4. git log
// 5. step part 1: git add app.js git add index.html git add style.css
// 6. step part 2: git commit -m "insert name"
// 7. git status to check
// 8. git log to check timeline. 
// 9. go to account, the public one, or can practice on the GA one. 
// 10. make a new repository
// 11. call the repo name a similar name
// 12. dont check any initialize options. 
// 13. keep it public (or private)
// 14. create repository
// 15. use push an existing repo from command line. 
// 16. take the first line and paste in terminal to link local repo to the one on gitHub
// 17. git remote (will show origin)
// 18. git push -u origin master (sending code from your computer to recently created repository)
// 19. go back to gitHub and hit F5 to refresh
// 20. go to settings scroll all the way down to gitHub Pages
// 21. Under Source, change None to Master
// 22. click Save. 
// 23. page will refresh. Go back down to gitHub Pages and you will see a link. 
// 24. your site is ready to be published at: link