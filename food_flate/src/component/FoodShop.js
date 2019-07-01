import React, {Component} from 'react';
import axios from 'axios'

class FoodShop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rdata : {}
        };
    }

    componentWillMount() {
        var _this = this;

        axios.get('/foodShop', {
            params : {
                shop_name:this.props.match.params.shop_name
            }
        }).then(function (result) {
            _this.setState({rdata:result.data[0]});
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"><img src={this.state.rdata.imgLink1}/></div>
                    <div className="col-md-3"><img src={this.state.rdata.imgLink2}/></div>
                    <div className="col-md-3"><img src={this.state.rdata.imgLink3}/></div>
                    <div className="col-md-3"><img src={this.state.rdata.imgLink4}/></div>
                </div>
                <div className={"row"}>
                    <table className={"table"} style={{"width":"500px", "margin-right":"auto", "margin-left":"auto", "margin-top":"30px", "margin-bottom":"30px"}}>
                        <tbody>
                        <tr>
                            <td className={"text-center"} colSpan={"3"}>
                                <span><h3>{this.state.rdata.title}</h3></span>
                                <span><h3 style={{"color":"orange", "position":"relative", "left":"30px"}}>{this.state.rdata.grade}</h3></span>
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td className={"text-center"} colSpan={"3"}>
                                <h5>{this.state.rdata.addr}</h5>
                            </td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td className={"text-center"} colSpan={"3"}>
                                <h5>{this.state.rdata.tel}</h5>
                            </td>
                        </tr>
                        <tr>
                            <th>음식 종류</th>
                            <td className={"text-center"} colSpan={"3"}>
                                <h5>{this.state.rdata.foodkind}</h5>
                            </td>
                        </tr>
                        <tr>
                            <th>가격대</th>
                            <td className={"text-center"} colSpan={"3"}>
                                <h5>{this.state.rdata.price}</h5>
                            </td>
                        </tr>
                        <tr>
                            <th>주차</th>
                            <td className={"text-center"} colSpan={"3"}>
                                <h5>{this.state.rdata.parking}</h5>
                            </td>
                        </tr>
                        <tr>
                            <th>영업시간</th>
                            <td className={"text-center"} colSpan={"3"}>
                                <h5>{this.state.rdata.opentime}</h5>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default FoodShop;