import Movielistitem from "../movie_list_item/movie_list_item";
import { Component } from "react";

class Movielist extends Component {
    render() {
        const data = [
            { id: "1", title: "Animals", views: 981 },
            { id: "2", title: "Learn ReacJS", views: 2005 },
            { id: "3", title: "Input tags in JS", views: 596 }
        ]
        return (
            data.map((item) => (
                <div key={item.id.toString()}>
                    <Movielistitem {...item} />
                </div>
            ))
        )
    }
}

export default Movielist;