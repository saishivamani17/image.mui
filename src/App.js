import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './appbar'; 
import MyPage from './backgroundcolor';
import Grid from './grid';
import TextRating from './rating';

function App() {
  return (
   <div>
    <ResponsiveAppBar/>
    <Grid/>
    <MyPage/>
    <TextRating/>
    

   </div>
  );
}
export default App;
