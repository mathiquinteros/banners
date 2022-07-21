

function calculo(){
    let precioBanner = document.getElementById("precioBanner").value;
    let uno = document.getElementById("uno").value;
    let dos = document.getElementById("dos").value;
    let varillas = document.getElementById("varillas").value;
    
    
    let resultado = ((uno*dos)*precioBanner)+(varillas*2);
   

    let preciosug = resultado+600;
    
   
    document.getElementById("precio").innerHTML = resultado+" $ con varillas de: "+varillas+"$";
    
  
        document.getElementById("preciosug").innerHTML = preciosug+"$";
    
    
}