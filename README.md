# 3commas-postman

A postman collection and environment created from the official swager doc with a pre-request script 
that creates the Signature from the API key and secret.

In order to use this collection you will need to create api key-secret pair in your 3 commas account and store it 
in the variables THREE_COMMAS_API_KEY and THREE_COMMAS_API_SECRET. 
The pre-request script will do everything else for you.

Some requests require write permissions. which exactly can be found on the official repo:
https://github.com/3commas-io/3commas-official-api-docs