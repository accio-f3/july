let username='';

document.getElementById('join-btn').addEventListener('click',(event)=>{
    event.preventDefault();
    username = document.getElementById('username-input').value;
    if(username.trim()!==''){
        document.querySelector('.form-username').style.display='none';
        document.querySelector('.chatroom-container').style.display='block';
    }
})

// Trim
// '        ' -> ''
// '    ab c' -> 'ab c'
// ' a b c  ' -> 'a b c'