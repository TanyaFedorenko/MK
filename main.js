
const $blockMain = document.querySelector('.root');
const $blockArena =document.querySelector('.arenas')
const $blockRoot = document.createElement('div');



function createPlayer(name,player) {
    const $blockLife = document.createElement('div');
    const $blockPlayer = document.createElement('div'),
        $blockProgressbar=document.createElement('div'),
        $blockName=document.createElement('div'),
        $blockCharacter=document.createElement('div'),
        imgPlayer = document.createElement('img');
        imgPlayer.src = `${player.img}`;
    $blockLife.style.width = '100%';
    $blockLife.innerText=`${player.hp}`;
    $blockName.innerText=`${player.name}`;
    $blockProgressbar.classList.add('progressbar');
    $blockPlayer.classList.add('player1')
    $blockName.classList.add('name');
    $blockLife.classList.add('life');
    $blockCharacter.classList.add('haracter');
    $blockCharacter.appendChild(imgPlayer);
    $blockProgressbar.appendChild($blockLife);
    $blockProgressbar.appendChild($blockName);
    $blockPlayer.appendChild($blockProgressbar);
    $blockPlayer.appendChild( $blockCharacter);



return  $blockPlayer
    
    
};



let fighter = {
    name: 'SCORPION',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}

let fighter1 = {
    name: 'KITANA',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}
let fighter2 = {
    name: 'LIUKANG',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}

let fighter3 = {
    name: 'SONYA',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}
let fighter4 = {
    name: 'SUBZERO',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }
}


//createPlayer(fighter) ;
//createPlayer(fighter1) 
$blockArena.appendChild(createPlayer('ghbdt',fighter));
$blockArena.appendChild(createPlayer('ghj',fighter1));
