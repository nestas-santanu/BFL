/**
 * Created by Agastya on 27-12-2014.
 */
$(function() {

    $('#home').validate({
        rules: {
            mobileNumber: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            mobileNumber: {
                required: "Please enter mobile number",
                minlength: "Mobile number should be 10 digits",
                maxlength: "Mobile number should be 10 digits"
            },
            password: {
                required: "Please enter password",
                minlength: "Password should be at least 5 characters long"
            }
        }
    });
});
