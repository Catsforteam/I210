let users = [];

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        // Store the fetched data in the users array
        users = data;
        // Function to display the user data
        renderUsers(users);
    });

// Define a function to display the user data
function renderUsers(list) {
    // Convert the array into HTML <li> elements using map()
    userList.innerHTML = list.map(user => `
        <li>
            <strong>${user.name}</strong><br>
            <small>${user.email}</small>
        </li>
    `).join('');
}
