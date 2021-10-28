import{getRandom} from './getRandom.js';

export const ATTACK = ['head', 'body', 'foot'];

export const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}


//создание атаки врага
export const  enemyAttack=()=> {
    let defence = ATTACK[getRandom(3)-1];
    let hit = ATTACK[getRandom(3)-1];
    return {
        value: getRandom(HIT[hit]),
        hit: hit,
        defence,
    }
}