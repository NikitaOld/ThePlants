import React from 'react';
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.navbar}>
                <div className={style.logo}>
                    THE<br/>
                    PLANTS
                </div>
                <ul className={[style.list, style.pageLinks].join(' ')}>
                    <li className={style.item}>
                        <a href="/">Растения</a>
                    </li>
                    <li className={style.item}>
                        <a href="/">Уход</a>
                    </li>
                    <li className={style.item}>
                        <a href="/">Горшки</a>
                    </li>
                    <li className={style.item}>
                        <a href="/">Блог</a>
                    </li>
                    <li className={style.item}>
                        <a href="/">О Нас</a>
                    </li>
                    <li className={style.item}>
                        <a href="/">Доставка и Оплата</a>
                    </li>
                </ul>
                <ul className={[style.list, style.icons].join(' ')}>
                    <li className={style.item}>
                        <button className={[style.searchBtn, style.btn].join(' ')}>se</button>
                    </li>
                    <li className={style.item}>
                        <button className={[style.searchBtn, style.btn].join(' ')}>ca</button>
                    </li>
                    <li className={style.item}>
                        <button className={[style.searchBtn, style.btn].join(' ')}>ac</button>
                    </li>
                    <li className={style.item}>
                        <button className={[style.searchBtn, style.btn].join(' ')}>ca</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;