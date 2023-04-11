import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return 'border-b-red-500 text-black';
        } else {
            return 'border-b-transparent text-gray-400';
        }
    }

    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-10">
            <header className="items-center flex justify-between max-w-6xl mx-auto px-3">
                <div>
                    <img alt="Realtor Clone Logo" className="cursor-pointer h-5" onClick={() => navigate("/")} src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" />
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li className={`${pathMatchRoute('/')} border-b-[3px] cursor-pointer font-semibold py-3 text-sm`} onClick={() => navigate("/")}>Home</li>
                        <li className={`${pathMatchRoute('/offers')} border-b-[3px] cursor-pointer font-semibold py-3 text-sm`} onClick={() => navigate("/offers")}>Offers</li>
                        <li className={`${pathMatchRoute('/sign-in')} border-b-[3px] cursor-pointer font-semibold py-3 text-sm`} onClick={() => navigate("/sign-in")}>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}