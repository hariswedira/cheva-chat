// dom query
const chatlist = document.querySelector('.chat-list');

// class instance
const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', 'jhon');

// get chat and render
chatroom.getChats((data) => {
    chatUI.render(data);
    // console.log(data);
});