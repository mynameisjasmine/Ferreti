import { Link } from 'react-router';

export default function Home() {
    return(
        <>
        <div>
            <h1>My Documentation</h1>
            <Link to="/editor">Create New Document</Link>

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
        </>
    )
}