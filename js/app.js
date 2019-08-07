// dom query
const chatlist = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updtmssg = document.querySelector('.update-message');
const rooms = document.querySelector('.chat-rooms');

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
    // updtmssg.classList.remove('d-none')
    // setTimeout(() => {
    //     updtmssg.innerText = '';
    //     updtmssg.classList.add('d-none');
    // }, 3000)
});

rooms.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

const username = localStorage.username ? localStorage.username : 'anon';
updtmssg.innerHTML = username;

// class instance
const chatUI = new ChatUI(chatlist, username);
const chatroom = new Chatroom('general', username);

// get chat and render
chatroom.getChats(data => chatUI.render(data));