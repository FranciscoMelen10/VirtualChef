import {getHorario} from './Horarios';
import axios from 'axios';
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
      .getOne(idReceta, {expand: ['creador']});
    return receta;
  }

  const createNewReceta = async (data, imagen) => {
    console.log(data);
    const formData = new FormData();

    formData.append('imagen', {
      uri: imagen.assets[0].uri, // Obtén la URI de la imagen directamente desde el objeto imagen
      type: imagen.assets[0].mimeType, // Ajusta el tipo de archivo según la extensión de la imagen
      name: imagen.assets[0].fileName, // Puedes establecer el nombre de la imagen aquí
    });

    formData.append('nombre', data.nombre);
    formData.append('descripcion', data.descripcion);
    formData.append('tiempoPreparacion', data.tiempoPreparacion);
    formData.append('horarioId', data.horarioId);
    formData.append('creador', data.creador);

    console.log('formdata', formData);

    const url =
      'https://virtualchef.pockethost.io/api/collections/recetas/records';
    const respond = await axios
      .post(url, formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then((response) => response.data);

    console.log('Respond al guardar', respond);

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
