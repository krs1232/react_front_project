import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="copyright-txt">
                                    © 2019 Food_Flate. All Rights Reserved.
                                </div>
                            </div>
                            <div className="col-lg-6 text-right">
                                <div className="footer-nav">
                                    <p>React Project Made By Rasung Ki </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;