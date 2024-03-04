import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import PopupMenu from '../../components/Popup-menu/Popup-menu';
import {Iconos} from '../../components/Icon/constante-svg';

/**
 * Component for displaying a recipe.
 * @param {Object} recipeData - The data of the recipe.
 * @param {boolean} isUsersRecipe - Indicates if the recipe belongs to the current user.
 * @param {boolean} isFavorite - Indicates if the recipe is marked as favorite.
 * @returns {JSX.Element} The rendered recipe component.
 */
function VistaReceta({recipeData, isUsersRecipe, isFavorite}) {
  const {
    nombre,
    descripcion,
    ingredientes = [],
    pasos = [],
    autor,
    imgLink,
  } = {recipeData};

  /**
   * Renders the user controls if the recipe belongs to the current user.
   * @returns {JSX.Element|null} The rendered user controls or null if the recipe doesn't belong to the current user.
   */
  const renderUserControls = () => {
    if (isUsersRecipe === true) {
      return (
        <View style={styles.popUpMenuWrapper}>
          <PopupMenu />
        </View>
      );
    }
    return null;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.panelImg}>
          <Image style={styles.img} source={imgLink}></Image>
        </View>
        <View style={styles.panelDetails}>
          <View style={styles.recipeNameAndControlsWrapper}>
            <View style={styles.favoriteIconWrappper}>{Iconos.Corazon}</View>
            <Text style={styles.recipeName}>{nombre}</Text>
            {renderUserControls()}
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
            <Text style={{textAlign: 'center', padding: 10, fontSize: 16}}>
              <Text style={{fontWeight: 600}}> Elaborado por:</Text> {autor}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 40,
  },

  img: {
    width: 300,
    borderRadius: 10,
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

  recipeNameAndControlsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  popUpMenuWrapper: {position: 'absolute', zIndex: 10, right: -40},

  favoriteIconWrappper: {
    position: 'absolute',
    zIndex: 10,
    left: 20,
  },
});

export default VistaReceta;
