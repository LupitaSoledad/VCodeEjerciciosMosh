import React, { Component } from 'react';
import Counter from './counter';
import Pagina1 from './Pagina1';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };



    handleDelete = counterId => {
        const counters =
            this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    render() {
        return (
            <div>
                <div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className={Pagina1} href="#Page1">Pagina 1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(coun =>
                    <Counter
                        key={coun.id}
                        onDelete={this.handleDelete}

                        value={coun.value}
                        id={coun.id}
                    >


                    </Counter>)}
            </div>);
    }
}

export default Counters;