import React from 'react';
import ReactSelect from 'react-select';
import styles from './styles.module.scss';

export default class Select extends React.Component {
    state = {
        selectedOption: null,
        data: []
    };
    componentDidMount() {
        if (Array.isArray(this.props.data) && this.props.data.length > 0) {
            this.processData(this.props.data);
        }
    }
    UNSAFE_componentWillReceiveProps(nextprops) {
        if (Array.isArray(nextprops.data) && nextprops.data.length > 0) {
            this.processData(nextprops.data);
        }
    }

    processData = (rawData) => {
        let data = [];
        for (const item of rawData) {
            data.push({
                value: item,
                label: item
            })
        }
        this.setState({ data })
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        if(typeof this.props.handleSelectionChange === 'function') this.props.handleSelectionChange(selectedOption);
    };
    render() {
        const { selectedOption } = this.state;
        return (
            <div className={[styles.inputSelect]} style={this.props.containerStyle || {}}>
                <div className={styles.label}>{this.props.label}</div>
                <ReactSelect
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.state.data}
                    instanceId={this.props.identifier}
                    styles={{
                        control: (base, state) => ({
                            ...base,
                            borderColor: '#3742FA',
                            '&:hover': '#3742FA',
                            boxShadow: 'none'
                        })
                    }}
                />
            </div>
        );
    }
}