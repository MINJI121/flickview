import FlickView from '../components/FlickView';

function App() {
  return (
    <div>
      <FlickView>
        <section style={{ height: '100vh', backgroundColor: '#f99' }}>0</section>
        <section style={{ height: '100vh', backgroundColor: '#9f9' }}>1</section>
        <section style={{ height: '100vh', backgroundColor: '#99f' }}>2</section>
        <section style={{ height: '100vh', backgroundColor: '#f95' }}>3</section>
        <section style={{ height: '100vh', backgroundColor: '#2f9' }}>4</section>
      </FlickView>
    </div>
  );
}

export default App;
