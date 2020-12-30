
function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-contact">
                                <h2>Notre siège social</h2>
                                <p><i className="fa fa-map-marker-alt"></i>123 Rue, Paris, France</p>
                                <p><i className="fa fa-phone-alt"></i>+33766951453</p>
                                <p><i className="fa fa-envelope"></i>info@example.com</p>
                            
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-link">
                                <h2>Liens rapides</h2>
                                <a href="">Conditions d'utilisation</a>
                                <a href="">Politique de confidentialité</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="footer-newsletter">
                        <h2>La Newsletter</h2>
                        <p>
                          Inscrivez-vous pour recevoir notre lettre d'informations :
                        </p>
                        <div className="form">
                            <input className="form-control" placeholder="Entrer votre e-mail" />
                            <button className="btn">Envoyer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container copyright">
            <div className="row">
                <div className="col-md-6">
                    <p>&copy; <a href="#">IGETIS</a>,  Tous droits réservés.</p>
                </div>
                <div className="col-md-6">
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
