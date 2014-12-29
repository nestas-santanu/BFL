/**
 * Created by Agastya on 28-12-2014.
 */
function jsonCallback(response){}
function populateBloodType(response) {
    var i = 0;
    var bloodType;
    var bloodTypeName;

    $.each(response.rows, function(){
        bloodType=response.rows[i].doc.type;
        bloodTypeName=response.rows[i].doc.name;
        $("#bloodType").append(new Option(bloodTypeName,bloodType));
        i++;
    });
    $("#bloodType").prepend("<option value='' selected='selected'></option>");
}
function myajax1(URL,type,successHandler,errorHandler){
    $.ajax(
        {
            url: URL,
            type: type,

            dataType: "jsonp",
            jsonp: true,
            jsonpCallback: "jsonCallback",

            headers: {
                Accept : "text/javascript",
                "Content-Type": "text/javascript"
            },
            success: function(response){
                successHandler(response);
            },
            error: function(){
                errorHandler();
            }
        });
}
function errorHandler(){
    alert("An error has occurred. \n The request cannot be completed.");
}
$(document).ready(function(){
    myajax1("http://192.168.0.107:5984/bfl-bg/_all_docs?include_docs=true&callback=?","GET",populateBloodType,errorHandler);
});
