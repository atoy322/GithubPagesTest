function increment(){
    var element = document.getElementById("buttontext");
    var count = element.innerHTML.split(" ")[2];
    count = Number(count);
    element.innerHTML = "count = " + String(count + 1);
}