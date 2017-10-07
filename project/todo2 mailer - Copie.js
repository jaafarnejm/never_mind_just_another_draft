var nodemailer = require('nodemailer');
 
// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport('smtps://jaafar.nejm%40gmail.com:PasswordDesoleCEstMonComptePersonnel@smtp.gmail.com');
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"hedha el objet" <jaafar.nejm@gmail.com>', // sender address 
    to: 'aymen.khelifi@supcom.tn, nejmeddine.jaafar@supcom.tn', // list of receivers 
    subject: 'hi there', // Subject line 
    text: 'helllooooo hedha el texte', // plaintext body 
    html: '<b>Hello world</b>' // html body 
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});