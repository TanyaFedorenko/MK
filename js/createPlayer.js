export const createPlayer = (player) => {
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