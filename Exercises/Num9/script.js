fetch('student.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('student-list');

        data.students.forEach(student => {

            const status = student.grade >= 70 ? "Pass" : "Fail";

            const p = document.createElement('p');
            p.textContent =
                `${student.Name} (${student.major}) - Grade: ${student.grade} - ${status}`;

            container.appendChild(p);
        });
    })
    .catch(error => console.error('Error:', error));
