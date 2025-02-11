import React, { useState, useEffect, Component } from "react";

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { ArrowRight, MapPin } from "lucide-react";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2023-12-31T00:00:00");
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    const targetDate = new Date('2024-11-01T09:00:00').getTime();

    return (
        <div className="bg-green-700 p-6 md:px-10 text-white flex flex-col md:flex-row flex-wrap justify-around  lg:gap-0 items-center ">

            <div className="flex  items-center my-5 md:my-0">
                <p className="text-lg font-semibold flex gap-1"><MapPin /> Muri Okunola Park, V.I</p>

            </div>
            <div className="flex flex-col items-center my-5 md:my-0">
                <p className="text-lg font-semibold">Mega Black Friday Countdown</p>
                <div className="flex space-x-3 mt-2">
                    <FlipClockCountdown
                        digitBlockStyle={{
                            background: '#1BAA76',
                            width: '1.5rem',
                            height: '1.5rem',
                            fontSize: '.8rem',
                            marginRight: '.1rem',
                        }}
                        separatorStyle={{ margin: 0, padding: 0 }}
                        renderOnServer={false}
                        duration={0.7}
                        showLabels={false}
                        to={targetDate}
                    />                </div>
            </div>
            <div className="flex items-center my-5 md:my-0">
                <div className="text-center mr-6">
                    <p className="text-l font-semibold">Standard Plan</p>
                    <p className="text-3xl font-bold">₦100,000</p>
                </div>
            </div>
            <div className="flex items-center my-5 md:my-0">
                <div className="text-center mr-6">
                    <p className="text-l font-semibold">Premium Plan</p>
                    <p className="text-3xl font-bold">₦400,000</p>
                </div>

            </div>
            <div className="hidden md:flex">
                <ArrowRight size={40} />

            </div>
            <div className="flex items-center">

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeb48uKYKLdO9ImUIMylPRDj6PT9hnn7vCXYJrfbaII2bAu5g/viewform" className="bg-orange-500 text-white py-2 px-6 rounded-full font-bold hover:bg-orange-600">
                    I want a stall
                </a>
            </div>
        </div>
    );
};

export default Countdown;
