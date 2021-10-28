import{fighter, fighter1} from './players.js';
import{playerLose} from './playerLose.js';
import{createPlayer} from './createPlayer.js';
import{logs} from './logs.js';
import{getRandom} from './getRandom.js';
import{enemyAttack,HIT, ATTACK } from './enemyAttack.js';
import{playerAttack} from './playerAttack.js';
import { generateLogs } from './generateLogs.js';
import { showResult } from './showResult.js';
import { createDate } from './createDate.js';
import{$blockMain,$blockArena,$blockRoot,$formFight,$chat } from './veriables.js';

const {name} = fighter;
const {name1} = fighter1;
//-----------------------
//создание стартовой страницы
$blockArena.appendChild(createPlayer('player1', fighter));
$blockArena.appendChild(createPlayer('player2', fighter1));
generateLogs('start', fighter, fighter1, logs, createDate,getRandom,$chat)

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
    const player = playerAttack($formFight, getRandom, HIT);

    //проверка на отсутствие защиты
    if (player.defence !== enemy.hit) {
        fighter.changeHP(enemy.value);
        fighter.renderHP();
        //вызов функции  generateLogs
        generateLogs('hit', name1, name, logs,createDate,getRandom,$chat);
    }else{
        generateLogs('defence',name1, name,logs,createDate,getRandom,$chat )
    }
    if (enemy.defence !== player.hit) {
        fighter1.changeHP(player.value);
        fighter1.renderHP();
        //вызов функции  generateLogs
        generateLogs('hit', name, name1,logs,createDate, getRandom,$chat);
    }else{
    
        generateLogs('defence',name,  name1,logs,createDate, getRandom,$chat );
    }

    showResult(fighter,fighter1,createDate,playerLose,generateLogs, $formFight, $blockArena,$chat, logs);
});
