import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div >
            <div className='question'>
                <h1 className='ques'>Question: How React Works?</h1>
                <p><b className='ques'>Answer:</b> React uses a concept called the virtual DOM. In JavaScript, a virtual DOM is essentially a DOM tree representation. As a result, it will use the virtual representation of the DOM when reading or writing to it. The virtual DOM will then attempt to update the browser's DOM in the most efficient manner possible. React elements, unlike browser DOM elements, are simple objects that are easy to generate. The DOM is updated to match the React elements by React DOM. This is because JavaScript is extremely fast, and it's worth keeping a DOM tree in it to speed up its manipulation.</p>
            </div>
            <div className='question'>
                <h1 className='ques'>Question: Write down the differences between props and state?</h1>
                <p><b className='ques'>Answer:</b> Some major differences between props and sate is given below- 
                <p>1. Props are read-only; Depending on user State can be change.</p>
                <p>2. Props are immutable; State is mutable.</p>
                <p>3. Props allow us to pass data from one component to other components as an argument; State holds information about the components.</p>
                <p>4. Props make components reusable; State cannot make components reusable.</p>
                <p>5. Props can be accessed by the child component; State cannot be accessed by child components.</p>

                </p>
            </div>
        </div>
        
    );
};

export default Question;