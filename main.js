const $blockMain = document.querySelector('.root');
const $blockArena = document.querySelector('.arenas');
const $blockRoot = document.createElement('div');
const $buttonFight = document.querySelector('button');



function createPlayer(name, player) {
    const $blockLife = document.createElement('div');
    const $blockPlayer = document.createElement('div');
    const $blockProgressbar = document.createElement('div');
    const $blockName = document.createElement('div');
    const $blockCharacter = document.createElement('div');
    const imgPlayer = document.createElement('img');
    imgPlayer.src = `${player.img}`;
    $blockLife.style.width = '100%';
    $blockName.innerText = `${player.name}`;
    $blockProgressbar.classList.add('progressbar');
    $blockPlayer.classList.add(`player${player.player}`)
    $blockName.classList.add('name');
    $blockLife.classList.add('life');
    $blockCharacter.classList.add('character');
    $blockCharacter.appendChild(imgPlayer);
    $blockProgressbar.appendChild($blockLife);
    $blockProgressbar.appendChild($blockName);
    $blockPlayer.appendChild($blockProgressbar);
    $blockPlayer.appendChild($blockCharacter);
    return $blockPlayer
};



const fighter = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}

const fighter1 = {
    player: 2,
    name: 'KITANA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}
const fighter2 = {
    name: 'LIUKANG',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}

const fighter3 = {
    name: 'SONYA',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}
const fighter4 = {
    name: 'SUBZERO',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}

$blockArena.appendChild(createPlayer('ghj', fighter));
$blockArena.appendChild(createPlayer('ghbdt', fighter1));

function changeHP(play) {
    const playerLife = document.querySelector(`.player${play.player} .life`);

    play.hp -= Math.floor(Math.random() * (20 - 0) + 0);
    playerLife.style.width = `${play.hp}%`;
    console.log(play.hp)

};



$buttonFight.addEventListener('click', () => {

    changeHP(fighter);
    changeHP(fighter1);
    if (fighter1.hp <= 0 && fighter.hp <= 0) {
        $buttonFight.disabled = true;
        alert('DRAW');
        document.querySelector(`.player${fighter.player} .life`).style.width = `0%`;
        document.querySelector(`.player${fighter1.player} .life`).style.width = `0%`;
    } else if (fighter1.hp <= 0 || fighter.hp <= 0) {
        $buttonFight.disabled = true;
        fighter.hp <= 0 ? alert(`${fighter1.name} WINS`) : alert(`${fighter.name} WINS`);
        fighter.hp <= 0 ? document.querySelector(`.player${fighter.player} .life`).style.width = `0%` : document.querySelector(`.player${fighter1.player} .life`).style.width = `0%`;
    }

})