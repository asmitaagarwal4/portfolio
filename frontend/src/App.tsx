// import { Sidebar } from 'lucide-react';
import './App.css'
import Background from './component/Background';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import About from './component/About';
import Projects from './component/Projects';

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
    </div>
  )
}

export default App
