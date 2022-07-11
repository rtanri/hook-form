import './App.css';
import QuickStart from './component/QuickStart';
import RegisterField from './component/RegisterField';
import Watch from './component/Watch';
import IntExistingForm from './component/IntegrateExistingForm';
// import IntGlobalState from './component/IntegrateGlobalState';

function App() {
  return (
    <div className="App">
      <QuickStart />
      <RegisterField />
      <Watch />
      <IntExistingForm />
      {/* <IntGlobalState /> */}
    </div>
  );
}

export default App;
