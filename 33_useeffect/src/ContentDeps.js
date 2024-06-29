import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums'];

function ContentDeps() {
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${currentTab}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error(error));
    }, [currentTab]);

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
    );
}

export default ContentDeps;