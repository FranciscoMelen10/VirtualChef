import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native-paper';

// Componentes
import CardFavoritos from '../../components/Cards/CardFavoritos';

// Imagenes
import {Iconos} from '../../components/Icon/constante-svg';

// Hooks
import {getFavoritos} from '../../hooks/Favoritos';
import {getImagen} from '../../hooks/pocketbase';

// Contextos
import {UserContext} from '../../contexts/userContext';

function Favoritos() {
  const {user} = useContext(UserContext);

  const [favoritos, setFavoritos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Favoritos = async () => {
      try {
        setFavoritos(await getFavoritos(user.id));

        //Cuando cargue todo, se mostrara el contenido
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    Favoritos();
  }, [user.id, favoritos]);

  if (!isLoading) {
    return (
      <SafeAreaView style={styles.contenedor_principal}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: '600',
            paddingBottom: 10,
          }}
        >
          Favoritos
        </Text>
        {favoritos.length > 0 ? (
          <FlatList
            contentContainerStyle={styles.container}
            data={favoritos}
            renderItem={({item, index}) => (
              <CardFavoritos
                img={getImagen(item.expand.recetasId)}
                name={item.expand.recetasId.nombre}
                time={item.expand.recetasId.tiempoPreparacion}
                id={item.expand.recetasId.id}
                key={index}
              />
            )}
            numColumns={2}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.noEncontrado}>
            {Iconos.LogoXL}
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '300',
              }}
            >
              No tienes recetas favoritas
            </Text>
          </View>
        )}
      </SafeAreaView>
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#246C2C" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor_principal: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    alignItems: 'center',
  },
  noEncontrado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:20
  }
});

export default Favoritos;
