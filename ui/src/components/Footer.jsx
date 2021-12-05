import Container from "./Container";

import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <p>&copy;{new Date().getFullYear()}</p>
        <ul>
          <li>
            <a href="javascript:;">About</a>
          </li>
          <li>
            <a href="javascript:;">Privacy Policy</a>
          </li>
          <li>
            <a href="javascript:;">T&C</a>
          </li>
        </ul>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e619a1"
          fill-opacity="1"
          d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,186.7C672,181,768,139,864,122.7C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </footer>
  );
}
export default Footer;
