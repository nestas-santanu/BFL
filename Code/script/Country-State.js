/**
 * Created by Agastya on 23-12-2014.
 */
function myajax(URL,type,data,dataType,successHandler,errorHandler){
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
function populateCountry(response, textStatus, jqXHR)
{
    var countryName;
    var countryId;
    var defaultcountryId;
    var i=0;

    $.each(response.geonames, function() {
            countryName = response.geonames[i].countryName;
            countryId = response.geonames[i].geonameId;
            $("#country").append(new Option(countryName, countryId));
            i++;
    });

    $("#country").find('option').filter(function() {
        return this.text === 'India';
    }).attr('selected','selected');
    defaultcountryId = $("#country option:selected").val();
    getStates(defaultcountryId);
}
function getStates(geonameId) {
    URL = "http://api.geonames.org/childrenJSON?geonameId=" + geonameId + "&username=nestas";
    myajax(URL, "GET", " ","json", populateState, errorHandler);
}
$('#country').on('change',function () {
    var countryIdSelected = this.value;
    getStates(countryIdSelected);
});
function populateState(response, textStatus, jqXHR) {
    $("#state option").remove();
    var i=0;
    $.each(response.geonames, function(){
        var stateName = response.geonames[i].adminName1;
        var stateId = response.geonames[i].geonameId;
        $("#state").append(new Option(stateName, stateId));
        i++;
    });
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
    myajax("http://api.geonames.org/countryInfoJSON?username=nestas","GET"," ","json",populateCountry,errorHandler);
});