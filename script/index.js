
let div = document.getElementById('div1');
let del = document.getElementById("del");
del.addEventListener("click", function(){
    console.log("log");
    
    div.remove()
})
