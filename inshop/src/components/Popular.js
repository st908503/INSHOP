import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Popular = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing").then((res) => {
            setData(res.data)
            console.log(res.data[0].title)
        })
    }, [])

    return (
        <div className='mb-20'>
            <div className='flex justify-center text-4xl font-bold text-[#07484A] pb-20'>Popular Products</div>
            <div className='flex justify-center items-center flex-wrap'>

                {data.map((items) => {
                    return (
                        <div key={items.id} className="border border-[#07484A] rounded-2xl m-3">
                            <div className='[#E0F6F1] w-72 flex-col flex justify-center items-center h-96'>
                                <img className='h-60 pb-4' src={items.image} alt="" />
                                <p className='text-center'>{items.title}</p>
                                <p>{items.price}</p>
                                <p>{items.rating.rate}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Popular