import { Component } from "react";

class Movielistitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: false,
            deleted: false
        }
    }
    
    Favourite = () => {
        this.setState(({favourite}) => ({
            favourite: !favourite
        }));
    }

    Delete = () => {
        this.setState(({deleted}) => ({
            deleted: !deleted
        }));
    };
    
    render() {
        const { id, title, views } = this.props;
        const { favourite, deleted } = this.state;

        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr className={`${favourite && 'text-warning'} ${deleted && 'd-none'}`}>
                            <th className="col-1" scope="row">{id}</th>
                            <td className="col-3">{title}</td>
                            <td className="col-3">
                                <input type="number" className={`${favourite && 'text-warning'} eyes`} defaultValue={views} />
                            </td>
                            <td className="col-2">
                                <button><i className="fa fa-trash" onClick={this.Delete}></i></button>
                                <button><i className={`fa fa-star ${favourite && 'text-warning'} eyes`} onClick={this.Favourite}></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Movielistitem;