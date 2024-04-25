import React, { useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Iconos
import {Iconos} from '../../components/Icon/constante-svg';

// Componentes
import BtnPop from '../../components/Buttons/BtnPop';

// Contextos
import {useRecetas} from '../../hooks/Recetas';
import CardFavoritos from '../../components/Cards/CardFavoritos';
import {getImagen} from '../../hooks/pocketbase';

const WIDTH_WINDOW = Dimensions.get('window').width;

const Home = ({navigation, route}) => {
  // useState para obtener las recetas
  const {buscarRecetas} = useRecetas();
  const [isLoading, setIsLoading] = useState(true);
  const [recetas, setRecetas] = useState([]);

  const id = route.params?.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        setRecetas(await buscarRecetas(id));
        //Cuando cargue todo, se mostrara el contenido
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!isLoading) {
    return recetas.length > 0 ? (
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: '600',
            paddingBottom: 10,
          }}
        >
          Recetas
        </Text>
        <View style={styles.principal}>
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            data={recetas}
            renderItem={({item, index}) => (
              <CardFavoritos
                img={getImagen(item)}
                name={item.nombre}
                time={item.tiempoPreparacion}
                id={item.id}
                key={index}
              />
            )}
            numColumns={2}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.button}>
          <BtnPop
            onPress={() => {
              navigation.navigate('Home');
            }}
            icon={Iconos.BackClaro}
          ></BtnPop>
        </View>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={styles.noEncontrado}>
        {Iconos.LogoXL}
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '300',
          }}
        >
          Receta no encontrada
        </Text>
        <View style={styles.button}>
          <BtnPop
            onPress={() => {
              navigation.navigate('Home');
            }}
            icon={Iconos.BackClaro}
          ></BtnPop>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#246C2C" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  principal: {
    flex: 1,
    width: WIDTH_WINDOW,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  noEncontrado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:20
  }
});

export default Home;
