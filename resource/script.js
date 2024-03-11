let usersEmail = ['LucaSasso@gmail.com', 'AndreaSgura@gmail.com', 'NicolaFilannino@gmail.com', 'SashaPoliti@gmail.com']
let login = document.getElementById('login');


login.addEventListener('click', function () {
    for (i = 0; i < usersEmail.length; i++) {
        let check = false;
        let userEmail = document.getElementById('email').value;
        if (userEmail === usersEmail[i]) {
            check = true;
            console.log(check);
        }
    }

})

let randomNumber = document.getElementById('randomNumber');
randomNumber.addEventListener('click', function () {
    let userNumber = getRndInteger(1, 6);
    console.log(userNumber);
    let computerNumber = getRndInteger(1, 6);
    console.log(computerNumber);
    if (userNumber === computerNumber) {
        console.log('parità');
    } else if (userNumber > computerNumber){
        console.log('hai vinto')
    } else {
        console.log('hai perso')
    }
    let imgDadi = document.getElementById('dadiImg');
    let dadiComputer = document.createElement('img');
    dadiComputer.setAttribute('src',`dadi/${computerNumber}.svg`);
    let dadiUser = document.createElement('img');
    dadiComputer.setAttribute('src',`dadi/${userNumber}.svg`);
    imgDadi.appendChild(dadiComputer, dadiUser);
    /* imgDadi.appendChild(dadiUser); */

})