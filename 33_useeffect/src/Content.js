
// Events: Add/ remove event listener
// Observer pattern: Subscribe / unsubcribe
// Closure
// Timers: setInterval, setTimeout,  clearInterval, clearTimeout
// useState
// Mounted/ unmounted
// ===
// Call API

/** =>>>> Được sử dụng khi muốn thực hiện các side effect
 * 1. Update DOM
 * 2. Call API
 * 3. Listen DOM events (Scroll, Resize, ..)
 * 4. Cleanup (remove event listener/ unsubscribe - clear timer)
 */ 

 /**
 * callback luôn được gọi sau khi Component mounted
 * cleanup function luôn được gọi trước khi Component được unmount
 * 1. useEffect(callback)
 * 2. useEffect(callback, [])
 * 3. useEffect(callback, [deps])
 * 
 * 1. Gọi callback mỗi khi component re-render
 * 1. Gọi callback sau khi component thêm element vào DOM
 * 2. Chỉ gọi callback sau khi component được mounted
 * 3. Callback sẽ được gọi lại mỗi khi deps thay đổi
 */

import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums'];

function BackToTop() {
    return (
        <div
            className="backtotop-container"
            style={{
                position: 'fixed',
                right: 0,
                bottom: 0,
                margin: '0 20px 20px 0'
            }}
        >
            <button
                id="backtotop-btn"
                onClick={() => window.scrollTo(0,0)}
            >Top</button>
        </div>
    );
}

function Content() {
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [res, setRes] = useState([]);
    const [showToTop, setShowToTop] = useState(false);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${currentTab}`)
            .then(res => res.json())
            .then(res => {
                setRes(res);
            })
            .catch(error => console.error(error));
    }, [currentTab]);

    useEffect(() => {
        const handleScroll = () => { window.scrollY >= 700 ? setShowToTop(true) : setShowToTop(false) };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div
            className="container"
            style={{
                // position: 'relative',
            }}
        >
            <div className="container__button">
                {
                    tabs.map((tab, index) => {
                        return (
                            <button
                                key={index}
                                style={tab === currentTab? {
                                    color: '#fff',
                                    background: '#333'
                                } : {}}
                                onClick={() => {
                                    setCurrentTab(tab);
                                }}
                            >{tab}</button>
                        );
                    })
                }
            </div>
            <div className="container__content">
                {
                    res.map(item => {
                        return (
                            <li className="content__item" key={item.id}>
                                {
                                    Object.keys(item).map((keyOfItem, itemIndex) => {
                                        return (
                                            <div key={itemIndex}>{item[keyOfItem]}</div>
                                        );
                                    })
                                }
                            </li>
                        );
                    })
                }
            </div>
            {
                showToTop ? <BackToTop /> : <></>
            }
        </div>
    );
}

export default Content;