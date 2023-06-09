import React from 'react';

const Appointment = () => {
  return (
    <div className='bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto'>
      <h3 className='text-white text-[28px] font-bold tracking-[0.3px] text-center'>
        Prenota un appuntamento
      </h3>
      {/* bar */}
      <div className='w-[54px] h-[3px] bg-white my-6 mx-auto'></div>
      {/* input group */}
      <div className='space-y-[24px]'>
        <input className='form-control' placeholder='Nome completo' type='text' />
        <input
          className='form-control'
          placeholder='Telefono'
          type='text'
        />
        <input
          className='form-control'
          placeholder='Email'
          type='email'
        />
        <textarea
          className='resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary'
          placeholder='Il tuo messaggio'
        ></textarea>
        {/* Button */}
        <button className='btn bg-primary hover:bg-primary-hover transition-all'>
          invia messaggio
        </button>
      </div>
    </div>
  );
};

export default Appointment;
