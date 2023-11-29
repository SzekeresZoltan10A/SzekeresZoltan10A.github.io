function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    message2: document.getElementById("message2").value,
  };

  const serviceID = "service_8o1u2ok";
  const templateID = "template_vnc2a1b";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("message2").value = "";
        console.log(res);
        // alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

