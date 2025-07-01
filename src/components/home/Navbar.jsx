import { navLinks } from "../../data/navLink"
import { NavLink } from "react-router-dom"
import { Button } from "../ui/button"
import UserProfil from "./UserProfil"



function Navbar() {
    return (
        <nav className="w-full h-16 bg-gray-900 flex items-center justify-between px-4 shadow-lg">
            <div className="flex items-center">
                <img src="src/components/Inktrovert_logo.png" alt="logo" className="w-10 h-10 mr-2" />
                <span className="text-white text-lg font-semibold">Inktrovert</span>
            </div>
            <ul className="flex space-x-4 ">
                {navLinks.map((link) => (
                    <Button key={link.id} className="flex justify-center">
                        <NavLink to={link.path} className="text-white hover:text-green-500">
                            <div className="flex items-center space-x-2">
                                {link.icon}
                                <span>{link.name}</span>
                            </div>
                        </NavLink>
                    </Button>
                ))}
            </ul>
            <UserProfil 
                name="John Doe" 
                email="john.doe@example.com" 
                profilePicture="src\assets\User_profile_picture.jpg" 
                onClick={() => {/* Naviguer vers la page profil ou ouvrir un menu */}} 
            />
        </nav>
    )
}

export default Navbar