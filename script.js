const socket = io();

socket.on('message', (message) => {
    appendMessage(message);
});

function appendMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message !== '') {
        socket.emit('sendMessage', message);
        appendMessage('You: ' + message);
        userInput.value = '';
        userInput.focus();
    }
}
