// Inicializa EmailJS
(function() {
    emailjs.init("QVB-cjUe6ePrBtRqD"); // Reemplaza con tu User ID de EmailJS
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera convencional
  
    // Obtiene los valores del formulario
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const phone = document.getElementById('contact-phone').value;
  
    // Envía el correo
    emailjs.send("service_b23rkpf", "template_gj7zqpe", {
      name: name,
      email: email,
      message: message,
      phone: phone
    })
    .then(function(response) {
      console.log('Éxito!', response.status, response.text);
      alert("Mensaje enviado exitosamente!");
    }, function(error) {
      console.log('Error:', error);
      alert("Error al enviar el mensaje.");
    });
  });
  