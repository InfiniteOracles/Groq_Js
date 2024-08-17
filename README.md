# Groq_Js

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Groq_logo.svg/220px-Groq_logo.svg.png" alt="Logo" width="300"/>
</div>




Groq_Js is a powerful and feature-rich Node.js requester designed for seamless interaction with Groq. This tool supports extensive configurations, making it easy to manage requests and handle responses efficiently.

## Overview

Groq_Js provides the following key features:

- **Multi-API Key Support**: Easily manage and switch between multiple API keys for different use cases.
- **Model Selection**: Flexibly choose between different models to suit your specific needs.
- **Character Limit Management**: Automatically handle and respect character limits for requests, ensuring compatibility with Groq’s constraints.
- **Role-Based Logic**: Integrate role-based logic to tailor responses and behaviors according to specific user roles.

## Getting Started

To get started with Groq_Js, follow these steps:

1. **Clone the Repository:**
   
   ```bash
   git clone https://github.com/InfiniteOracles/Groq_Js.git
   ```

3. **Navigate to the Directory:**

   ```bash
   cd [directory]
    ```   
   
4. **Start the Server:**

   ```bash
   npm server.js
   ```

## How to Use

Groq_Js is simple to use. Here's a basic example:

### Example URL:

```
http://{Url}/data/?prompt={Prompt}&limitcharacter={CharacterLimit}&model={Model}
```

### Working Models:

- `llama-3.1-70b-versatile`
- `llama-3.1-8b-instant`
- `llama3-70b-8192`
- `llama3-8b-8192`
- `mixtral-8x7b-32768`
- `gemma-7b-it`
- `gemma2-9b-it`

Ensure you use the full ID of the model in the URL.

### Configuring Multiple API Keys

To use multiple API keys, follow these instructions:

1. Open the `server.js` file.

2. Locate the `apiKeys` array in the file:

    ```javascript
    const apiKeys = [
        '[api key]',
        '[another api key]'
        // Add as many API keys as needed. The system will randomly select one to avoid rate limits.
    ];
    ```

3. **Add Your API Keys:**
   - To include multiple keys, list them inside the array, each on a new line.
   - If you only need one key, you can remove the extra lines.
   - To add more than two keys, simply add additional lines within the array.
   - 
**Example Configurations:**

- For one key:
    ```javascript
    const apiKeys = [
        '[first api key]'
    ];
    ```

- For two keys:
    ```javascript
    const apiKeys = [
        '[first api key]',
        '[second api key]'
    ];
    ```

- For three keys:
    ```javascript
    const apiKeys = [
        '[first api key]',
        '[second api key]',
        '[third api key]'
    ];
    ```
Add as many api keys as you want.
