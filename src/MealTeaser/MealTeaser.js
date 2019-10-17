import React from 'react'
import {Image, Transformation} from 'cloudinary-react'

export default function MealTeaser({ name, image }) {
    return (
        <div className="card">
            <div className="card-image">
            <figure className="image is-4by3">
                <Image cloudName="weekmeal" publicId={image} width="640" height="480" crop="fill" />
            </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <p className="title is-4">{name}</p>
                </div>
            </div>
        </div>
    )
}
