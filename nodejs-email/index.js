const nodemailer = require('nodemailer')


let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
       user: 'kanezhengsydneytest@gmail.com',
       pass: 'vweitqdruumogsge'
    }
});

const message = {
    from: 'kanezhengsydneytest@gmail.com', // Sender address
    to: 'kanezhengsydneytest@gmail.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});