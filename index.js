const data = [
    {
        name: 'Dharmil Shah',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Khushi Desai',
        age: 18,
        city: 'Vadodara',
        languages: 'java',
        framework: 'JSP',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Devang',
        age: 28,
        city: 'Vadodara',
        languages: 'python',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'Normal Patel',
        age: 20,
        city: 'Mumbai',
        languages: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Sarthak Shah',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: 'framework',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/35.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/100.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/90.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/80.jpg'
    },
    {
        name: 'Khushi Shukla',
        age: 18,
        city: 'Vadodara',
        languages: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },

]

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

let nextBtn = document.getElementById(`nextBtn`);
nextBtn.addEventListener(`click`, nextCV);
let candidates = cvIterator(data);

nextCV();

function nextCV() {

    const currentCandidate = candidates.next().value;
    let image = document.getElementById(`image`);
    let profile = document.getElementById(`profile`);

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;

        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} Years Old</li>
    <li class="list-group-item">Lives In ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily Work On ${currentCandidate.languages}</li>
    <li class="list-group-item">With This Framework: ${currentCandidate.framework}</li>
  </ul>`;
    }

    else {
        alert(`End Of Applications`);
        window.location.reload();
    }
}