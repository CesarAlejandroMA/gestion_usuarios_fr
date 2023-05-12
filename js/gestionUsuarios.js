$(document).ready(function(){
    $.ajax({
        method: 'get',
        url: 'http://localhost:8000/usuarios'
    }).done((response)=>{
        const dataJson= JSON.parse(response);
        const usuarios =dataJson.data;
        const table = document.getElementById('usuariosTb');
        const tbody= table.getElementsByTagName('tbody')[0];
        let html ='';
        usuarios.forEach(usuario => {
           html+='<tr>'
           html+='      <td>' + usuario.name+'</td>';
           html+='      <td>'+ usuario.username+'</td>';
           html+='      <td>';
           html+='          <button name="modificar">Modificar</button>';
           html+='      </td>';
           html+='      <td>';
           html+='          <button name="eliminar">Eliminar</button>';
           html+='      </td>';
           html+='</tr>';
            
        });
        tbody.innerHTML= html;
    }).fail((error)=>{
        console.error(error);
    });

    /*
    * Funcionalidad para registrar un usuario
    */

    $.ajax({
        url: 'http://localhost:8000/usuarios',
        method: 'post',
        data:{
            name: 'Admin 1',
            username: 'admin 1',
            password: '3210'
        }
    }).done(response=>{
        const dataJson = JSON.parse(response);
        const msg = dataJson.data; 
        alert(msg);
    });

    $.ajax({
        url: 'http://localhost:8000/usuarios/2',
        method: 'put',
        data:{
            name: 'Admin 1',
            username: 'admin 1',
            password: '3210'
        }
    }).done(response=>{
        const dataJson = JSON.parse(response);
        const msg = dataJson.data; 
        alert(msg);
    });

    $.ajax({
        url: 'http://localhost:8000/usuarios/7',
        method: 'delete',
    }).done(response=>{
        const dataJson = JSON.parse(response);
        const msg = dataJson.data; 
        alert(msg);
    }).fail(error=>{
        const dataJson = JSON.parse(response);
        const msg = dataJson.data; 
        alert(msg);
    });

    $.ajax({
        url: 'http://localhost:8000/usuarios/2',
        method: 'get',
    }).done(response=>{
        const dataJson = JSON.parse(response);
        const usuario = dataJson.data; 
        console.log(usuario);
    });

    //Eliminar los usuarios

    
  });