
let mailerimp = require('nodemailer'); // imports nodemailer JS module for automated emails.


let mailtransporter = mailerimp.createTransport // responsible for sending the email
({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: "chinedu.nnenanya@hacklift.com", //sender's email address
    pass: "NDKp84fwixVz",  //sender's App password (NOT the real password)
  },
});

let mailOptions = {
  from: "chinedu.nnenanya@hacklift.com", //enter email of the sender
  to:  "simplyned@yahoo.com,oluchukwu79@gmail.com,dekanudiana@gmail.com,chinedu.nnenanya@hacklift.com",  // enter email of the reciever
  subject: "Scheduled email Test",
  html: "<p> This is a test email to confirm my scheduled email project</p>"
};


mailtransporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error); //display error
    } else {
      console.log('SUCCESS!!!'); //Indicates successful email delivery!
    }
  });

