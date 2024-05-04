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
import Toast from 'react-native-toast-message';

import {RecetaContext} from '../../contexts/recetaContext/recetaContext';
import {useRecetas} from '../../hooks/Recetas';
import {useIngredientes} from '../../hooks/Ingredientes';
import {usePasos} from '../../hooks/Pasos';
import {getImagen} from '../../hooks/pocketbase';
import {Iconos} from '../../components/Icon/constante-svg';
import BotonRetroceder from '../../components/Buttons/BtnRetroceder';
import {UserContext} from '../../contexts/userContext';
import {existeUsuario} from '../../hooks/Usuarios';
import {Button} from 'react-native-paper';
import Corazon from '../../components/Icon/Corazon';

/**
 * Component for displaying a recipe.
 * @param {Object} recipeData - The data of the recipe.
 * @param {boolean} isUsersRecipe - Indicates if the recipe belongs to the current user.
 * @param {boolean} isFavorite - Indicates if the recipe is marked as favorite.
 * @returns {JSX.Element} The rendered recipe component.
 */
function VistaReceta({navigation, route}) {
  const {
    receta: recetaContext,
    setReceta: setRecetaContext,
    imagen: imagenContext,
    setImagen: setImagenContext,
  } = useContext(RecetaContext);
  const {user} = useContext(UserContext);
  const {searchReceta, createNewReceta} = useRecetas();
  const {getIngredientes, createNewIngrediente} = useIngredientes();
  const {getPasos, createNewPaso} = usePasos();
  const id = route.params?.id ? route.params.id : null;
  const [receta, setReceta] = React.useState([]);
  const [ingredientes, setIngredientes] = React.useState([]);
  const [pasos, setPasos] = React.useState([]);
  const [userData, setUserData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  // INCLUIR EL USUARIO CUANDO ESTÉ DISPONIBLE

  const idIsEmpty = id === undefined || id === null || id === '';
  const contextIsEmpty = recetaContext == {} ? true : false;

  useEffect(() => {
    // IMPLEMENTAR OBTENER EL USER AQUI

    const fetchUser = async () => {
      const respondUser = await existeUsuario('', '', user.id);
      setUserData(respondUser[0]);
    };

    fetchUser();

    if (idIsEmpty) return;

    const fetchReceta = async () => {
      try {
        const respondReceta = await searchReceta(id);
        setReceta(respondReceta);
        console.log('receta', receta);
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

  const creador = loading
    ? 'Cargando'
    : receta.expand?.creador.nombre +
        ' ' +
        receta.expand?.creador.apellido +
        '(' +
        receta.expand?.creador.username +
        ')' || 'Anónimo';

  console.log('receta', receta);

  const urlImagen = getImagen(receta);

  console.log(urlImagen);

  const handleCrearReceta = async () => {
    try {
      imagenContext.assets[0].fileName = recetaContext.nombre;
      const receta = await createNewReceta(recetaContext, imagenContext);

      for (let i = 0; i < recetaContext.ingredientes.length; i++) {
        await createNewIngrediente({
          nombre: recetaContext.ingredientes[i],
          recetasId: receta.id,
        });
      }

      for (let i = 0; i < recetaContext.pasos.length; i++) {
        await createNewPaso({
          nombre: recetaContext.pasos[i],
          recetaId: receta.id,
        });
      }

      Toast.show({
        type: 'success',
        text1: 'Receta creada con exito',
        text2: `${recetaContext.nombre} ha sido creada con exito!`,
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Error al crear la receta',
        text2: `No fue posible crear la receta.`,
      });
    }
    console.log(receta);

    navigation.navigate('Home');
  };

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

  console.log('imagen', imagenContext);

  const renderVistaReceta = (contextIsEmpty, idIsEmpty) => {
    if (!contextIsEmpty && idIsEmpty) {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.panelImg}>
              <View style={styles.goBackIconWrappper}>
                <BotonRetroceder />
              </View>

              <Image style={styles.img} src={imagenContext.assets[0].uri} />
            </View>
            <View style={styles.panelDetails}>
              <View style={styles.recipeNameAndControlsWrapper}>
                <Text style={styles.recipeName}>{recetaContext.nombre}</Text>
              </View>
              <View>
                <Text style={styles.recipeDescrption}>
                  {recetaContext.descripcion}
                </Text>
              </View>
              <View>
                <Text style={styles.detailsHeader}>Ingredientes</Text>
                <View style={styles.list}>
                  {recetaContext.ingredientes?.map((ingrediente, index) => (
                    <View key={index} style={styles.listElementsStyle}>
                      <Text style={styles.listText}>
                        {index + 1}- {ingrediente}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              <View>
                <Text style={styles.detailsHeader}>Preparacion</Text>
                <View style={styles.list}>
                  {recetaContext.pasos?.map((paso, index) => (
                    <View key={index} style={styles.listElementsStyle}>
                      <Text style={styles.listText}>
                        {index + 1}- {paso}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              <View>
                <Text style={{textAlign: 'center', padding: 10}}>
                  <Text style={{fontWeight: 600}}>
                    {loading
                      ? 'Cargando...'
                      : userData.nombre +
                          ' ' +
                          userData.apellido +
                          '(' +
                          userData.username +
                          ')' || 'Anónimo'}
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'black',
                width: '100%',
                height: 150,
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'white',
                borderRadius: 24,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={{display: 'flex', flexDirection: 'row', gap: -60}}>
                <View>{Iconos.CircleGreenLight}</View>
                <View>{Iconos.CircleGreenLight}</View>
                <View>{Iconos.CircleGreenLight}</View>
                <View>{Iconos.CircleGreenDark}</View>
              </View>
              <Button
                title="Submit"
                style={styles.buttonContainer}
                onPress={() => {
                  handleCrearReceta();
                }}
              >
                <Text style={styles.buttonText}>Crear Receta</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      );
    } else {
      if (!loading) {
        return (
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.panelImg}>
                <View style={styles.goBackIconWrappper}>
                  <BotonRetroceder />
                </View>

                <Image style={styles.img} src={urlImagen} />
                <View style={styles.favoriteIconWrappper}>
                  <View
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignContent: 'center',
                      flexDirection: 'row',
                    }}
                  >
                    <Corazon id_receta={id}></Corazon>
                  </View>
                </View>
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
                    <Text style={{fontWeight: 600}}>
                      {loading ? <Text>Cargando</Text> : creador}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        );
      } else {
        return (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          >
            <ActivityIndicator size="large" color="#246C2C" />
          </View>
        );
      }
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
    marginTop: 70,
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
    paddingBottom: 150,
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
    padding: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackIconWrappper: {
    alignSelf: 'flex-start',
    position: 'absolute',
    zIndex: 10,
    left: 0,
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#246C2C',
    borderRadius: 24,
    width: 200,
    height: 50,
    marginTop: -30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default VistaReceta;
