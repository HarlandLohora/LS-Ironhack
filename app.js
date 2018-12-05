window.onload = function () {
  if( localStorage.getItem('nickName') != null){

  }
}

function registrarUsuario(){
  let userName = document.getElementById('userName').value;
  let nickName = document.getElementById('nickName');
  if( userName != ""){
    /*Guardando en LS*/
    localStorage.setItem('nickName', userName);
    let useNickName = localStorage.getItem('nickName');
    nickName.innerHTML = useNickName;
  }else{
    alert('Ingresa un nombre válido');
  }
}
