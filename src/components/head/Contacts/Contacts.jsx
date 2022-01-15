import s from "./Contacts.module.css"
import { BsFacebook, BsYoutube, BsInstagram} from 'react-icons/bs';

export const Contacts = () => {
    return (
        <div className={s.conteiner}>
            <div>
                <a className={s.contacts} href="tel:+380930007974">+38(093)000-79-74 </a>
            </div>
             
            <div>
                <a className={s.contacts} href="mailto:kolorodini@gmail.com">kolorodini@gmail.com</a>
            </div>
            
            <div>
                <a className={s.link} href="https://www.facebook.com/kolorodini/"><BsFacebook /></a>
                <a className={s.link} href="https://www.youtube.com/channel/UCmnNqHraYAtRVQskwjlStKA"><BsYoutube/></a>
                <a className={s.link} href="https://www.instagram.com/kolorodini/"><BsInstagram/></a>
            </div>
        </div>
    );
};