
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "../redux/userSlice";


const App = () => {
  const {name, email} = useSelector((state)=> state.user);
  const dispatch = useDispatch();

  const handleEmailChange = (e)=>{
    dispatch(updateEmail(e.target.value));
  }
  return (
    <div>
      <h1>User Information</h1>
      <div>
        <label>
          Name: <input type="text" value={name} onChange={(e)=>dispatch(updateName(e.target.value))}/>
        </label>
        </div>
        <div>
          <label>Email:
            <input type="email"
            value={email}
            onChange={handleEmailChange}
            />
          </label>
           <div className="output">
            Name - Thomas Edward Stark
            Email - tonystark@starkindustries.com
          <h2>Preview</h2>
          <p><strong>Name:</strong>{name}</p>
          <p><strong>Email:</strong>{email}</p>
        </div>
        </div>
    </div>
  );
};

export default App
