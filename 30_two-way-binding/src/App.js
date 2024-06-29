import { useState } from 'react';

const courses = [
    { id : 1, name : 'HTML, CSS'},
    { id : 2, name : 'Javascript'},
    { id : 3, name : 'ReactJS'},
];

export default function App() {
    const [checked, setChecked] = useState([]);
    const onSubmit = () => {
        console.log(checked);
    }
    const handleChecked = (id) => {
        setChecked(prev => {
            if(prev.includes(id)) {
                return prev.filter(value => value!== id);
            } else {
                return [...prev, id];
            }
        });
    }
    return (
        <div className='app'>
            {
                courses.map(course => {
                    return (
                        <div key={course.id}>
                            <input
                                type='checkbox'
                                onChange = {() => handleChecked(course.id)}
                            />
                            {course.name}
                        </div>
                    );
                })
            }
            {/* {
                courses.map(course => {
                    return (
                        <div key={course.id}>
                            <input
                                type='radio'
                                onChange = {() => setChecked(course.id)}
                                checked = {checked === course.id ? true: false}
                            />
                            {course.name}
                        </div>
                    );
                })
            } */}


            <button onClick={onSubmit}>Click me</button>
        </div>
    );
}