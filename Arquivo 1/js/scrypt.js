function insert (num){

    var numero = document.getElementById('screenresult').innerHTML;
     document.getElementById('screenresult').innerHTML = numero + num
 }

function clean (){
document.getElementById('screenresult').innerHTML = "";
}

function back (){
    var resultado = document.getElementById('screenresult').innerHTML;
    document.getElementById('screenresult').innerHTML = resultado.substring (0, resultado.length -1); 
}

function calcular (){
    
    var resultado = document.getElementById('screenresult').innerHTML;
    if (resultado){
        document.getElementById('screenresult').innerHTML = eval (resultado);
    }
    else{
        document.getElementById('screenresult').innerHTML = "Nenhum valor";
    }
}



