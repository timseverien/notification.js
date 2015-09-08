class Notification {
    /**
     * Create new Notification instance
     * @constructor
     * @param {Number} type
     * @param {String} [message]
     * @param {mixed} [promptDefault] - Prompt default value
     */
    constructor(type, message = null, promptDefault = null) {
        if (
            type !== Notification.TYPE_ALERT &&
            type !== Notification.TYPE_CONFIRM &&
            type !== Notification.TYPE_PROMPT
        ) throw new Error('Invalid notification type');

        this.type = type;

        if (message) this.setMessage(message);
        if (promptDefault) this.setPromptDefault(promptDefault);
    }

    /**
     * Set message
     * @param {String} message
     * @return {Alert} self
     */
    setMessage(message) {
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
    setPromptDefault(value) {
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
    trigger() {
        switch (this.type) {
            case Notification.TYPE_CONFIRM:
                return window.confirm(this.message);
            case Notification.TYPE_PROMPT:
                return window.prompt(this.message, this.promptDefault);
            case Notification.TYPE_ALERT: default:
                return window.alert(this.message);
        }
    }
}

/** @const {Number} */
Notification.TYPE_ALERT = 0x1;
/** @const {Number} */
Notification.TYPE_CONFIRM = 0x2;
/** @const {Number} */
Notification.TYPE_PROMPT = 0x3;
