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

function login(event){
    event.preventDefault();

    username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;

    if( !username || !password){
        document.getElementById('Login-error').innerText = 'Alsjeblieft vul gewoon alles in idioot';
        return;
    }

    const broker = "ws://145.137.33.238:1884"; //websocket port
    const options = {
        username: username,
        password: password,
    }
 


    client = mqtt.connect(broker, options);

    // const client = mqtt.connect(broker);

    client.on('error', (error) =>{
        console.error("Connection error: ", error);
        document.getElementById('Login-error').innerText = 'Log in Failed';
    });

    // when client gets connection to page
    client.on('connect', () => { 

        client.subscribe(topic, (err) =>{
            if(!err){
                document.getElementById('connection').innerText ='connected'; 

                const JoinMessage = username + ": joind the chat." 
                client.publish(topic, JoinMessage);

                localStorage.setItem('username', username);
                localStorage.getItem('broker', broker);
            } else{
                
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


    function send(event){
        try{
            if(username === 'User2'){
                username = "Lesley is gay?!";
            }
        event.preventDefault();
        const message = document.getElementById('data').value;
        
        var data = document.getElementById('data').value;

        const dataSend = username + ": "+ data;
        client.publish(topic, dataSend);
        console.log(dataSend);

        
   
        document.getElementById('data').value = '';
        }catch(error){
            document.getElementById('connection').innerText = 'Log eerst in dip shit';
        }
    }
