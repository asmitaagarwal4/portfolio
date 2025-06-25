// import { Sidebar } from 'lucide-react';
import './App.css'
import Background from './component/Background';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import About from './component/About';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Badges from './component/Badges';

function App() {
  
  return (
    <div className="box-border h-screen scrollbar-hide">
    <Background />
    <Header />
    <About />
    <Sidebar/>
    {/* Add more components as needed */}
    {/* <div className=''>  </div> */}
    <Projects/>
    <Skills/>
    <Badges/>
    </div>
  )
}

export default App
