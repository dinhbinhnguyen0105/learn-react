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

function ContentDOMEvent() {
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [data, setData] = useState([]);
    const [isDisplayBackToTop, setIsDisplayBackToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${currentTab}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error(error));
    }, [currentTab]);

    useEffect(() => {
        const handleBackToTop = () => window.scrollY > 300 ? setIsDisplayBackToTop(true) : setIsDisplayBackToTop(false);
        window.addEventListener('scroll', handleBackToTop);
        return () => window.removeEventListener('scroll', handleBackToTop);
    }, []);

    return (
        <div className="content-container">
            <div className="content-tabs">
                {
                    tabs.map((tab, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setCurrentTab(tab)}
                            >{tab}</button>
                        );
                    })
                }
            </div>
            <div className="content-items">
            {
                data.length ?
                data.map(item => {
                    return (
                        <div className="content-item" key={item.id}>
                            {
                                Object.keys(item).map((keyOfItem, indexOfItem) => {
                                    return (
                                        <div key={indexOfItem} className={`content-item__${keyOfItem}`}>
                                            {item[keyOfItem]}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                }) :
                <></>
            }
            </div>
            <div className="backtotop">
                {
                    isDisplayBackToTop ? <BackToTop /> : <></>
                }
            </div>
        </div>
    );
}

export default ContentDOMEvent;