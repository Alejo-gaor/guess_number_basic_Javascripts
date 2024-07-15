
//---- Variables -------
rangeNumberGuess = 10//Range of number to guess
secretNumber = Math.floor((Math.random()*rangeNumberGuess)+1);//Generate a number within the specified range
    console.log(secretNumber);//Secret Number

numUser = 0;
attemptsUSer = 1;
chances = 3 //Chances for the user to guess the number
error = chances

alert(`The hidden number is within the range of (0) to (${rangeNumberGuess}).\nGuess the hidden number before the allowed attempts.\nYou have ${chances} ${chances > 1 ? 'attempts' : 'attempt'}`)
while(numUser != secretNumber){
    numUser = parseInt(prompt('Enter a number: '));
    if(secretNumber == numUser){
        //When the user enters the correct number
        alert(`Congratulations. You guessed the secret number (${secretNumber}) in (${attemptsUSer}) ${attemptsUSer > 1 ? 'attempts' : 'attempt'} `);
    }else{
        //When the user doesn't guess the number
        error -=1;
        if (error > 0){//Attempt controller
            alert(`You have ${error} ${error>1 ? 'attempts' : 'attempt'}`)
        }else{            
            alert("I'm sorry. You're out of chances");
            break;     
        }
        

        if(secretNumber > numUser){//Hints for the user
            alert('The secret number is higher');
        }else{
            alert('The secret number is lower');
        }
        attemptsUSer += 1;//Attempt accumulator       
    }
}

