const MouseMove = function (){
    console.log('mousemove');
};

document.addEventListener('DOMContentLoaded', function()
{    
    const div = document.querySelector('div');
    
    // console.log('jest');
    div.addEventListener('mousemove',MouseMove);
});
