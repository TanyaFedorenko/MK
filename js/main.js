import {fighter, fighter1 } from "./Player.js";
import{logs} from './logs.js';
import{HIT, ATTACK } from './enemyAttack.js';
import{$blockArena,$formFight,$chat } from './veriables.js';
import Game from './game.js';

const game = new Game($blockArena, fighter,fighter1, logs, ATTACK, HIT,$chat, $formFight );
game.start(); 


//----------------------
//создание стартовой страницы





