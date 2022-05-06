function validar(text){
    // Valida que el texto ingresado por el usuario está en minúsculas y sin caracteres especiales
    for(let i = 0; i < text.length; i++){
        let char_ascii = text[i].charCodeAt(); // se convierte caracter a su respectivo código Ascii
        if(char_ascii != 32 && char_ascii != 241 && char_ascii != 10){ // Se verifica primero si el caracter es un espacio o la letra ñ o un salto de línea
            if(char_ascii < 97 || char_ascii > 122){
                /* caracter está fuera del rango de las letras minúsculas y
                no es un espacio ni la ñ ni un salto de línea */
                return false; 
            }
        }
    }
    return true;
}

function validar_empty(text){
    // Valida que en el campo de ingreso del texto no esté vacío
    if(text == ''){
        return true; // texto es vacío
    }
    else{
        return false; // texto no es vacío
    }
}

function encriptar(){
    // Encripta mensaje ingresado por el usuario
    let encrypted_message = '';
    let text_to_encrypt = input_usuario.value;
    let is_valid = validar(text_to_encrypt);
    let is_empty = validar_empty(text_to_encrypt);
    if(is_valid && !is_empty){
        // Recorrer string y procesar caracteres a encriptar
        for(let i = 0; i < text_to_encrypt.length; i++){
            let character = text_to_encrypt[i];
            if(character == 'a'){
                encrypted_message += 'ai';
            }
            else if(character == 'e'){
                encrypted_message += 'enter';
            }
            else if(character == 'i'){
                encrypted_message += 'imes';
            }
            else if(character == 'o'){
                encrypted_message += 'ober'; 
            }
            else if(character == 'u'){
                encrypted_message += 'ufat';
            }
            else{
                encrypted_message += character;
            }
        }
        p_despliegue.innerHTML = encrypted_message;
        input_usuario.value = "";
        input_usuario.focus();
        boton_copy.style.display = "";
        icon_image.style.display = "none";
        no_encontrado_p.style.display = "none";
        info_p.style.display = "none";
    }
    else if(!is_valid && !is_empty){
        alert("No pueden haber mayúsculas ni caracteres especiales");
        input_usuario.value = "";
        input_usuario.focus();
    }
    else{
        alert("No encontré ningún texto a encriptar :b");
        input_usuario.focus();
    }
}

function desencriptar(){
    // Desencripta mensaje ingresado por el usuario
    let index = 0; // indice para recorrer los caracteres del texto
    let decrypted_message = '';
    let text_to_decrypt = input_usuario.value; 
    let is_valid = validar(text_to_decrypt);
    let is_empty = validar_empty(text_to_decrypt);

    if(is_valid  && !is_empty){
         // Recorrer string y proceso de desencriptacion
        while(index < text_to_decrypt.length){
            if(index >= text_to_decrypt.length){
                break;
            }
            let character = text_to_decrypt[index];
            if(character == 'a'){
                decrypted_message += character;
                index += 2; // se pasa por alto el caracter del código de encriptación restante "i"
            }
            else if(character == 'e'){
                decrypted_message += character;
                index += 5; // se pasa por alto los caracteres del código de encriptación restantes "nter"
            }
            else if(character == 'i' || character == 'o' || character == 'u'){
                /* Como la longitud del código de encriptación es la misma para la 'i', 'o', 'u',
                se utiliza el mismo else if */
                decrypted_message += character;
                index += 4;
            }
            else{
                decrypted_message += character;
                index += 1;
            }
        }
        p_despliegue.innerHTML = decrypted_message;
        input_usuario.value = "";
        input_usuario.focus();
        boton_copy.style.display = "";
        icon_image.style.display = "none";
        no_encontrado_p.style.display = "none";
        info_p.style.display = "none";
    } else if(!is_valid && !is_empty){
        alert("No pueden haber mayúsculas ni caracteres especiales");
        input_usuario.value = "";
        input_usuario.focus();
    }
    else{
        alert("No encontré ningún texto a desencriptar :b");
        input_usuario.focus();
    }
}

function copy_text (){
    let text = p_despliegue.textContent;
    navigator.clipboard.writeText(text);
    alert("Texto copiado :D");
    input_usuario.focus();
}

var input_usuario = document.getElementById("user_text");
var p_despliegue = document.querySelector("#resultado");
var boton_encripta = document.getElementById("encriptador");
var boton_desencripta = document.getElementById("desencriptador");
var boton_copy = document.querySelector("#copy");
var icon_image = document.querySelector("#icon");
var no_encontrado_p = document.querySelector("#no-encontrado");
var info_p = document.querySelector("#info");
boton_copy.style.display = "none";
input_usuario.focus();
boton_encripta.onclick = encriptar;
boton_desencripta.onclick = desencriptar;
boton_copy.onclick = copy_text;

