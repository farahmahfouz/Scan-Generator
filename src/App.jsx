import { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {
const [text, setText] = useState('');

const handleChange = (e)=>{
  setText(e.target.value)
}

  return (
    <div>
      <h1>QR Code Generat</h1>
      <QRCode value={text}/>
      <div>
        <p>Enter you text here</p>
        <input type="text" value={text} onChange={(e)=> handleChange(e)}/>
      </div>
    </div>
  )
}

export default App
