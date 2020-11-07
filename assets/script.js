//add the date under h1
$(document).ready(function(){
    var currentDate = moment().format('dddd MMMM Do');
    $('#currentDay').text(currentDate);

    //adding the colors for specfic time 
    function timeZone () {
        var eventTime = moment().hour();
        console.log(eventTime);
        var currentTime = $('.row');
        //convert military time to standard time
        currentTime.each(function(){
            var match = parseInt($(this).attr('id'))
            if (match < 9){
                match +=12;
            }
            console.log(eventTime, match);
            let time = $(this)[0];
            if (eventTime === match){
                $(time).addClass('present')
            } else if (eventTime > match) {
                $(time).addClass('past')
            } else if (eventTime < match) {
                $(time).addClass('future')
            }
        })
    }
    timeZone();

    //saving data to local storage
    function saveEvent(event){
        event.preventDefault

        var value = $(this).prev().val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value)
    };

    $(".saveBtn").click(saveEvent);
})


var timeSlot = ["","","","","","","","",""]
function loadData (){
    //grab timeslot data from local storage 'get item'
   JSON.stringify(timeSlot)
    //loop thru timeSlot on screen
    //for each row on the screen check timeslot array for non empty string 
    //set up eventTime, get the match < 9 '+=12' 
    //calculate timeSlot index = to match - 9  
    //if non empty string set textarea for row to string in the arrow pointed by index
    //
}
//function save data
function saveData (){
    //event handled when you click save button 
    //event time
    //convert to military time '+12'
    //set index = military time - 9 
    //save incoming text in array
    //save array in local storage
}