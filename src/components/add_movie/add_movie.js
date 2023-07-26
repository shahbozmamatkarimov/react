import { Component } from "react"

class AddMovie extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            views: ''
        }
    }

    Forma = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <h1>Yangi kino qo'shish</h1>
                <form className="form" onChange={this.Forma} >
                    <input type="text" className="w-50 p-1" placeholder="Kino nomi..." name="name"  onChange={this.Forma} />
                    <input type="number" className="w-25 p-1" placeholder="necha marta ko'rilgan..." name="views"  onChange={this.Forma} />
                    <input type="submit" className="btn btn-outline-dark w-25" value="Qo'shish" />
                </form>
            </div>
        )
    }
}

export default AddMovie