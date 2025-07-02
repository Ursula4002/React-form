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
            <ul className="flex space-x-4">
                {navLinks.map((link) => (
                    <Button
                        key={link.id}
                        className="px-3 py-2 rounded bg-blue-950 text-white hover:text-green-500 hover:border-2 hover:border-white transition-colors flex justify-center items-center"
                        asChild
                    >
                        <NavLink
                            to={link.path}
                            onClick={link.reload ? (e) => { e.preventDefault(); window.location.href = link.path; } : undefined}
                        >
                            <div className="flex items-center space-x-2">
                                {link.icon}
                                <span>{link.name}</span>
                            </div>
                        </NavLink>
                    </Button>
                ))}
            </ul>
            <NavLink to={"/profil"} className="text-white hover:text-green-500">
                <UserProfil
                    name="John Doe"
                    email="john.doe@example.com"
                    profilePicture="src\assets\User_profile_picture.jpg"
                    onClick={() => {/* Naviguer vers la page profil ou ouvrir un menu */ }}
                />
            </NavLink>
        </nav>
    )
}

export default Navbar