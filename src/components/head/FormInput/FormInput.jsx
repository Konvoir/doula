import { useState} from 'react';
import s from "./FormInput.module.css"
// import { BsFacebook, BsYoutube, BsInstagram} from 'react-icons/bs';

export const FormInput = ({ onCall }) => {
    
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleInputChange = event => {
        const { name, value } = event.currentTarget;
        
        if (!name) {return}
        if (name === 'name') { setName(value) }
        else if(name === 'number') { setNumber(value) }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onCall({name, number});
         setName('');
         setNumber('');
    };

    return (
        <div className={s.conteiner}>
            <div>
                <form className={s.form} onCall={handleSubmit}>
                    <label className={s.label}>Name
                        <input className={s.input}
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                    </label>

                    <label className={s.label}>Number
                        <input className={s.input}
                            type="tel"
                            name="number"
                            value={number}
                            onChange={handleInputChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять минимум из 5 цифр и может содержать пробелы, тире, круглые скобки, может начинаться с +"
                            required
                        />
                    </label>

                    <button className={s.button} type="submit">Заказать звонок</button>

                </form>
            
            </div>
             
            {/* <div>
                <a className={s.contacts} href="mailto:kolorodini@gmail.com">kolorodini@gmail.com</a>
            </div> */}
            
            {/* <div>
                <a className={s.link} href="https://www.facebook.com/kolorodini/"><BsFacebook /></a>
                <a className={s.link} href="https://www.youtube.com/channel/UCmnNqHraYAtRVQskwjlStKA"><BsYoutube/></a>
                <a className={s.link} href="https://www.instagram.com/kolorodini/"><BsInstagram/></a>
            </div> */}
        </div>
    );
};