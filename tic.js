const container = document.querySelector('#container')
const box = document.querySelectorAll('.box')
const button = document.querySelector('#div1')
const btn = document.querySelector('#button')
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')
console.log(box);


let clickCount = 0; // Counter to track clicks

box1.addEventListener('click', function handleClick(event) {
    clickCount++; // Increment the click count

    if (clickCount === 1) {
        box1.innerHTML = 'X'; // First click: set to 'X'
    } else if (clickCount === 2) {
        box1.innerHTML = '0'; // Second click: set to '0'

        // Remove the event listener after the second click
        box1.removeEventListener('click', handleClick);
    }
});


// let clicked = false;

// box1.addEventListener('click', function (event) {
//     if (!clicked) {
//         if (box1.innerHTML == '' || box1.innerHTML == '0') {
//             box1.innerHTML = 'X';
//         } else {
//             box1.innerHTML = '0';
//         }
//         clicked = true; // Mark the event as executed
//     }
// });

// box1.addEventListener('click', function Toggle(event) {
//     if (box1.innerHTML == '' || box1.innerHTML == '0' ) { 
//         box1.innerHTML = 'X'; 
//     } else {
//         box1.innerHTML = '0'; 
//     }
//     box1.removeEventListener('click',Toggle)

// });


let ClickCount = 0; // Counter to track clicks

box2.addEventListener('click', function handleClick(event) {
    ClickCount++; // Increment the click count

    if (ClickCount === 1) {
        box2.innerHTML = 'X'; // First click: set to 'X'
    } else if (ClickCount === 2) {
        box2.innerHTML = '0'; // Second click: set to '0'

        // Remove the event listener after the second click
        box2.removeEventListener('click', handleClick);
    }
});


let ClckCount = 0; // Counter to track clicks

box3.addEventListener('click', function handleClick(event) {
    ClckCount++; // Increment the click count

    if (ClckCount === 1) {
        box3.innerHTML = 'X'; // First click: set to 'X'
    } else if (ClckCount === 2) {
        box3.innerHTML = '0'; // Second click: set to '0'

        // Remove the event listener after the second click
        box3.removeEventListener('click', handleClick);
    }
});


let ClikCount = 0; // Counter to track clicks

box4.addEventListener('click', function handleClick(event) {
    ClikCount++; // Increment the click count

    if (ClikCount === 1) {
        box4.innerHTML = 'X'; // First click: set to 'X'
    } else if (ClikCount === 2) {
        box4.innerHTML = '0'; // Second click: set to '0'

        // Remove the event listener after the second click
        box4.removeEventListener('click', handleClick);
    }
});


let CickCount = 0; // Counter to track clicks

box5.addEventListener('click', function handleClick(event) {
    CickCount++; // Increment the click count

    if (CickCount === 1) {
        box5.innerHTML = 'X'; // First click: set to 'X'
    } else if (CickCount === 2) {
        box5.innerHTML = '0'; // Second click: set to '0'

        // Remove the event listener after the second click
        box5.removeEventListener('click', handleClick);
    }
});


let ClickCunt = 0; // Counter to track clicks

box6.addEventListener('click', function handleClick(event) {
    ClickCunt++; // Increment the click count

    if (ClickCunt === 1) {
        box6.innerHTML = 'X'; // First click: set to 'X'
    } else if (ClickCunt === 2) {
        box6.innerHTML = '0'; // Second click: set to '0'

        // Remove the event listener after the second click
        box6.removeEventListener('click', handleClick);
    }
});


let ClickCont = 0; // Counter to track clicks

box7.addEventListener('click', function handleClick(event) {
    ClickCont++; // Increment the click count

    if (ClickCont === 1) {
        box7.innerHTML = 'X'; // First click: set to 'X'
    } else if (ClickCont === 2) {
        box7.innerHTML = '0'; // Second click: set to '0'

        // Remove the event listener after the second click
        box2.removeEventListener('click', handleClick);
    }
});

let ClickCoun = 0; // Counter to track clicks

box8.addEventListener('click', function handleClick(event) {
    ClickCoun++; // Increment the click count

    if (ClickCoun === 1) {
        box8.innerHTML = 'X'; // First click: set to 'X'
    } else if (ClickCoun === 2) {
        box8.innerHTML = '0'; // Second click: set to '0'

        // Remove the event listener after the second click
        box8.removeEventListener('click', handleClick);
    }
});


let ClickCout = 0; // Counter to track clicks

box9.addEventListener('click', function handleClick(event) {
    ClickCout++; // Increment the click count

    if (ClickCout === 1) {
        box9.innerHTML = 'X'; // First click: set to 'X'
    } else if (ClickCout === 2) {
        box9.innerHTML = '0'; // Second click: set to '0'

        // Remove the event listener after the second click
        box9.removeEventListener('click', handleClick);
    }
});

   
    
  


btn.addEventListener('click', function(e){
         box1.innerHTML = ''
         box2.innerHTML = ''
         box3.innerHTML = ''
         box4.innerHTML = ''
         box5.innerHTML = ''
         box6.innerHTML = ''
         box7.innerHTML = ''
         box8.innerHTML = ''
         box9.innerHTML = ''
})
    
