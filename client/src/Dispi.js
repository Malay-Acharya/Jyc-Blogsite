import Blogpost from './Blogpost'
import { useParams } from 'react-router-dom';

const Dispi = () =>{
    const { club } = useParams();
    return(
        <Blogpost clb = {club}/>
    )
}

export default Dispi