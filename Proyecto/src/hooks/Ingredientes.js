import {pb} from './pocketbase';

pb.autoCancellation(false);

function useIngredientes() {
  async function getIngredientes(idReceta) {
    try {
      const ingredientes = await pb
        .collection('ingredientes')
        .getFullList({filter: `recetasId = "${idReceta}"`});
      return ingredientes;
    } catch (error) {
      console.log(error);
    }

    return {};
  }
  async function searchIngrediente(idIngrediente) {
    const ingrediente = await pb
      .collection('ingredientes')
      .getOne(idIngrediente);
    return ingrediente;
  }
  const createNewIngrediente = async (data) => {
    try {
      pb.collection('ingredientes').create(data);
      console.log('Ingrediente creado con exito');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createNewIngrediente,
    getIngredientes,
    searchIngrediente,
  };
}

export {useIngredientes};
