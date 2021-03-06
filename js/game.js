export default class Game {
    constructor(arena, player, enemy, logs, attack, hit, chat, formFight) {
        this.arena = arena,
            this.enemy = enemy,
            this.player = player,
            this.logs = logs,
            this.attack = attack,
            this.hit = hit,
            this.chat = chat,
            this.formFight = formFight
    }


    enemyAttack = () => {
        let defence = this.attack[this.getRandom(3) - 1];
        let hit = this.attack[this.getRandom(3) - 1];
        return {
            value: this.getRandom(this.hit[hit]),
            hit: hit,
            defence,
        }
    }
    playerAttack = (form, func, hit) => {
        const attack1 = {};
        for (let item of form) {
            if (item.checked && item.name === 'hit') {
                attack1.value = func(hit[item.value]);
                attack1.hit = item.value;
            }
            if (item.checked && item.name === 'defence') {
                attack1.defence = item.value;
            }
            item.checked = false;
        }
        return attack1;
    }
    createReloadButton =() =>{
        const $reloadWrap = document.createElement('div');
        const $reloadBtn = document.createElement('button');
        $reloadWrap.classList.add('reloadWrap');
        $reloadBtn.classList.add('button');
        $reloadBtn.innerText = 'Restart';
        $reloadWrap.insertAdjacentElement('afterbegin', $reloadBtn);
        $reloadBtn.addEventListener('click', () => {
            window.location.reload()
        })
        return this.arena.insertAdjacentElement('afterbegin', $reloadWrap);
    
    }

    playerLose = (name) => {
        const $loseTitle = document.createElement('div');
        $loseTitle.classList.add('loseTitle');
        $loseTitle.innerText = `${name} lose`;
        return $loseTitle;
    }

    createPlayer = (player) => {
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
    }

    getRandom = (num) => {
        return Math.floor(Math.random() * (num - 1) + 1);
    }
    createDate = () => {
        const date = ` ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
        return date
    }

    showResult=(player, player1, funcDate,funcLose, funcLogs, itemForm,itemBlock,itemChat, obj) =>{
        if (player1.hp <= 0 && player.hp <= 0) {
            for (let item of itemForm) {
                if (item.type === 'submit') {
                    item.disabled = true
                }
            }
            itemChat.insertAdjacentHTML('afterbegin', `<p> ${obj.draw}</p>`)
            this.createReloadButton();
    
    
        } else if (player1.hp <= 0 || player.hp <= 0) {
            for (let item of itemForm) {
                if (item.type === 'submit') {
                    item.disabled = true
                }
            }
    
            if(player.hp <= 0 ){
                itemBlock.appendChild(funcLose(player.name));
                funcLogs('end', this.player,this.enemy, obj,funcDate,this.getRandom,itemChat);
            }
            else{
                itemBlock.appendChild(funcLose(player1.name)); 
                funcLogs('end', this.enemy,this.player,obj,funcDate,getRandom,itemChat);
            }
        
    
            this.createReloadButton();
            document.querySelector('.reloadWrap .button').addEventListener('click',()=>{
                window.location.reload()
            });
        }
    }
    generateLogs = (type, name, name1, obj, funcDate, funcRandom, item) => {

        let text;
        let el;
        switch (type) {
            case 'hit':
                text = obj[type][funcRandom(obj[type].length) - 1].replace('[playerKick]', name).replace('[playerDefence]', name1);
                el = `<p>${funcDate()} ${text}</p>`;
                item.insertAdjacentHTML('afterbegin', el);
                break;
            case 'start':
                text = obj.start.replace('[time]', `${funcDate()}`).replace('[player1]', name).replace('[player2]', name1);
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

    start = () => {
        console.log(this.logs)
        this.arena.appendChild(this.createPlayer(this.player));
        this.arena.appendChild(this.createPlayer(this.enemy));
        this.generateLogs('start', this.player.name, this.player.name1, this.logs, this.createDate, this.getRandom, this.chat)




        // ????????????
        this.formFight.addEventListener('submit', (e) => {
            e.preventDefault(); //?????????????????? ???????????????????????? ????????????????
            //???????????????? ?????????? ??????????
            let enemy = this.enemyAttack();

            /*if (isNaN(enemy.value)) {
                enemy = enemyAttack();
                return enemy.value;
            }*/
            //???????????????? ?????????? ????????????
            const player = this.playerAttack(this.formFight, this.getRandom, this.hit);

            //???????????????? ???? ???????????????????? ????????????
            if (player.defence !== enemy.hit) {
                this.player.changeHP(enemy.value);
                this.player.renderHP();
                //?????????? ??????????????  generateLogs
                this.generateLogs('hit', this.enemy.name, this.player.name, this.logs, this.createDate, this.getRandom, this.chat);
            } else {
                this.generateLogs('defence', this.enemy.name, this.player.name, this.logs, this.createDate, this.getRandom, this.chat)
            }
            if (enemy.defence !== player.hit) {
                this.enemy.changeHP(player.value);
                console.log(this.enemy.hp)
                this.enemy.renderHP();
                //?????????? ??????????????  generateLogs
                this.generateLogs('hit', this.player.name, this.enemy.name, this.logs, this.createDate, this.getRandom, this.chat);
            } else {

                this.generateLogs('defence', this.player.name, this.enemy.name, this.logs, this.createDate, this.getRandom, this.chat);
            }

            this.showResult(this.player, this.enemy, this.createDate, this.playerLose, this.generateLogs, this.formFight, this.arena, this.chat, this.logs);
        });

    }
}