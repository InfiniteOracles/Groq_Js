# Groq_NodeJs

<div align="center">
  <img src="upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Groq_logo.svg/220px-Groq_logo.svg.png" alt="Logo" width="300"/>
</div>




Groq_NodeJs is a powerful and feature-rich Node.js requester designed for seamless interaction with Groq. This tool supports extensive configurations, making it easy to manage requests and handle responses efficiently.

## Overview

Groq_NodeJs provides the following key features:

- **Multi-API Key Support**: Easily manage and switch between multiple API keys for different use cases.
- **Model Selection**: Flexibly choose between different models to suit your specific needs.
- **Character Limit Management**: Automatically handle and respect character limits for requests, ensuring compatibility with Groq’s constraints.
- **Role-Based Logic**: Integrate role-based logic to tailor responses and behaviors according to specific user roles.

## Getting Started

To get started with Groq_NodeJs, follow these steps:

1. **Clone the Repository:**

   `git clone [[repo url]](https://github.com/InfiniteOracles/Groq_NodeJs.git)`

2. **Navigate to the Directory:**
   
   `cd [directory]`
   
4. **Start the Server:**

   `npm server.js`

## How to Use

Groq_NodeJs is simple to use. Here's a basic example:

### Example URL:

`http://{Url}/data/?prompt={Prompt}&limitcharacter={CharacterLimit}&model={Model}`

### Working Models:

- `llama-3.1-70b-versatile`
- `llama-3.1-8b-instant`
- `llama3-70b-8192`
- `llama3-8b-8192`
- `mixtral-8x7b-32768`
- `gemma-7b-it`
- `gemma2-9b-it`

Ensure you use the full ID of the model in the URL.
