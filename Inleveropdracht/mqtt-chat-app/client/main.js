let client;
let topic = "chatroom";
let username;

function login(event) {
    event.preventDefault(); // Prevent the form from submitting

    username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;

    if (!username || !password) {
        document.getElementById('Login-error').innerText = 'Please enter both username and password';
        return;
    }

    const broker = "ws://145.137.33.238:1884"; // WebSocket port
    const options = {
        username: username,
        password: password,
    };

    client = mqtt.connect(broker, options);

    client.on('error', (error) => {
        console.error("Connection error: ", error);
        document.getElementById('Login-error').innerText = 'Login failed';
    });

    client.on('connect', () => {
        client.subscribe(topic, (err) => {
            if (!err) {
                const JoinMessage = username + ": joined the chat.";
                client.publish(topic, JoinMessage);
                // Store client and username in localStorage
                localStorage.setItem('username', username);
                localStorage.setItem('broker', broker);
                // Redirect to the chat page
                window.location.href = 'ChatRoom.html';
            } else {
                console.error("Subscription error: ", err);
            }
        });
    });
}

function initializeClient() {
    const broker = localStorage.getItem('broker');
    const WindowUsername = localStorage.getItem('username');

    username = WindowUsername;

    if (!broker || !username) {
        window.location.href = 'index.html';
        return;
    }

    const options = {
        username: username,
    };

    client = mqtt.connect(broker, options);

    client.on('connect', () => {
        client.subscribe(topic, (err) => {
            if (err) {
                console.error("Subscription error: ", err);
            }
        });
    });

    client.on('message', (topic, message) => {
        const chat = document.getElementById('chat');
        const msg = document.createElement('div');
        msg.textContent = message.toString();
        chat.appendChild(msg);
    });
}

function send(event) {
    event.preventDefault(); // Prevent the form from submitting

    const message = document.getElementById('data').value;
    const dataSend = `${username}: ${message}`;
    client.publish(topic, dataSend);
    console.log(dataSend);

    // Append the sent message to the chat div
    const chat = document.getElementById('chat');
    const msg = document.createElement('div');
    msg.textContent = dataSend;
    chat.appendChild(msg);

    document.getElementById('data').value = '';
}
