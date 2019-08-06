// dom query
const chatlist = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

// class instance
const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', 'jhon');

// get chat and render
chatroom.getChats(data => chatUI.render(data));