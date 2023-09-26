$(function () {
    //adds event listener on the save button
    $('.saveBtn').on('click', function() {
        var hourIds = $(this).parent().attr('id');
        var inputText = $(this).siblings('textarea').val();
        //saves the user input and hour clicked in local storage
        localStorage.setItem(hourIds, inputText);
    })

    //this checks if each element with a class of time-block is in the past, present of future,
    //and depending on the answer, adds a predetermined style 
    $('.time-block').each(function(){
        var timeOfDay = $(this).attr('id').slice(5);
        var currentHour = dayjs().hour();
        
        if (timeOfDay < currentHour) {
            $(this).addClass('past');
        } else if (timeOfDay == currentHour){
            $(this).addClass('present');
        } else if (timeOfDay > currentHour){
            $(this).addClass('future');
        }
    })
    
    //gets the input text of every element with a class of time-block from the local storage
    //and shows it on the screen
    $('.time-block').each(function(){
        var timeBlockId = $(this).attr('id');
        $(this).children('textarea').val(localStorage.getItem(timeBlockId));
    })

    //adds current date and time to the header
    $('#currentDay').text(dayjs().format('DD/MM/YYYY - hh:mm:ssa'))
    setInterval(function() {
        $('#currentDay').text(dayjs().format('DD/MM/YYYY - hh:mm:ssa'))
    },1000)
  });
