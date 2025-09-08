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
      <div className="container footer__top">
        <div className="footer__top__logo">
          <Link to="/">
            <img src="logoWeb.png" alt="Logo" className="logoWeb" />
          </Link>
        </div>
        <div className="footer__top__social">
          <p>Kết nối với chúng tôi:</p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/cong.huy.213035"
                className="footer__social-link"
              >
                <FacebookFilled className="fb" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cynnor.url/"
                className="footer__social-link"
              >
                <InstagramFilled className="insta" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                className="footer__social-link"
              >
                <YoutubeFilled className="ytb" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__top__contact">
          <p>Liên hệ</p>
          <ul>
            <li>
              <p>
                Email:
                <a href="mailto:nguyenconghuy.1821@gmail.com">
                  Nguyenconghuy.1821@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p>
                Số điện thoại:<a href="tel:+335165044"> +335165044</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__divider" />
      <div className="container footer__bottom">
        <div className="footer__bottom__info">
          <p>© 2025 All rights reserved.</p>
          <p>Designed by Cynnor</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
