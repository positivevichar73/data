import React from 'react';

export default function Card() {

    const data = [
        { name: "krishna", addres: "gopal" },
        { name: "asdsa", addres: "sadsa" },
       

    ]
    return (
        <div className='flex justify-between flex-wrap'>
            {
                data.map((item) => (
                    <div className="h-[200px] w-[200px] bg-amber-700" >
                        {item.name}
                        {item.addres}

                    </div>
                ))
            }


        </div>
    );
}
