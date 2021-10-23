const $blockMain = document.querySelector('.root');
const $blockArena = document.querySelector('.arenas');
const $blockRoot = document.createElement('div');
<<<<<<< Updated upstream
const $buttonFight = document.querySelector('button');

=======
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat')
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
>>>>>>> Stashed changes

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

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
//бойцы-------------------
const fighter = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    //img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    img: 'https://content2.rozetka.com.ua/goods/images/big/170339333.jpg',
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
    //img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    img: 'https://content2.rozetka.com.ua/goods/images/big/170339333.jpg',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    attack: attacks = () => {
        console.log(`${this.name} Fight`)
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP
}
<<<<<<< Updated upstream
console.log(fighter1.elHP)
=======
>>>>>>> Stashed changes
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
//-----------------------

//Функция генератор случайных чисел
function getRandom(num) {
    return Math.floor(Math.random() * (num - 1) + 1);
}
<<<<<<< Updated upstream

function changeHP(func) {
    this.hp -= func;
=======
//изменение жизни бойца
function changeHP(value) {
    this.hp -= value;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
function createReloadButton(){
    const $reloadWrap= document.createElement('div');
    const $reloadBtn=document.createElement('button');
=======
//кнопка перезагрузки
function createReloadButton() {
    const $reloadWrap = document.createElement('div');
    const $reloadBtn = document.createElement('button');
>>>>>>> Stashed changes
    $reloadWrap.classList.add('reloadWrap');
    $reloadBtn.classList.add('button');
    $reloadBtn.innerText='Restart';
    $reloadWrap.insertAdjacentElement('afterbegin',$reloadBtn);
    return  $blockArena.insertAdjacentElement('afterbegin', $reloadWrap);
    
}
<<<<<<< Updated upstream
function playerLose(name){
    const $loseTitle=document.createElement('div');
=======
// Блок отображения на экране проигравшего бойца
function playerLose(name) {
    const $loseTitle = document.createElement('div');
>>>>>>> Stashed changes
    $loseTitle.classList.add('loseTitle');
    $loseTitle.innerText = `${name} lose`;
    return $loseTitle;
}
<<<<<<< Updated upstream
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
=======
//создание атаки врага
function enemyAttack() {
    let defence = ATTACK[getRandom(3)-1];
    let hit = ATTACK[getRandom(3)-1];
    return {
        value: getRandom(HIT[hit]),
        hit: hit,
        defence,
    }
}
//функция создания атаки и защиты игрока
function playerAttack() {
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
    return attack;
}
//функция показывает результат боя "НИЧЬЯ" либо кто из бойцов погиб
function showResult() {
    if (fighter1.hp <= 0 && fighter.hp <= 0) {
        for (let item of $formFight) {
            if (item.type === 'submit') {
                item.disabled = true
            }
        }
        $chat.insertAdjacentHTML('afterbegin', `<p> ${logs.draw}</p>`)
        createReloadButton();

    } else if (fighter1.hp <= 0 || fighter.hp <= 0) {
        for (let item of $formFight) {
            if (item.type === 'submit') {
                item.disabled = true
            }
        }
        if(fighter.hp <= 0 ){
            $blockArena.appendChild(playerLose(fighter.name));
            generateLogs('end', fighter,fighter1);
        }
        else{
            $blockArena.appendChild(playerLose(fighter1.name)); 
            generateLogs('end', fighter1,fighter);
        }
    
>>>>>>> Stashed changes
        createReloadButton();
        document.querySelector('.reloadWrap .button').addEventListener('click',()=>{
            window.location.reload()
        })

    }
<<<<<<< Updated upstream

})
=======
}
//функция создание даты 
function createDate(){
    const date =` ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
    return date
}

//Функция вывода действий боя
function generateLogs(type, player1, player2) {
    let text;
    let el;
    switch(type){
        case 'hit':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            el = `<p>${createDate()} ${text}</p>`;
            $chat.insertAdjacentHTML('afterbegin', el);   
            break;
        case 'start':
            text =logs.start.replace('[time]', `${createDate()}`).replace('[player1]', player1.name).replace('[player2]', player2.name);
            el = `<p> ${text}</p>`;
            $chat.insertAdjacentHTML('afterbegin', el);
            break;
        case 'end':            
            text = logs[type][getRandom(logs[type].length) - 1].replace('[playerLose]', player1.name).replace('[playerWins]', player2.name);
            el = `<p>${createDate()} ${text}</p>`
            $chat.insertAdjacentHTML('afterbegin', el);
            break;
        case 'defence':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence] ', player2.name);
            el = `<p>${createDate()} ${text}</p>`
            $chat.insertAdjacentHTML('afterbegin', el);
            break;
    }
}
//создание стартовой страницы
$blockArena.appendChild(createPlayer('player1', fighter));
$blockArena.appendChild(createPlayer('player2', fighter1));
generateLogs('start', fighter, fighter1)

// кнопка
$formFight.addEventListener('submit', (e) => {
    e.preventDefault();//остановка перезагрузки страницы
//создание удара врага
    let enemy = enemyAttack();
    
    if (isNaN(enemy.value)) {
        enemy = enemyAttack();
        return enemy.value;
    }
//создание удара игрока
    const player = playerAttack();

    //проверка на отсутствие защиты
    if (player.defence !== enemy.hit) {
        fighter.changeHP(enemy.value);
        fighter.renderHP();
        //вызов функции  generateLogs
        generateLogs('hit', fighter1, fighter);
    }else{
        generateLogs('defence',fighter1, fighter1 )
    }
    if (enemy.defence !== player.hit) {
        fighter1.changeHP(player.value);
        fighter1.renderHP();
        //вызов функции  generateLogs
        generateLogs('hit', fighter, fighter1);
    }else{
    
        generateLogs('defence',fighter, fighter1 );
    }
    showResult();
});
>>>>>>> Stashed changes
