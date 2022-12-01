import React from 'react';
import blogBannar from '../../assect/blogBannar.png'
import style1 from '../../assect/style1.png'
import style2 from '../../assect/style4.png'
const Blog = () => {
    return (
        <div className='relative max-w-7xl mx-auto px-5 py-10'>


            {/* style image */}
            <div className=' absolute top-0 right-0'>
                <img className=' h-60 rotate-90 opacity-25' src={style1} alt="style1" />
            </div>

            <div className=' absolute bottom-0 left-0'>
                <img className=' h-60 rotate-90 opacity-25' src={style1} alt="style1" />
            </div>

            <div className=' absolute top-80 left-0'>
                <img className=' h-60 rotate-45 opacity-25 ' src={style2} alt="style1" />
            </div>

            <div className=' absolute bottom-96 right-0'>
                <img className=' h-52 rotate-90 opacity-25 ' src={style2} alt="style1" />
            </div>



            <div class="relative w-[48rem] rounded-lg block md:flex items-center bg-gray-100 hover:bg-blue-100 shadow-xl min-h-[17rem]" >
                <div class="relative w-full md:w-2/5 h-full overflow-hidden bg-pink-500 rounded-t-lg md:rounded-t-none md:rounded-l-lg min-h-[17.2rem]" >
                    <img class="absolute inset-0 w-full h-full object-cover object-center" src={blogBannar} alt="blogBannar" />
                    <div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
                    <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white text-6xl font-semibold">
                        Blog-1
                    </div>
                </div>
                <div class="w-full md:w-3/5 h-full flex items-center  rounded-lg">
                    <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                        <p class="text-gray-600"><span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
                        <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
                            <span>Read more</span>
                            <span class="text-xs ml-1">&#x279c;</span>
                        </a>
                    </div>
                    <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>
            </div>


            <div className=' w-full  flex justify-end'>
                <div class="relative w-[48rem] rounded-lg block md:flex items-center bg-gray-100 hover:bg-red-100 shadow-xl min-h-[17rem] mt-10 " >
                    <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg min-h-[17.2rem]" >
                        <img class="absolute inset-0 w-full h-full object-cover object-center" src={blogBannar} alt="blogBannar" />
                        <div class="absolute inset-0 w-full h-full bg-red-900 opacity-75"></div>
                        <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white text-6xl font-semibold">
                            Blog-2
                        </div>
                    </div>
                    <div class="w-full md:w-3/5 h-full flex items-center rounded-lg">
                        <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                            <p class="text-gray-600"><span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
                            <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
                                <span>Read more</span>
                                <span class="text-xs ml-1">&#x279c;</span>
                            </a>
                        </div>
                        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className=' w-full  flex justify-start'>
                <div class="relative w-[48rem] rounded-lg block md:flex items-center bg-gray-100 hover:bg-purple-100 shadow-xl min-h-[17rem] mt-10 " >
                    <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg min-h-[17.2rem]" >
                        <img class="absolute inset-0 w-full h-full object-cover object-center" src={blogBannar} alt="blogBannar" />
                        <div class="absolute inset-0 w-full h-full bg-purple-900 opacity-75"></div>
                        <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white text-6xl font-semibold">
                            Blog-3
                        </div>
                    </div>
                    <div class="w-full md:w-3/5 h-full flex items-center  rounded-lg">
                        <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                            <p class="text-gray-600"><span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
                            <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
                                <span>Read more</span>
                                <span class="text-xs ml-1">&#x279c;</span>
                            </a>
                        </div>
                        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                </div>
            </div>



            <div className=' w-full  flex justify-end mb-20'>
                <div class="relative w-[48rem] rounded-lg block md:flex items-center bg-gray-100 hover:bg-yellow-100 shadow-xl min-h-[17rem] mt-10 " >
                    <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg min-h-[17.2rem]" >
                        <img class="absolute inset-0 w-full h-full object-cover object-center" src={blogBannar} alt="blogBannar" />
                        <div class="absolute inset-0 w-full h-full bg-yellow-900 opacity-75"></div>
                        <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white text-6xl font-semibold">
                            Blog-4
                        </div>
                    </div>
                    <div class="w-full md:w-3/5 h-full flex items-center  rounded-lg">
                        <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                            <p class="text-gray-600"><span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
                            <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
                                <span>Read more</span>
                                <span class="text-xs ml-1">&#x279c;</span>
                            </a>
                        </div>
                        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;