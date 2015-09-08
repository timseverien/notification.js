'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Notification = (function () {
    /**
     * Create new Notification instance
     * @constructor
     * @param {Number} type
     * @param {String} [message]
     * @param {mixed} [promptDefault] - Prompt default value
     */

    function Notification(type) {
        var message = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
        var promptDefault = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

        _classCallCheck(this, Notification);

        if (type !== Notification.TYPE_ALERT && type !== Notification.TYPE_CONFIRM && type !== Notification.TYPE_PROMPT) throw new Error('Invalid notification type');

        this.type = type;

        if (message) this.setMessage(message);
        if (promptDefault) this.setPromptDefault(promptDefault);
    }

    /** @const {Number} */

    /**
     * Set message
     * @param {String} message
     * @return {Alert} self
     */

    _createClass(Notification, [{
        key: 'setMessage',
        value: function setMessage(message) {
            if (typeof message !== 'string') {
                throw new Error('Message should be a string');
            }

            this.message = message;
            return this;
        }

        /**
         * Set default prompt value
         * @param {Number} value
         * @return {Alert} self
         */
    }, {
        key: 'setPromptDefault',
        value: function setPromptDefault(value) {
            if (this.type !== Notification.TYPE_PROMPT) {
                throw new Error('Setting a prompt value for an non-prompt notification is pretty silly');
            }

            this.promptDefault = value;
            return this;
        }

        /**
         * Trigger the notification
         * @return {String|Boolean|undefined}
         */
    }, {
        key: 'trigger',
        value: function trigger() {
            switch (this.type) {
                case Notification.TYPE_CONFIRM:
                    return window.confirm(this.message);
                case Notification.TYPE_PROMPT:
                    return window.prompt(this.message, this.promptDefault);
                case Notification.TYPE_ALERT:default:
                    return window.alert(this.message);
            }
        }
    }]);

    return Notification;
})();

Notification.TYPE_ALERT = 0x1;
/** @const {Number} */
Notification.TYPE_CONFIRM = 0x2;
/** @const {Number} */
Notification.TYPE_PROMPT = 0x3;

//# sourceMappingURL=notification.js.map