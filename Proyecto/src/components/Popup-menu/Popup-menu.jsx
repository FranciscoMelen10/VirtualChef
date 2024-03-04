import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import {Iconos} from '../Icon/constante-svg';

const PopupMenu = () => {
  return (
    <>
      <MenuProvider style={styles.container}>
        <Menu>
          <MenuTrigger>
            <View>{Iconos.PopUpMenuIcon}</View>
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={styles.menuOptions}>
            <MenuOption
              style={styles.menuOption}
              onSelect={() => alert(`Save`)}
              text="Editar"
            />
            <MenuOption
              style={styles.menuOption}
              onSelect={() => alert(`Save`)}
              text="Eliminar"
            />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 120,
  },

  menuOptions: {
    width: 200,
    backgroundColor: '#fff',
  },
  menuOption: {
    borderWidth: 0.3,
    borderColor: '#000',
  },
};

export default PopupMenu;
