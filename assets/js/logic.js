// --------------- Display Date --------------- //
var weekDay = moment().format("DD MMMM YYYY");
$("#date").text(weekDay);

// ----------- Display current time ----------- //
function displayTime() {
  var timeEl = moment().format("LTS");
  $("#time").text(timeEl);
}

setInterval(displayTime, 1000);
displayTime();

