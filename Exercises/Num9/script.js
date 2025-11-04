fetch('student.json')
    .then(response => response.json())
    .then( data => {
        const container = document.getElementById('student-list');

        data.students.forEach( student => {

            const p = document.createElement('p');
            p.textContent = '$(Student.name)' ($(student.major)) - Grade: $(student.grade)';

            container.appendChild(p);

        })

        
    })

    .catch(error => console.error('error: ', error))