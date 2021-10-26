//Функция вывода действий боя
export const generateLogs =(type, name, name1, obj, funcDate,funcRandom, item) =>{
   
    let text;
    let el;
    switch(type){
        case 'hit':
            text = obj[type][funcRandom(obj[type].length) - 1].replace('[playerKick]',name).replace('[playerDefence]', name1);
            el = `<p>${funcDate()} ${text}</p>`;
            item.insertAdjacentHTML('afterbegin', el);   
            break;
        case 'start':
            text =obj.start.replace('[time]', `${funcDate()}`).replace('[player1]', name).replace('[player2]',name1);
            el = `<p> ${text}</p>`;
            item.insertAdjacentHTML('afterbegin', el);
            break;
        case 'end':            
            text = obj[type][funcRandom(obj[type].length) - 1].replace('[playerLose]', name).replace('[playerWins]', name1);
            el = `<p>${funcDate()} ${text}</p>`
            item.insertAdjacentHTML('afterbegin', el);
            break;
        case 'defence':
            text = obj[type][funcRandom(obj[type].length) - 1].replace('[playerKick]', name).replace('[playerDefence] ', name1);
            el = `<p>${funcDate()} ${text}</p>`
            item.insertAdjacentHTML('afterbegin', el);
            break;
    }
}