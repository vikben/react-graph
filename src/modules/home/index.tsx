/**
 * @desc this is the home comp. with form and graph comp.
 * @author Vikram vikben@gmail.com
 */

import { useContext, useEffect } from 'react';

import { AppContext } from '../../context';
import { useGetData } from '../../service/';

import Loading from '../../common/loader';

import Graph from '../../components/graph';
import DataForm from './dataForm';

function Home() {
  const [getData] = useGetData('/value');
  const { state } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, [getData]);

  const { isLoading, hasError, errorMsg } = state;

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <>{errorMsg}</>;
  }

  return (
    <>
      <DataForm />
      <Graph />
    </>
  );
}

export default Home;
