import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ejemplo3 from '../../../assets/Ejemplo3.png';
import PopupMenu from '../../components/Popup-menu/Popup-menu';

function VistaReceta({isUsersRecipe = true, name}) {
  const renderUserControls = () => {
    if (isUsersRecipe) {
      return <PopupMenu />;
    }
  };

  // Despues cambio los valores en el texto por parametros

  return (
    <ScrollView>
      <View style={styles.container}>
        {renderUserControls()}
        <View style={styles.panelImg}>
          <Image style={styles.img} source={Ejemplo3}></Image>
        </View>
        <View style={styles.panelDetails}>
          <View>
            <Text style={styles.recipeName}>Stacker King</Text>
          </View>
          <View>
            <Text style={{textAlign: 'center', marginBottom: 10}}>
              La hamburguesa más grande de todos los tiempos llega a tus dos
              manos.Con tocino crujiente, queso derretido, salsa Stacker con 2
              carnes.
            </Text>
          </View>
          <View>
            <Text style={styles.detailsHeader}>Ingredientes</Text>
            <View style={styles.list}>
              <Text style={styles.listElementsStyle}> - Beicon</Text>
              <Text style={styles.listElementsStyle}> - Chiltoma</Text>
              <Text style={styles.listElementsStyle}>
                - Carne de cerdo ahumado 3 kg con extra de salsa de lagrimas de
                lobos del medio oriente
              </Text>
              <Text style={styles.listElementsStyle}> - Beicon</Text>
              <Text style={styles.listElementsStyle}> - Beicon</Text>
              <Text style={styles.listElementsStyle}> - Beicon</Text>
              <Text style={styles.listElementsStyle}> - Beicon</Text>
            </View>
          </View>
          <View>
            <Text style={styles.detailsHeader}>Preparacion</Text>
            <View style={styles.list}>
              <Text style={styles.listElementsStyle}>
                1) rallar la cebolla y picar el ajo. En un bol, mezclar la carne
                picada, la cebolla, el ajo y el huevo hasta que estén bien
                integrados todos los ingredientes.
              </Text>
              <Text style={styles.listElementsStyle}>
                2) hacer  albóndigas con la mano y darles forma de hamburguesas.
              </Text>
              <Text style={styles.listElementsStyle}>
                3) cocinar las hamburguesas de ambos lados en una sartén
                aceitada, hasta que estén bien marcadas.
              </Text>
              <Text style={styles.listElementsStyle}>
                4) llevarlas a horno fuerte por 5 o 10 minutos hasta que estén
                completamente cocidas.
              </Text>
              <Text style={styles.listElementsStyle}>
                5) armar las hamburguesas con los panes tibios, untar con el
                aderezo elegido, colocar la hamburguesa y los vegetales elegidos
                junto al queso cheddar.
              </Text>
              <Text style={styles.listElementsStyle}>
                6) servir acompañadas de papas fritas.
              </Text>
            </View>
          </View>
          <View>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 16}}>
              Elaborado por: <Text>Benigno Ortega</Text>
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
    marginTop: -10,
    position: 'relative',
  },

  img: {
    borderRadius: 20,
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
  },

  detailsHeader: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    padding: 10,
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
    textAlign: 'center',
    backgroundColor: '#F2F2F2',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
});

export default VistaReceta;
