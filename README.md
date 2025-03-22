# 🤖 Chatbot Application

This is a simple *React* chatbot app that integrates with the *Hugging Face API* for inference using the *Mistral-7B-Instruct-v0.1 model. The app allows users to interact with a chatbot, send messages, and receive responses in real-time. It's designed with a clean and modern UI using **Bootstrap*.

## 🚀 Features
- 💬 Chat with an AI-powered chatbot.
- ⚡ Fast message exchange using Hugging Face's API.
- 🖌 User-friendly and responsive interface.
- 🛠 Real-time message handling and display.
- 🚫 Prevents empty messages from being sent.

## 🛠 Installation

To get this project running on your local machine, follow these steps:

1. *Clone the repository*:
   ```bash
   git clone https://github.com/varsharangaraju/chatbot-app.git
   🔑 Configuration
Make sure you have a Hugging Face API key to interact with the model.

Go to Hugging Face and create an account if you don’t have one.

Get your API key from Hugging Face API Token.

Replace the placeholder in the Chatbot component with your Bearer token:
💡 How It Works
The app uses React and Axios for sending HTTP requests to the Hugging Face API.

The user's message is displayed in the chat window, and the bot's response is shown after a slight delay, simulating real-time conversation.

The loading state is displayed while waiting for the bot’s response.
chatbot-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js               # Main application component
│   ├── Chatbot.js           # Chatbot component
│   ├── index.js             # Entry point for React
│   ├── index.css            # Global styles
├── package.json             # Project dependencies and metadata
└── README.md                # This file
🛠 Tech Stack
React: JavaScript library for building the UI.

Axios: Promise-based HTTP client for making requests.

Bootstrap: Front-end framework for responsive design.

Hugging Face API: NLP model inference for chatbot functionality.



Screenshots

![WhatsApp Image 2025-03-22 at 13 24 27_c3b0a889](https://github.com/user-attachments/assets/507f0adb-a3d8-48bc-9886-7c8e221896f5)

