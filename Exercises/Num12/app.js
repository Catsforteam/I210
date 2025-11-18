// --- 2. INITIALIZE FIREBASE ---
// The firebaseConfig object (not shown here) must be defined above this script.
// It contains your Firebase project keys such as apiKey, databaseURL, etc.
// This line initializes Firebase using that configuration.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
firebase.initializeApp(firebaseConfig);

// The firebase.database() method gives us access to the Realtime Database service.
const database = firebase.database();

// Here we create a reference (a pointer) to the 'notes' collection (or path) in our database.
// Every note we add or modify will go under this "notes" node.
const notesRef = database.ref('notes');


// --- 3. GET ELEMENTS FROM THE PAGE ---
// Get the container element from HTML where all notes will be displayed dynamically.
const notesContainer = document.getElementById('notes-container');

// Get the input box where the user types a new note.
const noteInput = document.getElementById('note-input');

// Get the submit button that will trigger adding a new note when clicked.
const submitButton = document.getElementById('submit-button');


// --- 4. CREATE: WRITE DATA TO FIREBASE ---
// Add an event listener to handle click actions on the "Submit" button.
submitButton.addEventListener('click', () => {
 
  // Retrieve the text typed by the user in the input box.
  const noteText = noteInput.value;

  // If the user clicked "Submit" with an empty or whitespace-only input, do nothing.
  if (noteText.trim() === '') return;

  // Push a new note object into the 'notes' path in the Realtime Database.
  // Firebase automatically creates a unique key (ID) for each pushed item.
  notesRef.push({
    text: noteText,          // The actual note text
    timestamp: Date.now()    // Save the current time (milliseconds since 1970)
  });

  // After adding the note to Firebase, clear the input box for the next note.
  noteInput.value = '';
});