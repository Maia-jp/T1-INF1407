let regex = /((b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+\[((b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+\|)+(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+])/

onload = function(){
    this.document.getElementById("mailBTN").addEventListener("click", logar)
}


function logar() {
    var user = document.getElementById("mail").value
    
    if (!regex.test(user)){
        alert("Ohhh nao, seu email nao eh valido!")
    }else{
        window.open('./index.html')
    }
    
    console.log(user)
}