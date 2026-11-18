import { Link, useNavigate } from 'react-router';
import { loadDocs, deleteDoc } from '../storage';
import type { Doc } from '../types';
import { useEffect, useState } from 'react';
import '../App.css'

export default function Home() {
    const [docs, setDocs] = useState<Doc[]>([]);
    const navigate = useNavigate();

    useEffect(()=> {
    setDocs(loadDocs())
    }, []);

    const handleDelete = (id: string) => {
        if(!confirm("Delete this document?")) return
        deleteDoc(id)
        setDocs(loadDocs())
    }

    return (
        <>
        <div>
            <h1>Documentation</h1>
            <button className='new-doc-button' onClick={()=> navigate("/editor")}>+ New Document</button>

            {docs.length === 0 && <p className='home-text'>No documents yet.</p>}

             <ul>
            {docs.map((doc) => (
                <li key={doc.id}>
                <Link to={`/documentview/${doc.id}`}>{doc.title}</Link>
                <span>- updated {new Date(doc.updatedAt).toLocaleString()}</span>
                
                <button onClick={() => navigate(`/editor/${doc.id}`)}>Edit</button>
                
                <button onClick={() => handleDelete(doc.id)}>Delete</button>
                </li>

            ))}
        </ul>
        </div>
        </>
     )
   }