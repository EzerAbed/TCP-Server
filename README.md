# TCP Client-Server Application

## Overview
This project implements a **TCP Client-Server Application** using **Node.js**. The application facilitates bi-directional communication between a client and server over TCP sockets, demonstrating fundamental networking concepts and message exchange protocols.

## Features
- Full-Duplex TCP Communication
- Interactive Command-Line Interface
- Connection Lifecycle Management
- Error Detection and Handling
- Colorized Console Output using **colors** Library

## Technologies
- **Node.js**
- **net** (Node.js native module for TCP connections)
- **colors** (Terminal text styling)
- **prompt-sync** (Synchronous command-line input)

## Prerequisites
Ensure the following dependencies are installed:
- Node.js (v14 or higher)

## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/tcp-client-server.git
```
### 2. Navigate to the Project Directory
```bash
cd TCP-Server
```
### 3. Install Dependencies
```bash
npm install
```

## Usage
### Starting the Server
Execute the following command to launch the server:
```bash
node server.js
```
Output Example:
```bash
Server is on ...
```

### Starting the Client
In a separate terminal window, start the client:
```bash
node client.js
```
You will be presented with an interactive menu to:
- Connect to the Server
- Send Messages
- Disconnect
- Quit the Application

### Example Interaction
#### Client Side
```bash
DISCONNECTED
(c)onnect, (s)end message, (d)isconnect, (q)uit
Type option: c
Welcome to 127.0.0.1:8086
Type option: s
Message to send: Hello Server
Received: Message from server!
```
#### Server Side
```bash
Server is on ...
Client connected from 127.0.0.1:PORT
From 127.0.0.1:PORT - Hello Server
```

## Project Structure
```bash
.
├── client.js    # Client Application
├── server.js    # Server Application
└── package.json # Project Dependencies
```

## Future Improvements
- Authentication Mechanism
- Encryption for Secure Data Transmission
- Multi-Client Support
- Configurable Logging System


