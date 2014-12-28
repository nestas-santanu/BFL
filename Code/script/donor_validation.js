/**
 * Created by Agastya on 27-12-2014.
 */
$(function() {

    $('#changeProfile').validate({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            place: {
                required: true
            }
        },
        messages: {
            firstName: "Please enter first name",
            lastName: "Please enter last name",
            place: "Please enter place"
        }
    });
    $('#changeMobile').validate({
        rules: {
            oldMobileNumber: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            newMobileNumber: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            confirmMobileNumber: {
                required: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            oldMobileNumber: {
                required: "Please enter mobile number",
                minlength: "Mobile number should be 10 digits",
                maxlength: "Mobile number should be 10 digits"
            },
            newMobileNumber: {
                required: "Please enter mobile number",
                minlength: "Mobile number should be 10 digits",
                maxlength: "Mobile number should be 10 digits"
            },
            confirmMobileNumber: {
                required: "Please enter mobile number",
                minlength: "Mobile number should be 10 digits",
                maxlength: "Mobile number should be 10 digits"
            }
        }
    });
    $('#changePassword').validate({
        rules: {
            oldPassword: {
                required: true
            },
            newPassword: {
                required: true
            },
            confirmPassword: {
                required: true
            }
        },
        messages: {
            oldPassword: "Please enter old password",
            newPassword: "Please enter new password",
            confirmPassword: "Please confirm new password"
        }
    });
});
