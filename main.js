invitados = [];

function Enviar(){
    var NvoInvitado = document.getElementById("nombInv").value;
    invitados.push(NvoInvitado);
    console.log(invitados);
}

function Display(){
    var nuevoinvitado = [];
    var longi = invitados.length;
    console.log(longi);
    for(var i=0; i<longi; i++){
        nuevoinvitado.push("<h4> "+ invitados[i] + "</h4>");
    }
    document.getElementById("mostrar").innerHTML = nuevoinvitado.join("");
}

function Ord(){
    var NombOrdenados = [];
    var l = invitados.length;
    invitados.sort();
    console.log(invitados);

    for( var j=0; j<l; j++){
        NombOrdenados.push("<h4> "+ invitados[j] + "</h4>");
    }
    document.getElementById("ordenar").innerHTML = NombOrdenados.join("");
}

function buscar(){
   var s = document.getElementById("NombBuscar").value;
   var f = 0;
   for(var k=0; k<invitados.length; k++){
        if( s == invitados[k]){
            f = f+1;
        }
   } 
   document.getElementById("Si").innerHTML = "Persona Invitada";
}