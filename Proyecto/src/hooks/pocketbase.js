import PocketBase from 'pocketbase';

const pb = new PocketBase('https://virtualchef.pockethost.io');

function getImagen({collectionId, id, imagen}) {
  return `https://virtualchef.pockethost.io/api/files/${collectionId}/${id}/${imagen}`;
}

export {getImagen, pb};
