// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = ({ setisLogin, users, setUsers, setUser }) => {
//   let [signUpObj, setSignupObj] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   let [valid, setvalid] = useState({
//     emailSign: "Your email",
//     emailWarning: "text-muted",
//     emailisValid: false,
//     pwWarning: "text-muted",
//     pwSign: "Password require longer than 8 characters",
//     pwisValid: false,
//   });
//   const navigate = useNavigate();
//   let changeHandler = (e) => {
//     setSignupObj({ ...signUpObj, [e.target.name]: e.target.value });
//     if (signUpObj.name) {
//       setvalid({ ...valid, nameSign: "" });
//     }
//     if (e.target.name === "email" && /\S+@\S+\.\S+/.test(signUpObj.email)) {
//       setvalid({
//         ...valid,
//         emailWarning: "text-muted",
//         emailSign: "Email is valid",
//         emailisValid: true,
//       });
//     } else if (e.target.name === "email") {
//       setvalid({
//         ...valid,
//         emailWarning: "text-danger",
//         emailSign: "Email is invalid",
//       });
//     }
//     if (e.target.name === "password" && signUpObj.password.length < 8) {
//       setvalid({
//         ...valid,
//         pwWarning: "text-danger",
//         pwSign: "Password shorter than 8 character",
//       });
//     } else if (e.target.name === "password") {
//       setvalid({
//         ...valid,
//         pwisValid: true,
//         pwWarning: "text-muted",
//         pwSign: "Password require longer than 8 characters",
//       });
//     }
//   };

//   let clickHandler = (e) => {
//     e.preventDefault();
//     if (signUpObj.name.length === 0) {
//       setvalid({
//         ...valid,
//         nameSign: "Name can not be empty",
//         nameWarning: "text-danger",
//       });
//       return
//     } else {
//       setvalid({ ...valid, nameSign: "" });
//     }
//     let findEmail = users.find((user) => user.email === signUpObj.email);
//     if (findEmail) {
//       setvalid({
//         ...valid,
//         emailSign: "Email exists",
//         emailisValid: false,
//         emailWarning: "text-danger",
//       });
//     }
//     console.log(valid.pwisValid, valid.emailisValid);

//     if (
//       !valid.pwisValid ||
//       !valid.emailisValid ||
//       signUpObj.name.length === 0
//     ) {
//       return;
//     }
//     setisLogin(true);
//     console.log(signUpObj);
//     setUsers((prev) => [...prev, signUpObj]);
//     setUser(signUpObj.name);
//     navigate("/");
//   };

//   return (
//     <div className="row">
//       <div className="col-sm-6 offset-3">
//         <form>
//           <div className="mb-3">
//             <label for="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               onChange={(e) => changeHandler(e)}
//               id="name"
//               className="form-control"
//               placeholder=""
//               aria-describedby="helpId"
//             />
//             <small id="helpId" className={valid.nameWarning}>
//               {" "}
//               {valid.nameSign}{" "}
//             </small>
//           </div>
//           <div className="mb-3">
//             <label for="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               onChange={(e) => changeHandler(e)}
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
//             <label for="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               onChange={(e) => changeHandler(e)}
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
//             type="button"
//             onClick={(e) => clickHandler(e)}
//             className="btn btn-primary"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import axios from "axios";
import { useState } from "react";




    const SignUp = () => {


        let [signUpObj,setSignupObj] = useState({name:'',email:'',password:''});
        let [signUpStatus, setSignUpStatus] = useState(false);
        let [dupeUserMsg,setDupUserMsg] = useState('');




        let changeHandler = (e) => {
            setSignupObj({...signUpObj,[e.target.name]:e.target.value});
            //console.log(signUpObj);
        }


        let clickHandler = async (e) =>{
            e.preventDefault();
            console.log(signUpObj);
            try{
            let resp = await axios.post(process.env.REACT_APP_BACKEND_URL+'signup',{...signUpObj});
            console.log("response status is "+resp.status);
            let data = await resp.data;
            console.log(data); // checking
            // can check mongodb Atlas to see if user has been added
            // can login and check to see if I am able to login fine

            // on successful sign up , set a flag to true
            if(data) {
                setSignUpStatus(true);
            }
            else {
                setDupUserMsg(" Sorry,a user with that email is already registered");
                console.log('error');
            }


            }
            catch(error) {
                setDupUserMsg(" Sorry,a user with that email is already registered");
                console.log('could not signup/store-user');
                console.log(error);
                   }
        }




        if( !signUpStatus) {
        return (
            <div className='row'>
                <div className="col-sm-6 offset-3">
                <h2> {dupeUserMsg}  </h2>
                <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" onChange={(e) => changeHandler(e)} id="name" className="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="email" name="email" onChange={(e) => changeHandler(e)} id="email" className="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="text" name="password" onChange={(e) => changeHandler(e)} id="password" className="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <button type="submit" onClick={(e) => clickHandler(e)}  className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        );
        }
        else {
           return (<div className='row mb-4'>
                <div className="col-sm-6 offset-3">
               <h4>  Congratulations {signUpObj.name}! You are now registered with
                RealGrande! <br/>
                Go Ahead and Login!
                </h4>
                </div>
            </div>);
        }
    }

    export default SignUp;