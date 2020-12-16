//add the date under h1
$(document).ready(function () {
    var currentDate = moment().format('dddd MMMM Do');
    $('#currentDay').text(currentDate);

    //adding the colors for specfic time 
    function timeZone() {
        var currentHour = moment().hour();
        var currentTime = $('.row');
        //convert military time to standard time
        currentTime.each(function () {
            var match = parseInt($(this).attr('id'))
            if (match < 9) {
                match += 12;
            }
            console.log(currentHour, match);
            let time = $(this)[0];
            if (currentHour === match) {
                $(time).addClass('present')
            } else if (currentHour > match) {
                $(time).addClass('past')
            } else if (currentHour < match) {
                $(time).addClass('future')
            }
        });
    }
    timeZone();

    //saving data to local storage
    function saveEvent(event) {
        event.preventDefault();

        var value = $(this).prev().val();
        // console.log(value);
        var time = $(this).parent().attr("id");
        // console.log(time);

        localStorage.setItem(time, value);
    };

    $(".saveBtn").click(saveEvent);

    //loop through local storage
    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        $(".row").each(function () {
            if ($(this).attr("id") == key) {
                $(this).text(value);
            }
        });
    };
    
});
