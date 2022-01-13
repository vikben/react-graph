/**
 * @desc this is the header component with logo of the company
 * @author Vikram vikben@gmail.com
 */

import { Link } from 'react-router-dom';

import { AppContainer } from '../../common/muiComponents/';

import headerStyle from './header.module.scss';

function Header() {
  /**
   * @desc react component return function that will return JSX with app logo
   */
  return (
    <div className={headerStyle.wrapper}>
      <AppContainer maxWidth='xl'>
        <Link className={headerStyle.logo} to='/'>
          KONUX
        </Link>
      </AppContainer>
    </div>
  );
}

export default Header;
