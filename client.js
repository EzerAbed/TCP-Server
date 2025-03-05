const colors = require('colors')
const net = require('net')
const prompt = require('prompt-sync')()

let client = null

const menuReturn = () => {
    return setTimeout(() => menu(), 1500)
}

const destroyConnection = () => {
    if (client) {
        client.destroy()
        client = null
    } else return
}

const createClient = () => {
    if (!client) {
        const ADDRESS = prompt('Type server address: ') || '127.0.0.1'
        const PORT = prompt('Type server port: ') || 8086

        client = new net.Socket()

        client.connect(PORT, ADDRESS, () => {
            console.log(`Welcome to ${ADDRESS}:${PORT}`.bold.green)
            menuReturn()
        })

        client.on('error', (err) => {
            console.log(`Error: ${err.message}`.bold.red)
            destroyConnection()
            menuReturn()
        })
    } else {
        console.log('Client already connected! End connection before making a new one'.bold.red)
    }
}

const sendMessage = () => {
    if (client) {
        const message = prompt('Message to send: ')
        client.write(message)
        client.on('data', (data) => {
            console.log(`Received: ${data.toString().trim()}`.bold.blue)
        })
        menuReturn()
    } else {
        console.log('No active connection! Please connect first'.bold.red)
        menuReturn()
    }
}

const endProgram = () => {
    if (client) {
        destroyConnection()
    }
    console.log('Goodbye! See you soon'.bold.yellow)
}

const menu = () => {
    console.log(`${client ? 'CONNECTED'.bold.green : 'DISCONNECTED'.bold.red}`)
    console.log('(c)onnect, (s)end message, (d)isconnect, (q)uit'.bold.white)
    const choice = prompt('Type option: '.bold.white).toLowerCase()

    switch (choice) {
        case 'c':
            createClient()
            break
        case 's':
            sendMessage()
            break
        case 'd':
            destroyConnection()
            break
        case 'q':
            endProgram()
            break
        default:
            console.log('Invalid option! Try again'.bold.red)
            menuReturn()
    }
}

menu()