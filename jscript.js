
 /* JS function for Contact us page, whenever the user is not filling out the form fields, an error message is displayed in toastr 
pop up window at the top of the page and success message is displayed when user completes all fields and sends the form */
function clearContactForm(){   

    if(!document.getElementById('message').value || !document.getElementById('name').value 
    || !document.getElementById('email').value || !document.getElementById('phone').value){
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }            
    toastr["error"]("Please type in your details", "Error!");
    }else{
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      toastr["success"]("Your message was sent.", "Thank you!");
      document.getElementById('form_to_send').submit();
      document.getElementById('message').value='';
      document.getElementById('name').value='';
      document.getElementById('email').value='';
      document.getElementById('phone').value='';
    }
}

/* JS function for Grooming page, whenever the user is not filling out the form fields, an error message is displayed in toastr 
pop up window at the top of the page and success message is displayed when user completes all fields and sends the form */
function clearGroomingForm(){     

    if(!document.getElementById('owner').value || !document.getElementById('pet').value 
    || !document.getElementById('address').value || !document.getElementById('email').value
    || !document.getElementById('mnumber').value){
        toastr.options = {
          "closeButton": false,
          "debug": false,
          "newestOnTop": false,
          "progressBar": false,
          "positionClass": "toast-top-full-width",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }            
      toastr["error"]("Please type in your details", "Error!");
    }else{
        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": false,
          "progressBar": false,
          "positionClass": "toast-top-full-width",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }              
      toastr["success"]("You are booked now.", "Success!");
      document.getElementById('booking_form').submit();
      document.getElementById('owner').value='';
      document.getElementById('pet').value='';
      document.getElementById('address').value='';
      document.getElementById('email').value='';
      document.getElementById('name').value='';
      document.getElementById('mnumber').value=0;
      document.getElementById('number').value='';
    }
}


 /*JS function for Privacy Policy page, whenever the user click on confirm button at the end of the privacy policy page, 
a toastr pop up window shows a warning message with "yes" button to confirm, or "x" button to close */
function privacyPolicyFunction(){   

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": 0,
    "extendedTimeOut": 0,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    "tapToDismiss": true
  }

  toastr["warning"]("Do you agree to our Privacy Policy?<br /><br /><button type='button' class='btn clear'>Yes</button>", "Info");
}


 /*JS function for Coming soon page, whenever the page is loaded the alert box is displayed with a "..under construction.." message */
function comingSoonFunction(){

  alert("Our Shop Page is under construction, sorry for any inconveniences caused.")

}




 



