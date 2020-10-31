class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = !(direct === false);
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    return this.processEncryption(message, key, true);
  }
  decrypt(encryptedMessage, key) {
    return this.processEncryption(encryptedMessage, key, false);
  }

  generateKey(key, messageLength) {
    let newKey = key.toUpperCase();
    if (!(key.length >= messageLength)) {
      for (let i = 0; i < messageLength; i++) {
        if (i === newKey.length) {
          newKey += key.toUpperCase();
        }
      }
    }
    return newKey;
  }

  processEncryption(message, key, isEncrypt) {
    if (!message || !key) {
      throw new Error('wrong parameters for decrypt');
    }
    let useKey = this.generateKey(key.toUpperCase(), message.length);

    let ind = 0;
    const encrypted = message
      .toUpperCase()
      .split('')
      .map((char) => {
        if (this.alphabet.indexOf(char) !== -1) {
          const decryptIndex = this.runFormula(isEncrypt, char, useKey, ind);
          ind += 1;
          return this.alphabet[decryptIndex];
        } else {
          return char;
        }
      })
      .join('');
    return this.direct ? encrypted : this.reverseString(encrypted);
  }

  runFormula(isEncrypt, char, key, index) {
    if (!isEncrypt) {
      return (
        (this.alphabet.indexOf(char) + 26 - this.alphabet.indexOf(key[index])) %
        26
      );
    }
    return (
      (this.alphabet.indexOf(char) + this.alphabet.indexOf(key[index])) % 26
    );
  }

  reverseString(string) {
    return string.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;