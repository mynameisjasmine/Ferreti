import { Link } from 'react-router';

export default function Navbar() {
    return (
        <nav>
         <Link to="/">Home</Link>
         {" | "}
         <Link to="/editor">Editor</Link>
         {" | "}
         <Link to="/documentview">DocumentView</Link>
        </nav>
    )
        
     }