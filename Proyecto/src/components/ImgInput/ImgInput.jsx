import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RecetaContext} from '../../contexts/recetaContext/recetaContext';
import {Iconos} from '../Icon/constante-svg';
import * as ImagePicker from 'expo-image-picker';

const ImgInput = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const {imagen, setImagen} = React.useContext(RecetaContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImagen(result);
    }
  };

  console.log('IMAGENNNNNNNNNNNNNNNN', imagen);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.imgInput}>
          <View style={styles.crossIconWrapper}>{Iconos.Cross}</View>
          {imagen && (
            <Image
              source={{uri: imagen.assets[0].uri}}
              style={{
                width: '100%',
                height: '100%',
                zIndex: 2,
                position: 'absolute',
                borderRadius: 24,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgInput: {
    backgroundColor: '#9E9E9E',
    borderRadius: 24,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  crossIconWrapper: {
    position: 'absolute',
    zIndex: 1,
    textAlign: 'center',
  },
});

export default ImgInput;
