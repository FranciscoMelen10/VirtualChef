/* 
    Libreria de "React-svg-transformer" que nos permite transformar los svg y poder usarlos para el diseño 
    de screens para las aplicaciones de React native
*/

import Logo from '../../../assets/Logo.svg';
import Buscar from '../../../assets/Buscar.svg';
import Reloj from '../../../assets/Reloj.svg';
import Corazon from '../../../assets/Corazon.svg';
import PopUpMenuIcon from '../../../assets/popUpMenuIcon.svg';
import Cross from '../../../assets/Cross.svg';

export const Iconos = {
  LogoXL: <Logo width={200} height={200} />,
  Logo: <Logo width={20} height={20} />,
  Buscar: <Buscar width={20} height={20} />,
  Reloj: <Reloj width={20} height={20} />,
  Corazon: <Corazon width={25} height={25} />,
  PopUpMenuIcon: <PopUpMenuIcon width={25} height={25} />,
  Cross: <Cross width={100} height={100} />,
};
