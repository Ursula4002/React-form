import { HiHome } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { GiQuill } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";


export const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/home",
        icon: <HiHome />,
        reload: true,
    },
    { id: 2, name: "Den", path: "/den", icon: <GiQuill /> },
    { id: 3, name: "Notifications", path: "/notifications", icon: <IoIosNotifications /> },
    { id: 4, name: "Settings", path: "/settings", icon: <MdOutlineSettings /> },
];      