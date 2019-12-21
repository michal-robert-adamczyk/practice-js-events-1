const MouseMove = function (){
    console.log('mousemove');
};
const MouseLeave = function (){
    console.log('mouseleave');
};
document.addEventListener('DOMContentLoaded', function()
{    
    const div = document.querySelector('div');
    div.addEventListener('mousemove',MouseMove);
    div.addEventListener('mouseleave',MouseLeave);
});
