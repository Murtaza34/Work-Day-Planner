var timeOfDay = $("#time-of-day");
var saveBtn = $(".save-btn");
var clearBtn = $(".clear-btn");
// var userInputTasks = $(".user-input");

// --------------- Display Date --------------- //
const weekDay = moment().format("DD MMMM YYYY");
$("#date").text(weekDay);

// ----------- Display current time ----------- //
function displayTime() {
  var timeEl = moment().format("LTS");
  $("#time").text(timeEl);
}

setInterval(displayTime, 1000);
displayTime();

// ------------- User input is stored when save is clicked ------------- //
$(document).ready(function () {
  saveBtn.on("click", function () {
    var userInputTasks = $(".user-input")
      .map(function () {
        return $(this).val();
      })
      .get();

    localStorage.setItem("usersTask", JSON.stringify(userInputTasks));
  });
  var userInputTasks = $(".user-input");
  var storedTasks = localStorage.getItem("usersTask");
  if (storedTasks) {
    storedTasks = JSON.parse(storedTasks);
    userInputTasks.each(function (index) {
      $(this).val(storedTasks[index]);
    });
  }
});

// ----------- Get users task input from local storage ----------- //
// $(document).ready(function () {
//   var storedTask = localStorage.getItem("usersTask");
//   if (storedTask) {
//     $("#user-input").val(storedTask);
//   }
// });

// ------------ Clear local storage and also input field ----------- //
clearBtn.on("click", function () {
  localStorage.removeItem("usersTask");
  $("#user-input").val("");
});
