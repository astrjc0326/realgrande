// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// const Header = ({ setisLogin, isLogin, user, setUser }) => {
//   //   const [name, setName] = useState('');
//   useEffect(() => {}, [isLogin, user]);
//   let navigate = useNavigate();
//   const handleSignUpOnClick = () => {
//     // console.log(name)
//   };
//   const handleSignOutOnClick = () => {
//     navigate('/');
//     setisLogin(false);
//     setUser('');
//   }
//   return (
//     <div className="row bg-warning d-flex align-items-center">
//       <div className="col-sm-3">
//         <Link to="/">
//           {" "}
//           <img className="logo" src="/imgs/logo.png" alt="logo here" />{" "}
//         </Link>
//       </div>
//       <div className="col-sm-5">
//         <p className="m-0 tagline text-white"> Your real estate destination!</p>
//       </div>
//       <div className="col-sm-4">
//         {/* <button
//           className="btn btn-primary mx-3"
//           data-bs-toggle="modal"
//           data-bs-target="#loginModal"
//           style={isLogin ? {display: 'none'} : {display: 'inline'}}
//         >
//           {" "}
//           Login{" "}
//         </button>
//         <div
//           className="text-success"
//           style={!!isLogin ? {display: 'inline'} : {display: 'none'}}
//         >
//           {" "}
//           Hello {name} !    {" "}
//         </div>
//         <button
//           className="btn btn-success"
//           data-bs-toggle="modal"
//           data-bs-target="#signupModal"
//           style={isLogin ? {display: 'none'} : {display: 'inline'}}
//         >
//           {" "}
//           SignUp{" "}
//         </button>

//         <button
//           className="btn btn-success"
//           style={isLogin ? {display: 'inline'} : {display: 'none'}}
//           onClick={() => setisLogin(false)}
//         >
//           {" "}
//           SignOut{" "}
//         </button> */}
//         <Link to="/login">
//           <button
//             className="btn btn-primary mx-3"
//             style={isLogin ? { display: "none" } : { display: "inline" }}
//           >
//             {" "}
//             Login{" "}
//           </button>
//         </Link>
//         <h3
//             className="text-primary mx-3"
//             style={isLogin ? { display: "inline" } : { display: "none" }}
//           >
//             {" "}
//             Hi {user}{" "}
//           </h3>
//         <Link to="/signup">
//           <button
//             className="btn btn-success"
//             style={isLogin ? { display: "none" } : { display: "inline" }}
//           >
//             {" "}
//             SignUp{" "}
//           </button>
//         </Link>
//         <button
//             className="btn btn-success"
//             onClick={handleSignOutOnClick}
//             style={isLogin ? { display: "inline" } : { display: "none" }}
//           >
//             {" "}
//             SignOut{" "}
//           </button>

//       </div>
//       {/* <h1 className="bg-warning"> Header!</h1>  */}

//       {/* login modal */}
//       <div
//         className="modal fade"
//         id="loginModal"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="loginModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header text-center">
//               <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body mx-3">
//               <div className="md-form mb-5">
//                 <i className="fas fa-envelope prefix grey-text"></i>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter email"
//                 />
//                 <small id="emailHelp" className="form-text text-muted">
//                   We'll never share your email with anyone else.
//                 </small>
//               </div>

//               <div className="md-form mb-4">
//                 <i className="fas fa-lock prefix grey-text"></i>
//                 <label for="exampleInputPassword1">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>
//             <div className="modal-footer d-flex justify-content-center">
//               <button
//                 className="btn btn-default btn-primary"
//                 aria-label="Close"
//                 data-bs-dismiss="modal"
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* sign up modal */}
//       <div
//         className="modal fade"
//         id="signupModal"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="signupModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header text-center">
//               <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body mx-3">
//               <div className="md-form mb-5">
//                 <i className="fas fa-user prefix grey-text"></i>
//                 <input
//                   type="text"
//                   name="name"
//                   id="orangeForm-name"
//                   className="form-control validate"
//                   placeholder="Your name"
//                 //   onChange={(e) => setName(e.target?.value)}
//                 />
//               </div>
//               <div className="md-form mb-5">
//                 <i className="fas fa-envelope prefix grey-text"></i>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter email"
//                 />
//                 <small id="emailHelp" className="form-text text-muted">
//                   We'll never share your email with anyone else.
//                 </small>
//               </div>

//               <div className="md-form mb-4">
//                 <i className="fas fa-lock prefix grey-text"></i>
//                 <input
//                   type="password"
//                   id="orangeForm-pass"
//                   className="form-control validate"
//                   placeholder="Your password"
//                 />
//               </div>
//             </div>
//             <div className="modal-footer d-flex justify-content-center">
//               <button
//                 className="btn btn-success"
//                 aria-label="Close"
//                 data-bs-dismiss="modal"
//                 onClick={handleSignUpOnClick}
//               >
//                 Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Header;

import {Link, useNavigate} from 'react-router-dom';
const Header = () => {
    let navigate = useNavigate();


    let logoutHandler = () => {
        // localStorage.clear();
        sessionStorage.clear();
        navigate('/')
    }


    let loginHandler = () =>{
        navigate('/login');
    }


    let signUpHandler = () =>{
        navigate('/signup');
    }
     return (
            <div className="row bg-warning d-flex align-items-center">
                <div className="col-sm-3">
                   <Link to="/">  <img className="logo" src="/imgs/logo.png" alt="logo here"/> </Link>
                </div>
                <div className="col-sm-5">
                    <p className="m-0 tagline"> Your real estate destination!</p>
                </div>
                <div className="col-sm-4">
                    {
                    // (localStorage.getItem('custname')) ?
                    (sessionStorage.getItem('custname')) ?
                        <>
                            {/* <h6> Welcome { localStorage.getItem('custname') }! </h6> */}
                            <h6> Welcome { sessionStorage.getItem('custname') }! </h6>
                            <button onClick={logoutHandler} className="btn btn-danger mx-3"> Logout </button>
                        </>
                      :
                        <>
                            <button className="btn btn-primary mx-3" onClick={loginHandler}> Login</button>
                            <button className="btn btn-success" onClick={signUpHandler}> SignUp </button>
                        </>
                    }
                     </div>

            {/* <h1 className="bg-warning"> Header!</h1>  */}
            </div> );
}
export default Header;
