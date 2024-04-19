import { pb } from "./pocketbase";

async function findFavoritos(usuarioId, recetasId) {
    // Filtra todas las recetas favoritas de un usuario
    try {
        const favoritosUser = await pb.collection("usuario_recetas_favoritas").getFullList({}, {
            filter: `recetasId = "${recetasId}" && usuarioId = "${usuarioId}"`,
        });
        const validar = favoritosUser.length > 0 ? true : false;
        return validar;

    } catch (error) {
        alert(error);
    }
}

const getFavoritos = async (id_user) => {
    // Primero se obtiene el id del usuario con las recetas que ha marcado como favoritas
    const favoritosUser = await pb
        .collection("usuario_recetas_favoritas")
        .getFullList({ filter: `usuarioId = "${id_user}"`, expand: ["recetasId"] });

    return favoritosUser;
}

const guardarFavorito = async (id_user, id_receta) => {
    try {
        // Como es una tabla intermedia, solo se necesita del id del usuario y de la receta para guardarlo
        const favorito = await pb.collection("usuario_recetas_favoritas").create({
            usuarioId: id_user,
            recetasId: id_receta,
        });
        console.log(favorito);
    } catch (error) {
        alert(error);
    }
}

const eliminarFavorito = async (id_user, id_receta) => {
    // Como es una tabla intermedia, solo se necesita del id del usuario y de la receta para eliminarlo
    try {
        const favoritosUser = await pb.collection("usuario_recetas_favoritas").getFullList({}, {
            filter: `recetasId = "${id_receta}" && usuarioId = "${id_user}"`,
        });
        const favorito = await pb.collection("usuario_recetas_favoritas").delete(favoritosUser[0].id);
        console.log(favorito);
    } catch (error) {
        alert(error);
    }
}


export { findFavoritos, getFavoritos, guardarFavorito, eliminarFavorito };
