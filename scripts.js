document.addEventListener("DOMContentLoaded", () => {
    const chatContainer = document.getElementById("chat-container");
    const openChatbotButton = document.getElementById("open-chatbot");
    const messagesContainer = document.getElementById("messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    const data = {
        "hello": "Hi there!",
        "how are you?": "I'm good, thank you! How about you?",
        "what is your name?": "I am a chatbot created to assist you."
        // Add more predefined responses here
    };

    function appendMessage(message, className) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${className}`;
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function getResponse(userMessage) {
        return data[userMessage.toLowerCase()] || "I'm not sure how to respond to that.";
    }

    function handleSend() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, "user-message");
            const botResponse = getResponse(userMessage);
            appendMessage(botResponse, "bot-message");
            userInput.value = "";
        }
    }

    sendButton.addEventListener("click", handleSend);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleSend();
        }
    });

    openChatbotButton.addEventListener("click", () => {
        chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
    });
});