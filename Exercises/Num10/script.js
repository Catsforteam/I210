let users = [];

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        
        users = data;
        
        renderUsers(users);
    });


function renderUsers(list) {
    
    userList.innerHTML = list.map(user => `
        <li>
            <strong>${user.name}</strong><br>
            <small>${user.email}</small>
        </li>
    `).join('');
}
