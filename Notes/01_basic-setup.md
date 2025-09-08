when we are building a professional project we have to finalize the design first like functionality wise and may be the look and feel would change the functionawlity would dbe same and that is our work as a backend developer

lets o fro start 

1] we have design (functionality  matter to us)

2] we also have data model finalized (https://app.eraser.io/workspace/mEUaN5DHKsSOnGzOzxce)

3] now we create a node project and then a repo

	- npm init -y
	- create a Readme.md
	- git init
	- git add .
	- git commit -m ""
	
4] now create a repo on GitHub and upstream and origin
	- git remote add origin https://github.com/Pranavb1302/Yotube-Project.git
	- git push -u origin main

// now we can come at the important part how we are gonna create professionally folders and files

- now in this project we are gonna store some photos so basically we gonna make the user upload some photos and then store them temporaroli on our server if the connection loss is there we can fetch them ad after that using a third party service like cloudnary we put that on there

- now in our main folder we create a public folder inside of thatwe create a temp folder but as we know the git doesn't track the empty folder so to  fix that we can include .gitkeep file which will be empty in the temp folder which now enables tracking

- now  come out again in our root folder

 -> some files we need here the first file would be .gitignore (all secrets and unwanted things are kept here)
 -> now to fill content here we can use .gitignore generators so we can use that (I did that)
 -> now we create a .env file which is environment variable file whenever we push our  code then the environment variables are used from the system not  accessed form files but the system itself that's why we have security

-> now  we will create a src folder in root here  we will keep all the code we do in root also but this  makes it little more organized

-> now we will create three files in the src folder (touch app.js constants.js index.js)

-> now we want to create some folders also but  as they cant be tracked by git and we cant put file called .gitkeep in every folder so we can do them later the thing to understand is we have done lot of thing now  we can push this on repo

-> before doing that we need configure the package.json a little
	- we are using type:"module"
-> now the imp thing here to understand also is that we will be writing lot of code so if we just do start stop the server every time we work its gonna be hectic for that we can use utility nodemon

-> this a dev-dependacy - the diff between dev-dependency and dependency is that dev-d is used while developing not taked into production
	- npm i -D nodemon

-> now to make it work we need to tell package.json that whenever we save the data in index.js (entry point) then reload the server for that,
	- in scripts "dev":"nodemon src/index.js"

-> there is one more interesting thing although we have set type to module but the  environment variables need to written like require('dotenv').config() offcource we can fix that but we will see that later

-> now we commit on git

-> we will add some folders to src folder these are production level folder structure

-> 1] controllers -> overall functionality
   2] db -> here we write how to connect to database
   3] middlewares -> here we write middle code like when a request is raised and going towars the server we can in middle check if its should go further not 
   4] models -> used for writing data models
   5] routes -> these are like requests .get etc we write them here
   6] utils -> short for utiitilies such as we here gonna make user make upload so we can put that in utitlity and use that again and again

-> mkdir controllers db middlewares models routes utils

-> now we gonna add one mor dev-d that si prettier so the team you are working with follows same format so we need to install it project wise hen we can also configure it
	- npm i -D prettier
	- create .prettierrc
	{
    "singleQuote":false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "semi": true
}
	- create .prettierignore same as git ignore we write files that we don't want prettier to touch
	/.vscode
/node_modules
./dist

*.env
.env
.env.*

basic configuration

-> now we commit again and push

