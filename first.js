console.log("working")
var sts = document.querySelector("h4")
var check =0

var addF = document.getElementById("add")
addF.addEventListener("click",function(){
    if(check==0){
        sts.innerHTML="Friends"
        sts.style.color ="green"
        addF.style.backgroundColor = "blue"
        addF.innerHTML = "remove Friend"
        check = 1
    }
    else{
        sts.innerHTML="Unfriends"
        sts.style.color ="red"
        addF.innerHTML ="Add Friends"
        addF.style.backgroundColor = "grey"
        check = 0
    }
    
})


var remove = document.getElementById("remove")
remove.addEventListener("click",function(){
    sts.innerHTML="removed"

    remove.style.backgroundColor = "red"
}
)
alert("hi")