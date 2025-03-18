#ifndef SECRET
const char ssid[] = "<WIFI_SSID>"; // Vul hier je Wi-Fi ssid in (niet belangrijk voor oplevering)
const char pass[] = "<WIFI_PASSWORD>"; // Vul hier je Wi-Fi wachtwoord in (niet belangrijk voor oplevering)

const char *MQTT_HOST = "netwerkenbasis.com";
const int MQTT_PORT = <PORT>; // Voer hier de MQTT-broker poort in op de aangegeven plek
const char *MQTT_CLIENT_ID = "BOT-<LEERLINGNUMMER>"; // Voer hier je leerlingnummer in op de aangegeven plek
const char *MQTT_USER = "<USERNAME>"; // Vul hier de gebruikersnaam in voor de broker
const char *MQTT_PASS = "<PASSWORD>"; // Vul hier het wachtwoord in voor de broker

// Dit is het certificaat dat je nodig hebt. Je hoeft hier op deze plek niks mee te doen
const char *local_root_ca =
    "-----BEGIN CERTIFICATE-----\n"
    "MIIDojCCAyigAwIBAgISBNDgDHJ1++Akn3Xtm5t8vyA6MAoGCCqGSM49BAMDMDIx\n"
    "CzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MQswCQYDVQQDEwJF\n"
    "NjAeFw0yNTAyMTQxMzM2NDNaFw0yNTA1MTUxMzM2NDJaMB0xGzAZBgNVBAMTEm5l\n"
    "dHdlcmtlbmJhc2lzLmNvbTB2MBAGByqGSM49AgEGBSuBBAAiA2IABB9FGYmhvtyk\n"
    "1Ae/alkVcpkO31daUrduLopRtR6ZEBYx5y8gtHeqtSSgDVa+RqByfNUmK/DARKzY\n"
    "cUhuXDMuJE6zGfTnZQoCHjHod0S+uiwHKFvhvzQwo3pUifIKApv22aOCAhQwggIQ\n"
    "MA4GA1UdDwEB/wQEAwIHgDAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIw\n"
    "DAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQU75eu+3ciqVU1m1YuWV/Mzn/QvoMwHwYD\n"
    "VR0jBBgwFoAUkydGmAOpUWiOmNbEQkjbI79YlNIwVQYIKwYBBQUHAQEESTBHMCEG\n"
    "CCsGAQUFBzABhhVodHRwOi8vZTYuby5sZW5jci5vcmcwIgYIKwYBBQUHMAKGFmh0\n"
    "dHA6Ly9lNi5pLmxlbmNyLm9yZy8wHQYDVR0RBBYwFIISbmV0d2Vya2VuYmFzaXMu\n"
    "Y29tMBMGA1UdIAQMMAowCAYGZ4EMAQIBMIIBBAYKKwYBBAHWeQIEAgSB9QSB8gDw\n"
    "AHYAouMK5EXvva2bfjjtR2d3U9eCW4SU1yteGyzEuVCkR+cAAAGVBOKYUgAABAMA\n"
    "RzBFAiAg6Ws1BTnQK33b3MyHNyMAEE5PNYKl+E6Y5PAh+tcQ1gIhAKO+LwPq3ZBc\n"
    "xeTYJpduLXN40YURNabDDtL8+jkYXFQPAHYAzxFW7tUufK/zh1vZaS6b6RpxZ0qw\n"
    "F+ysAdJbd87MOwgAAAGVBOKYpgAABAMARzBFAiAwOfQtfRaushVI4oKlZNuSYyzp\n"
    "utRiE3kkJ8dA7m+GOQIhAO2e0X7IxfH9qvemRhypmTlhQVE/kjC9khLYHVsPxtQB\n"
    "MAoGCCqGSM49BAMDA2gAMGUCMEsALg9FBPGY3Vz29k7AG4BCu8DoOqUEPCobmGYx\n"
    "RgkoDgMB+RP8rbAS5J0sj/WWHgIxAJEo25AuBAorApq0m4v0J+09UdslxkRDQ2B/\n"
    "upzA/ereUJfSsulPyUZSzWS3ut+4NA==\n"
    "-----END CERTIFICATE-----\n";

#endif
