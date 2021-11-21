import React from "react";

const Card = () => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src='https://robohash.org/test?200x200'/>
            <div>
                <h2>Chris Gkalfas</h2>
                <p>chris.gkalfas@gmail.com</p>
            </div>
        </div>

    );
}

export default Card;