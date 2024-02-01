let textoDesencriptado;

function Desencriptar(){
    textoDesencriptado = document.getElementById('Entrada').value;
    textoDesencriptado = textoDesencriptado.replaceAll("enter", 'e');
    textoDesencriptado = textoDesencriptado.replaceAll("imes", 'i');
    textoDesencriptado= textoDesencriptado.replaceAll("ai", 'a');
    textoDesencriptado =textoDesencriptado.replaceAll("ober", 'o');
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", 'u');
    document.getElementById('TextoEncriptado').innerHTML = textoDesencriptado;
    document.getElementById('TextoEncriptado').style.backgroundImage="none";
    document.getElementById('MensajeNoEncontrado').style.display="none";
    document.getElementById('texto-Ingrese').style.display="none";   
    document.getElementById('copiar').removeAttribute('disabled');   
}

function encriptar(){
    var encriptado = "";
    textoDesencriptado = document.getElementById('Entrada').value;
    if(textoDesencriptado != ""){
        for(let i = 0; i < textoDesencriptado.length ; i++){
            console.log(textoDesencriptado.slice(i,i+1));
            if(textoDesencriptado.slice(i,i+1)==="e"){
                encriptado = encriptado +"enter";
            }
            else{ if(textoDesencriptado.slice(i,i+1)==="i"){
                encriptado = encriptado +"imes";
            }
            else{ if(textoDesencriptado.slice(i,i+1)==="a"){
                encriptado = encriptado +"ai";
            }
            else {if(textoDesencriptado.slice(i,i+1)==="o"){
                encriptado = encriptado +"ober";
            }else {if(textoDesencriptado.slice(i,i+1)==="u"){
                encriptado = encriptado +"ufat";
            }
            else{
                encriptado = encriptado + textoDesencriptado.slice(i,i+1);
            }}}}}
        }
        document.getElementById('TextoEncriptado').innerHTML = encriptado;
        document.getElementById('TextoEncriptado').style.backgroundImage="none";
        document.getElementById('MensajeNoEncontrado').style.display="none";
        document.getElementById('texto-Ingrese').style.display="none";
        document.getElementById('copiar').removeAttribute('disabled');   
   
    }
}

async function copiarContenido() {
    try {
      await navigator.clipboard.writeText(document.getElementById('TextoEncriptado').value);
      console.log('Contenido copiado al portapapeles');
      /* Resuelto - texto copiado al portapapeles con éxito */
    } catch (err) {
      console.error('Error al copiar: ', err);
      /* Rechazado - fallo al copiar el texto al portapapeles */
    }
  }


