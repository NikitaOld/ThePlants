import React from 'react';
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className='container'>
            <header className={style.header}>
                <nav className={style.navbar}>
                    <nav className={style.navbarLeft}>
                        <ul className={style.navbarList}>
                            <li className={style.navbarItem}>
                                <a className={[style.logo, 'underlineAnimation'].join(' ')} href="/">PLANTS</a>
                            </li>
                            <li className={style.navbarItem}>
                                <a className={[style.pageLink, 'underlineAnimation'].join(' ')} href="">Магазин</a>
                            </li>
                            <li className={style.navbarItem}>
                                <a className={[style.pageLink, 'underlineAnimation'].join(' ')} href="">Новые поступления</a>
                            </li>
                            <li className={style.navbarItem}>
                                <a className={[style.pageLink, 'underlineAnimation'].join(' ')} href="">Уход</a>
                            </li>
                            <li className={style.navbarItem}>
                                <a className={[style.pageLink, 'underlineAnimation'].join(' ')} href="">О нас</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className={style.navbarRight}>
                        <ul className={style.navbarList}>
                            <li className={style.navbarItem}>Поиск</li>
                            <li className={style.navbarItem}>Войти</li>
                            <li className={style.navbarItem}>Корзина</li>
                        </ul>
                    </nav>
                </nav>
            </header>
        </div>
    );
};

export default Header;