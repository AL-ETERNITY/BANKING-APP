"use client";
import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  const formatToIndianRupee = (value: number) => {
    // Convert to Indian numbering system
    const formatter = new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR',
    });
    return formatter.format(value);
  };

  return (
    <div className='w-full'>
      <CountUp
        end={amount}
        duration={2}
        separator=" "
        decimals={2}
        decimal=","
        formattingFn={formatToIndianRupee}
      ></CountUp>
    </div>
  );
};

export default AnimatedCounter;