import { Email } from 'meteor/email';

Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://postmaster@example.com:my_mail_password@smtp.foo.org:587';
  Email.sendAsync({
    to: 'someone@example.com',
    from: 'someone-else@example.com',
    subject: 'Testing Meteor emails',
    html: '<p>Hello!</p>',
  }).catch((err) => {
    console.error('Error sending email', { err });
  });
});
