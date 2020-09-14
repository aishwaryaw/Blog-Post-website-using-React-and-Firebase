import React from 'react'
import {Link} from 'react-router-dom';

function SignedOutLinks() {
    return (
        <div>
            <ul className="right">
                <li><Link to="/signup">Singup</Link></li>
                <li><Link to="/signin">Signin</Link></li>
            </ul>
            
        </div>
    )
}

export default SignedOutLinks
