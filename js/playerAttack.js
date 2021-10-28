//функция создания атаки и защиты игрока
export const playerAttack=(form, func, hit)=> {
    const attack = {};
    for (let item of form) {
        if (item.checked && item.name === 'hit') {
            attack.value = func(hit[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        item.checked = false;
    }
    return attack;
}