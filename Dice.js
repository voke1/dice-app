"use strict";
const getSumOfRolls = (rolls) => {

    let sumOfRolls;
    let rollArray = [];

    //get array of dice rolls from user
    rolls = document.getElementById("inputfield").value.split(',').map(element => parseInt(element));

    //add first roll to rollArray
    rollArray.push(rolls[0]);

    for (let index = 0; index < rolls.length; index++) {

        //if roll is 1, set  next roll to 0 and add to rollArray
        if (rolls[index] === 1) {
            rollArray.push(rolls[index + 1] * 0);

            //if roll is 6, amplify next roll by 2 and add to rollArray
        } else if (rolls[index] === 6) {
            rollArray.push(rolls[index + 1] * 2);

            //Handling exception cases
        } else if ((6 < rolls[index]) || (Number.isNaN(rolls[index])) || (rolls[index] < 1)) {
            return (document.getElementById("showResult").innerHTML = `Please enter valid roll. Value must range from 1 - 6`);

            //else, add next roll to rollArray
        } else {
            rollArray.push(rolls[index + 1]);
        }
    }

    //Sum all rolls in rollArray and return result.
    rollArray.pop();
    sumOfRolls = rollArray.reduce((a, b) => a + b);
    document.getElementById("showResult").innerHTML = `Your Result: ${sumOfRolls}`;
};
