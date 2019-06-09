import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error: error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="addOptionError">{this.state.error}</p>}
                <form 
                    onSubmit={this.handleAddOption}
                    className="addOption"
                >
                    <input 
                        type="text" 
                        name="option"
                        className="addOption_input"
                    ></input>
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}