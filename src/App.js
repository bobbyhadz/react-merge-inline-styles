import './App.css';

export default function App() {
  const style1 = {backgroundColor: 'salmon'};
  const style2 = {fontSize: '2rem'};

  return (
    <div>
      <div style={{...style1, ...style2}}>bobbyhadz.com</div>
    </div>
  );
}
