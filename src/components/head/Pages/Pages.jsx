import s from "./Pages.module.css";
import { NavLink } from 'react-router-dom';

export const Pages = () => {
    return (
        <nav className={s.conteiner}>
            <NavLink exact to="/" className={({ isActive }) =>(isActive ? " active" : "")}>Главная</NavLink>  
            <NavLink to="/price" className={({ isActive }) => (isActive ? " active" : "")}>Услуги и цены</NavLink>  
            <NavLink to="/packages" className={({ isActive }) => (isActive ? " active" : "")}>Пакеты заботы</NavLink>
            <NavLink to="/me" className={({ isActive }) => (isActive ? " active" : "")}>Обо мне</NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? " active" : "")}>Блог</NavLink>
            <NavLink to="/sell" className={({ isActive }) => (isActive ? " active" : "")}>Акции и искидки</NavLink>
            <NavLink to="/faq" className={({ isActive }) => (isActive ? " active" : "")}>FAQ</NavLink>
            <NavLink to="/reviews" className={({ isActive }) => (isActive ? " active" : "")}>Отзывы</NavLink>
        </nav>
   );
};