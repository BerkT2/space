const startButton = document.querySelector('.startButton');
const welcomeTitle = document.querySelector('.welcomeTitle');
const music = document.getElementById("background-music");
const launch_start = document.getElementById("launch_start");
const launch_finish = document.getElementById("launch_finish");

startButton.addEventListener('click', (e) => {
    // Prevent default action
    e.preventDefault();


    music.play();
    
    // Anime.js animations
    anime({
        targets: startButton,
        translateY: '-200vh',
        duration: 800,
        easing: 'easeInOutQuad',
        complete: function(anim) {
            document.getElementById('welcomeScreen').style.display = 'none';
            document.getElementById('heroSelection').style.display = 'flex';

            // cmd opening animation
            anime({
                targets: '.cmd',
                scaleY: [0, 1],
                duration: 500,
                easing: 'easeInOutQuad',
                complete: function(anim) {
                    // start the typewriter effect after cmd open animation finishes
                    typeWriter();
                }
            });
        }
    });

    anime({
        targets: welcomeTitle,
        translateY: '-200vh',
        duration: 800,
        easing: 'easeInOutQuad',
        delay: 100
    });
});

// Fetch the elements
const heroCards = document.querySelectorAll('.heroCard');
let cmdText = document.querySelector('#cmdText');

// Define the typing animation
let i = 0;
let txt = 'S...Serenay?...\nTam zamanında geldin. Şuan hazır olan son astronotlarımız toy poodlelardan oluşuyor...\nKahramanını seç! Hızlı ol çok vaktimiz kalmamış olabilir...'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        if (txt.charAt(i) === '\n') {
            cmdText.innerHTML += '<br>';
        } else {
            cmdText.innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Display the heroes after the typing finishes
        displayHeroes();
    }
}
function typeWriterRocket() {
    if (i < txt.length) {
        if (txt.charAt(i) === '\n') {
            cmdText.innerHTML += '<br>';
        } else {
            cmdText.innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriterRocket, speed);
    } else {
        // Display the rockets after the typing finishes
        displayRockets();
    }
}
function typeWriterPlanet() {
    if (i < txt.length) {
        if (txt.charAt(i) === '\n') {
            cmdText.innerHTML += '<br>';
        } else {
            cmdText.innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriterPlanet, speed);
    } else {
        // Display the planets after the typing finishes
        displayPlanets();
    }
}

// Function to display the heroes
function displayHeroes() {
    // Show row2
    document.getElementById('row2').style.display = 'flex';

    // Fade in the heroes one by one with a delay in between
    const delay = 500; // half a second
    setTimeout(() => { 
        document.getElementById('hero1').style.visibility  = 'visible';
        anime({
            targets: '#hero1',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay);
    setTimeout(() => { 
        document.getElementById('hero2').style.visibility  = 'visible';
        anime({
            targets: '#hero2',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay * 2);
    setTimeout(() => { 
        document.getElementById('hero3').style.visibility  = 'visible';
        anime({
            targets: '#hero3',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay * 3);
}

const continueButton = document.querySelector('#continueButton');

heroCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Add a 'selected' class to the clicked hero card and remove it from others
        heroCards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        card.classList.add('selectedHero');
        
        // Enable the continue button and remove the 'disabled' class
        continueButton.disabled = false;
        continueButton.classList.remove('disabled');
    });
});

// Add the 'disabled' class to the continue button initially
continueButton.classList.add('disabled');

continueButton.addEventListener('click', (e) => {
    // Prevent default action
    e.preventDefault();

    // Hide hero selection and show rocket selection
    document.getElementById('heroSelection').style.display = 'none';
    document.getElementById('rocketSelection').style.display = 'flex';

    // Disable the continue button and add the 'disabled' class
    continueButton.disabled = true;
    continueButton.classList.add('disabled');
});

const continueButtonRocket = document.querySelector('#continueButtonRocket');
const rocketCards = document.querySelectorAll('.rocketCard');
const cmdTextRocket = document.querySelector('#cmdTextRocket');

// You can change the text for rocket selection phase
let txtRocket = 'Harika seçim!\nAstronot da olsa köpek köpektir, onun bir gemiye ihtiyacı var...\nGemi seçimini yap!';

continueButton.addEventListener('click', (e) => {
    // Prevent default action
    e.preventDefault();

    // Hide hero selection and show rocket selection
    document.getElementById('heroSelection').style.display = 'none';
    document.getElementById('rocketSelection').style.display = 'flex';

    // Start typing the text for rocket selection
    i = 0; // reset the counter
    txt = txtRocket; // update the text
    cmdText = cmdTextRocket; // update the command text element
    typeWriterRocket(); // start the typing animation

    // Disable the continue button and add the 'disabled' class
    continueButtonRocket.disabled = true;
    continueButtonRocket.classList.add('disabled');
});

// Function to display the rockets
function displayRockets() {
    // Show row1Rocket and row2Rocket
    document.getElementById('row1Rocket').style.display = 'flex';
    document.getElementById('row2Rocket').style.display = 'flex';

    // Fade in the rockets one by one with a delay in between
    const delay = 500; // half a second
    setTimeout(() => { 
        document.getElementById('rocket1').style.visibility = 'visible';
        anime({
            targets: '#rocket1',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay);
    setTimeout(() => { 
        document.getElementById('rocket2').style.visibility = 'visible';
        anime({
            targets: '#rocket2',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay * 2);
    setTimeout(() => { 
        document.getElementById('rocket3').style.visibility = 'visible';
        anime({
            targets: '#rocket3',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay * 3);
}

rocketCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Add a 'selected' class to the clicked rocket card and remove it from others
        rocketCards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        card.classList.add('selectedRocket');
        
        // Enable the continue button and remove the 'disabled' class
        continueButtonRocket.disabled = false;
        continueButtonRocket.classList.remove('disabled');
    });
});

// Add the 'disabled' class to the continue button initially
continueButtonRocket.classList.add('disabled');

// You can add code to handle when the continueButtonRocket is clicked, similar to what you did for the continueButton
continueButtonRocket.addEventListener('click', (e) => {
    // Prevent default action
    e.preventDefault();

    // Hide rocket selection and show planet selection
    document.getElementById('rocketSelection').style.display = 'none';
    document.getElementById('planetSelection').style.display = 'flex';

    // Start typing the text for planet selection
    i = 0; // reset the counter
    txt = 'Şimdi bir bakalım... \nİstila etmemiz gereken üç gezegen var. Hangisini durdurmak önceliğin olacak?'; // update the text
    cmdText = cmdTextPlanet; // update the command text element
    typeWriterPlanet(); // start the typing animation

    // Disable the continue button and add the 'disabled' class
    continueButtonPlanet.disabled = true;
    continueButtonPlanet.classList.add('disabled');
});

const continueButtonPlanet = document.querySelector('#continueButtonPlanet');
const planetCards = document.querySelectorAll('.planetCard');
const cmdTextPlanet = document.querySelector('#cmdTextPlanet');

// You can change the text for planet selection phase
let txtPlanet = 'Son aşama! Gezegen seç!';

// Function to display the planets
function displayPlanets() {
    // Show row1Planet and row2Planet
    document.getElementById('row1Planet').style.display = 'flex';
    document.getElementById('row2Planet').style.display = 'flex';

    // Fade in the planets one by one with a delay in between
    const delay = 500; // half a second
    setTimeout(() => { 
        document.getElementById('planet1').style.visibility = 'visible';
        anime({
            targets: '#planet1',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay);
    setTimeout(() => { 
        document.getElementById('planet2').style.visibility = 'visible';
        anime({
            targets: '#planet2',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay * 2);
    setTimeout(() => { 
        document.getElementById('planet3').style.visibility = 'visible';
        anime({
            targets: '#planet3',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay * 3);
}

planetCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Add a 'selected' class to the clicked planet card and remove it from others
        planetCards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        card.classList.add('selectedPlanet');
        
        // Enable the continue button and remove the 'disabled' class
        continueButtonPlanet.disabled = false;
        continueButtonPlanet.classList.remove('disabled');
    });
});

// Add the 'disabled' class to the continue button initially
continueButtonPlanet.classList.add('disabled');


const continueButtonColor = document.querySelector('#continueButtonColor');
const cmdTextColor = document.querySelector('#cmdTextColor');
const colorCards = document.querySelectorAll('.colorCard');

// You can change the text for color selection phase
let txtColor = 'Harika! Şimdi astronotunun renk seçimine sıra geldi.\nAstronotun için bir renk seç!';

// You can add code to handle when the continueButtonPlanet is clicked, similar to what you did for the continueButtonRocket
continueButtonPlanet.addEventListener('click', (e) => {
    // Prevent default action
    e.preventDefault();

    // Hide planet selection and show recap screen
    document.getElementById('planetSelection').style.display = 'none';
    document.getElementById('colorSelection').style.display = 'flex';

    i = 0; // reset the counter
    txt = txtColor; // update the text
    cmdText = cmdTextColor; // update the command text element
    typeWriterColor(); // start the typing animation

    // Disable the continue button and add the 'disabled' class
    continueButtonPlanet.disabled = true;
    continueButtonPlanet.classList.add('disabled');
});

continueButtonColor.addEventListener('click', (e) => {
    // Prevent default action
    e.preventDefault();

    // Hide color selection and show recap screen
    document.getElementById('colorSelection').style.display = 'none';
    document.getElementById("launchScreen").style.display = "flex";

    typewriter("launchCmdText", "Her şey hazır!\nŞimdi ateşle zamanı!!! Hazır olduğunda ateşlemeyi gerçekleştir.");
    // Disable the continue button and add the 'disabled' class
    continueButtonColor.disabled = true;
    continueButtonColor.classList.add('disabled');
});
var firebaseConfig = {
    apiKey: "AIzaSyDS0fvgrNDPzenLPq_x1ADQUa7vakj6GIw",
    authDomain: "space-gift.firebaseapp.com",
    projectId: "space-gift",
    storageBucket: "space-gift.appspot.com",
    messagingSenderId: "288478594705",
    databaseURL: "https://space-gift-default-rtdb.europe-west1.firebasedatabase.app",
    appId: "1:288478594705:web:100158a2582a658f76a130"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function saveToFirebase() {
    // Get a reference to the database service
    var database = firebase.database();
  
    // Find selected elements
    var selectedHeroDiv = document.querySelector('.selectedHero');
    var selectedRocketDiv = document.querySelector('.selectedRocket');
    var selectedPlanetDiv = document.querySelector('.selectedPlanet');
    var selectedColorDiv = document.querySelector('.selectedColor');
  
    // Find the img elements inside the selected divs
    var selectedHero = selectedHeroDiv ? selectedHeroDiv.querySelector('img') : null;
    var selectedRocket = selectedRocketDiv ? selectedRocketDiv.querySelector('img') : null;
    var selectedPlanet = selectedPlanetDiv ? selectedPlanetDiv.querySelector('img') : null;
    var selectedColor = selectedColorDiv ? selectedColorDiv.querySelector('img') : null;
  
    // Get the current date
    var currentDate = new Date();

    // Format the date as a string in the format YYYY-MM-DD
    var dateString = currentDate.toISOString().split('T')[0];

    // Add the date to your data object
    var data = {
    hero: selectedHero ? selectedHero.src : null,
    rocket: selectedRocket ? selectedRocket.src : null,
    planet: selectedPlanet ? selectedPlanet.src : null,
    color: selectedColor ? selectedColor.src : null,
    date: dateString
    };
  
    // Save data to Firebase
    database.ref('selections/').push(data);
}


document.getElementById("launchButton").addEventListener("click", function() {
    launch_start.play();
    var count = 10000; // Start countdown from 10 seconds (10,000 milliseconds)
    var launchCmdText = document.getElementById("launchCmdText");
    let counterText = formatCountdown(count);
    launchCmdText.innerHTML = counterText; // Display the count
    launchCmdText.style.color = "red"; // Change the font color to red
    launchCmdText.style.fontWeight = "bold";
    launchCmdText.style.fontSize = "3em";
    launchCmdText.style.marginLeft = "28%";

    document.getElementById("launchCmd").parentElement.style.textAlign = "center";

    // Add class to hide the launch button
    document.getElementById("launchButton").classList.add("hidden");

    var countdown = setInterval(function() {
        count -= 10; // Decrease by 10 milliseconds
        launchCmdText.innerHTML = formatCountdown(count);
        if (count <= 0) {
            launch_start.pause();
            clearInterval(countdown);
            launchCmdText.innerHTML = "Hediyeniz yola çıktı!";
            launchCmdText.style.fontSize = "2em";
            launchCmdText.style.marginLeft = "20%";
            launchCmdText.classList.add("blip");
            // Add any additional actions for when the countdown reaches 0
            shakeScreen(5); // Shake the screen for 5 seconds
            // Animate the rocket image
            animateRocket();
            launch_finish.play();
            animatePlanet();
            saveToFirebase();
        }
    }, 10); // Interval set to 10 milliseconds

    // Function to format the countdown in SS:MSMS format
    function formatCountdown(count) {
        var seconds = Math.floor(count / 1000); // Get the whole seconds
        var milliseconds = Math.floor((count % 1000) / 10); // Get the remaining milliseconds
        return padNumber(seconds, 2) + ":" + padNumber(milliseconds, 2);
    }

    // Function to pad the number with leading zeros
    function padNumber(number, length) {
        return number.toString().padStart(length, "0");
    }
    
    // Function to animate the rocket image
function animateRocket() {
    // Rocket image
    const img = document.createElement('img');
    // Find selected rocket
    const selectedRocketDiv = document.querySelector('.selectedRocket');
    if (!selectedRocketDiv) return; // No rocket selected, so do nothing

    // Find the img element inside the selected rocket div
    const selectedRocket = selectedRocketDiv.querySelector('img');
    if (!selectedRocket) return; // The selected div doesn't contain an img, so do nothing
    
    img.src = selectedRocket.src;
    img.classList.add('selectedRocketFinal');

    // Set size
    img.style.width = '207px';
    img.style.height = '224px';

    // Set initial position at bottom left
    img.style.position = 'fixed';
    img.style.bottom = '-110px';
    img.style.left = '-320px';
    img.style.rotate = '45deg';

    // Append image to the body
    document.body.appendChild(img);

    // Animate to the center of the screen
    img.animate([
        // start from bottom left
        { transform: 'translate(0, 0)' }, 
        // end at center of the screen
        { transform: 'translate(103.5px, -336px)' } 
    ], {
        // timing options
        duration: 2000, // 2 seconds
        iterations: 1, // do it once
        fill: 'forwards' // keep the state after animation end
    });

    // Additional gif image
    /*
    const gifImg = document.createElement('img');
    gifImg.src = 'fire.gif'; // Please replace with your gif image url

    // Set initial position at bottom left
    gifImg.style.position = 'fixed';
    gifImg.style.left = '310px';
    gifImg.style.rotate = "225deg"
    gifImg.style.marginTop = "310px";

    // Append gif image to the body
    document.body.appendChild(gifImg);

    // Animate the gif to the center of the screen just like the rocket
    gifImg.animate([
        // start from bottom left
        { transform: 'translate(0, 0)' }, 
        // end at center of the screen
        { transform: 'translate(103.5px, -336px)' } 
    ], {
        // timing options
        duration: 2000, // 2 seconds
        iterations: 1, // do it once
        fill: 'forwards' // keep the state after animation end
    });
    */
}

    function animatePlanet() {
        // Create new image
        const img = document.createElement('img');
    
        
        // Find selected rocket
        const selectedRocketDiv = document.querySelector('.selectedPlanet');
        if (!selectedRocketDiv) return; // No rocket selected, so do nothing
    
        // Find the img element inside the selected rocket div
        const selectedRocket = selectedRocketDiv.querySelector('img');
        if (!selectedRocket) return; // The selected div doesn't contain an img, so do nothing
        
        img.src = selectedRocket.src;
    
        // Set size
        img.style.width = '207px';
        img.style.height = '224px';
    
        // Set initial position at center right
        img.style.position = 'fixed';
        img.style.top = '50%';
        img.style.right = '-190px';
        img.style.transform = 'translateY(-50%)'; // to vertically center the planet
    
        // Append image to the body
        document.body.appendChild(img);
    
        // Animate to the center of the screen
        img.animate([
            // start from center right
            { transform: 'translateY(-50%)' },
            // end at center of the screen
            { transform: 'translate(-207px, -50%)' } 
        ], {
            // timing options
            duration: 2000, // 2 seconds
            iterations: 1, // do it once
            fill: 'forwards' // keep the state after animation end
        });
    }
    
});

function shakeScreen(duration) {
    var body = document.querySelector("body");
    body.classList.add("shake");

    setTimeout(function() {
        //body.classList.remove("shake-animation");
    }, duration * 1000);
}

// Start typing the text for color selection
function typewriter(id, string) {
    var str = string.split("");
    var el = document.getElementById(id);
  
    (function animate() {
      str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
      var running = setTimeout(animate, speed);
      if (str.length === 0) {
        document.getElementById("launchButton").style.display = "block"; // Display the "LAUNCH" button
      }
    })();
  }
  

function typeWriterColor() {
    if (i < txt.length) {
        if (txt.charAt(i) === '\n') {
            cmdTextColor.innerHTML += '<br>';
        } else {
            cmdTextColor.innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriterColor, speed);
    } else {
        // Display the colors after the typing finishes
        displayColors();
    }
}

function displayColors() {
    // Show row1Color and row2Color
    document.getElementById('row1Color').style.display = 'flex';
    document.getElementById('row2Color').style.display = 'flex';

    // Fade in the colors one by one with a delay in between
    const delay = 500; // half a second
    setTimeout(() => {
        document.getElementById('color1').style.visibility = 'visible';
        anime({
            targets: '#color1',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay);
    setTimeout(() => {
        document.getElementById('color2').style.visibility = 'visible';
        anime({
            targets: '#color2',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay * 2);
    setTimeout(() => {
        document.getElementById('color3').style.visibility = 'visible';
        anime({
            targets: '#color3',
            opacity: [0, 1],
            translateY: ['-50%', '0%'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }, delay * 3);
}

colorCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Add a 'selected' class to the clicked planet card and remove it from others
        colorCards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        card.classList.add('selectedColor');
        
        // Enable the continue button and remove the 'disabled' class
        continueButtonColor.disabled = false;
        continueButtonColor.classList.remove('disabled');
    });
});

// Add the 'disabled' class to the continue button initially
continueButtonColor.classList.add('disabled');
