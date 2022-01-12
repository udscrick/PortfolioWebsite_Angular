import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


export const sendContactMessage = functions.database.ref('messages/{pushKey}').onWrite((event:any) => {
    const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
    const snapshot = event.data;
  // Only send email for new messages.
    if (snapshot.previous.val() || !snapshot.val().name) {
      return;
    }
    
    const val = snapshot.val();
    
    const mailOptions = {
      to: 'udayvmenon@gmail.com',
      subject: `Information Request from ${val.name}`,
      html: `<body style="margin: 0; padding: 0;"> You have received a message from ${val.name} it says ${val.message}</body>`
    };
    return mailTransport.sendMail(mailOptions).then(() => {
      return console.log('Mail sent to: udayvmenon@gmail.com')
    });
  }
  );