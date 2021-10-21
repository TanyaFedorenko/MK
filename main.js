const $blockMain = document.querySelector('.root');
const $blockArena = document.querySelector('.arenas');
const $blockRoot = document.createElement('div');
const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];


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
    },
    changeHP,
    elHP,
    renderHP
}

const fighter1 = {
    player: 2,
    name: 'KITANA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    },
    changeHP,
    elHP,
    renderHP
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


function getRandom(num) {
    return Math.floor(Math.random() * (num - 0) + 0);
}

function changeHP(value) {
    this.hp -= value;
    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function elHP() {
    const playerLife = document.querySelector(`.player${this.player} .life`);
    return playerLife;
}

function renderHP() {
    this.elHP().style.width = `${this.hp}%`;
}

function createReloadButton() {
    const $reloadWrap = document.createElement('div');
    const $reloadBtn = document.createElement('button');
    $reloadWrap.classList.add('reloadWrap');
    $reloadBtn.classList.add('button');
    $reloadBtn.innerText = 'Restart';
    $reloadWrap.insertAdjacentElement('afterbegin', $reloadBtn);
    $reloadBtn.addEventListener('click', () => {
        window.location.reload()
    })
    return $blockArena.insertAdjacentElement('afterbegin', $reloadWrap);

}

function playerLose(name) {
    const $loseTitle = document.createElement('div');
    $loseTitle.classList.add('loseTitle');
    $loseTitle.innerText = `${name} lose`;
    return $loseTitle;
}


function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit: hit,
        defence,
    }
}

function changeFighter(obj1, obj2, player, player1) {
    obj1.hit === obj2.defence ? obj1.value = 0 : player.changeHP(obj1.value);
    obj2.hit === obj1.defence ? obj2.value = 0 : player1.changeHP(obj2.value);
    player.elHP();
    player1.elHP();
    player.renderHP();
    player1.renderHP();
}


$formFight.addEventListener('submit', (e) => {
    e.preventDefault();
    const enemy = enemyAttack();
    const attack = {};

    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        item.checked = false;
    }
    changeFighter(enemy, attack, fighter, fighter1);

    if (fighter1.hp <= 0 && fighter.hp <= 0) {
        for (let item of $formFight) {
            if (item.type === 'submit') {
                item.disabled = true
            }
        }
        alert('DRAW');
        createReloadButton();

    } else if (fighter1.hp <= 0 || fighter.hp <= 0) {
        for (let item of $formFight) {
            if (item.type === 'submit') {
                item.disabled = true
            }
        }
        fighter.hp <= 0 ? $blockArena.appendChild(playerLose(fighter.name)) : $blockArena.appendChild(playerLose(fighter1.name))
        createReloadButton();

    }
})