import { memo } from "react";

const Header = memo(() => {
    return (
        <header className="mx-auto block">
            <img src="/logo.png" alt="logo" className="w-1/2 mx-auto" />
            <p>
                群馬大学でウェブやら組み込みやらLinuxやらで遊んでいる数人のグループ
            </p>
        </header>
    );
});

export default Header;
