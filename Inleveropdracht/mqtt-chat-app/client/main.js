
    // const broker = "ws://localhost:9001"; //websocket port
    const broker = "ws://host.docker.internal:9001";


    const options = {
        username: "admin",
        password: "admin",
    }
    const topic = "chatroom";

    const client = mqtt.connect(broker, options);

    // const client = mqtt.connect(broker);

    client.on('error', (error) =>{
        console.error("Connection error: ", error);
    });

    // when client gets connection to page
    client.on('connect', () => { 

        client.subscribe(topic, (err) =>{
            if(!err){
                document.getElementById('connection').innerText ='connected'; //stuur opgevraagde
            } 
        });
    });

    //getting the message
    client.on('message', (topic, message) => {
        const chat = document.getElementById('chat');
        const msg = document.createElement('div');
        msg.textContent = message.toString();
        chat.appendChild(msg);
    });



    function send(event){
        event.preventDefault();
        var data = document.getElementById("data");
        client.publish(topic, data.value);
        // client.end();
        console.log(data.value);
        
        data.value="";
    }
