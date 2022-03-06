//get the random user

async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    displayUser(user);

}

//display the random user 

function displayUser(user) {
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const age = document.getElementById('age');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const image = document.getElementById('image');
    const email = document.getElementById('email');


    name.innerText = `${user.name.first} ${user.name.last}`;
    gender.innerText = `Gender: ${user.gender}`;
    age.innerText = `Age: ${user.dob.age}`;
    city.innerText = `City: ${user.location.city}`;
    state.innerText = `State: ${user.location.state}`;
    image.setAttribute('src', `${user.picture.large}`);
    email.setAttribute('href', `mailto:${user.email}`);

}


getRandomUser();

//hightlight function for the heart symbol
function highlight() {
    var el = document.getElementById('heart');
    var original = el.style.color;
    el.style.color='#f00';
    document.getElementById('next').addEventListener('click', turnBlue);

    //turn back blue when clicking next
        function turnBlue() {
            el.style.color = original; 
        }
    }
 

