const CustomError = require("../extensions/custom-error");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
    constructor(status = true) {
        this.status = status;
    }

    encrypt(message, key) {
        const letters = alphabet.split('');
        message = message.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (letters.indexOf(message[i]) != -1) {
                message[i] = letters[(letters.indexOf(message[i]) + letters.indexOf(key[j])) % letters.length];
                j = ++j % key.length;
            }
        }
        return (this.status) ? message.join('') : message.reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        encryptedMessage = encryptedMessage.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let j = 0;
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (alphabet.indexOf(encryptedMessage[i]) != -1) {
                encryptedMessage[i] = alphabet[(alphabet.indexOf(encryptedMessage[i]) + alphabet.length - alphabet.indexOf(key[j])) % alphabet.length];
                j = ++j % key.length;
            }
        }
        return (this.status) ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
    }
};

module.exports = VigenereCipheringMachine;
