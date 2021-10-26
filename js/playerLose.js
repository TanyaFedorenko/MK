export const  playerLose=(name)=> {
    const $loseTitle = document.createElement('div');
    $loseTitle.classList.add('loseTitle');
    $loseTitle.innerText = `${name} lose`;
    return $loseTitle;
}
