/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Greeting from './Greeting';
import AccountHOC from './AccountHOC';
import UserAccount from './UserAccount';

const UserAccountWrapper = AccountHOC(UserAccount);

function App() {
  const a = new AbortController();
  console.log({ a });
  console.log(<Greeting />);
  return (
    <>
      hellow
      <UserAccountWrapper id={1} name={'devendra'} email={'dev@gamil.com'} />
    </>
  );
}

export default App;
