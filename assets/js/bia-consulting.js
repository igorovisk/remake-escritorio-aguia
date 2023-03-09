// const firebaseConfig = {
//    apiKey: "AIzaSyB_VU5SiwCInTJe0YTnVytjimoGPS-AjE4",
//    authDomain: "bianca-piva-consulting.firebaseapp.com",
//    projectId: "bianca-piva-consulting",
//    storageBucket: "bianca-piva-consulting.appspot.com",
//    messagingSenderId: "292313367611",
//    appId: "1:292313367611:web:8fd45b8f775f92eaee481e",
//    measurementId: "G-WPMD11KP3N",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// // Find form
// $("#search").on("submit", (ev) => {
//    ev.preventDefault();
//    location.href = "/" + $("#search-code").val();
// });

// $("#t-contact-form").on("submit", (ev) => {
//    ev.preventDefault();
//    ev.stopPropagation();

//    $("#loading-container").show();
//    $("#c-submit-btn").prop("disabled", true);
//    $("#c-form-error").html("");
//    $("#c-form-error").hide();

//    let name = $("#c-name").val();
//    let email = $("#c-email").val();
//    let phone = $("#c-phone").val();
//    let message = $("#c-message").val();

//    console.log({ name, email, phone });

//    if (name.length < 3) $("#c-form-error").html("Name is required.");
//    else if (email.length < 8) $("#c-form-error").html("Email is required.");
//    else if (phone.length < 15) $("#c-form-error").html("Phone is required.");

//    // has form errors
//    if ($("#c-form-error").html().length !== 0) {
//       console.log("has form errors", $("#c-form-error").html());
//       $("#c-form-error").show();
//       $("#loading-container").hide();
//       $("#c-submit-btn").prop("disabled", false);
//       return;
//    }

//    firebase
//       .firestore()
//       .collection("mail")
//       .add({
//          to: "igorovisk@gmail.com",
//          replyTo: email,
//          message: {
//             subject: "Bianca Piva Consulting",
//             html: `Sent by site form.
//            <br><br>
//            Name: ${name}<br>
//            Email: ${email}<br>
//            Phone: ${phone}<br>
//            Message: ${message}<br>
//            <br><br>`,
//          },
//       })
//       .then((res) => {
//          $("#c-name").val("");
//          $("#c-email").val("");
//          $("#c-phone").val("");
//          $("#c-message").val("");

//          $("#c-form-success").show();
//          $("#loading-container").hide();
//          $("#c-submit-btn").prop("disabled", false);

//          setTimeout(() => {
//             $("#c-form-success").hide();
//          }, 5000);
//       })
//       .catch((error) => {
//          console.log({ error });
//          $("#c-form-error").html(
//             "Form Error. Support contact: igorovisk@gmail.com"
//          );
//          $("#c-form-error").show();
//          $("#loading-container").hide();
//          $("#c-submit-btn").prop("disabled", false);
//       });
// });

// // Transform tag code to uppercase while typing
// $("#search-code").keyup(function () {
//    $(this).val($(this).val().toUpperCase());
// });

// $("#c-phone")
//    .mask("(99) 9999-9999?9")
//    .focusout(function (event) {
//       var target, phone, element;
//       target = event.currentTarget ? event.currentTarget : event.srcElement;
//       phone = target.value.replace(/\D/g, "");
//       element = $(target);
//       element.unmask();
//       if (phone.length > 10) {
//          element.mask("(99) 99999-999?9");
//       } else {
//          element.mask("(99) 9999-9999?9");
//       }
//    });
