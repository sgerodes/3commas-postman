# 3commas-postman

A "Plug and Play" postman collection created from the official swagger doc. 
The signature is created automatically.

1. Import the postman_collection.json file into your Postman
2. Create an API key-secret pair in your 3commas account. Some endpoints need write permissions. Which exactly can be found on the [official repo](https://github.com/3commas-io/3commas-official-api-docs).
3. Add your API key and secret into the Postman collection variables THREE_COMMAS_API_KEY and THREE_COMMAS_API_SECRET.

The collection is generated from the official swagger doc from 3 commas. So some request have some weird parameters inside.

If you already have your own postman collection, you can use the pre-request-script.js. 
Just copy that code to your collection pre-request script. 
You will still need the THREE_COMMAS_API_KEY and THREE_COMMAS_API_SECRET variables in you environment.


The script also allows you to enable the forced-mode header. You can add a forced mode parameter to your request.
forced_mode=paper or forced_mode=real will add the needed header to your request.