import { useState, useEffect } from "react";

function UserProfil({ name, email, profilePicture, onClick }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Simulating fetching user data from an API or local storage
        const fetchUserData = async () => {
            try {
                const response = await fetch('/userData.json'); // Adjust the path as necessary
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    // Use props as fallback if userData is not loaded
    const displayName = userData?.name || name;
    const displayEmail = userData?.email || email;
    const displayPicture = userData?.profilePicture || profilePicture;

    return (
        <button
            onClick={onClick}
            className="flex items-center space-x-2 bg-transparent border-none outline-none cursor-pointer p-0 hover:bg-gray-800 rounded transition duration-150 max-w-xs overflow-hidden"
            style={{ minWidth: 0 }}
            aria-label="Voir le profil utilisateur"
        >
            <img
                src={displayPicture}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
            />
            <div className="flex flex-col min-w-0">
                <span className="text-white text-sm font-semibold truncate">{displayName}</span>
                <span className="text-white text-xs opacity-80 truncate">{displayEmail}</span>
            </div>
        </button>
    );
}

export default UserProfil;