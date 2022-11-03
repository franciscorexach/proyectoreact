import Navbar from "./Navbar";

export const UserLayout = ({ children }) => {
    return <div>
        <Navbar />
        { children }
        </div>
}