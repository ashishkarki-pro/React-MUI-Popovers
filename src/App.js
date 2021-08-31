import './App.css'
import TinyPopover from './components/tinyPopover/TinyPopover'
import ReactstrapPopover from './components/reactstrap-popover/ReactstrapPopover'
import ReactPopperExample from './components/reactPopperLib/ReactPopperExample'

function App() {
  return (
    <div className="App">
      {/* <SimplePopper /> */}
      {/* { <SimplePopper2 /> } */}
      <TinyPopover />

      {/* Reactstrap library Popover */}
      {/* <ReactstrapPopover /> */}

      {/* React-popper library */}
      {/* <ReactPopperExample /> */}
    </div>
  )
}

export default App
