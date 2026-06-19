console.log("Signup frontend javascript file is running");

$(function () {});

function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();

    if(
        memberNick == "" ||
        memberPhone === "" ||
         memberPassword === "" ||
          confirmPassword === ""
        ) {
            alert("Please Inser all required inputs");
            return false;
        }

        if(memberPassword !== confirmPassword) {
            alert("Passwoed differs, please check!");
            return false;
        }
};
