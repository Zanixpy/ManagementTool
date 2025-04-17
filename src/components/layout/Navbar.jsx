import { Link } from 'react-router-dom'

export function NavBar() {
    return (
        <nav className="fixed left-0 top-0 h-screen w-64 bg-gray-500">
            <div className="flex flex-col items-start h-full p-4 space-y-4">
                <Link to="/home" className="text-white hover:text-gray-300">
                    Home
                </Link>
                <Link to="/dashboard" className="text-white hover:text-gray-300">
                    Dashboard
                </Link>
                <Link to="/projects" className="text-white hover:text-gray-300">
                    Projets
                </Link>
                <Link to="/setting" className="text-white hover:text-gray-300">
                    Setting
                </Link>
            </div>
        </nav>
    )
} 