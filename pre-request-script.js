// HOW TO USE
// - Copy this script into you 3 commas postman collections "pre-request script"
// - Add THREE_COMMAS_API_KEY and THREE_COMMAS_API_SECRET variables 
// - The signature will be calculated for every request automatically.
// - Enjoy life

hma_text = request.url;
if (pm.request.body != undefined){
    hma_text += pm.request.body;
}

// variable injection is done after pre-request scripts. We need to do it with the folowing line
hma_text = pm.variables.replaceIn(hma_text);

// important for signature calculation. Do NOT omit this part
hma_text = hma_text.replace("https://api.3commas.io", "");

key = pm.variables.get('THREE_COMMAS_API_KEY');
secret = pm.variables.get('THREE_COMMAS_API_SECRET');

if (!key) throw new Error(`Must set collection var: THREE_COMMAS_API_KEY, current value: ${key}`);
if (!secret) throw new Error(`Must set collection var: THREE_COMMAS_API_SECRET, current value: ${secret}`);

signature = CryptoJS.HmacSHA256(hma_text, secret).toString();
pm.request.headers.add({key: "Signature", value: signature});
pm.request.headers.add({key: "APIKEY", value: key});

// Forced mode
if (request.url.includes("forced_mode=paper")){
    pm.request.headers.add({key: "Forced-Mode", value: "paper"});
} else if (request.url.includes("forced_mode=real")){
    pm.request.headers.add({key: "Forced-Mode", value: "real"});
}