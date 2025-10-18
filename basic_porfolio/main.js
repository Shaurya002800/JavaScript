// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  (function(){
    emailjs.init("O2S5xMpkI3xI90ysE"); // Replace with your EmailJS user ID
  })();

  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseMsg = document.getElementById("responseMsg");

    // Send email using EmailJS template
    emailjs.send("service_6kfiweq", "template_bu4ag6c", {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(() => {
      responseMsg.innerText = "✅ Message sent successfully!";
      responseMsg.style.color = "#4CAF50";
      document.getElementById("contactForm").reset();
    }, (error) => {
      responseMsg.innerText = "❌ Failed to send message. Try again!";
      responseMsg.style.color = "red";
      console.error("EmailJS Error:", error);
    });
  });