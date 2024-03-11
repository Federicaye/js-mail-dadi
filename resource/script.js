let usersEmail = ['LucaSasso@gmail.com', 'AndreaSgura@gmail.com', 'NicolaFilannino@gmail.com', 'SashaPoliti@gmail.com']
let login = document.getElementById('login');


login.addEventListener('click', function () {
    for (i = 0; i < usersEmail.length; i++) {
        let check = false;
        let userEmail = document.getElementById('email').value;
        if (userEmail === usersEmail[i]) {
            check = true;
            console.log (check);
        }
    }

})