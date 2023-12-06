import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-expand">
            <div className="container">
                <Link to="/" className="navbar-brand">Vite Contentful Starter</Link>
            </div>
        </nav>
    )
}