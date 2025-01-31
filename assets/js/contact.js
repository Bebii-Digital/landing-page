/*
*
* Contact JS (WhatsApp Integration)
*/
$(function() {
    // Get the form.
    var form = $('#whatsapp-form');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Get form values.
        var name = $('#fullname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var website = $('#website').val();
        var company = $('#company').val();
        var message = $('#message').val();

        // Format WhatsApp message.
        var whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AWebsite: ${website}%0ACompany: ${company}%0AMessage: ${message}`;

        // Replace with your WhatsApp number (without `+`, e.g., 6281234567890 for Indonesia).
        var phoneNumber = "0895323144207";

        // Construct WhatsApp URL.
        var whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Open WhatsApp in a new tab.
        window.open(whatsappURL, "_blank");

        // Clear form fields.
        $('#fullname').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#website').val('');
        $('#company').val('');
        $('#message').val('');
    });
});
