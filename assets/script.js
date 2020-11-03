//add the date under h1
$(document).ready(function(){
    var currentDate = moment().format('dddd MMMM Do');
    $('#currentDay').text(currentDate);
})