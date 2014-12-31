/**
 * Created by Agastya on 28-12-2014.
 */
function myajax2(URL,type,data,dataType,successHandler,errorHandler){
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
function successCreateHandler(response, textStatus, jqXHR){
    //alert(jqXHR.status + " " + jqXHR.statusText);
    switch (jqXHR.status) {
        case 201:
            $("#msg").append( "Donor registered successfully.");
            $("#btnDonorRegister").prop('disabled', true);
            break;
        default:
            $("#msg").append(jqXHR.status + " " + jqXHR.statusText);
            $("#btnDonorRegister").prop('disabled', true);
    }
}

function successUpdateHandler(response, textStatus, jqXHR){
    //alert(jqXHR.status + " " + jqXHR.statusText);
    switch (jqXHR.status) {
        case 200:
            $("#msg").append( "Deleted successfully.");
            $("#btnDonorRegister").prop('disabled', true);
            break;
        case 201:
            $("#msg").append( "Changes updated successfully.");
            //$("#btnDonorRegister").prop('disabled', true);
            break;
        default:
            $("#msg").append(jqXHR.status + " " + jqXHR.statusText);
            //$("#btnDonorRegister").prop('disabled', true);
    }
}
function successHEAD(response, textStatus, jqXHR){
    //alert(jqXHR.status + " " + jqXHR.statusText);
    $("#msg").append( "The mobile number entered is already registered." );
    $("#mybutton").prop('disabled', true);
}

function errorHandler(jqXHR, textStatus, errorThrown){
    switch (jqXHR.status) {
        case 0:
            alert(jqXHR.status + " " + errorThrown);
            break;
        case 409:
            $("#msg").append( "This donor is already registered. You can login from <a href='#'>here</a>.");
            $("#btnDonorRegister").prop('disabled', true);
            break;
        default:
            $("#msg").append( jqXHR.responseJSON.reason + "\n" + jqXHR.status + " " +  jqXHR.responseJSON.error);
            //$("#mybutton").prop('disabled', true);
    }
}

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(document).ready(function() {
    $("#donorRegistration").submit(function () {
        var mobileNo = $("#mobileNumber").val();
        var url = "http://192.168.0.107:5984/bfl-donor/" + mobileNo;
       alert(url);
        var data=JSON.stringify($("#donorRegistration").serializeObject());
        alert(data);
        myajax2(url, "PUT", data, "json",successCreateHandler,errorHandler);
    });
});