import React, { useContext } from 'react';
import Button from '../components/Button';
import InputForm from '../components/InputForm';
import { verifyEmail } from '../helpers';
import MyContext from '../provider/Context';
import './pages.css';

function HomePage() {
  const { user, setUser, email, setEmail } = useContext(MyContext);
  return (
    <main className="login-page">
      <form className="login-form">
        <InputForm
          labelText="Nome"
          type="text"
          onChange={ ({ target }) => setUser(target.value) }
          name={ user }
        />
        <InputForm
          labelText="Email"
          type="text"
          onChange={ ({ target }) => setEmail(target.value) }
          name={ email }
        />
        <Button disabled={ !verifyEmail(email) } />
      </form>
    </main>
  )
}

export default HomePage;
