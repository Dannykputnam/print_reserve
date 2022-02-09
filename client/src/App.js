import { Routes, Route} from 'react-router-dom';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  </>
)

export default App;
