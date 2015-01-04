/**
 * Created by santanu on 03-01-2015.
*/
$(document).ready(function() {
   myajax2("http://192.168.0.108:5984/bfl-donor/8939186402","GET"," ","json", fillDonorForm,errorHandler);
});
function fillDonorForm(response) {
    alert(response);
    $("#bloodType").val(response.bloodType);
    $("#first_name").val(response.firstName);
    $("#last_name").val(response.lastName);
    $("#place").val(response.place);
}