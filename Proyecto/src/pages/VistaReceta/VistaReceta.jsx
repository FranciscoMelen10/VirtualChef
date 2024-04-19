import React, {useContext, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {RecetaContext} from '../../contexts/recetaContext/recetaContext';
import {useRecetas} from '../../hooks/Recetas';
import {useIngredientes} from '../../hooks/Ingredientes';
import {usePasos} from '../../hooks/Pasos';
import {getImagen} from '../../hooks/pocketbase';
import {Iconos} from '../../components/Icon/constante-svg';
import BotonRetroceder from '../../components/Buttons/BtnRetroceder';

/**
 * Component for displaying a recipe.
 * @param {Object} recipeData - The data of the recipe.
 * @param {boolean} isUsersRecipe - Indicates if the recipe belongs to the current user.
 * @param {boolean} isFavorite - Indicates if the recipe is marked as favorite.
 * @returns {JSX.Element} The rendered recipe component.
 */
function VistaReceta({navigation, route}) {
  const {receta: recetaContext, setReceta: setRecetaContext} =
    useContext(RecetaContext);
  const {searchReceta, createNewReceta} = useRecetas();
  const {getIngredientes, createNewIngrediente} = useIngredientes();
  const {getPasos, createNewPaso} = usePasos();
  const id = route.params.id;
  const [receta, setReceta] = React.useState([]);
  const [ingredientes, setIngredientes] = React.useState([]);
  const [pasos, setPasos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // INCLUIR EL USUARIO CUANDO ESTÉ DISPONIBLE

  const idIsEmpty = id === undefined || id === null || id === '';
  const contextIsEmpty = recetaContext == {} ? true : false;

  useEffect(() => {
    // IMPLEMENTAR OBTENER EL USER AQUI

    if (idIsEmpty) return;

    const fetchReceta = async () => {
      try {
        const respondReceta = await searchReceta(id);
        setReceta(respondReceta);
        console.log('respond receta', respondReceta);
        const respondIngredientes = await getIngredientes(id);
        setIngredientes(respondIngredientes);
        console.log('respond ingrediente', respondIngredientes);
        const respondPasos = await getPasos(id);
        setPasos(respondPasos);
        console.log('respond pasos', respondPasos);
        setLoading(false);
      } catch (error) {
        Alert(error);
        setLoading(false);
      }
    };

    console.log('id', id);

    fetchReceta();
  }, [id]);

  const {collectionId, id: recordId, nombre, descripcion, imagen} = receta;

  const urlImagen = getImagen(receta);

  console.log(urlImagen);
  const renderIngredientes = () =>
    ingredientes.map((ingrediente, index) => {
      return (
        <View key={index} style={styles.listElementsStyle}>
          <Text style={styles.listText}>
            {index + 1}- {ingrediente.nombre}
          </Text>
        </View>
      );
    });

  const renderPasos = () =>
    pasos.map((paso, index) => {
      return (
        <View key={index} style={styles.listElementsStyle}>
          <Text style={styles.listText}>
            {index + 1}- {paso.nombre}
          </Text>
        </View>
      );
    });

  const renderVistaReceta = (contextIsEmpty, idIsEmpty) => {
    if (!contextIsEmpty && idIsEmpty) {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.panelImg}>
              <Image style={styles.img} src={urlImagen} />
            </View>
            <View style={styles.panelDetails}>
              <View style={styles.recipeNameAndControlsWrapper}>
                <View style={styles.favoriteIconWrappper}>
                  {Iconos.Corazon}
                </View>
                <Text style={styles.recipeName}>{nombre}</Text>
              </View>
              <View>
                <Text style={{textAlign: 'center', marginBottom: 10}}>
                  {descripcion}
                </Text>
              </View>
              <View>
                <Text style={styles.detailsHeader}>Ingredientes</Text>
                <View style={styles.list}>
                  {ingredientes.map((ingrediente, index) => (
                    <Text key={index} style={styles.listElementsStyle}>
                      {ingrediente}
                    </Text>
                  ))}
                </View>
              </View>
              <View>
                <Text style={styles.detailsHeader}>Preparacion</Text>
                <View style={styles.list}>
                  {pasos.map((paso, index) => (
                    <Text key={index} style={styles.listElementsStyle}>
                      {paso}
                    </Text>
                  ))}
                </View>
              </View>
              <View>
                <Text style={{textAlign: 'center', padding: 10}}>
                  {/* <Text style={{fontWeight: 600}}> Elaborado por:</Text> {autor} */}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.panelImg}>
              <View style={styles.goBackIconWrappper}>
                <BotonRetroceder />
              </View>

              <Image style={styles.img} src={urlImagen} />
              <View style={styles.favoriteIconWrappper}>{Iconos.Corazon}</View>
            </View>
            <View style={styles.panelDetails}>
              <View style={styles.recipeNameAndControlsWrapper}>
                <Text style={styles.recipeName}>{nombre}</Text>
              </View>
              <View>
                <Text style={styles.recipeDescrption}>{descripcion}</Text>
              </View>
              <View>
                <Text style={styles.detailsHeader}>Ingredientes</Text>
                <View style={styles.list}>{renderIngredientes()}</View>
              </View>
              <View>
                <Text style={styles.detailsHeader}>Preparacion</Text>
                <View style={styles.list}>{renderPasos()}</View>
              </View>
              <View>
                <Text style={{textAlign: 'center', padding: 10}}>
                  {/* <Text style={{fontWeight: 600}}> Elaborado por:</Text> {autor} */}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
  };

  return <>{renderVistaReceta(contextIsEmpty, idIsEmpty)}</>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B5F2B0',
  },

  panelImg: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },

  img: {
    width: 200,
    height: 200,
    objectFit: 'cover',
    borderRadius: 16,
    shadowColor: '#000',
  },

  panelDetails: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
  },

  recipeName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    marginLeft: 15,
  },

  recipeDescrption: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 17,
    fontStyle: 'italic',
  },

  detailsHeader: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'left',
    padding: 10,
    paddingLeft: 24,
  },

  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  listElementsStyle: {
    fontSize: 16,
    textAlign: 'left',
    backgroundColor: '#F2F2F2',
    width: '90%',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
  },

  listText: {
    fontSize: 16,
  },

  recipeNameAndControlsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  popUpMenuWrapper: {position: 'absolute', zIndex: 10, right: -40},

  favoriteIconWrappper: {
    backgroundColor: '#fff',
    borderRadius: 6,
    alignSelf: 'flex-start',
    position: 'absolute',
    zIndex: 10,
    right: 0,
    marginRight: 10,
    padding: 5,
  },
  goBackIconWrappper: {
    alignSelf: 'flex-start',
    position: 'absolute',
    position: 'absolute',
    zIndex: 10,
    left: 0,
    marginLeft: 10,
  },
});

export default VistaReceta;
