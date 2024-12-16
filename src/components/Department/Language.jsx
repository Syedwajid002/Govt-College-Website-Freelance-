import React from 'react'
import { Card } from 'flowbite-react';

function ItemCard({ name, department, img }) {
    return (
        <Card
            className="max-w-sm"
            renderImage={() => <img src={img} />}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {department}
            </p>
        </Card>
    );
}

const Language = () => {

    let demoDep = [
        {
            "title": "English", 
            "about": "This is about english department"
        }
    ]


    return (
        <>
            <div>
                <h1>English Department</h1>
            </div>
            <div>
                <h1>Telugu Department</h1>
            </div>
        </>

    )
}

export default Language