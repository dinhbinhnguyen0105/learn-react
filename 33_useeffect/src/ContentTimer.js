import { useState, useEffect } from 'react';

function ContentTimer() {
    const [countDown, setCountDown] = useState(180);


    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown(prev => prev - 1);
            console.log('Countdown ...');
        }, 1000);
        return () => clearInterval(timerId);
    }, []);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountDown(countDown - 1);
    //     }, 1000);
    // }, [countDown]);

    return (
        <div className="container-content">
            <h1>{countDown}</h1>
        </div>
    );
}

export default ContentTimer;