# meteor-email-bug

Reproduction repo for bug affecting the `emails` package in Meteor 3.0 &mdash; see [#12963](https://github.com/meteor/meteor/issues/12963).

No need for real credentials, as the package fails before sending.

See `server/main.js`.

## To reproduce

Clone this repo, then execute `meteor run`.

The app should should fail at startup with:

```
Error sending email {
  err: TypeError: Cannot read properties of undefined (reading 'cacheKey')
      at getTransport (packages/email/email.js:113:10)
      at Object.Email.sendAsync (packages/email/email.js:253:29)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
}
```
