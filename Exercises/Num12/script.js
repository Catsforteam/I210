firebase.intializeApp(firebaseConfig);

const database = firebase.database();

const noteRef = database.ref('notes');

const notesContainer = document.getElementById('notesContainer');

const noteInput = document.getElementById('noteInput');

const submitButton = document.getElementById('submit-button');