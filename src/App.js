
import { Navibar } from './components/navibar/navibar';
import {Person} from './components/person/person';
import { Skills } from './components/skills/skills';
import { Work } from './components/work/work';
import {Contack} from './components/contack/contack';
import {Footer} from './components/footer/footer';
import './App.scss';
function App() {
  return (
    <div className='app'>
    <Navibar/>
    <div className="container">
    <Person/>
    <Skills/>
    <Work/>
    <Contack/>
    
    </div>
    <Footer/>
    </div>
      
  );
}

export default App;
