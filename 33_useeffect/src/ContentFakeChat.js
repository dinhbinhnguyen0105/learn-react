import { useState, useEffect } from 'react';

const lessions = [
    { id: 1, name: 'ReactJS là gì? Tại sao nên học ReactJS' },
    { id: 2, name: 'SPA/ MAP là gì?' },
    { id: 3, name: 'Arrow function' },
];

function ContentFakeChat() {
    const [selectedLession, setSelectedLession] = useState(1);

    useEffect(() => {
        const onListenEvent = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lession-${selectedLession}`, onListenEvent);
        return () => window.removeEventListener(`lession-${selectedLession}`, onListenEvent);
    }, [selectedLession]);

    return (
        <div className='content-container'>
            <div className='content__lessions'>
            {
                lessions.map((lession, lessionIndex) => {
                    return (
                        <div
                            className={`content__lession`}
                            key={lession.id}
                            onClick={() => setSelectedLession(lession.id)}
                            style={selectedLession === lession.id ? {
                                color: 'red',
                            } : {
                                color: 'black'
                            }}
                        >
                            <h3>{lessionIndex}. {lession.name}</h3>
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export default ContentFakeChat;