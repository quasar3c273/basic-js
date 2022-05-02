const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  constructor(status = true) {
    this.status = status;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
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
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
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
}

module.exports = {
  VigenereCipheringMachine
};
