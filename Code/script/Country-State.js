/**
 * Created by Agastya on 23-12-2014.
 */
/*
 var country=function(name,id){
 this.name=name;
 this.id=id;
 }
 var countries=new Array();*/
function PopulateCountry(response)
{
    var countryname;
    var geonameId;
    var defaultgeonameId;
    for(var i=0;i<response.geonames.length;i++) {
        countryname = response.geonames[i].countryName;
        geonameId = response.geonames[i].geonameId;
        $("#country").append(new Option(countryname, geonameId));
    }
        $("#country").find('option').filter(function()
        {
            return this.text === 'India';
        }).attr('selected','selected');
        defaultgeonameId = $("#country option:selected").val();
    getstates(defaultgeonameId);
}
function getstates(geonameId)
{
    URL = "http://api.geonames.org/childrenJSON?geonameId=" + geonameId + "&username=nestas";
    myajax(URL, "GET", 'json', PopulateState, errorhandler);
}
$('#country').on('change',function () {
    var geonameIdSelected = this.value;
    getstates(geonameIdSelected);
});
function PopulateState(response)
{
    $("#state option").remove();
    for(var i=0;i<response.geonames.length;i++)
    {
        var statename = response.geonames[i].adminName1;
        var stategeonameId = response.geonames[i].geonameId;
        $("#state").append(new Option(statename, stategeonameId));
    }
}
function errorhandler()
{
    alert("Error message.")
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
    /*$.ajax(
        {
            url : "http://api.geonames.org/childrenJSON?geonameId=1269750&username=nestas",
            dataType : 'json',
            success : function defaultIndia(response)
            {
                for(var i=0;i<response.geonames.length;i++)
                {
                    var statename = response.geonames[i].adminName1;
                    var stategeonameId = response.geonames[i].geonameId;
                    $("#state").append(new Option(statename,stategeonameId));
                }
            },
            async : false
        });
    $('select').on('change',function() {
        var countrySelected = $("option:selected", this.option);
        var geonameIdSelected = this.value;
        //alert(geonameIdSelected);
        URL="http://api.geonames.org/childrenJSON?geonameId=" + geonameIdSelected + "&username=nestas"
        $.ajax(
            {
                url: URL,
                dataType: 'json',
                success: function(response)
                {
                    PopulateState(response);
                }
            });
    })*/
});