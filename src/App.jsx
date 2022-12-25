import { Outlet } from 'react-router-dom';
import CreateNav from './components/navbar';


function App() {
  return (
    <>
      <header>
        <CreateNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
