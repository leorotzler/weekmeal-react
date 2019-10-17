import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import MealTeaser from './MealTeaser/MealTeaser'

import shuffleArray from './utility/utility'

function App() {
    const meals = gql`
        {
            meal {
                uid
                name
                image
            }
        }
    `

    const [createMeal, setCreate] = useState()

    const Meals = () => {
        const { data, error, loading } = useQuery(meals)
        if (loading) {
            return (
                <progress className="progress is-small is-primary" max="100">
                    15%
                </progress>
            )
        }
        if (error) {
            return <div>Error! {error.message}</div>
        }
        const mealsArr = shuffleArray(data.meal)
        return (
            <div className="columns">
                {mealsArr.map(meal => (
                    <div className="column">
                        <MealTeaser
                            key={meal.uid}
                            image={meal.image}
                            name={meal.name}
                        />
                    </div>
                ))}
            </div>
        )
    }

    const CreateButton = () => {
        if (createMeal) {
            return (
                <button
                    className="button is-primary is-large is-rounded"
                    onClick={() => setCreate()}
                >
                    Hide
                </button>
            )
        }
        return (
            <button
                className="button is-primary is-large is-rounded"
                onClick={() => setCreate(1)}
            >
                Create meals
            </button>
        )
    }

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">WeekMeal</h1>
                        <h2 className="subtitle">
                            Let's talk food
                        </h2>
                    </div>
                </div>
            </section>
            <div className="section">
                <div className="container"></div>
                <div className="container">{createMeal && <Meals />}</div>
            </div>
            <div className="section">
                <div className="container has-text-centered">
                    <CreateButton />
                </div>
            </div>
        </div>
    )
}

export default App
