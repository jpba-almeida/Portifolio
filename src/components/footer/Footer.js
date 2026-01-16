import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p
          className={isDark ? "dark-mode footer-text" : "footer-text"}
          style={{fontSize: "0.8rem", lineHeight: "1.2", opacity: 0.8}}
        >
          {emoji("Desenvolvido com ❤️ por João Paulo Brito de Almeida")}
        </p>
        <p
          className={isDark ? "dark-mode footer-text" : "footer-text"}
          style={{fontSize: "0.6rem", lineHeight: "1.2", opacity: 0.8}}
        >
          Template inspirado por{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{fontSize: "inherit"}}
          >
            developerFolio
          </a>
        </p>
        <p
          className={isDark ? "dark-mode footer-text" : "footer-text"}
          style={{fontSize: "0.6rem", lineHeight: "1.2", opacity: 0.8}}
        >
          © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </Fade>
  );
}
