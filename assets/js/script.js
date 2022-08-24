// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

function displayTime() {
  var currentTime = moment().format("MMMM Do, YYYY hh:mm:ss");
  timeDisplayEl.text(currentTime);
}

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  // TODO: Add your code here
  // var name = projectNameInputEl.val();
  // var type = projectTypeInputEl.val();
  // var hourlyRate = hourlyRateInputEl.val();
  // var dueDate = dueDateInputEl.val();
  projectDisplayEl.text(name, type, hourlyRate, dueDate);
}

function calculateTotalEarnings(rate, days) {
  var dailyTotal = rate * 8;
  var total = dailyTotal * days;
  return total;
}

function handleDeleteProject(event) {
  console.log(event.target);
  // TODO: Add your code here

}

// handle project form submission
function handleProjectFormSubmit(event) {
    // TODO: Add your code here
    event.preventDefault();
    var name = projectNameInputEl.val();
    var type = projectTypeInputEl.val();
    var hourlyRate = hourlyRateInputEl.val();
    var dueDate = dueDateInputEl.val();
    printProjectData (name, type, hourlyRate, dueDate);
    console.log("submitted");
}

projectFormEl.on('submit', handleProjectFormSubmit);
projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);