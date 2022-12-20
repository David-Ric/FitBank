import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components-styles/Navbar.scss';
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import api from '../services/api';
import Alert from "../../src/components/Alert";
import { OverlayTrigger, Tooltip } from "react-bootstrap";





export default function Navbar() {
  const [active, setMode] = useState(false);
  const [pageTop, setPageTop] = useState(false);
  const [soluction, setSoluction] = useState(false);
  const [transparence, setTransparence] = useState(false);
  const [alertErro, setAlertErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  const navBar = document.querySelector("#navBarTop")

  useEffect(() => {

  })

  window.addEventListener("scroll", rooling);

  function rooling() {
    if (window.pageYOffset > 0) {
      setPageTop(true);
    } else {
      setPageTop(false);
    }

  }

  // history.push("/");

  function LimpaMessegeError() {
    setAlertErro(false);
  }

  const ToggleMode = () => {
    setMode(!active);
  };
  function arrowSolucTrue() {
    setSoluction(true);
  }

  function arrowSolucFalse() {
    setSoluction(false);
  }
  function arrowTranspTrue() {
    setTransparence(true);
  }
  function arrowTranspFalse() {
    setTransparence(false);
  }



  return (
    <div className='total-nav'>

      <div id='navBarTop' className={pageTop || active ? "Nav Nav-scroll " : "Nav Nav-fixed"}>
        <div className='logo-lik'>
          <a className='logo-a' href='/'>
            <div className='logo-navbar'></div>
          </a>
        </div>

        <div className='menu'>
          <ul>
            <li><a href='/'>Início</a></li>
            <li onMouseOver={arrowSolucTrue} onMouseOut={arrowSolucFalse} className='solution text-menu-a'>Soluções{soluction ? (<><IoIosArrowUp style={{ marginLeft: 3 }} size="13" /></>) : (<><IoIosArrowDown style={{ marginLeft: 3 }} size="13" /></>)}

              <ul className='sub-menu'>
                <li>App e Internet Banking</li>
                <li style={{ height: 60 }}>BaaS para Adquirintes e <br />
                  Subadquirentes</li>
                <li>Banking as a Service</li>
                <li>Cartões Pré-pagos</li>
                <li>Hub de pagamentos</li>
                <li>Multibenefícios</li>
                <li>Payroll</li>
                <li>Smart Escrow</li>
              </ul>

            </li>
            <li onMouseOver={arrowTranspTrue} onMouseOut={arrowTranspFalse} className='transparence text-menu-a'>Transparência{transparence ? (<><IoIosArrowUp style={{ marginLeft: 3 }} size="13" /></>) : (<><IoIosArrowDown style={{ marginLeft: 3 }} size="13" /></>)}
              <ul className='sub-menu-transp'>
                <li>Ética e Compliance</li>
                <li>Investidores</li>
                <li>LGPD</li>
              </ul></li>
            <li><a href='/'>Documentação API</a></li>
            <li><a href='/'>Blog</a></li>
            <li><a href='/'>FAC</a></li>
            <li><a href='/portal'><FaUserAlt size="12" style={{ marginRight: 6 }} />ContaFit</a></li>
            <li>
              <div className='div-language lg-us' />
            </li>
            <li>
              <div className='div-language lg-es' />
            </li>
            <li>
              <div className='div-language lg-br' />
            </li>

          </ul>


        </div>
        <div
          className={active ? "iconMenu iconActive" : "iconMenu"}
          onClick={ToggleMode}
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="hamburguer hamburguerIcon"></span>
        </div>

        {/* =============== Menu Mobile =========================================================================== */}

        <div className={active ? 'menu-mobile' : 'not-menu'}>
          <ul className='menu-ul-mobile'>
            <div className='menu-mobile-li'>
              <li><a href='/'>Início</a></li>
              <li><a href='/'>Soluções</a></li>
              <li><a href='/'>Transparência</a></li>
              <li><a href='/'>Documentação API</a></li>
              <li><a href='/'>Blog</a></li>
              <li><a href='/'>FAC</a></li>
              <li><a href='/portal'><FaUserAlt size="12" style={{ marginRight: 6 }} />ContaFit</a></li>
            </div>
            <div style={{ width: 120, marginTop: 10 }} className='d-flex'>
              <li>
                <div className='div-language lg-us' />
              </li>
              <li>
                <div className='div-language lg-es' />
              </li>
              <li>
                <div className='div-language lg-br' />
              </li>
            </div>
          </ul>
        </div>



      </div>
    </div>
  );
}
