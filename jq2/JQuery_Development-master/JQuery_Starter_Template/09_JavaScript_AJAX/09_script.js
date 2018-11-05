// create httpreques
function getAJAX(){
    var hppt = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if(http.readyState === 4 && http.status === 200){
                process(this)
            }
        }   ;
         http.open('GET','persons.xml',true);
}      http.send();
function process(xml) {
    var xmlData = xml.responseXML;
    var contacts xmlData.getElementsByTagName('contacts');
    for(var i=0;i<contacts.length;i++){
        var pic
    }
}