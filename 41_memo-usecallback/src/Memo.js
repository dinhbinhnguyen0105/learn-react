import { memo } from "react";

function Memo({counter}) {
    console.log('render - ', counter);
    return (
        <div>
            <h1>
                Hello world
            </h1>
        </div>
    );
}

export default memo(Memo);