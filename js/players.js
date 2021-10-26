//бойцы-------------------
export const fighter = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
   /* attack: attacks = () => {
        console.log(`${this.name} Fight`)
    },*/
    changeHP,
    elHP,
    renderHP
}
export const fighter1 = {
    player: 2,
    name: 'KITANA',
    hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
    /*attack: attacks = () => {
        console.log(`${this.name} Fight`)
    },*/
    changeHP,
    elHP,
    renderHP
}


export const fighter2 = {
    name: 'LIUKANG',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
   /* attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }*/
}
export const fighter3 = {
    name: 'SONYA',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
   /* attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }*/
}
export const fighter4 = {
    name: 'SUBZERO',
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['air gun', 'axe', 'bat', 'bazooka', 'dagger', 'pistol'],
  /*  attack: attacks = () => {
        console.log(`${this.name} Fight`)
    }*/
}
export function changeHP(value) {
    this.hp -= value;

    if (this.hp <= 0) {
        this.hp = 0;
    }
}

export function elHP() {
    const playerLife = document.querySelector(`.player${this.player} .life`);
    return playerLife;
}

export function renderHP() {
    this.elHP().style.width = `${this.hp}%`;
}

