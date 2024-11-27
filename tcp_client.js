import net from 'net';
import { atbashCipher } from './atbash_cipher.js'; // Import the atbashCipher function

// Function to start the TCP client
export function startClient(host, port) {
    const client = new net.Socket();

    // Connect to the server
    client.connect(port, host, () => {
        console.log(`Connected to server: ${host}:${port}`);
        client.sendData('start-game');  // Send "start-game" message to the server
    });

    // Handle data from the server
    client.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Server: ${message}`);

        if (message.startsWith('encrypted-message')) {
            // Extract the encrypted text
            const encryptedText = message.split(' ')[1];

            // Decrypt the message using the Atbash Cipher
            const decryptedText = atbashCipher(encryptedText);
            console.log(`Decrypted message: ${decryptedText}`);

            // Send the decrypted solution back to the server
            client.sendData(`solution ${decryptedText}`);
        } else if (message === 'Correct!' || message === 'Incorrect!') {
            // Log the server's response (Correct! or Incorrect!)
            console.log(`Server response: ${message}`);
            client.closeConnection();  // Close the connection after the response
        }
    });

    // Handle connection errors
    client.on('error', (err) => {
        console.error(`Connection error: ${err.message}`);
        process.exit(1); // Exit on connection error
    });

    // Handle the closing of the connection
    client.on('close', () => {
        console.log('Connection closed');
        process.exit(0); // Exit when the connection is closed
    });

    // Function to send data to the server
    client.sendData = function(message) {
        client.write(message, (err) => {
            if (err) {
                console.error(`Failed to send message: ${err.message}`);
            } else {
                console.log(`Message sent successfully: ${message}`);
            }
        });
    };

    // Function to close the connection
    client.closeConnection = function() {
        console.log('Closing connection...');
        client.end(); // Gracefully close the connection
    };
}
