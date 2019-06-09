
import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component { // add props using a title and key value pair when you invoke the component
    state = {
        options: [],
        selectedOption: undefined
    }
    componentDidMount = () => { // only available in class based components
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }))
            }
        }
        catch (e) {

        }
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) { //makes sure the field is not empty
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

            console.log('saving data')
        }
    }
    componentWillUnmount = () => {
        console.log('componentWillUnmount')
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    handlePick = () => {
        const optionsList = this.state.options;

        const randomIndex = (Math.floor(Math.random() * optionsList.length));
        const option = this.state.options[randomIndex];
        this.setState(() => ({
            selectedOption: option
        }));
    }
    clearSelected = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelected={this.clearSelected}
                />
            </div>
        )
    }
}

export default IndecisionApp;