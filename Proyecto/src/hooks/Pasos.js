import {pb} from './pocketbase';

function usePasos() {
  async function getPasos(idReceta) {
    try {
      const pasos = await pb
        .collection('pasos')
        .getFullList({filter: `recetaId = "${idReceta}"`});

      return pasos;
    } catch (error) {
      console.log(error);
    }

    return {};
  }

  async function searchPaso(idPaso) {
    const paso = await pb.collection('pasos').getOne(idPaso);
    return paso;
  }

  const createNewPaso = async (data) => {
    try {
      pb.collection('pasos').create(data);
      console.log('Paso creado con exito');
    } catch (error) {
      console.log(error);
    }
  };

  return {createNewPaso, getPasos, searchPaso};
}

export {usePasos};
