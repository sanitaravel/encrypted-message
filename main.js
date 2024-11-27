import { startClient } from './tcp_client.js'; // Import the startClient function

// Define the host and port
const host = '192.168.178.20'; // Replace with the target server's host
const port = 3000;            // Replace with the target server's port

// Start the TCP client
startClient(host, port);
