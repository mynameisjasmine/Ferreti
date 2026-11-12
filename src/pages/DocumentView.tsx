import { useParams } from "react-router";

export default function DocumentView() {
    const { id } = useParams<{ id: string }>()
    
    return(
        <>
       <div>
        <h1>Document Viewer</h1>
        <p>Viewing document ID: {id}</p>
       </div>
        </>
    ) 
}