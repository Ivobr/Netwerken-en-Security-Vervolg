# Netwerken-en-Security-Vervolg
## Inleveropdracht 
### Eisen
- two way chat applicatie
    * open poort 80
- MQTT gebruiken
    * web socket
    * open porten 1884, 1883 & 443

### MQTT
MQTT is een messaging protocol wat erg low energy is.

Encrypt password
```
docker exec mosquitto mosquitto_passwd -U /etc/mosquitto/passwd
```
