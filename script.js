function getFormvalue() {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get the form element by its ID
    var form = document.getElementById('form1');

    // Retrieve the values of the first name and last name input fields
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;

    // Display the concatenated values using alert
    alert(firstName + " " + lastName);
}
