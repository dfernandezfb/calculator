import { useState, useEffect } from "react";
import Buttons from "./../Buttons/Buttons";
import "./Calculator.css";

const Calculator = () => {
    const [operationData, setOperationData] = useState({
        outcome: 0,
        operation: null,
        savedValue: 0,
        flag: 0,
        aux: 0,
    });
    const { outcome, operation, savedValue, flag, aux } = operationData;
    console.log(outcome);
    console.log(savedValue);
    console.log(operation);
    useEffect(() => {
        setOperationData({
            ...operationData,
            outcome: 0,
            flag: 0,
        });
    }, [flag]);
    const handleClick = (e) => {
        let showedValue = e.target.innerHTML;
        if (/^[0-9]+$/.test(showedValue)) {
            outcome == 0
                ? setOperationData({ ...operationData, outcome: showedValue })
                : setOperationData({
                    ...operationData,
                    outcome: outcome + showedValue,
                });
        } else {
            switch (showedValue) {
                case "C":
                    setOperationData({
                        flag: 0,
                        savedValue: 0,
                        operation: null,
                        outcome: 0,
                    });
                    break;
                case "CE":
                    setOperationData({
                        ...operationData,
                        outcome: outcome.slice(0, -1),
                    });
                    break;
                case "+":
                    if (!aux) {
                        setOperationData({
                            ...operationData,
                            savedValue:Number.parseInt(savedValue) + Number.parseInt(outcome),
                            operation: "sum",
                            flag: 1,
                        });
                    } else {
                        setOperationData({
                            ...operationData,
                            savedValue: outcome,
                            operation: "sum",
                            flag: 1,
                            aux: false,
                        });
                    }
                    break;
                case "-":
                    if (!aux) {
                        setOperationData({
                            ...operationData,
                            savedValue: savedValue==0?Number.parseInt(outcome):Number.parseInt(savedValue)-Number.parseInt(outcome),
                            operation: "dif",
                            flag: 1,
                        });
                    } else {
                        setOperationData({
                            ...operationData,
                            savedValue: outcome,
                            operation: "dif",
                            flag: 1,
                            aux: false,
                        });
                    }
                    break;
                case "*":
                    if (!aux) {
                        setOperationData({
                            ...operationData,
                            savedValue: savedValue==0?Number.parseInt(outcome):Number.parseInt(savedValue)*Number.parseInt(outcome),
                            operation: "pro",
                            flag: 1,
                        });
                    } else {
                        setOperationData({
                            ...operationData,
                            savedValue: outcome,
                            operation: "pro",
                            flag: 1,
                            aux: false,
                        });
                    }
                    break;
                case "=":
                    if (operation === "sum") {
                        setOperationData({
                            ...operationData,
                            outcome: Number.parseInt(savedValue) + Number.parseInt(outcome),
                            aux: true,
                        });
                    }
                    if (operation === "dif") {
                        setOperationData({
                            ...operationData,
                            outcome: Number.parseInt(savedValue) - Number.parseInt(outcome),
                            aux: true,
                        });
                    }
                    if (operation === "pro") {
                        setOperationData({
                            ...operationData,
                            outcome: Number.parseInt(savedValue) * Number.parseInt(outcome),
                            aux: true,
                        });
                    }
            }
        }
    };
    return (
        <div className="container">
            <div className="calculator-box">
                <div className="display">{outcome}</div>
                <Buttons handleClick={handleClick} />
            </div>
        </div>
    );
};

export default Calculator;
