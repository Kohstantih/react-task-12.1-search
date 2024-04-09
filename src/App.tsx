import './App.css';
import Search from './components/Search/Search';



// const search = 'r';
// const params = new URLSearchParams({q: search});
// fetch(`http://localhost:7070/api/search?${params}`).then(response => response.json()).then(data => console.log(data));

function App() {
  return (
    <>
      <Search />
    </>
  )
}

export default App
