import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white-800">
            <div className="w-[90%] max-w-sm md:max-x-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">

                <h1 className="text-2xl font-bold">Oops!</h1>
                <p className="text-white-500">Sorry, an unexpected error has occurred.</p>
                <p className="mt-4">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;