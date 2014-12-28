/**
 * Created by Agastya on 27-12-2014.
 */
$(function(){
   $('#trackRequirement').validate({
       rules: {
           trackId: {
               required: true
           }
       },
       messages: {
           trackId: "Please enter track Id"
       }
   });
});
