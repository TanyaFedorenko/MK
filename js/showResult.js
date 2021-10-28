import { getRandom } from "./getRandom.js";
import { createReloadButton } from "./createReloadButton.js";
//функция показывает результат боя "НИЧЬЯ" либо кто из бойцов погиб
export const showResult=(player, player1, funcDate,funcLose, funcLogs, itemForm,itemBlock,itemChat, obj) =>{
    if (player1.hp <= 0 && player.hp <= 0) {
        for (let item of itemForm) {
            if (item.type === 'submit') {
                item.disabled = true
            }
        }
        itemChat.insertAdjacentHTML('afterbegin', `<p> ${obj.draw}</p>`)
        createReloadButton();


    } else if (player1.hp <= 0 || player.hp <= 0) {
        for (let item of itemForm) {
            if (item.type === 'submit') {
                item.disabled = true
            }
        }

        if(player.hp <= 0 ){
            itemBlock.appendChild(funcLose(player.name));
            funcLogs('end', player,player1, obj,funcDate,getRandom,itemChat);
        }
        else{
            itemBlock.appendChild(funcLose(player1.name)); 
            funcLogs('end', player1,player,obj,funcDate,getRandom,itemChat);
        }
    

        createReloadButton();
        document.querySelector('.reloadWrap .button').addEventListener('click',()=>{
            window.location.reload()
        });
    }
}

