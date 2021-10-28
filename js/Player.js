
class Player {
    constructor(props) {
        this.player=props.player,
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
        console.log('he');
        this.elHP().style.width = `${this.hp}%`;
    };
    

}
export const fighter =new Player({
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],

})
export const fighter1 =new Player({
    player: 2,
    name: 'KITANA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
})
