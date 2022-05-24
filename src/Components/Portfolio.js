import React from 'react';
import purchaseBG from '../Assets/images/purchase-2.jpg'
import myImage from '../Assets/images/Md. Thowhiduzzaman.jpg'

const Portfolio = () => {
    return (
        <div className='px-12' style={{
            background: `url(${purchaseBG})`,
            backgroundSize: 'cover' }}>
            <div>
           
            <div className='flex justify-center'>
                <div className="card w-full glass m-10 p-10">
                    <h1 className='text-2xl font-bold uppercase text-secondary mb-2 text-center'>My Simple Portfolio</h1>
                    <div className=' about-me-division'>
                {/* <img className='confirm-photo' src={confirmPhoto} alt="" /> */}
                <div>
                <div className='lg:flex justify-between items-center'>
                <div className='w-1/1 m-5 flex-1 justify-center'>
                <img className='rounded ' src={myImage}  alt="" />
                </div>
                <div className='mt-3 m-3 flex-1'>
                    <h3 className='uppercase text-secondary'>MD. THOWHIDUZZAMAN</h3>
                    <p className='text-justify'>My goal is very easy. I want to be a web developer with is wonderful journey. But it is not easy to gain. Web Development is a very complicated and long term concept. I knew at first, it is tough but not impossible. My JavaScript journey started with JM Bhai. He is a wonderful man I had ever know. His motives motivated me as well as. I try to maintain his advice throughout the Course. And I struggle even now to gain final goal.</p>
                    <h4 className='mt-3 p-3 rounded glass'>Email: thowhidantor16@gmail.com</h4>
                    <div>
                    <h4 className='mt-3 p-3 rounded glass'><h2 className='uppercase text-2xl'>Education:</h2> <br/>
                    Present Institute: Dhaka College,
                    <br></br>
                    Subject: Chemistry, <br></br>
                    Year: Honors 2nd Year.
                    </h4>
                    <p className='mt-3 p-3 rounded glass'>Skills I Have (as developer): HTML, CSS (Vanilla, Bootstrap, Tailwind), JS, React, Mongodb, Node.js, React Query, Toast, React Hook, Firebase Authentication, Heroku Deploy etc.</p>
                    <p className='mt-3 p-3 rounded glass'>Link of three websites: <br />
                    1. warehouse-manage-assignment-11.web.app, <br></br>
                    2. travel-guider-assignment-10.web.app, <br></br>
                    3. ph-final-assignment-12.web.app .
                    </p>
                    </div>
                </div>
                </div>
                </div>

            </div>        
                </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;