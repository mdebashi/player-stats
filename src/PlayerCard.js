import React from 'react';

import './PlayerCard.css'
const PlayerCard = (props) => {
    const {
        firstname,
        lastname,
        picture,
        sex,
        data,
        country,
    } = props.playersStats;
    const fullName = firstname + ' ' + lastname;
    const gender = {
        M: 'Male',
        F: 'Female',
    }
    const nationality = {
        SUI: 'Switzerland',
        ESP: 'Spain',
    }
    const winsAndLosses = {
        '0': 'L',
        '1': 'W',
    }
    return(
        <div className='card'>
            <img src={picture} alt={fullName} className='card__image'/>
            <div className="container">
            <div className="card__content">
                <div className="card__title">{fullName}</div>
                <div className='card__details'>
                <div className="card__nantionality">
                    <img src={country.picture} alt={country.code} className='nationality__image'/>
                    <div className="nantionality__text">{nationality[country.code]}</div>
                </div>
                    <h4>Details</h4>
                    <table>
                        <thead><tr>
                            <th>Sex</th>
                            <th>Age</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr></thead>
                        <tbody><tr>
                            <td>{gender[sex]}</td>
                            <td>{data.age}</td>
                            <td>{data.height}</td>
                            <td>{data.weight}</td>
                        </tr></tbody>
                    </table>

                    <h4>Statistics</h4>
                    <table>
                        <thead><tr>
                            <th>Rank</th>
                            <th>Points</th>
                        </tr></thead>
                        <tbody><tr>
                            <td>{data.rank}</td>
                            <td>{data.points}</td>
                        </tr></tbody>
                    </table>
                    Last (wins/Losses):
                    {data.last.map((score, i) => {
                        return <div key={`last` + i} className={`game wins-` + score}>
                            {winsAndLosses[score]}
                        </div>
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default PlayerCard;