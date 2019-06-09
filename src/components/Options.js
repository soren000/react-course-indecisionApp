import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widgetHeader">
            <h3>Your Options</h3>
            <button
                onClick={props.handleDeleteOptions}
                className="button button-link"
            >
                Remove all
        </button>
        </div>
        {props.options.length === 0 && <p className="widget_message"> Please add an option to get started! </p>}
        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
)

export default Options;