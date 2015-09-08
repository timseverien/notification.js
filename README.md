notification.js
===============

Basically an OOP wrapper for `alert()`, `confirm()` and `prompt()`, because OOP is sweet and global functions are not.

## Docs

```js
new Notification( type, message = null, promptDefault = null )
```

Legal types are:

```js
Notification.TYPE_ALERT
Notification.TYPE_CONFIRM
Notification.TYPE_PROMPT
```

What are classes without methods?

```js
new Notification(...)
    // Set alert/confirm/prompt message
    .setMessage('Hello World!')

    // Set prompt default value
    .setPromptDefault('Default value')

    // Trigger the notification
    // Confirm and prompt boxes will return values
    .trigger();
```

## Examples

```js
new Notification(Notification.TYPE_ALERT)
    .setMessage('Hello World!')
    .trigger();

let result = new Notification(Notification.TYPE_CONFIRM)
    .setMessage('Hello World!')
    .trigger();

let result = new Notification(Notification.TYPE_PROMPT)
    .setMessage('Hello World!')
    .setPromptDefault('Foo')
    .trigger();
```

## Disclaimer

This project isn’t meant to be used in production. In fact, it’s pretty useless. You’re not going to die not using it.

Solely made for [this tweet](https://twitter.com/toddmotto/status/640909692164833280).
