import React,{Component} from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list:[]
        };
    }

    componentWillMount() {
        var _this = this;

        axios.get('/home').then(function (result) {
            _this.setState({list:result.data});
        })
    }

    render() {
        const html = this.state.list.map((m) =>
            <div className="col-md-4 single-service-2">
                <NavLink to={"/homeDetail/"+m.no}>
                <div className="inner" style={{"padding-top":"30px", "padding-bottom":"30px"}}>
                    <img src={m.img}/>
                    <div className="title">
                        <h4 style={{"padding-top":"30px"}}>{m.title}</h4>
                    </div>
                    <div className="content">
                        <p style={{"font-size":"14px"}}>{m.subtitle}</p>
                    </div>
                </div>
                </NavLink>
            </div>
        )
        return (
            <div>
            <div className="single-slide" style={{"background-image":"url(assets/img/nav/main_img.jpg)", "height":"500px", "background-position": "center"}}>
                <div className="inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slide-content" style={{"position":"relative", "top":"210px", "left":"300px"}}>
                                    <h2 className={"text-center"} style={{"color":"white", "font-weight":"bold"}}>솔직한 리뷰, 믿을 수 있는 평점!</h2>
                                    <h2 className={"text-center"} style={{"color":"white", "font-weight":"bold"}}>Food Flate</h2>
                                    <div style={{"position":"relative", "top":"50px"}}>
                                        <img src={"assets/img/nav/discount.png"} style={{"position":"relative", "right":"450px", "top":"50px", "width":"350px"}}/>
                                        <div style={{"position":"relative", "right":"50px"}}>
                                            <img src={"assets/img/nav/market.png"} style={{"position":"relative", "width":"200px", "left":"650px", "bottom":"23px"}}/>
                                            <img src={"assets/img/nav/appstore.svg"} style={{"position":"relative", "width":"180px", "left":"650px", "bottom":"23px"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-area spt" style={{"padding-top":"30px"}}>
                <div className="container">
                    <div className="section-title" style={{"margin-bottom":"10px"}}>
                        <h3 className={"text-left"} style={{"color":"orange", "font-weight":"bold" }}>믿고 보는 맛집 리스트</h3>
                    </div>
                    <div className="row">
                        {html}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;