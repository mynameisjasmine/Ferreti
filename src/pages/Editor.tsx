import { useParams } from 'react-router';


export default function Editor() {
    const  { id } = useParams<{ id: string }>()

    return (
        <>
        <div>
            <h1>{id ? "Edit Document" : "Create Document"}</h1>
            {id && <p>Editing document ID: {id}</p>}
        </div>
        </>
    ) 
}