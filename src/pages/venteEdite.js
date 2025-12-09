import { useParams } from "react-router-dom"

const EditeVente=()=>{

    const {id}=useParams()
    return <h1>hi {id}</h1>


}
export default EditeVente