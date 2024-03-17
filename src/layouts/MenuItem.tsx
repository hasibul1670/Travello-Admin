import { FaUser } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { MdDashboard } from "react-icons/md";

const MenuItems = [
  { id: 1, icon: MdDashboard, text: 'Dashboard', link: '/dashboard' },
  { id: 2, icon: FaUser , text: 'Users', className: 'text-white', link: '/users' },
  { id: 3, icon: IoIosSettings , text: 'Settings', link: '/settings' },
];

export default MenuItems;
