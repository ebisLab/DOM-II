## Where to find the targeted eventListeners

* Browser Load
* Nav area , Navigation links (hover)
* Scroll page (scroll)
* Top image bus (hover)
* Header titles (hover)
* First paragraph at first section (hover)
* Second image (dbclick)
* First button (click)
* Copy something (right click)
* Last Image (hover)




-------------------------------------------------
## Assignment


# DOM II - Event Exploration

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* :white_check_mark: Create a forked copy of this project.
* :white_check_mark: Add your project manager as collaborator on Github.
* :white_check_mark: Clone your OWN version of the repository (Not Lambda's by mistake!).
* :white_check_mark: Create a new branch: git checkout -b `<firstName-lastName>`.
* :white_check_mark: Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* :white_check_mark: Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* :white_check_mark: Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* :white_check_mark: Add your project manager as a reviewer on the pull-request
* :white_check_mark: Your project manager will count the project as complete by merging the branch back into master.

## Task 1: Set Up LESS Preprocessor

* :white_check_mark: Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* :white_check_mark: Open your terminal and navigate to your preprocessing project by using the `cd` command

* :white_check_mark: Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* :white_check_mark: Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* :white_check_mark: Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 2: Create Unique Event Listeners

* :white_check_mark: Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [ :white_check_mark:] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [:white_check_mark: ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [:white_check_mark: ] `scroll`
	* [ ] `select`
	* [:white_check_mark: ] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* :white_check_mark: Nest two similar events somewhere in the site and prevent the event propagation properly
* :white_check_mark: Stop the navigation from items from refreshing the page by using `preventDefault()`

## Stretch Task:

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

## Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.


