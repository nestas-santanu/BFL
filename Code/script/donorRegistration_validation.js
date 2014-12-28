/**
 * Created by Agastya on 27-12-2014.
 */
$(function () {

    $('#donorRegistration').validate({ // initialize the plugin
        rules: {
            mobileNumber: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            confirmMobileNumber: {
                required: false,
                minlength: 10,
                maxlength: 10
            },
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            place: {
                required: true
            },
            password: {
                required: true,
                minlength: 5
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            mobileNumber: {
                required: "Please enter mobile number",
                minlength: "Mobile number should be 10 digits",
                maxlength: "Mobile number should be 10 digits"
            },
            firstName: "Please enter first name",
            lastName: "Please enter last name",
            place: "Please enter place",
            password: {
                required: "Please enter password",
                minlength: "Password should be at least 5 characters long"
            },
            checkbox: "Please agree to terms and conditions"
        },
        submitHandler: function(form){
            form.submit();
        }
    });

});