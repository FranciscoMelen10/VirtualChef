
function getImagen({ collectionId, id, imagen }) {
    return `https://virtualchef.pockethost.io/api/files/${collectionId}/${id}/${imagen}`
  }
  
  export { getImagen };