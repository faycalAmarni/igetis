import React, {Button} from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../img/404-error-page.jpg';
class NotFoundPage extends React.Component{
    render(){

        return(
          <div >
            <img src={PageNotFound}  />
          </div>
        )

    }
}


export default NotFoundPage;
