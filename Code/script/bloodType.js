/**
 * Created by Agastya on 28-12-2014.
 */
$.support.cors=true;
function populateBloodType(response) {
    var bloodType;
    var bloodTypeName;
    for(var i=0;i<response.rows.length;i++)
    {
        bloodType=response.rows[i].type;
        bloodTypeName=response.rows[i].name;
        $("#bloodType").append(new Option(bloodTypeName,bloodType));
    }
    $("#bloodType").prepend("<option value='' selected='selected'></option>");
}
function myajax(URL,type,dataType,successHandler,errorHandler){
    $.ajax(
        {
            url: URL,
            type: type,
            dataType: dataType,
            success: function(response){
                successHandler(response);
            },
            error: function(){
                errorHandler();
            }
        });
}
function errorHandler()
{
    alert("Error message")
}
$(document).ready(function(){
    myajax("http://192.168.0.107:5984/bfl-bg/_all_docs?include_docs=true","GET",'jsonp',populateBloodType,errorHandler);
});
