"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue;
let popValue;


// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.textContent = todos.join(", ");
}

function updateAnswerTwo() {
    answerTwoEl.textContent = `Shifted: ${shiftValue}, Popped: ${popValue}`;
}

function removeLastValue() {
    popValue = todos.pop(); // Assign the last value of the array to popValue
    updateAnswerOne();
    updateAnswerTwo();
}

function removeFirstValue() {
    shiftValue = todos.shift(); // Assign the first value of the array to shiftValue
    updateAnswerOne();
    updateAnswerTwo();
}

function addShiftAndPopValues() {
    if (shiftValue && popValue) {
        console.log(`Shifted: ${shiftValue}, Popped: ${popValue}`);
    }
}

function updateAnswerFour() {
    answerFourEl.textContent =`Total todos remaining: ${todos.length}`; 
}

function reverseTodoList() {
    todos.reverse();
    updateAnswerOne();
}

function updateAnswerFive() {
    answerFiveEl.textContent = `Reversed todos: ${[...todos].reverse().join(", ")}`;
}

function updateAnswerSix() {
    if (todos.length > 0) {
        answerSixEl.textContent = `First todo: ${todos[0]}, Last todo: ${todos[todos.length - 1]}`;
    } else {
        answerSixEl.textContent = "The todos list is empty.";
    }
}



function render() {
    updateAnswerOne();
    updateAnswerTwo();
    updateAnswerFour();
    updateAnswerFive();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
