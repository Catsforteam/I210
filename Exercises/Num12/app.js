const firebaseConfig = {
  apiKey: "AIzaSyDQxETfI67in4wRXNKfpqf-fpglvUJmMjM",
  authDomain: "notesapp-f31ba.firebaseapp.com",
  databaseURL: "https://notesapp-f31ba-default-rtdb.firebaseio.com",
  projectId: "notesapp-f31ba",
  storageBucket: "notesapp-f31ba.firebasestorage.app",
  messagingSenderId: "208358290960",
  appId: "1:208358290960:web:82680959b55e1bfbf27c95",
  measurementId: "G-EDP6Z0WC7L"
};

firebase.intializeApp(firebaseConfig);

const database = firebase.database();

const noteRef = database.ref('notes');

const notesContainer = document.getElementById('notesContainer');

const noteInput = document.getElementById('noteInput');

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click' , () =>
{
    const noteText = noteInput.value;

    if(noteText.trim() !== '') return;

    notesRef.push({
        text: noteText,
        timestamp: Date.now()
    })

    noteInput.value = '';
})