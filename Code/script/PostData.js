/**
 * Created by Agastya on 28-12-2014.
 */
function myajaxPost(URL,method,data,successHandler,errorHandler){
    $.ajax({
        url: URL,
        method: method,
        data: data,
        success: function(response){
            successHandler(response);
        },
        error: function(){
            errorHandler();
        }
    });
}
function errorHandler(){
    alert("Post data : Error message")
}
$('form').submit(function(){
    var form= $(this);
    var data= form.serialiseArray();
    function successHandler(response){
        alert(reponse);
       // clearInput();
    }
    myajaxPost()
});