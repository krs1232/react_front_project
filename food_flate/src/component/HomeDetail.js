import React,{Component} from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";

class HomeDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list : []
        };
    }

    componentWillMount() {
        var _this = this;
        axios.get("/homeDetail", {
            params : {
                hno:this.props.match.params.hno
            }
        }).then(function (result) {
            _this.setState({list:result.data})
        })
    }

    render() {
        const html = this.state.list.map((m) =>
            <div className="row" style={{"position":"relative", "left":"160px", "margin-bottom":"30px", "margin-top":"30px"}}>
                <div className="col-md-4">
                    <div className="about-img">
                        <img src={m.img} style={{"width":"380px", "height":"300px"}}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-content">
                        <span><h2>{m.shop_name}</h2></span>
                        <span><h3 style={{"color":"orange", "position":"relative", "left":"30px"}}>{m.grade}</h3></span>
                        <h6>{m.subtitle}</h6>
                        <p>{m.review}</p>
                        <NavLink to={"/foodShop/"+m.shop_name}>
                            <a href="#" className="button" style={{"position":"relative", "left":"400px"}}>더보기 &gt;</a>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="container">
                {html}
            </div>
        );
    }
}

export default HomeDetail;