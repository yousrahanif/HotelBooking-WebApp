import React from 'react';
import './Home.css'
import single from '../../images/single.jpg';
import couple from '../../images/couple.jpg';
import family from '../../images/family.jpg'
import { FaBed } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";

import { IoPeople } from "react-icons/io5";
import DisplayPic from '../DisplayPic/DisplayPic';


const Home = () => {
    return (
        <div>
            <DisplayPic></DisplayPic>

        
        <div className='md:flex md:justify-between mt-5'>
            <div className='flex flex-col items-center w-1/3 border-2 ml-4 mb-4 mt-2 p-4'>
                <h2 className='text-2xl mb-2 text-purple-600'>Standard <span className='text-purple-800 font-bold'>Single</span> Room</h2>
                <img src={single} alt="" className="w-64 h-48 mr-4" />
                <p className='mt-4 ml-4 mr-4'>A single room in our hotel is thoughtfully designed for individual travelers seeking comfort and privacy. These cozy spaces are equipped with all the essential amenities to ensure a pleasant stay for those journeying alone. Whether for business or leisure, our single rooms provide a welcoming retreat tailored to the needs of solo adventurers.</p>
                <div className="flex items-center mt-auto">
                    <FaBed className='mr-2' />: 1
                    <IoPeople className='ml-4 mr-2' />: 1
                    <FaHandHoldingDollar className='ml-4' />: 114
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2 ml-4 mr-0">Book</button>
                </div>
            </div>
            <div className='flex flex-col items-center w-1/3 border-2 ml-4 mb-4 mt-2 p-4'>
                <h2 className='text-2xl mb-2 text-purple-600'>Standard <span className='text-purple-800 font-bold'>Couple</span> Room</h2>
                <img src={couple} alt="" className="w-64 h-48" />
                <p className='mt-4 ml-4 mr-4'>Our couple rooms are crafted to offer a romantic and intimate atmosphere for pairs seeking a cozy escape. Furnished with a comfortable double bed and adorned with subtle romantic touches, these rooms provide the perfect setting for a romantic getaway. Thoughtfully designed with couples in mind, our couple rooms create an ambiance of warmth and connection.</p>
                <div className="flex items-center mt-auto">
                    <FaBed className='mr-2' />: 1
                    <IoPeople className='ml-4 mr-2' />: 2
                    <FaHandHoldingDollar className='ml-4' />: 149
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2 ml-4 mr-0">Book</button>
                </div>
            </div>
            <div className='flex flex-col items-center w-1/3 border-2 ml-4 mb-4 mt-2 p-4'>
                <h2 className='text-2xl mb-2 text-purple-600'>Standard <span className='text-purple-800 font-bold'>Family</span> Room</h2>
                <img src={family} alt="" className="w-64 h-48" />

                <p className='mt-4 ml-4 mr-4'>For families or larger groups, our family rooms provide a spacious and accommodating environment. These rooms are designed to cater to the needs of families with children, offering multiple beds or sleeping areas to ensure everyone has a comfortable space. Packed with family-friendly amenities, our family rooms provide the ideal setting for a memorable group stay, allowing families to enjoy quality time together in a home-away-from-home setting.</p>
                <div className="flex items-center mt-auto">
                    <FaBed className='mr-2 mb-0' />: 2
                    <IoPeople className='ml-4 mr-2' />: 4
                    <FaHandHoldingDollar className='ml-4' />: 199
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2 ml-4 mr-0">Book</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;