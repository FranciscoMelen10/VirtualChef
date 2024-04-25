import PocketBase from 'pocketbase';

const pb = new PocketBase('https://virtualchef.pockethost.io');

// globally disable auto cancellation
pb.autoCancellation(false);

async function createUser(data) {
  // Buscar el ID del rol de "usuario"
  const idRol = await pb.collection('roles').getFullList(
    {},
    {
      filter: `nombre = "usuario"`,
    },
  );

  try {
    // Tabla de usuarios en pocketbase
    const datos = {
      username: data.nombre_de_usuario,
      email: data.correo_electronico,
      emailVisibility: true,
      password: data.contraseña,
      passwordConfirm: data.confirmar_contraseña,
      nombre: data.nombre,
      apellido: data.apellido,
      rolID: idRol[0].id, // ID del rol de usuario
    };
    console.log(datos);

    // Comprueba si hay un usuario con el mismo correo o nombre de usuario
    const user = await existeUsuario(datos.email, datos.username);

    // la varible "user" es un arreglo con los usuarios que coinciden con el correo o nombre de usuario
    if (user.length === 1) {
      alert('Usuario ya existe, intente con otro correo o nombre de usuario');
    } else {
      // Crea el usuario, porque no existe
      console.log('Creando usuario...');
      await pb.collection('users').create(datos);
      alert('Usuario creado con exito');
    }

    return user;
  } catch (error) {
    alert(error);
  }
}

async function loginUsuario(email, password) {
  try {
    const authData = await pb
      .collection('users')
      .authWithPassword(`${email}`, `${password}`);
    console.log(pb.authStore.isValid);
    return authData;
  } catch (error) {
    console.log(error);
    alert('Usuario no encontrado, intente de nuevo');
    return false;
  }
}

async function existeUsuario(email, username, id) {
  try {
    // Busca si hay un usuario con el mismo correo o nombre de usuario
    const user = await pb.collection('users').getFullList(
      {},
      {
        filter: `email = "${email}" || username = "${username}" || id = "${id}"`,
      },
    );

    // Devuelve un arreglo con los usuarios que coinciden con el correo o nombre de usuario
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function buscarInfoUsuario(id) {
  try {
    const user = await pb
      .collection('users')
      .getFullList({filter: `id = "${id}"`});
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function editarUsuario(id, data) {
  try {
    await pb.collection('users').update(`${id}`, data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function registroUsuario(id) {
  try {
    // Busca si hay un usuario con el mismo correo o nombre de usuario
    const user = await pb.collection('users').getFullList(
      {},
      {
        filter: `id = "${id}"`,
      },
    );

    // Devuelve un arreglo con los usuarios que coinciden con el correo o nombre de usuario
    return user;
  } catch (error) {
    console.log(error);
  }
}

export {
  loginUsuario,
  createUser,
  registroUsuario,
  existeUsuario,
  buscarInfoUsuario,
  editarUsuario,
};
