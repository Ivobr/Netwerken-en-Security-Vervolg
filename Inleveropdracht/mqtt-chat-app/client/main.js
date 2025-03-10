const client = mqtt.connect('ws://localhost:9001'); //websocket port

const Userid = Math.floor(Math.random() * 1000);

// when client gets connection to page
client.on('connect', () => { 
    console.log("connected");
    document.getElementById('connection').innerText ='connected'; //stuur opgevraagde
    client.subscribe('chat');
});

//getting the message
client.on('message', (topic, message) => {
    const chat = document.getElementById('chat');
    const msg = document.createElement('div');
    msg.textContent = message.toString();
    chat.appendChild(msg);
});

//sending the message
function sendMessage(){
    const message = document.getElementById('message').value;
    client.publish('chat', message);
    document.getElementById('message').value= '';
    console.log(Userid + " " + message);
}

function send(event){
    event.preventDefault();
    var data = document.getElementById("data");
    console.log(data.value);
}