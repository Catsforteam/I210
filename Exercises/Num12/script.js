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
})