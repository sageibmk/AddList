var inputt = document.querySelector(".input")
var btn = document.querySelector(".btn")
var itemList = document.querySelector(".items")

btn.addEventListener("click", ()=> {
    if(inputt.value === "" ){
       alert("you must add something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML= inputt.value;
        itemList.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)


        span.addEventListener("click", function () {
            li.remove();
        });
    }
    inputt.value = "";
})

// span.addEventListener("click", function(){
//     let li = document.querySelector("li")
//     li.remove()
// })