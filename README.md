# Homework #1

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Variables
Variables are storage buckets for information so you can use that information later. You must declare a variable before you can use it. 

Variables can be local or global. Local variables can only be accessed were they are defined. 

For example a variable defined in a function is a local variable and thus can only be accessed inside that function, no where else. A global variable, defined in the main program, can be accessed anywhere, even inside functions. Also a variable that is given a value in a function, without the var keyword will be given global scope.

	* Strings
Strings are variables that are composed of characters which can have any value. If your string is composed of just numbers, you can't do math on it, because strings are not true numbers(e.g. You can have a string with a value of '12', but it's not a number and thus you can't add/subtract/multiply/divide with it), but you can glue one string to another (e.g. 'hello '+'world' = 'hello world'

	* Functions (arguments, `return`)
Functions are reusable blocks of code. They save you time from typing in repeating code, as you only define a function once but you can reuse as many times as you want. They also make your code clearer as you will have less lines of codes since you're not repeating the same block of code in your program.

Functions can be passed arguments when they are called. These are known as parameters in the function declaraion. This allows functions to be passed information so they can be used for different situations. 

Functions can also return values with the return keyword. When a function returns a value, the function execution ends. 

	* `if` statements
if statements are used to make decision based on whether an expression evaluates to true or false. If the expression evaluates to true than the code within the curly braces are executed. If it evalues to false then the code within the curly braces is not executed. You can put an else statement with curly braces to execute code when the if expression evalutes to false.

	* Boolean values (`true`, `false`)
Boolean values can have only the values true or false. Boolean values are good to use for variables that are used as switches, e.g. lightOn = true, loggedIn=false, homeworkDone=true.

2. Install Node and NPM.  NPM comes packaged with Node. https://nodejs.org/en/download/
Done

3. Install SublimeText3.  If you have another editor that you prefer then you can use that. https://www.sublimetext.com/3
Done

4. Download this project folder from GitHub.
Done

5. Navigate into the downloaded folder using Terminal(Mac) or Command Prompt(Windows).  `ls`(Mac), `dir`(Windows) and `cd <directory_name>` are the commands you need to navigate around.
Done

6. Once you are in the folder type the command `npm install`.  This will fetch all of the needed requirements for the project.
Done

7. Run `npm test` to run the automated tests.  At first all of the tests will be broken.  You will fill out the functions in `exercises.js` to make the tests pass.
Done



#### Congratulations on finishing Homework #1!
Apply to our full-time or part-time immersive program to learn cutting edge technologies that are used by top technology companies around the world.

Our part-time and full-time courses are 13 intense weeks of focused study on the most relevant technologies.  

Class sizes are small to ensure that each student gets individual attention from our world class instructors to help them succeed.  We also provide career support both during and after the course to help you succeed.  We are committed to your success.

For more information visit: https://www.lambdaschool.com
