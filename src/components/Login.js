// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// const Login = ({ setisLogin, setUsers, users, setUser }) => {
//   let [formObj, setFormObj] = useState({ email: "", password: "" });
//   let [valid, setvalid] = useState({
//     emailSign: "Your email address",
//     emailWarning: "text-muted",
//     pwSign: "Your password",
//     pwWarning: "text-muted",
//   });
//   const navigate = useNavigate();

//   let changeHandler = (e) => {
//     //console.log(e.target.value);
//     setFormObj(e.target.value);
//     setFormObj({ ...formObj, [e.target.name]: e.target.value });
//     console.log(users);
//     //console.log(formObj);
//   };

//   let clickHandler = (e) => {
//     e.preventDefault();
//     // console.log(formObj);
//     let curUser = users.find(
//       (user) =>
//         user.email === formObj.email && user.password === formObj.password
//     );
//     let wrongPW = users.find((user) => user.email === formObj.email);
//     // console.log(users)
//     if (curUser) {
//       // reset the validation of email & password
//       setvalid({ ...valid, pwWarning: "text-muted", pwSign: "Your password", emailWarning: "text-muted", emailSign: "Your email address"});

//       setisLogin(true);
//       setUser(curUser.name);
//       // redirect to house page
//       navigate("/");
//     } else if (wrongPW) {
//       setvalid({ ...valid, emailWarning: "text-muted", emailSign: "email is valid", pwWarning: "text-danger", pwSign: "password is not valid"});
//     } else {
//       setvalid({ ...valid, emailWarning: "text-danger", emailSign: "email is not valid"});
//     }
//     let authCheck= async () => {
//       try{
//         console.log(" in try block");
//         const {email, password} = formObj;
//         let resp = await axios.post("http://localhost:3002/login",{email,password});
//         let userdata = await resp.data;
//         console.log(userdata);
//       }
//       catch(e){
//         console.log(e);
//       }
//       }
//       authCheck();

//   };
//   return (
//     <div className="row">
//       <div className="col-sm-6 offset-3">
//         <form>
//           <div className="mb-3">
//             <label for="" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               onChange={(e) => changeHandler(e)}
//               name="email"
//               id="email"
//               className="form-control"
//               placeholder=""
//               aria-describedby="helpId"
//             />
//             <small id="helpId" className={valid.emailWarning}>
//               {" "}
//               {valid.emailSign}{" "}
//             </small>
//           </div>

//           <div className="mb-3">
//             <label for="" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               onChange={(e) => changeHandler(e)}
//               name="password"
//               id="password"
//               className="form-control"
//               placeholder=""
//               aria-describedby="helpId"
//             />
//             <small id="helpId" className={valid.pwWarning}>
//               {valid.pwSign}
//             </small>
//           </div>

//           <button
//             type="submit"
//             onClick={clickHandler}
//             className="btn btn-primary"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import axios from "axios";
import { useState } from "react";
import {useNavigate}  from 'react-router-dom';


const Login = () => {
  let [formObj, setFormObj] = useState({ email: '', password: '' });
  let [invalidLoginMsg, setInvalidLoginMsg] = useState('');
   let navigate = useNavigate();


  let changeHandler = (e) => {
    //console.log(e.target.value);
    setFormObj(e.target.value);
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
    //console.log(formObj);
  }


  let clickHandler = (e) => {
    e.preventDefault();
    // console.log(formObj);
    let authCheck= async () => {
    try{
      console.log(" in try block");
      const options = {
        headers: {"content-type": "application/json"}
      }
      let resp = await axios.post(process.env.REACT_APP_BACKEND_URL+'login',{...formObj},options);
      let userdata = await resp.data;
      if(userdata == 'Authentication Failed') {
        //set message - use state variable
        setInvalidLoginMsg(" Sorry. Invalid login credentials.Please try again");
      }
      else {
        console.log("auth passed!");
        console.log(userdata);
        setInvalidLoginMsg('');
       // localStorage.setItem('custname',userdata.name);
       // localStorage.setItem('custemail',userdata.email);


      sessionStorage.setItem('custname',userdata.name);
      sessionStorage.setItem('custemail',userdata.email);
      console.log("role is "+ userdata.role)
      if(userdata.role == 'realtor')
        navigate('/enquiries');
      else
        navigate('/');
      }
    }
    catch(e){
      console.log(e);
    }
    }
    authCheck();
  }


  return (
    <div className="row">
          <div className="col-sm-6 offset-3">
        <form encType="application/json">

          <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input type="email" onChange={(e) => changeHandler(e)} name="email" id="email" className="form-control" placeholder="" aria-describedby="helpId" />
            <small id="helpId" className="text-muted"> your email address</small>
          </div>




          <div className="mb-3">
            <label htmlFor="" className="form-label">Password</label>
            <input type="text" onChange={(e) => changeHandler(e)} name="password" id="password" className="form-control" placeholder="" aria-describedby="helpId" />
            <small id="helpId" className="text-muted">Your password</small>
          </div>


          <h6 className="text-danger">  {invalidLoginMsg} </h6>

          <button type="submit" onClick={clickHandler} className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}


export default Login