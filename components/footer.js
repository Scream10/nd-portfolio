export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-copyright">
                    <p>
                        <span className="footer-nd">nd portfolio </span>
                        | Copyright © 2021 | <a href="/mentions-legales">Mentions légales</a>
                    </p>
                </div>
                <div className="footer-info">
                    <div className="footer-info__contact">
                        <h4 className="underline-gray">Contact</h4>
                        <a href="mailto:nicolasdiot10@gmail.com">nicolasdiot10@gmail.com</a>
                        <a href="tel:+33635390849">+33 (0)6 35 39 08 49</a>
                    </div>
                    <div className="footer-info__social">
                        <h4 className="underline-gray">Social</h4>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/nicolas-diot-96b0b313a/" target="_blank">
                                    <img className="footer-logo footer-logo--linkedin" src="images/logo_linkedin.png" alt="logo linkedin"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.malt.fr/profile/nicolasdiot" target="_blank">
                                    <img className="footer-logo" src="images/logo_malt.png" alt="logo malt"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Scream10" target="_blank">
                                    <img className="footer-logo" src="images/logo_github.png" alt="logo malt"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}