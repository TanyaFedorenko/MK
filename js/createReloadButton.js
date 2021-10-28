import{$blockMain,$blockArena,$blockRoot,$formFight,$chat } from './veriables.js';
export const createReloadButton =() =>{
    const $reloadWrap = document.createElement('div');
    const $reloadBtn = document.createElement('button');
    $reloadWrap.classList.add('reloadWrap');
    $reloadBtn.classList.add('button');
    $reloadBtn.innerText = 'Restart';
    $reloadWrap.insertAdjacentElement('afterbegin', $reloadBtn);
    $reloadBtn.addEventListener('click', () => {
        window.location.reload()
    })
    return $blockArena.insertAdjacentElement('afterbegin', $reloadWrap);

}


