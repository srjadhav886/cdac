import './App.css';
import { useState } from 'react';

function App() {

  let [messages, setsmg] = useState("");
  const handlemessage = (e) => {
    const newmessage = e.target.value;
    setsmg(newmessage);
  }

  const [list, setlist] = useState("");
  const sendmsg = () => {
    const newlist = [messages, ...list];
    setlist(newlist);
    setsmg("");
  }

  return (
    <>
      <div className='bg-secondary p-3 text-light d-flex '>
        <div > <h2>Whatsapp</h2> By SACHIN RAJHANS JADHAV   210940520078</div>

        {/* {studentname} {studentid} */}


      </div >
      <div className='row mt-2 d-flex' >
        <div className='col-8'>
          <input className='form-control form-control-lg d-flex' type="text" value={messages} onChange={handlemessage} placeholder='lets chat here' />
        </div>
        <div>
          <input className='btn btn-primary btn-lg mt-3' type="button" value="send" onClick={sendmsg} />
        </div>
        <div className=''>{messages}</div>
      </div>
      <div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index % 2 == 0
                  ? "text-start alert alert-primary " + item
                  : "text-end alert alert-primary " + item
              }
            >
              {item}
            </div>
          );
        })}
      </div>



    </>
  );
};

export default App;

