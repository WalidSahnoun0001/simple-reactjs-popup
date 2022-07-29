import {useState} from 'react'
import Popup from './components/Popup';

function App() {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <section className="popup">
      <div className="no-popup">
        {
          (!isOpen) ? <button onClick={()=> setIsOpen(true)}>Open Popup</button> : ''
        }
      </div>
      <Popup openState={isOpen} setState={setIsOpen} />
    </section>
  );
}

export default App;
