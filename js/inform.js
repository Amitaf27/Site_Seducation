
var soma = 0;
function mostrarInformsH(){
    var informs = document.getElementById('informHos').style.display;
     soma = soma + 1;
     if(soma % 2 == 0){
        document.getElementById('informHos').style.display = 'block';
     }else{
        document.getElementById('informHos').style.display = 'none';
     }
}

function mostrarInformsD(){
    var informs = document.getElementById('informDel').style.display;
     soma = soma + 1;
     if(soma % 2 == 0){
        document.getElementById('informDel').style.display = 'block';
     }else{
        document.getElementById('informDel').style.display = 'none';
     }
}