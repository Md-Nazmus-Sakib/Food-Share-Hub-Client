import React from 'react';
import { Accordion } from 'flowbite-react';
import img from '../../../assets/images/Banner/banner-1.jpg'
const WhatToKnow = () => {
    return (
        <div>
            <h1 className='uppercase text-5xl text-center font-extrabold'>What to Know</h1>
            <div className='flex gap-4 flex-col md:flex-row my-12'>
                <div className='flex-1 pt-4'>
                    <Accordion>
                        <Accordion.Panel>
                            <Accordion.Title>How does this benefit Community?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    The Food share hub lets you reduce your food waste and earn back money on stock that would have been thrown away - a win-win. Further still, 76% of customers who discover a store through TFood share hub  will return as full-paying customers.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>Do i need to supply my own takeaway bags or packaging?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    While we encourage customers to bring their own containers or bags, often they'll need to use a takeaway bag you provide. If you already have packaging that works for this purpose, you're welcome to use it.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>What Kind of Product Can I Find On this Side?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    You can find a large range of products as we work with many different stores. Bread and pastries from bakeries, freshly cooked meals from restaurants, breakfast from hotels, buffet food, and groceries from the supermarket! Any fresh surplus food can be sold on the side. Some products might have reached the best before date, but are still be good for consumption.
                                </p>



                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>

                </div>
                <img className='flex-1 border-8 rounded-xl border-green-500 object-cover w-full my-4 md:w-1/2' src={img} alt="" />
            </div>
        </div>
    );
};

export default WhatToKnow;