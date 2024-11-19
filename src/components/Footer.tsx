import { FaHeart } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="absolute bottom-0 w-full bg-secondary/80 backdrop-blur-sm py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <p>&copy; {currentYear} Cesar's Portfolio. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <FaHeart className="text-accent" /> using React
                    </p>
                </div>
            </div>
        </footer>
    )
}