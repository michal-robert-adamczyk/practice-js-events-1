const callback = function(){
    console.log('clicked');
    this.innerText='clicked';
    this.removeEventListener('click', callback);
};

document.addEventListener('DOMContentLoaded', function(){
    const buttonList = document.querySelectorAll('button');
    // console.log(buttonList);
    buttonList.forEach(function(element, index){
        console.log(element); 
        element.addEventListener('click', callback);
    })
    
});
