import './Buttons.css'

const Buttons = ({handleClick}) => {
    return (
        <div className='buttons-container'>
                <div className='button' onClick={handleClick}>C</div>
                <div className='button' onClick={handleClick}>CE</div>
                <div className='button' onClick={handleClick}>%</div>
                <div className='button' onClick={handleClick}>/</div>
                <div className='button' onClick={handleClick}>7</div>
                <div className='button' onClick={handleClick}>8</div>
                <div className='button' onClick={handleClick}>9</div>
                <div className='button' onClick={handleClick}>*</div>
                <div className='button' onClick={handleClick}>4</div>
                <div className='button' onClick={handleClick}>5</div>
                <div className='button' onClick={handleClick}>6</div>
                <div className='button' onClick={handleClick}>-</div>
                <div className='button' onClick={handleClick}>1</div>
                <div className='button' onClick={handleClick}>2</div>
                <div className='button' onClick={handleClick}>3</div>
                <div className='button' onClick={handleClick}>+</div>
                <div className='button button0' onClick={handleClick}>0</div>
                <div className='button' onClick={handleClick}>.</div>
                <div className='button' onClick={handleClick}>=</div>
            </div>
    )
}

export default Buttons
