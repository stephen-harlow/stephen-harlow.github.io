function change(event){
    event.preventDefault();
    var offset = $('#draggable').offset(); 
    var x = event.pageX - offset.left;
    var y = event.pageY - offset.top;
    var title = document.getElementById('title');
    title.innerHTML = x + ',' + y + ')))';

}
$(document).ready(function(){
    var touchzone = document.getElementById("draggable");

    touchzone.addEventListener("touchmove", draw, false);
    touchzone.addEventListener("touchend", end, false);
});
function draw(e) {
    e.preventDefault();
    var offset = $('#draggable').offset(); 

    //Iterate over all touches
    for(var i=0;i<e.touches.length;i++) {
        var x = e.touches[i].pageX - offset.left;
        var y = e.touches[i].pageY - offset.top;
        title.innerHTML = x + ',' + y + ')))';

    }

}

function end(e) {
    e.preventDefault();
    for(var i=0;i<e.changedTouches.length;i++) {
        var id = e.changedTouches[i].identifier;
        // Terminate this touch
    }
} 