const AddClass = function(e){
    this.classList.add('clicked');
}
    

const removeAllClicked = function(e){
    if(e.target.tagName=='BODY'){
        console.log('usuń');
        const divList = document.querySelectorAll('div');
        for(let i=0; i<divList.length; i++){
            divList[i].classList.remove('clicked');
    
        };
    };
};

document.addEventListener('DOMContentLoaded', function(){
    
    const divList = document.querySelectorAll('div');
    for(let i=0; i<divList.length; i++){
        divList[i].addEventListener('click', AddClass);

    };
    const body = document.querySelector('body');
    body.addEventListener('click', removeAllClicked);
});