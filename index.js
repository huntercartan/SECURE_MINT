const characters = ["A", "B", "C", "D", "E", "F", 
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
     "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
     "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
     "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
      "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
       "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
        "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?","/"];


      let buttonEl = document.querySelector("#generate-btn");
      let password1 = document.querySelector("#password1-el");
      let password2 = document.querySelector("#password2-el");


      function randomPassword(){

        let passwordOne = ""
      let passwordTwo = ""
        for (let i=0; i < 16; i++){
            let randomIndex = Math.floor (Math.random() * characters.length);
            let randomCharacters = characters[randomIndex]
            passwordOne += randomCharacters

        }
        for (let i=0; i < 16; i++){
            let randomIndex = Math.floor (Math.random() * characters.length);
            let randomCharacters = characters[randomIndex]
            passwordTwo += randomCharacters
        }
        password1.textContent = passwordOne
        password2.textContent = passwordTwo
    }

    





    

