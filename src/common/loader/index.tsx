/**
 * @desc this component will display the loading state.
 * @author Vikram vikben@gmail.com
 */

import CircularProgress from '@mui/material/CircularProgress';
import loaderStyle from './loader.module.scss';

function Loading() {

  return (
    <div className={loaderStyle.loader}>
      <CircularProgress />
    </div>
  );
}

export default Loading;
