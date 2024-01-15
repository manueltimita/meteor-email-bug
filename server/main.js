import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(async function () {
  process.env.MAIL_URL = 'smtp://postmaster@example.com:my_mail_password@smtp.foo.org:587';

  console.log('Sending email...');
  try {
    await Email.sendAsync({
      to: 'someone@example.com',
      from: 'someone-else@example.com',
      subject: 'Testing Meteor emails',
      html: '<p>Hello!</p>',
    });
    console.log('Email was sent');
  } catch (err) {
    console.error('Error sending email', { err });
  }

  console.log('\nBind environment, then send email...');
  Meteor.bindEnvironment(async function () {
    try {
      await Email.sendAsync({
        to: 'someone2@example.com',
        from: 'someone-else2@example.com',
        subject: 'Testing Meteor emails (2)',
        html: '<p>Hello again!</p>',
      });
      console.log('Email number 2 was sent');
    } catch (err) {
      console.error('Error sending email number 2', { err });
    }
  });

  console.log('\n[Testing Accounts email methods]');
  await Meteor.users.removeAsync({});
  const userId = await Accounts.createUserAsync({ email: 'user@example.com' });
  console.log('User', userId, 'created');
  console.log('Sending reset password email...');
  try {
    await Accounts.sendResetPasswordEmail(userId);
  } catch (err) {
    console.error('Error sending reset password email', { err });
  }
});
