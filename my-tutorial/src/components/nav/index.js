import './nav.css'
import { Link} from 'react-router-dom';

export default function Navigation(){
    return(
        <div>
            <ul>
               
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about"> About Us</Link></li>
                <li><Link to="/contact"> Contact Us</Link></li>
                
            </ul>
        </div>
    )
}