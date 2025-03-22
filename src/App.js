import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]); // Store all messages
  const [loading, setLoading] = useState(false);

  const hfInferenceURL =
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1"; // Mistral Model

  const handleMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userMessage.trim()) return; // Prevent empty messages

    setLoading(true);
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]); // Add user message

    try {
      const result = await axios.post(
        hfInferenceURL,
        {
          inputs: userMessage, // Correct input format
          parameters: {
            temperature: 0.7,
            max_length: 100,
          },
        },
        {
          headers: {
            Authorization: `Bearer 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`, // Add your API key here
            "Content-Type": "application/json",
          },
        }
      );

      if (result.data && result.data[0]?.generated_text) {
        setMessages((prev) => [
          ...prev,
          { text: result.data[0].generated_text, isUser: false },
        ]); // Add bot response
      } else {
        setMessages((prev) => [
          ...prev,
          { text: "Unexpected API response format.", isUser: false },
        ]);
      }
    } catch (error) {
      console.error("Error with the API request:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I couldn't process your request.", isUser: false },
      ]);
    } finally {
      setLoading(false);
      setUserMessage(""); // Clear input after submission
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column p-0">
      {/* Chat Header */}
      <div className="bg-primary text-white p-3 text-center">
        <h1 className="m-0">Chatbot</h1>
      </div>

      {/* Chat Messages */}
      <div
        className="flex-grow-1 p-3 overflow-auto"
        style={{
          backgroundColor: "#f5f5f5",
          marginBottom: "80px", // Add margin to avoid overlap with input
          paddingBottom: "20px", // Extra padding for better spacing
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`d-flex mb-3 ${
              message.isUser ? "justify-content-end" : "justify-content-start"
            }`}
          >
            <div
              className={`p-3 rounded ${
                message.isUser
                  ? "bg-primary text-white"
                  : "bg-white text-dark border"
              }`}
              style={{
                maxWidth: "70%",
                borderRadius: message.isUser
                  ? "15px 15px 0 15px"
                  : "15px 15px 15px 0",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="d-flex justify-content-start mb-3">
            <div
              className="p-3 bg-white text-dark rounded border"
              style={{
                maxWidth: "70%",
                borderRadius: "15px 15px 15px 0",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Generating response...
            </div>
          </div>
        )}
      </div>

      {/* Input Navbar */}
      <div
        className="bg-light p-3 border-top"
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          zIndex: 1000,
          boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            value={userMessage}
            onChange={handleMessageChange}
            placeholder="Type a message..."
            className="form-control flex-grow-1 rounded-pill"
            disabled={loading}
            style={{
              border: "1px solid #ddd",
              padding: "10px 20px",
            }}
          />
          <button
            type="submit"
            className="btn btn-primary rounded-pill"
            disabled={loading}
            style={{
              padding: "10px 20px",
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;