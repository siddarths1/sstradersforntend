import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Displayusename = ()=>{
    const locationpath = useLocation();
    return(
        <>
         {/* <h5>hello user {locationpath.state.id }</h5> */}
        </>
    );
}
export default Displayusename