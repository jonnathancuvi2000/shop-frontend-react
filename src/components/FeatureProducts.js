import React from 'react'
import '../style-componets/FeatureProducts.css'


export default function FeatureProducts({ type }) {
    return (
        <div className='featureProducts'>
            <div className="top">
                <h1>Productos {type}</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto nam quidem totam accusantium reprehenderit tempore, maxime expedita delectus, obcaecati nihil nesciunt? Eius, itaque sunt vero amet voluptatibus odio suscipit.
                </p>
            </div>
        </div>
    )
}
