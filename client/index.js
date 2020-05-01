const form = document.getElementById('chat-form');
const messageBox = document.getElementById('messageBox');
const chatBox = document.getElementById('chat-box')

const socket = io('https://rajat-chatapp.herokuapp.com/');

  socket.on('message', (msg) => {
    const liTag = document.createElement('li');
    liTag.classList.add('list-group-item')
    liTag.innerText = msg;

    chatBox.appendChild(liTag)
  })


form.addEventListener('submit', e => {
  e.preventDefault();
  socket.emit('message', messageBox.value)
  messageBox.value = ''
})