import React from "react";
import SignMeUp from './SignMeUp';


const Header = () => {

    const signupCallBack = (email) => {
        return console.log(`sign up called with email ${email}`)
    }
    return (
        <div className="jumbotron jumbotronheightg">
            <div className="row">
                <div className="col-12 col-sm-4 text-center">
                    <h6 className="text-uppercase"> October 19-20 2019</h6>
                    <h6 className="text-uppercase"> San Jose, Calilfornia</h6>
                </div>
                <div className="col-12 col-sm-8 text-lg-right">
                    <div>
                        <img src="/static/SVCClogo.png" />
                    </div>
                    <div className="row col-12 text-lg-riight">
                        <SignMeUp signupCallBack={signupCallBack} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;