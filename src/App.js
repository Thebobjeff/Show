import { AllRouts } from './routs/AllRouts';
import { Header, Footer } from './components'
import './App.css';

export const App = () => {
  return (
    <div>
      <Header/>
      <AllRouts/>
      <Footer/>
    </div>
  )
}

export default App;
