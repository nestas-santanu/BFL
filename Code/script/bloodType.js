/**
 * Created by Agastya on 28-12-2014.
 */
//
function myajax1(URL,type,data,dataType,successHandler,errorHandler){
    $.ajax(
        {
            url: URL,
            type: type,
            data: data,
            dataType: dataType,

            success: function(response, textStatus, jqXHR){
                successHandler(response, textStatus, jqXHR);
            },
            error: function(jqXHR, textStatus, errorThrown){
                errorHandler(jqXHR, textStatus, errorThrown);
            }
        });
}
function populateBloodType(response, textStatus, jqXHR) {
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
function errorHandler(jqXHR, textStatus, errorThrown){
    switch (jqXHR.status) {
        case 0:
            alert(jqXHR.status + " " + errorThrown);
            break;
        default:
            $("#msg").append( jqXHR.responseJSON.reason + "\n" + jqXHR.status + " " +  jqXHR.responseJSON.error);
            //$("#mybutton").prop('disabled', true);
    }
}
$(document).ready(function(){
    myajax1("http://192.168.0.107:5984/bfl-bg/_all_docs?include_docs=true", "GET", "", "json", populateBloodType, errorHandler);
});
