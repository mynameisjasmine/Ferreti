import { Link } from 'react-router';
import '../App.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
         <Link to="/">Home</Link>
         {" | "}
         <Link to="/editor">Editor</Link>
         {" | "}
         <Link to="/documentview">DocumentView</Link>
        </nav>
    )
        
     }