import './App.css';
import BookList from './components/BookList';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
import CommentForm from './components/CommentForm';
import Comments from './components/comments';

function App() {
  return (
    <div className="App">
    
    <MyBadge name='This is my Badge' color='success'/>
    <BookList/>
    </div>
  );
}

export default App;


// --save styled-component 
//--save react-elastic-carousel