const cursor = document.querySelector('.cursor')
const colors = [
 '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',   
];
document.addEventListener('mousemove',(e)=>{
    moveCursor(e.pageX,e.pageY)
});
const moveCursor =function(pageX,pageY){
    cursor.style.left = pageX+'px';
    cursor.style.top = pageY+'px';

    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    cursor.style.background=randomColor
}