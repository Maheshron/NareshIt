$('#success-button').click(function () {
    $('#success-card').fadeToggle();
    var btnValue = $(this).attr('value').trim();
       if(btnValue==='HIDE'){
           $(this).attr('value','SHOW');
       }
       else{
           $(this).attr('value','HIDE');
       }
});

