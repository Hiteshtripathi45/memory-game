import React, { useState } from 'react'

const Scoreboard = ({yourscore,bestscore}) => {
    return (
        <div>
            <h1 className='score'>YOUR-SCORE:{yourscore}</h1>
            <h1 className='score'>BEST-SCORE:{bestscore}</h1>
        </div>
    )
}

export default Scoreboard