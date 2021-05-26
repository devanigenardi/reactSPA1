import React from 'react';
import Counter from './components/Counter'
import Lista from './components/Lista'
import Form from './components/Form'
import FormHooks from './components/FormReactHook'
import PropsUsersInsert from './components/PropsUsersInsert'
import './index.css';

function App() {

  

  return (
    <div className="container mt-5">
      <h1>Mi first react app</h1>
      <Counter />
      <Lista />
      <Form />
      <FormHooks />
      <PropsUsersInsert />
    </div>
  );
}

export default App;
