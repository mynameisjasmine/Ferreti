import { Link } from 'react-router';
import '../App.css'

export default function Home() {
    return(
        <>
        <div>
            <h1>My Documentation</h1>

            <div className='new-doc'>
             <button className='doc-button'><Link to="/editor"> + Create</Link></button>
            </div>
            
           <div className='ext-docs'>
            <h2>Existing Documents</h2>

            <ul>
                <li>
                    <Link to="/documentview/123">View Document</Link>
                </li>

                <li>
                    <Link to="/editor/123">Edit Document</Link>
                </li>
            </ul>
            </div>
        </div>
        </>
    )
}