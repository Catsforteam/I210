// Global array for user data from API
let users = [];

// Fetch user data on page load
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    users = data;         // Save original data
    renderUsers(users);   // Display list
  })
  .catch(error => console.error("Error loading users:", error));


// Function to display users in the <ul>
function renderUsers(list) {
  const userList = document.getElementById("userList");
  userList.innerHTML = ""; // Clear current list

  list.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${user.name}</strong><br>
      <small>${user.email}</small>
    `;
    userList.appendChild(li);
  });
}


// -------------------------
// FILTER FUNCTIONALITY
// -------------------------
document.getElementById("filterBtn").addEventListener("click", () => {
  const keyword = document.getElementById("filterInput").value.toLowerCase();

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(keyword)
  );

  renderUsers(filtered);
});


// -------------------------
// SORT A–Z
// -------------------------
document.getElementById("sortAsc").addEventListener("click", () => {
  const sorted = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  renderUsers(sorted);
});


// -------------------------
// SORT Z–A
// -------------------------
document.getElementById("sortDesc").addEventListener("click", () => {
  const sorted = [...users].sort((a, b) =>
    b.name.localeCompare(a.name)
  );

  renderUsers(sorted);
});
