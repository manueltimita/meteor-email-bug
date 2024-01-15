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

  Meteor.bindEnvironment(function() {
    Email.sendAsync({
      to: 'someone2@example.com',
      from: 'someone-else2@example.com',
      subject: 'Testing Meteor emails (2)',
      html: '<p>Hello again!</p>',
    })
      .then((res) => {
        console.log('Email number 2 was sent', { res });
      })
      .catch((err) => {
        console.error('Error sending email number 2', { err });
      });
  });
});
