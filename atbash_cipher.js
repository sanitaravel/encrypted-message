// Function to implement the Atbash Cipher
export function atbashCipher(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversedAlphabet = alphabet.split('').reverse().join('');
    let decryptedMessage = '';

    for (let char of text.toLowerCase()) {
        if (alphabet.includes(char)) {
            const index = alphabet.indexOf(char);
            decryptedMessage += reversedAlphabet[index];
        } else {
            decryptedMessage += char;  // Non-alphabet characters remain unchanged
        }
    }

    return decryptedMessage;
}
