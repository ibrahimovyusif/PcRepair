var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req,res){
		var transporter = nodemailer.createTransport({
	    service: 'Hotmail',
	    auth: {
	        user: 'yusifibrahimov@hotmail.com',
	        pass: '6701995y'
	    }
	});
    var mailOptions = {
	    from: 'Yusif Ibro <yusifibrahimov@hotmail.com>', // sender address
	    to: 'yusifibrahimov@mail.ru', // list of receivers
	    subject: 'Website Submission', // Subject line
	    text: 'you have a submission with following details... Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message, // plaintext body
	    html: '<p>you have a submission with following details...</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>' // html body
	};

	transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
        res.redirect('/');
    }
     console.log('Message sent: ' + info.response);
     	res.redirect('/');
});

});

module.exports = router;
