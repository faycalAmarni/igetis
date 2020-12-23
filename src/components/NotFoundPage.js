import React, {Button} from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../img/404-error-page.jpg';
class NotFoundPage extends React.Component{
    render(){

        return(
          <div style={{alignItems: 'center'}}>
            <img class="col-md-10" src={PageNotFound} />
          </div>
        )

    }
}


export default NotFoundPage;
