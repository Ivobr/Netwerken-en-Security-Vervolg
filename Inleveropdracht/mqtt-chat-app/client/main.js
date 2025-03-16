let client;
let topic = "chatroom";
let username;

function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
      if (page.id === pageId) {
        page.style.display = 'block';
      } else {
        page.style.display = 'none';
      }
    });
}

function login(event) {
    event.preventDefault(); // Prevent the form from submitting

    username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;

    if (!username || !password) {
        document.getElementById('Login-error').innerText = 'Please enter both username and password';
        return;
    }

    const broker = "wss://localhost:443"; // WebSocket Secure port
    const options = {
        username: username,
        password: password,
        rejectUnauthorized: false // This is needed if using self-signed certificates
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
                // Switch to the chat page
                showPage('chat');
            } else {
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
