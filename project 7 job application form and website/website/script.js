const form = document.getElementById("jobForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const degree = document.getElementById("degree").value.trim();
    const university = document.getElementById("university").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const resume = document.getElementById("resume").files[0];

    if(!fullname || !email || !phone || !degree || !university || !experience || !skills || !resume) {
        alert("Please fill in all required fields.");
        return;
    }

    alert(`Thank you ${fullname}! Your application has been submitted successfully.`);
    form.reset();
});
