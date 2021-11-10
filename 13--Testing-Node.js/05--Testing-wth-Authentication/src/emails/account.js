const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "narek.boshyan@gmail.com",
      subject: "Thanks for joining in",
      text: `Welcome to the app, ${name}.Let us know how you get along with the app`,
      // html: `<h1>WELCOME</h1>
      // <p>To the best website </p>
      // `
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "narek.boshyan@gmail.com",
    subject: "We are sorry",
    html: `<h1>Dear ${name} Sorry that we couldn't live up your expectations</h1>
    <i>Can you tell us what was the problem?</i>
    `,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};

// sgMail.send({
//   to: "narek.chaxal@gmail.com", //^ Where to send
//   from: "narek.boshyan@gmail.com", //^ Here we should write the same email as in the Sender authentication
//   subject: "THis is my first creation",
//   text: "and easy to do anywhere, even with Node.js",
// });
