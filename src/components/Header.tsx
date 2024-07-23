import { useMemo } from "react";

const Header = useMemo(() => {
    return (
        <header>
            <h1>Gunma Ramens</h1>
            <p>
                群馬大学でウェブやら組み込みやらLinuxやらで遊んでいる数人のグループ
            </p>
        </header>
    );
}, []);

export default Header;
