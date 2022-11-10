import NavBar from './NavBar';

export const UserLayout = ({ children }) => {
    return (
        <div>
            <NavBar greeting={`Futbolópolis`}/>
            { children }
        </div>
    )
}