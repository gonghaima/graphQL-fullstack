import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TransactionPage from './pages/TransactionPage';
import NotFound from './pages/NotFound';
import Header from './components/ui/Header';
import { useQuery } from '@apollo/client';
import { GET_AUTHENTICATED_USER } from './graphql/queries/user.query';

function App() {
  const authUser = true;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);
  console.log("loading: ", loading);
  console.log('data: ', data);
  console.log("error: ", error);
  return (
    <>
      {authUser && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
