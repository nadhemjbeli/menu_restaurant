import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <h1 className="contact">Prendre Contact</h1>
            <div className="row">
                <div className="col-md-6 form-area">
                    <div className="col-md-11">
                        <form action="" id="contactElement">
                            <input type="text" placeholder="Nom et Prénom" className="form-control"/>
                            <input type="email" placeholder="Adresse Email" className="form-control"/>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Votre message ici..." className="form-control"/>
                            <button className="btn form-control envoyer">Envoyer</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 pre-circle">
                    <div className="circle">
                        <img src={require("../images/chilis.png")} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;