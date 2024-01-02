import { createResource, type Component, createSignal, Show, Suspense } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

interface Response {
  Message: string
}

const App: Component = () => {
  const [data] = createResource<Response, true>(async () => {
    try {
      const resp = await fetch('http://localhost:8080')
      return await resp.json()
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  })
  console.log(data())
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          {data()?.Message}
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid !!
        </a>
        
      </header>
    </div>
  );
};

export default App;
