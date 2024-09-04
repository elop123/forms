import { useState, useEffect } from 'react';
import s from '../style/ContactForm.module.scss'

export const ContactForm=()=>{

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber ] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [isSend, setIsSend] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setIsSend(true);
       
      };
    console.log(fullName, phoneNumber, email, comment);

    function handleReset(e) {
        e.preventDefault();
        setFullName('');
        setPhoneNumber('');
        setEmail('');
        setComment('');
        setIsSend(false)
      }

    return(
        <div>
    <form className={s.formStyle} onSubmit={ handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input onChange={(e)=>setFullName(e.target.value)}
               type="text"
               value={fullName} />
        <label htmlFor="phone">Phone number</label>
        <input onChange={(e)=>setPhoneNumber(e.target.value)}
               value={phoneNumber}
               type="tel" />
        <label htmlFor="email">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)}
               value={email}
               type="email" />
        <label htmlFor="">Comment</label>
        <textarea name="" id=""
                  onChange={(e)=>setComment(e.target.value)}
                  value={comment}
                  type="text"></textarea>
        <button type='submit'>Send</button>
        <button onClick={handleReset}>Reset</button>
    </form>
    {isSend && (
    <section className={s.input} onSubmit={setIsSend}>
        <h1>Display Input:</h1>
        <p>Full name:{fullName}</p>
        <p>Phone number:{phoneNumber}</p>
        <p>Email:{email}</p>
        <p>Comment:{comment}</p>
    </section>)}
    </div>
)
}