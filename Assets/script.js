// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready()

  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

var saveButtonEl = $('#saveBtn');
var timeBlockId = $('#row');
var currentHour = dayjs().format('H');

//Click event causes save data "" to save and store
$('.saveBtn').on('click', function(){
  var userInput = $(this).siblings('.description').val();
  var timeBlockId = $(this).parent().attr('id');
  localStorage.setItem(timeBlockId, userInput);
})

// Loop through each time-block
$('.time-block').each(function() {
  var timeBlockId = $(this).attr('id');
  var timeBlockHour = parseInt(timeBlockId.split('-')[1]);
  // Compare the time-block hour to the current hour and apply the appropriate class
  if (timeBlockHour < currentHour) {
    $(this).addClass('past').removeClass('present future');
  } else if (timeBlockHour === currentHour) {
    $(this).addClass('present').removeClass('past future');
  } else {
    $(this).addClass('future').removeClass('past present');
  }
});
// Get infor from local storage repeate as many hours as needed
$('.time-block').each(function() {
  console.log(this)
  var timeBlockId = this.getAttribute('id');
  var userInput = localStorage.getItem(timeBlockId);
  console.log(timeBlockId, userInput)
  $(this).find('.description').val(userInput);
  // $(`#${this.attr("id")} .description`).val(localStorage.getItem(this.attr("id")))
});
// $("#hour-9 .description").val(localStorage.getItem("hour-9"));

// $("#hour-10 .description").val(localStorage.getItem("hour-10"));

// $("#hour-11 .description").val(localStorage.getItem("#hour-11"));

// Get the current date using Day.js in the format "dddd, MMMM D"
var currentDate = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDate);