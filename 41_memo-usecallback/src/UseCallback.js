import { memo } from "react";

function UseCallback({onIncrease}) {
    console.log('render - ');
    return (
        <div>
            <h1>
                Hello world
                <button onClick={onIncrease}>Click me</button>
            </h1>
        </div>
    );
}

export default memo(UseCallback);