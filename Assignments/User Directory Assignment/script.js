let users = [];

// Load users from API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data;
    renderUsers(users);
  })
  .catch(err => console.error("Error fetching users:", err));


// Render users into the <ul>
function renderUsers(list) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  list.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${user.name}</strong><br>
      <small>${user.email}</small>
    `;
    userList.appendChild(li);
  });
}


// Filter button
document.getElementById("filterBtn").addEventListener("click", () => {
  const keyword = document.getElementById("filterInput").value.toLowerCase();

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(keyword)
  );

  renderUsers(filtered);
});


// Sort A–Z
document.getElementById("sortAsc").addEventListener("click", () => {
  const sorted = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  renderUsers(sorted);
});


// Sort Z–A
document.getElementById("sortDesc").addEventListener("click", () => {
  const sorted = [...users].sort((a, b) =>
    b.name.localeCompare(a.name)
  );
  renderUsers(sorted);
});
