# Trails File Upload Example

This repo describes how to upload files using the `multer` middleware with `trailpack-express`.

TrailsMail is an imaginary email service that allows you to send an email with an attachment to an email address of your choice.  Once the message and attachment have been received by the server, different statistics about the message are displayed.

## Flow

User fills out a form with fields `recipient`, `subject`, `message`, and `file`.  
```html

<!-- views/index.html -->

<form class="pure-form pure-form-stacked" action="/message" method="post" enctype="multipart/form-data">
  <fieldset>
    <label for="recipient">Recipient</label>
    <input name="recipient" id="recipient" type="email" placeholder="Email">

    <label for="subject">Subject Line</label>
    <input name="subject" id="subject" type="text" placeholder="Subject Line">

    <label for="message">Message</label>
    <textarea name="message" rows="5" cols="40" placeholder="Your message here"></textarea>

    <label for="subject">Attachment<label>
    <input name="file" type="file" placeholder="Password">
    <button class="pure-button pure-button-primary">Send</button>
  </fieldset>
</form>
```

On submit, the browser makes a request to `POST /message`, which is directed towards `MessageController#send`.

```js
// config/routes.js
module.exports = [
...
  {
    method: [ 'POST' ],
    path: '/message',
    handler: 'MessageController.send'
  }
...
]
```

In `config/policies.js`, note that a Policy has been configured for `MessageController#send`, so the request will be handled by `MessagePolicy#single` on it's way to `MessageController#send`
```js
// config/policies.js
module.exports = {
  ...
  MessageController: {
    send: [ 'MessagePolicy.single' ]
  }
  ...
}
```

In `MessagePolicy`, we can use Express middleware to modify the request.

```js
  // api/policies/MessagePolicy.js

  ...

  const multer = require('multer')
  const upload = multer({dest: 'uploads/'})

  ...

  module.exports = class MessagePolicy extends Policy {
    single (req, res, next) {
    upload.single('file')(req, res, err => {
      if (err) {
        this.log.info(err)
      }
      next()
    })
  }

}

```

The result is that once the request object has arrived at `MessageController#send` `body` and `file` properties have been added by `multer`

```js
  // api/controllers/MessageController.js
module.exports = class MessageController extends Controller {
  ...
    send (req, res) {

    this.log.info('Form Body')
    this.log.info(req.body)

    this.log.info('Attachment')
    this.log.info(req.file)

    res.render('sent', {
      recipient: req.body.recipient,
      subject: req.body.subject,
      message: req.body.message,
      file: req.file
    })

  }
  ...
}

```
