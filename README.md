# Encrypted Message TCP Client

This project is a simple Node.js TCP client that connects to a server, receives an encrypted message, decrypts it using the Atbash Cipher, and sends the decrypted solution back to the server. The server then responds with whether the solution was correct or incorrect.

## Project Overview

- **TCP Client**: Connects to a specified server and port.
- **Encrypted Message Handling**: The client receives an encrypted message, decrypts it using the Atbash Cipher (Reverse Alphabet Cipher), and sends the decrypted solution back to the server.
- **Atbash Cipher**: A simple cipher where each letter of the alphabet is mapped to its reverse counterpart (e.g., `a` becomes `z`, `b` becomes `y`, etc.).

## Features

- Connects to a server via TCP.
- Sends a "start-game" message to the server.
- Receives an encrypted message, decrypts it using the Atbash Cipher, and sends the solution back.
- Handles server responses of "Correct!" or "Incorrect!".
- Gracefully handles connection errors and closes the connection.

## Installation

### Prerequisites

- **Node.js**: This project is built using Node.js, so you need to have Node.js installed on your machine. If you don't have it installed, you can download it from [nodejs.org](https://nodejs.org/).

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/sanitaravel/encrypted-message.git
cd encrypted-message
```

### Install Dependencies

This project uses no external dependencies besides the built-in `net` module in Node.js, so you don't need to install anything extra. Just make sure you're in the project directory:


### Configuration

In the file `start_client.js`, you need to set the target server's **host** and **port** where the server is running. Open `start_client.js` and modify these lines accordingly:

```javascript
// Define the host and port
const host = '192.168.178.20'; // Replace with the target server's host
const port = 3000;            // Replace with the target server's port
```

## Usage

Once the configuration is set, you can start the client with the following command:

```bash
node start_client.js
```

The client will:

1. Connect to the server.
2. Send the "start-game" message.
3. Receive an encrypted message.
4. Decrypt the message using the Atbash Cipher.
5. Send the decrypted message back as a solution.
6. Log the server's response ("Correct!" or "Incorrect!").
7. Close the connection after receiving the server's response.

## File Structure

```
/encrypted-message
├── atbash_cipher.js         # Atbash cipher decryption logic
├── start_client.js          # Entry point to start the TCP client
├── tcp_client.js            # Main TCP client logic
├── user_input_handler.js    # Placeholder for user input handling (future implementation)
└── README.md                # Project documentation
```