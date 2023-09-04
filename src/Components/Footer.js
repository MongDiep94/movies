import fb from "../Images/fb.png";
import twt from "../Images/twitter.png";
import insta from "../Images/insta.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© 2023 Liepflix. Tous droits réservés.</p>
      <div className="footer__social">
        <img src={fb} alt="Facebook" />
        <img src={twt} alt="Twitter" />
        <img src={insta} alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
