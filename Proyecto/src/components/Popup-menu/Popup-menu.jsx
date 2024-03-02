import React from 'react';
import {View, Text} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

const PopupMenu = () => {
  return (
    <>
      <MenuProvider style={styles.container}>
        <Menu>
          <MenuTrigger text="Opciones" style={styles.MenuTrigger} />
          <MenuOptions style={{zIndex: 10}}>
            <MenuOption
              onSelect={() => alert(`Save`)}
              text="Save"
              style={{zIndex: 10}}
            />
            <MenuOption
              onSelect={() => alert(`Save`)}
              text="Save"
              style={styles.MenuOption}
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
    left: 130,
    rightL: 100,
    backgroundColor: '#B5F2B0',
    margin: 40,
    width: '100%',
  },
};

export default PopupMenu;
