import s from "./Logo.module.css"
import { GiOilySpiral} from 'react-icons/gi';

export const Logo = () => {
    return (
        <div className={s.conteiner}>
            <a className={s.link} href="https://www.facebook.com/kolorodini/"><GiOilySpiral/></a>
            <a className={s.kolo} href="https://www.facebook.com/kolorodini/">КолоРодини</a>
                   
            <a className={s.love} href="https://www.facebook.com/kolorodini/">с Любовью в Сердце, <br/> с теплом в руках</a>
    </div>
    );
};