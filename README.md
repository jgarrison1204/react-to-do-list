# React To Do List

A to do list application that allows a user to enter something he or she has to complete.  The user can mark an item as complete or can remove an item from the list. Click [here](https://jgarrison1204.github.io/react-to-do-list/) to see the live app.

## Installing

You will need to install `Node.js` and `npm`. Please follow this [link](https://nodejs.org/en/) for download and instructions. After `Node.js` is installed, clone this repo to your local computer. Use the command line to navigate to the project's root directory. Enter `npm start` to launch a `localhost` and view the application on the client.

## Usage

The end user can enter to do items into the input field.  The end user can submit the to do item by pressing enter or submit. Once an item is rendered, two icons will appear.  One is a green check sign and the other is a red minus sign. Clicking the green check sign will mark the task as complete. Clicking the red minus sign will delete the item from the list.  A checkbox will appear once an item has been submitted. Marking the checkbox will display only the NOT completed items.  If all the items are complete and the checkbox is checked, a final message and image will appear. 

## Built With

* React.js
* Bootstrap 4
* Animate.CSS
* Font Awesome
* Node.js

## Bugs

Using Bootstrap 4 alpha release so there might be bugs in the list-group-item that causing children elements to not render as expected.  The height of list-group-item element does not adjust to padding or height of child elements. Since this is a practice React App will keep BS4.