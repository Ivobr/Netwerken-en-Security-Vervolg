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

    const broker = "ws://145.137.33.238:1884"; // WebSocket port
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
        const chatBox = document.getElementById('chat-box');
        const msgData = message.toString();

        // Only render the message if it is not from the current user
        if (!msgData.startsWith(username + ":")) {
            // Render the message
            renderMessage(msgData, 'received');
        }

        // Auto-scroll to the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    });
}

function send(event) {
    event.preventDefault(); // Prevent the form from submitting

    const message = document.getElementById('data').value;
    const dataSend = `${username}: ${message}`;

    // Send the message
    client.publish(topic, dataSend);
    console.log(dataSend);
    document.getElementById('data').value = '';

    // Render the sent message
    renderMessage(dataSend, 'sent');
}

// Function to render messages
function renderMessage(message, type) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    
    // Create a bubble for each message
    const messageBubble = document.createElement('div');
    messageBubble.textContent = message;
    
    // Add the appropriate class based on the message type
    messageBubble.classList.add('message-bubble');
    messageBubble.classList.add(type);  // 'sent' or 'received'

    // Append the message bubble to the chat box
    messageDiv.appendChild(messageBubble);
    chatBox.appendChild(messageDiv);
}