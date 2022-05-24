import React from 'react';
import purchaseBG from '../Assets/images/purchase-2.jpg'


const Blog = () => {
    return (
        <div className='px-12 lg:px-72' style={{
            background: `url(${purchaseBG})`,
            backgroundSize: 'cover'
        }}> <h1 className='text-center m-5 text-3xl uppercase pb-4'>Frequently Asked Questions</h1>
            <div className='flex justify-center'>
                <div>
                <div className='glass rounded p-5 mb-5'>
                    <p className='font-bold text-secondary pb-2 uppercase'>Question-01: How will you improve the performance of a React Application?</p>
                    <p className='text-justify'><small className='text-xl uppercase font-bold text-secondary'>Answer:</small> There are many clues to improve the performance of a React Application. Using Immutable Data Structures; which comes from the functional programming world, can be applied to the design of front-end apps. Uses of function or stateless components improves also. And mind it component state or props is an immutable object and these shouldn't a multi-level nested object. Using dependency optimization to easy React App. We can also use React Fragments. And Avoid using Index as key for map. You can also avoid props in initial states.</p>
                </div>
                <div className='glass rounded p-5 mb-5'>
                    <p className='font-bold text-secondary pb-2 uppercase'>Question-02: What are the different ways to manage a state in a React application?</p>
                    <p className='text-justify'><small className='text-xl uppercase font-bold text-secondary'>Answer: </small>There are mainly four types of state that we can properly manage in our React Application. Firstly, Local State. Secondly, Global State. Thirdly, Server State and finally, URL State. In Local State, we manage in one or another component. We can manage across multiple component in Global state. Server State get permission comes from an external server that must be integrated with our state. Finally, URL states exists on our URLs, including the pathname and query parameters. </p>
                </div>
                <div className='glass rounded p-5 mb-5'>
                    <p className='font-bold text-secondary pb-2 uppercase '>Question-03: How does prototypical inheritance work?</p>
                    <p className='text-justify'><small className='text-xl uppercase font-bold text-secondary'>Answer:</small> In JavaScrip, Prototypical Inheritance is a feature used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. In generally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
                <div className='glass rounded p-5 mb-5'>
                    <p className='font-bold text-secondary pb-2 uppercase'>Question-04: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</p>
                    <p className='text-justify'><small className='text-xl uppercase font-bold text-secondary'>Answer:</small> If we directly update the state, it doesn't change the state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. We lose control of the state across all components. Thats why, we do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts. </p>
                </div>
                <div className='glass rounded p-5 mb-5'>
                    <p className='font-bold text-secondary pb-2 uppercase'>Question-05: What is a unit test? Why should write unit tests?</p>
                    <p className='text-justify'><small className='text-xl uppercase font-bold text-secondary'>Answer:</small> Unit Testing is a software development process in which the smallest testable parts of an application, called units, are individually and freely scrutinized for proper operation. This Testing methodology is done during the development process by the software developers and sometimes QA staff. One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;