import './App.css';
import MobileLayout from './layouts/MobileLayout';
import MobileHeader from './components/mobile/MobileHeader';
import MobileBody from './components/mobile/MobileBody';
import MobileFooter from './components/mobile/MobileFooter';

function App() {
  return (
    <>
      <MobileLayout>
        <MobileHeader />
        <MobileBody />
        <MobileFooter />
      </MobileLayout>
    </>
  );
}

export default App;
