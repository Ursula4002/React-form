

function Profil() {
    return (
        <div className="profil bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center mt-4">Profil Page</h1>
            <div className="flex justify-center mt-6">
            <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full border-4 border-green-700 p-4 w-32 h-32 mx-auto">
                <img src="src/assets/User_profile_picture.jpg" alt="User Avatar" />
                </div>
                <div className="text-center mt-4">
                <h2 className="text-xl font-semibold mb-4">User Information</h2>
                <p className="text-gray-700">Username: JohnDoe</p>
                <p className="text-gray-700">Email: johndoe@example.com</p>

                </div>
            </div>
            </div>
        </div>
        )
}

export default Profil;