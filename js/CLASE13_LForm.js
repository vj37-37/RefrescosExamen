function validarUsuario(){
    let user = document.forms["formingreso"]["usuario"].value;
    let psw = document.forms["formingreso"]["contraseña"].value;
    if (user == "victor" && psw == "examen"){
        sessionStorage.setItem("IngresoCorrecto", "True")
        return true;
    }

    sessionStorage.setItem("IngresoCorrecto", "False")
    alert("Usuario o contraseña incorrecta")
    return false;
}