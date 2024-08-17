const http = require('http');
const https = require('https');
const url = require('url');

// Replace with your actual Groq API key
const apiKeys = [
    '[api key]',
    '[another api key]'
  //add as many api keys as you want it picks at random to prevent rate limits.
];
const GROQ_API_KEY = apiKeys[Math.floor(Math.random() * apiKeys.length)];
// This will output one of the API keys randomly

// Function to execute the HTTPS request
function requestGroqData(prompt, content2, limitCharacter, customApi, model, callback) {
    const content = prompt || 'Explain the importance of fast language models';
    const content3 = content2 || '';
    const characterLimit = limitCharacter || 44; // Default to 44 if limitCharacter is not provided
    const apiKey = customApi === 'Nothing' ? GROQ_API_KEY : customApi;
    const modelToUse = model || 'gemma2-9b-it'; // Default to 'gemma2-9b-it' if model is not provided

    const jsonData = JSON.stringify({
        messages: [
            {
                role: "system",
                content: `You are a helpful assistant. And response as ${content3} that can only send ${characterLimit} characters.`
            },
            {
                role: 'user',
                content: content
            },
        ],
        model: modelToUse
    });

    const options = {
        hostname: 'api.groq.com',
        path: '/openai/v1/chat/completions',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(jsonData)
        }
    };

    const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            try {
                const jsonData = JSON.parse(data);
                callback(null, jsonData);
            } catch (parseError) {
                callback(parseError);
            }
        });
    });

    req.on('error', (error) => {
        callback(error);
    });

    req.write(jsonData);
    req.end();
}

// Create the server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/data/' && req.method === 'GET') {
        const prompt = query.prompt;
        const content2 = query.content2 || ''; // Default to empty string if content2 is not provided
        const limitCharacter = parseInt(query.limitcharacter, 10); // Parse limitCharacter to integer
        const customApi = query.customapi || 'Nothing'; // Default to 'Nothing' if customapi is not provided
        const model = query.model || ''; // Get the model from query or default to an empty string

        // Validate limitCharacter
        if (isNaN(limitCharacter)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid value for limitcharacter. Must be a number.' }));
            return;
        }

        requestGroqData(prompt, content2, limitCharacter, customApi, model, (error, data) => {
            if (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: error.message }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server
const PORT = 3297;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
