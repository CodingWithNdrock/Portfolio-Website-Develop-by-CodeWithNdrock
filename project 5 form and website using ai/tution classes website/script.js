const form = document.getElementById("admissionForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;

    if (fullname === "") { alert("Please enter your full name."); return; }
    if (email === "" || !validateEmail(email)) { alert("Please enter a valid email."); return; }
    if (phone === "" || !validatePhone(phone)) { alert("Please enter a valid 10-digit phone number."); return; }
    if (!course) { alert("Please select a course."); return; }

    alert(`Thank you, ${fullname}! Your application for ${course} has been submitted successfully.`);
    form.reset();
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}
