import React, { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const onNameHandler = (e) => {
        setName(e.target.value)
    }

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
    }
 
    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

  return (

    <div className={styles.container}>
      <form onSubmit={onSubmitHandler}>
        <label className={styles.label}>이름</label>
        <input type='name' value={Name} onChange={onNameHandler} className={styles.input}/>
        <label className={styles.label}>Email</label>
        <input type='email' value={Email} onChange={onEmailHandler} className={styles.input}/>
        <label className={styles.label}>password</label>
        <input type='password' value={Password} onChange={onPasswordHandler} className={styles.input}/>
        <label className={styles.label}>ConfirmPassword</label>
        <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} className={styles.input}/>
        <br />
        <div className={styles.btn}>
            <button type='submit' className={styles.button}>가입하기</button>
            <button type='submit' className={styles.button}>로그인 하기</button>
        </div>
      </form>
    </div>
  )
}

export default Register
