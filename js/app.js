// dom query
const chatlist = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updtmssg = document.querySelector('.update-message');

newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = newNameForm.name.value.trim();
    chatroom.updateName(username);
    newNameForm.reset();
    updtmssg.innerText = `Your name ${username}`;
    setTimeout(() => {
        updtmssg.innerText = '';
    }, 3000)
})

const username = localStorage.username ? localStorage.username : 'anon';

// class instance
const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', username);

// get chat and render
chatroom.getChats(data => chatUI.render(data));