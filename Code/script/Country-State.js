/**
 * Created by Agastya on 23-12-2014.
 * comment for the sake of comment.
 */
function PopulateCountry(response)
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
        $("#country").find('option').filter(function()
        {
            return this.text === 'India';
        }).attr('selected','selected');
        defaultcountryId = $("#country option:selected").val();
    getstates(defaultcountryId);
}
function getstates(geonameId)
{
    URL = "http://api.geonames.org/childrenJSON?geonameId=" + geonameId + "&username=nestas";
    myajax(URL, "GET", 'json', PopulateState, errorhandler);
}
$('#country').on('change',function () {
    var countryIdSelected = this.value;
    getstates(countryIdSelected);
});
function PopulateState(response)
{
    $("#state option").remove();
    var i=0;
    $.each(response.geonames, function(){
        var stateName = response.geonames[i].adminName1;
        var stateId = response.geonames[i].geonameId;
        $("#state").append(new Option(stateName, stateId));
        i++;
    });
}
function errorhandler()
{
    alert("Country-State error message.")
}
function myajax(URL,type,dataType,successhandler,errorhandler)
{
    $.ajax(
        {
            url: URL,
            type: type,
            dataType: dataType,
            success: function(response)
            {
                successhandler(response);
            },
            error: function()
            {
                errorhandler();
            }
        });
}
$(document).ready(function()
{
    myajax("http://api.geonames.org/countryInfoJSON?username=nestas","GET",'json',PopulateCountry,errorhandler);
});