import {useState, useEffect} from 'react'
import './Calculator.css'

const Calculator = () => {
    const [operationData,setOperationData]=useState({
        outcome:0,
        operation:null,
        savedValue:0,
        flag:0,
        aux:0
    })
    const {outcome, operation, savedValue, flag, aux} = operationData
    console.log(outcome);
    console.log(savedValue);
    console.log(operation);
    useEffect(()=>{
        setOperationData({
            ...operationData,
            outcome:0,
            flag:0
        })
    },[flag])
    const handleClick = (e) =>{
        let showedValue=e.target.innerHTML
        if(/^[0-9]+$/.test(showedValue)){
            outcome==0?
            setOperationData({...operationData, outcome:showedValue})
            :
            setOperationData({
                ...operationData,
                outcome:outcome+showedValue
            })
        }
        else{
            switch (showedValue) {
                case 'C':
                    setOperationData({
                        flag:0,
                        savedValue:0,
                        operation:null,
                        outcome:0
                    })
                    break;
                case 'CE':
                    setOperationData({
                        ...operationData,
                        outcome:outcome.slice(0,-1)
                    })
                    break;
                case '+':
                    if(!aux){
                        setOperationData({
                            ...operationData,
                            savedValue:Number.parseInt(savedValue)+Number.parseInt(outcome),
                            operation:'sum',
                            flag:1
                        })
                    }else{
                        setOperationData({
                            ...operationData,
                            savedValue:outcome,
                            flag:1,
                            aux:false
                        })
                    }
                    break;
                case '=':
                    if(operation==='sum')
                    {
                        setOperationData({
                            ...operationData,
                            outcome:Number.parseInt(savedValue)+Number.parseInt(outcome),
                            aux:true
                        })
                    }
            }
        }
    }
    return (
        <div className='container'>
        <div className='calculator-box'>
            <div className='display'>
                {outcome}
            </div>
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
        </div>
        </div>
    )
}

export default Calculator
