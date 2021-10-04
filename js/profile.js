function openConfig(){
    let modal_background = document.getElementById('modal_background');
    if(modal_background.classList.contains('none')){
        modal_background.classList.remove('none');
    }
}
function closeConfig(){
    let modal_background = document.getElementById('modal_background');
    modal_background.classList.add('none');
};