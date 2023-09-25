import React, { useState } from "react";
import styles from './Login.module.css'

const Login = () => {
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
