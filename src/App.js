import './App.css'
import TinyPopover from './components/tinyPopover/TinyPopover'
import ReactstrapPopover from './components/reactstrap-popover/ReactstrapPopover'

function App() {
  return (
    <div className="App">
      {/* <SimplePopper /> */}
      {/* { <SimplePopper2 /> } */}
      <TinyPopover />

      {/* Reactstrap library Popover */}
      <ReactstrapPopover />
    </div>
  )
}

export default App
