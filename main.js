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
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP
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
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP
}
console.log(fighter1.elHP)
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

function changeHP(func) {
    this.hp -= func;
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
function createReloadButton(){
    const $reloadWrap= document.createElement('div');
    const $reloadBtn=document.createElement('button');
    $reloadWrap.classList.add('reloadWrap');
    $reloadBtn.classList.add('button');
    $reloadBtn.innerText='Restart';
    $reloadWrap.insertAdjacentElement('afterbegin',$reloadBtn);
    return  $blockArena.insertAdjacentElement('afterbegin', $reloadWrap);
    
}
function playerLose(name){
    const $loseTitle=document.createElement('div');
    $loseTitle.classList.add('loseTitle');
    $loseTitle.innerText = `${name} lose`;
    return $loseTitle;
}
//$blockArena.appendChild(playerLose(fighter.name));

$buttonFight.addEventListener('click', () => {
    fighter.changeHP(getRandom(20));
    fighter1.changeHP(getRandom(20));
    fighter.elHP();
    fighter1.elHP();
    fighter.renderHP();
    fighter1.renderHP();
    if (fighter1.hp <= 0 && fighter.hp <= 0) {
        $buttonFight.disabled = true;
        alert('DRAW');
        createReloadButton();
        document.querySelector('.reloadWrap .button').addEventListener('click',()=>{
        window.location.reload()
    })
    } else if (fighter1.hp <= 0 || fighter.hp <= 0) {    
        $buttonFight.disabled = true;
        fighter.hp <= 0 ? $blockArena.appendChild(playerLose(fighter.name)):$blockArena.appendChild(playerLose(fighter1.name))
       // fighter.hp <= 0 ? alert(`${fighter1.name} WINS`) : alert(`${fighter.name} WINS`);
        createReloadButton();
        document.querySelector('.reloadWrap .button').addEventListener('click',()=>{
            window.location.reload()
        })

    }

})