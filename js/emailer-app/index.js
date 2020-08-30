const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


const oauth2Client = new OAuth2(
    'clientId here',
    'secret here',
    "apiURI here"
);

oauth2Client.setCredentials({
    refresh_token: "refresh token here"
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "email@email.com", 
        clientId: "client id here",
        clientSecret: "secret here",
        refreshToken: "refresh token here",
        accessToken: accessToken
    }
});

const mailOptions = {
    from: "your.gmail.here@gmail.com",
    to: "destination@email.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
};


smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});