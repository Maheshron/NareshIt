$('#load-images-btn').click(function () {
    $getJSON('db.json'),function (data) {
        console.log(data);
        for(var i=0;i<=11;i++){
            var imgSource = data.contacts[i].picture.large;
            var fullName = data.contacts[i].name.first + " " + data.contacts[i].name.last;
            $('#image'+ (i+1)).attr('src',imgSrc);
            $('#image'+(i+1)+'_name').text(fullName);
        }

    }
});
