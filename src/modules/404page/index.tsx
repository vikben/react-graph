/**
 * @desc this is page 404 component. This component will display when no route is found.
 * @author Vikram vikben@gmail.com
 */

import { Link } from 'react-router-dom';
import page404Style from './404page.module.scss';

function PageNotFound() {
  return (
    <div className={page404Style.text404}>
      Page Not Found. <br />
      <Link to='/' className={page404Style.backToHome}>
        Home
      </Link>
    </div>
  );
}

export default PageNotFound;
