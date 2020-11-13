import React from "react";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
        this.toggleChange = this.toggleChange.bind(this)
    }

    toggleChange = () => {
        this.props.onChange(this.props.title);
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    render() {
        return(
            <label>
                <input type="checkbox"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
                />
                {this.props.title}
            </label>
        )
    }
}
export default Checkbox;