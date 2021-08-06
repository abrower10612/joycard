import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import AtomControls from '../atoms/AtomControls';
import Icons from '../images/Icons';
import Select from 'react-select';
import { TextField } from '@material-ui/core';

const IssueGiftCardForm = () => {
    const [cardType, setCardType] = useRecoilState(AtomControls.CardTypeState);
    const [DigitalTypeState, setDigitalTypeState] = useRecoilState(AtomControls.DigitalTypeState);
    const [digitalType, setDigitalType] = useState("mobile");
    const [digitalInput, setDigitalInput] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardAmount, setCardAmount] = useState("");

    const options = [
        {
            value: "mobile",
            label: "Mobile"
        },
        {
            value: "email",
            label: "Email"
        }
    ]

    //TODO: Need to move these controls into a separate file
    const styles = {
        control: styles => ({ 
            ...styles, 
            backgroundColor: 'none',
            border: 'none',
            borderBottom: 'solid 1px gray',
            borderRadius: 0,
            width: '190px',
            fontSize: '1.5rem',
            boxShadow: 'none',
            cursor: 'pointer',
            
            // **LARGE VIEWPORT** //
            '@media(min-width: 800px)': {
                ...styles, 
                backgroundColor: 'none',
                border: 'none',
                borderBottom: 'solid 1px gray',
                width: '200px',
                borderRadius: 'none',
                fontSize: '1.75rem',
                boxShadow: 'none',
                height: 'inherit',
                paddingRight: '20px',
                cursor: 'pointer'
            },
        })
    }

    return (
        <div className="issue-container">
            <h1>Issue Gift Card</h1>
            <div className="cardType-container">
                <span>What kind of card?</span>
                <div className="cardType">
                    {cardType === "physical" 
                        ? <Icons.CheckCircleIcon className="icon" /> 
                        : <Icons.RadioButtonUncheckedIcon className="icon" onClick={() => setCardType("physical")}/>
                    }
                    <label>Physical</label>
                </div>
                <div className="cardType">
                    {cardType === "digital" 
                        ? <Icons.CheckCircleIcon className="icon" /> 
                        : <Icons.RadioButtonUncheckedIcon className="icon" onClick={() => setCardType("digital")}/>
                    }
                    <label>Digital</label>
                </div>
            </div>

            {cardType === "digital" && 
                <div className="digitalInputs-container">
                    <span>How should we send the card?</span>
                    <div className="deliveryType">
                        {digitalType === "mobile" 
                            ? <Icons.CheckCircleIcon className="icon"/> 
                            : <Icons.RadioButtonUncheckedIcon className="icon" onClick={() => setDigitalType("mobile")}/>
                        }
                        <label>Text</label>
                    </div>
                    <div className="deliveryType">
                        {digitalType === "email" 
                            ? <Icons.CheckCircleIcon className="icon"/> 
                            : <Icons.RadioButtonUncheckedIcon className="icon" onClick={() => setDigitalType("email")}/>
                        }
                        <label>Email</label>
                    </div>

                    {digitalType === "mobile" 
                    ?
                    <div>
                        { digitalInput.length === 10
                        ?
                        <div className="mobile-icon">
                            <Icons.CheckCircleIcon />
                        </div>
                        :
                        <div className="mobile-icon">
                            <Icons.CheckCircleIcon
                                className="icon"
                                style={{
                                    color: '#bababa'
                                }}
                            />
                        </div>
                        }
                        <TextField 
                            type="number"
                            label="Mobile Number"
                            onInput = {e => {
                                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                            }}
                            onChange={e => {
                                setDigitalInput(e.target.value)
                            }}
                        />
                    </div>
                    :
                    <div>
                        { digitalInput.includes('@' && '.')
                        ?
                        <div className="mobile-icon">
                            <Icons.CheckCircleIcon className="icon"/>
                        </div>
                        :
                        <div className="mobile-icon">
                            <Icons.CheckCircleIcon 
                                className="icon"
                                className="icon"
                                style={{
                                    color: '#bababa'
                                }}
                            />
                        </div>
                        }
                        <TextField 
                            type="string"
                            label="Email Address"
                            onChange={e => {
                                setDigitalInput(e.target.value)
                            }}
                        />

                    </div>
                    }
                </div>
            }
            <div className="cardNumber">
                { cardNumber.length >= 4
                ?
                <div className="mobile-icon">
                    <Icons.CheckCircleIcon className="icon"/>
                </div>
                :
                <div className="mobile-icon">
                    <Icons.CheckCircleIcon 
                        className="icon"
                        style={{
                            color: '#bababa'
                        }}
                    />
                </div>
                }
                <TextField 
                    type="string"
                    label="Card Number"
                    helperText="4 to 16 characters"
                    onInput = {e => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16)
                    }}
                    onChange={e => {
                        setDigitalInput(e.target.value)
                    }}
                />
            </div>

            <div className="cardAmount">
                { digitalInput.includes('@' && '.')
                ?
                <div className="mobile-icon">
                    <Icons.CheckCircleIcon className="icon"/>
                </div>
                :
                <div className="mobile-icon">
                    <Icons.CheckCircleIcon 
                        className="icon"
                        style={{
                            color: '#bababa'
                        }}
                    />
                </div>
                }
                <TextField 
                    type="string"
                    label="Card Amount"
                    onInput = {e => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16)
                    }}
                    onChange={e => {
                        setDigitalInput(e.target.value)
                    }}
                />
            </div>
            <div 
                className="button-container"
                onClick={() => alert("test")}
            >
                <span className="submit-button">Issue Gift Card</span>
            </div>
        </div>
    )
}

export default IssueGiftCardForm
