import { FlickView } from '../components/FlickView';

function App() {
  return (
    <FlickView sectionCount={5}>
      <section style={{ height: '100vh', backgroundColor: '#f99' }}>1</section>
      <section style={{ height: '100vh', backgroundColor: '#9f9' }}>2</section>
      <section style={{ height: '100vh', backgroundColor: '#99f' }}>3</section>
      <section style={{ height: '100vh', backgroundColor: '#f95' }}>4</section>
      <section style={{ height: '100vh', backgroundColor: '#2f9' }}>5</section>
    </FlickView>
  );
}

export default App;
