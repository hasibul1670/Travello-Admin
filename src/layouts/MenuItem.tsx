import { FaUser } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { MdDashboard } from "react-icons/md";

const MenuItems = [
  { id: 1, icon: MdDashboard, text: 'Dashboard', link: '/dashboard' ,headerTitle:'Dashboard'},
  { id: 2, icon: FaUser , text: 'Users', className: 'text-white', link: '/users',headerTitle:'User' },
  { id: 3, icon: IoIosSettings , text: 'Settings', link: '/settings',headerTitle:'Settings' },
];

export default MenuItems;
