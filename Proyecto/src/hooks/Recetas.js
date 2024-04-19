import {pb} from './pocketbase';

function useRecetas() {
  async function getRecetas() {
    const recetas = await pb
      .collection('recetas')
      .getFullList({expand: ['horarioId']});
    return recetas;
  }

  async function searchReceta(idReceta) {
    const receta = await pb
      .collection('recetas')
      .getOne(idReceta, {expand: ['horarioId, creador']});
    return receta;
  }

  const createNewReceta = async (data) => {
    console.log(data);
    const formData = new FormData();
    const formDataImage = new FormData();

    formDataImage.append('imagen', data.imagen[0]);

    formData.append('nombre', data.nombre);
    formData.append('descripcion', data.descripcion);
    formData.append('tiempoPreparacion', data.tiempoPreparacion);
    formData.append('horarioId', data.horarioId);
    formData.append('creador', data.creador);

    console.log(formData);

    const url = 'http://127.0.0.1:8090/api/collections/recetas/records';
    const respond = await axios
      .post(url, {
        nombre: data.nombre,
        descripcion: data.descripcion,
        tiempoPreparacion: data.tiempoPreparacion,
        horarioId: data.horarioId,
        creador: data.creador,
      })
      .then((response) => response.data);

    console.log('Respond al guardar', respond);

    await pb.collection('recetas').update(await respond.id, formDataImage);

    return respond;
  };

  const getRecetasMenu = async (horario) => {
    const tiempo = await getHorario(horario);
    const recetasMenu = await pb
      .collection('recetas')
      .getFullList({filter: `horarioId = "${tiempo[0].id}"`});
    return recetasMenu;
  };

  const buscarRecetas = async (nombre) => {
    const receta = await pb
      .collection('recetas')
      .getFullList({filter: `nombre ~ "${nombre}"`});

    return receta;
  };

  const buscarRecetasUsuario = async (creadorId) => {
    const receta = await pb
      .collection('recetas')
      .getFullList({filter: `creador = "${creadorId}"`});

    return receta;
  };

  return {
    createNewReceta,
    getRecetas,
    searchReceta,
    getRecetasMenu,
    buscarRecetas,
    buscarRecetasUsuario,
  };
}

export {useRecetas};
