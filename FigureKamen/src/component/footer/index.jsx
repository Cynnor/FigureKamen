import { Link } from "react-router-dom";
import "./index.scss";
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Link to="/">
          <img src="logoWeb.png" alt="Logo" className="logoWeb" />
        </Link>
      </div>
      <div className="footer__social">
        <p>Kết nối với chúng tôi:</p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/cong.huy.213035"
              className="footer__social-link"
            >
              <FacebookFilled />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cynnor.url/"
              className="footer__social-link"
            >
              <InstagramFilled />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" className="footer__social-link">
              <YoutubeFilled />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__contact">
        <p>Liên hệ</p>
        <ul>
          <li>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              nguyenconghuy.1821@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+335165044">+335165044</a>
          </li>
        </ul>
      </div>
      <div className="footer__info">
        <p>© 2025 All rights reserved.</p>
        <p>Designed by Cynnor</p>
      </div>
    </footer>
  );
}

export default Footer;
