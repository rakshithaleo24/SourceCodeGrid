window.onload=function(){
var list = document.getElementById("boxes"),
button = document.getElementById("swap");
function shuffle(items)
{
    var cached = items.slice(0), temp, i = cached.length, rand;
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function swapBoxes()
{
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while(i < nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
} 
document.getElementById("swap").onclick = swapBoxes;
  function sortList() {
   window.onload();
}
  document.getElementById("sort").onclick = sortList();
}

