

document.getElementById('submit').addEventListener('click', textGenerator);

function textGenerator()
{
    var text=document.getElementById('text').value;
    var color=document.getElementById('color').value;
    var fontStyle=document.getElementById('font-style').value;
    var size=document.getElementById('size').value;
    var textAlign=document.getElementById('text-align').value;
    var run = document.getElementById('run');
    run.innerHTML = text;
    run.style.color = color;
    run.style.fontStyle=fontStyle;
    run.style.fontSize=size;
    run.style.textAlign=textAlign;
}