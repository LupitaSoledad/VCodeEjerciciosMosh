import React, { Component } from 'react';


class Counter extends Component {
    state = {
        value: this.props.value,
        tags: []
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>
        return <url>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</url>;
    }

    handleIncremet = () => {
        this.setState({
            value: this.state.value + 1
        });
    }

    handleDecrement = () => {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        console.log('props', this.props);

        return (
            <div class="position-static">
                <span style={{ fontSize: 15 }} className={this.getBadgClasses()}>{this.formatCount()}</span>
                <div class="btn-group mr-2" role="group" aria-label="Second group">
                    <button onClick={this.handleIncremet} className="btn btn-info btn-sm">+</button>
                </div>
                <div class="btn-group mr-2" role="group" aria-label="Second group">
                    <button id="detalles" onClick={this.handleDecrement} className="btn btn-info btn-sm">-</button>
                </div>
                <div class="btn-group mr-2" role="group" aria-label="Second group">
                    <button
                        onClick={() => this.props.onDelete(this.props.id)}
                        className="btn btn-danger btn-sm">
                        Delete
                        </button>
                </div>
                <p>{this.renderTags()}</p>


            </div>);
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'zero' : value;
    }

    getBadgClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "danger";
        return classes;
    }
}

export default Counter;