# To Do App

## Step 1

In this project, you will learn how localStorage works in JavaScript by building a Todo app. LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a `key:value pair`.

The HTML and CSS for this project have been provided for you. Take a look at the files to get yourself familiarized with them.

Begin by accessing the `task-form`, `confirm-close-dialog`, and `open-task-form-btn` elements with the `getElementById()` method. Save them in the variables `taskForm`, `confirmCloseDialog`, and `openTaskFormBtn`.

## Step 4

The last set of elements you need to get from the HTML file are the    `date-input` and `description-input` elements. Save them in the variables `dateInput` and `descriptionInput` respectively

## Step 7

The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.

Example Code
dialogElement.showModal();
Add an event listener to the closeTaskFormBtn variable and pass in a click event for the first argument and a callback function for the second argument.

For the callback function, call the showModal() method on the confirmCloseDialog element. This will display a modal with the Discard and Cancel buttons.

## Step 8

If the user clicks the Cancel button, you want to cancel the process and close the modal so the user can continue editing. The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.

Example Code
dialogElement.close();
Add an event listener to the cancelBtn element and pass in a click event for the first argument and a callback function for the second argument.

For the callback function, call the close() method on the confirmCloseDialog element.

## Step 9

If the user clicks the Discard button, you want to close the modal showing the Cancel and Discard buttons, then hide the form modal.

Add a click event listener to discardBtn, then use the close() method on the confirmCloseDialog variable. Also, use classList to toggle the class hidden on taskForm so the form modal will close too.

## Step 13

Inside your taskObj, add an id property name. For the value use the value of the titleInput.

To see the new result, click on the "Add New Task" button. Then add a title and click on the "Add Task" button. Open up the console to see the result.
