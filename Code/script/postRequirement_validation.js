$(function() {

    $('#postRequirement').validate({ // initialize the plugin
        rules: {
            requirement: {
                required: true
            },
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            address1: {
                required: true
            },
            address2: {
                required: true
            },
            place: {
                required: true
            },
            pin: {
                required: true
            },
            mobileNumber: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            confirmMobileNumber: {
                required: false,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            requirement: "Please enter requirement",
            firstName: "Please enter first name",
            lastName: "Please enter last name",
            address1: "Please enter address line 1",
            address2: "Please enter address line 2",
            place: "Please enter place",
            pin: "Please enter PIN",
            mobileNumber: {
                required: "Please enter mobile number",
                minlength: "Mobile number should be 10 digits",
                maxlength: "Mobile number should be 10 digits"
            },
            confirmMobileNumber: {
                required: "Please enter mobile number",
                minlength: "Mobile number should be 10 digits",
                maxlength: "Mobile number should be 10 digits"
            },
            checkbox: "Please accept our terms and conditions"
        },
        submitHandler: function(form){
            form.submit();
        }
    });

});/**
 * Created by Agastya on 27-12-2014.
 */
