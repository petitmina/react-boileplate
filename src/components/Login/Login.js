import React, { useState } from "react";
import styles from './Login.module.css'

function Login  () {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(!Email) {
      return alert("ID를 입력하세요.");
    } 
     else if(!Password) {
      return alert("Password를 입력하세요.");
     }

    fetch("http://localhost:3000/login", {
      method:"POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: '1234@naver.com',
        Password: '1234',
      }),
    }) 
    .then((response) =>response.json())
    .then((response) => {
      if(response.token) {
        localStorage.setItem('wtw-token', response.token);
        this.props.history.push('/register');
      } else if (!response.token) {
        this.props.history.push('/login')
      }
    })

  }

  return (
    <div className={styles.container}>
    <form onSubmit={onSubmitHandler}>
       <label className={styles.label}>Email</label>
      <input type="email" placeholder="이메일을 입력하세요" value={Email} onChange={onEmailHandler} className={styles.input} /> 
      <label>Password</label>
      <input type="password" placeholder="패스워드를 입력하세요" value={Password} onChange={onPasswordHandler} className={styles.input} />

      <br />
      <button type="submit" className={styles.button}>Login</button>
    </form>
      
    </div>
  );
};

export default Login;
