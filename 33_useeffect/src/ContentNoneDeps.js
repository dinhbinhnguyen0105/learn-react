import { useEffect, useState } from "react";

function ContentNoneDeps() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error(error));
        return () => {}
    }, []);

    return (
        <div className="content-container">
            {
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
                })
            }
        </div>
    );
}

export default ContentNoneDeps;