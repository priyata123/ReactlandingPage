import React from 'react';
const Home = () => {
  return (
    <div className={`min-h-screen flex flex-col justify-center lg:px -32 px-5 text-white bg-cyan-600  bg-no-repeat bg-cover opacity-90 bg-[url('../src/Components/IMG/home.png')]`}>
        <div className='w-full lg:w-4/5 space-y-5 mt-10'>
            <h1 className='text-5xl font-bold leading-tight'>Empowering Health Choice for a Vibrant lifeYour Trusted...</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facere fugiat optio sequi incidunt nam ratione illo. Repellat quidem, cumque aliquam cum nam labore, explicabo consequuntur neque commodi perspiciatis adipisci.</p>
        </div>
        <div>
        <button className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300 transition duration-300 ease-in-out'>see services</button>
        </div>
    </div>
  )
}

export default Home;