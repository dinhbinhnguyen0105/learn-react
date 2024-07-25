import { memo } from "react";

function Header() {
    return (
        <div className="header">
            <h1>Todo App</h1>
        </div>
    );
}

export default memo(Header);