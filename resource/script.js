let usersEmail = ['LucaSasso@gmail.com', 'AndreaSgura@gmail.com', 'NicolaFilannino@gmail.com', 'SashaPoliti@gmail.com']
let login = document.getElementById('login');


login.addEventListener('click', function () {
    let userEmail = document.getElementById('email').value;
    let messageLogin = document.getElementById('messageLogin');
    let check = false;

    for (let i = 0; i < usersEmail.length; i++) {
        console.log(usersEmail[i]);    
        if (userEmail === usersEmail[i]) {       
            check = true;
                    
        }
    }



    // verificare se ho trovato la mail e inserire il messaggio
    if (check){
        messageLogin.innerHTML= 'ciao';
    } else {
        messageLogin.innerHTML= 'non sei registrato';
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
    dadiUser.setAttribute('src',`dadi/${userNumber}.svg`);
    imgDadi.appendChild(dadiComputer);
    imgDadi.appendChild(dadiUser);
   
   

})