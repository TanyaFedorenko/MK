import {getRandom} from './getRandom.js'


class Player {
    constructor(props) {
        this.player = props.player,
            this.name = props.name,
            this.hp = props.hp,
            this.img = props.img,
            this.weapon = [];
    }
    changeHP(value) {
        this.hp -= value;

        if (this.hp <= 0) {
            this.hp = 0;
        }

    }
    /* attacks = () => {
            console.log(`${this.name} Fight`);
        };
    */
    elHP = () => {
        const playerLife = document.querySelector(`.player${this.player} .life`);
        return playerLife;

    };

    renderHP = () => {
        this.elHP().style.width = `${this.hp}%`;
    };


}

export const getPlayers = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/players')
    .then(res => res.json())
    .then(json => {
        const p1 = json[getRandom(json.length - 1)];
        const p2 = json[getRandom(json.length - 1)];

        const fighter = new Player({
            ...p1,
            player: 1,
            rootSelector: 'arenas'

        });
    
        const fighter1 = new Player({
            ...p2,
            player: 2,
            rootSelector: 'arenas'
        })


        return [fighter, fighter1]


    });
console.log(getPlayers[0])
console.log(getPlayers[1])