import React, { useContext } from 'react';
import Characters from '../components/Characters';
import MyContext from '../provider/Context';

function UserPage() {
  const { user, email } = useContext(MyContext);
  console.log(user, email)
  return (
    <main>
      <section>
        { `Seja bem-vindo, ${user}` }
        <Characters />
      </section>
    </main>
  )
}

export default UserPage;
