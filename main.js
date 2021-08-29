//This is the object that you should use to "populate" the template
const gitHop = {
  name: "GitHop",
  imgSrc: "githop.png",
  description: "FooBar's Venom Ale",
};

//Step 1: Chose the <template>'s content
const templateElement = document.querySelector("template").content;

//Step 2: Make a "clone"
const myClone = templateElement.cloneNode(true);
//Step 3: Change the content of the clone
//use the data from the object above (you can do this when the rest is working)
myClone.querySelector("h1").textContent = gitHop.name;
myClone.querySelector("img").src = gitHop.imgSrc;
myClone.querySelector("p").textContent = gitHop.description;
//Step 4: Chose the new "parent" element
//Append it to main
const daddy = document.querySelector("main");
//Step 5: Add (Append) the clone to the DOM
daddy.appendChild(myClone);
