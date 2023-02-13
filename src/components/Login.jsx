import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import User_context from "./User_context";

import axios from "axios"

import loginImg from "../assets/login.jpg"

// import { emailValidator, passwordValidator } from "./regexValidator";
import validator from "validator";


const Login = () => {

  // assigning navigate
  const navigate = useNavigate();


  // Usestates definition
  const [input, setInput] = useState({ email: "", password: "" });
  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  // usercontext for userid
  const { setUserID, userID } = useContext(User_context)

  // Users List
  const users = [
    {
      username: 'diwa@gmail.com',
      password: 'Diwa@123'
    }, {
      username: 'Diwa',
      password: 'Diwa@123'
    },
    {
      username: 'user1',
      password: 'User1@123'
    },
    {
      username: 'user2',
      password: 'User2@123'
    },
    {
      username: 'user3',
      password: 'User3@123'
    },
    {
      username: 'user4',
      password: 'User4@123'
    },
    {
      username: 'user5',
      password: 'User5@123'
    },
    {
      username: 'user6',
      password: 'User6@123'
    },
    {
      username: 'user7',
      password: 'User7@123'
    },
    {
      username: 'user8',
      password: 'User8@123'
    },
    {
      username: 'user9',
      password: 'User9@123'
    },
    {
      username: 'user10',
      password: 'User10@123'
    }
  ];


  // handle change 
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // function to check userid and password

  const checkUser = () => {
    const usercheck = users.find(user => (user.username === input.email && user.password === input.password));
    if (usercheck) {
      console.log("Login successful");
      caller()
      // navigate('/dum')
    } else {
      console.log("Wrong password or username");
    }
    console.log(usercheck);
  }

  // useEffect(() => {
  //   checkUser(users)
  //     }, [input.password, input.password])

  //     console.log(input)




  // Caller function for Fastapi - post for UserId and password
  const caller = async () => {
    const usernameUrl = "http://127.0.0.1:8000/login";


    //Clear the previous timeout.    
    // clearTimeout(timeout.current)
    let user_name = input.email
    let pass_word = input.password
    console.log("UserId and Password")
    console.log(user_name)
    console.log(pass_word)
    console.log("Calling API.....");

    // let res = {
    //   data: { username: "", password: "" }
    // }
    console.log("Start")
    await axios.post(usernameUrl, { username: user_name, password: pass_word }).then(async function (res) {
      console.log(res)
      console.log(res.data.UserID)
      setUserID(res.data.UserID)
      console.log(userID)
      navigate('/dum')
      
    }).catch(function (err) {
      console.log(err)
    })
    
    console.log("End")
    // return 2;
    // console.log("Im result data")
    // console.log(res.data)

    // localStorage.setItem('userId',res.data["UserID"])

    // let u=sessionStorage.setItem('userId',res.data["UserID"])
    // console.log("userid to verify")
    // console.log(u)

    // let u = localStorage.setItem('userId',res.data["UserID"])
    // console.log("userid to verify")
    // console.log(u)


    // navigate('/dum')


    // console.log("im user id")
    // console.log(userId)
  }








  // function for validating userid and password 
  const formSubmitter = (e) => {
    /* console.log("for submitter is working") */
    e.preventDefault();
    setsuccessMessage("");

    if (!validator.isEmail(input.email))
      return seterrorMessage("Please enter valid email id");

    else if (!(input.password))
      return seterrorMessage(
        "Password should contain minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters"
      );

    else if (input.email === "diwa@gmail.com" && input.password === "Diwa@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user1@gmail.com" && input.password === "User1@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user2@gmail.com" && input.password === "User2@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user3@gmail.com" && input.password === "User3@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user4@gmail.com" && input.password === "User4@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user5@gmail.com" && input.password === "User5@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user6@gmail.com" && input.password === "User6@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user7@gmail.com" && input.password === "User7@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user8@gmail.com" && input.password === "User8@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user9@gmail.com" && input.password === "User9@123") {

      navigate('/dum')
      console.log("im logged in")
    }

    else if (input.email === "user10@gmail.com" && input.password === "User10@123") {

      navigate('/dum')
      console.log("im logged in")
    }


    else
      return seterrorMessage("Invalid email or password")


    setsuccessMessage("Successfully Validated");

  };




  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">Recommendatin System</h2>
          {errorMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "red" }}>
              {errorMessage}
            </div>
          )}
          {successMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "green" }}>
              {successMessage}
            </div>
          )}
          <div className="flex flex-col py-2">
            <label>Email ID</label>
            <input
              className="border p-2"
              type="text"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <button
            className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
            onClick={(e)=>{
              e.preventDefault()
              checkUser()
            }}
          >
            Sign In
          </button>

          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>

            <Link to="/register">
              <div className="register-btn">
                <button>register</button>
              </div>
            </Link>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Login