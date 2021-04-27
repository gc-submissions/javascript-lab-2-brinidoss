"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() *2);
    randNum = 0 ? opt1 : opt2;
}

function attackPlayer(health) {
    return health = health - randomDamage
}

const logHealth = (player, health) => {
    console.log(`Player: ${player} Health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`)
}

const isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
}

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1,player2);
        if (attacker == player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            isDead(player2Health) {
              //  if             }

        }
    } 
}