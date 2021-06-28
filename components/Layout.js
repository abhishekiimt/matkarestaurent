
import Navbar from "./Navbar"


const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
            {children}
            </div>
            
        </div>
    )
}

export default Layout