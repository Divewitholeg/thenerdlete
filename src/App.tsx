import './App.css';
import { Suspense } from 'react';
import { useScreenLayout } from '@/utils/useScreenLayout';
import { getComponentsForScreen } from '@/utils/componentLoader';

function App() {
  const { isTabletHorizontal } = useScreenLayout();
  const { Layout, Header, Body, Footer } =
    getComponentsForScreen(isTabletHorizontal);

  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            Loading...
          </div>
        }
      >
        <Layout>
          <Suspense fallback={<div>Loading header...</div>}>
            <Header />
          </Suspense>
          <Suspense fallback={<div>Loading content...</div>}>
            <Body />
          </Suspense>
          <Suspense fallback={<div>Loading footer...</div>}>
            <Footer />
          </Suspense>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
