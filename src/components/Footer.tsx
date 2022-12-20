import React from 'react';
import '../styles/components-styles/Footer.scss';
import { GoMail } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";


export default function Footer() {
  return (
    <div id="footer">
      <div className='division' />
      <div className='conteudo-footer'>
        <div className='content'>
          <p style={{ fontWeight: 'bold' }}>FitBank</p>
          <p>Início</p>
          <p>Sobre nós</p>
          <p>Trabalhe conosco</p>
          <p>Documentação API</p>
          <p>Blog</p>
          <p>FAQ</p>
          <p style={{ fontWeight: 'bold' }}>Rodobank</p>
          <p>CIOT gratuito</p>
        </div>
        <div className='content'>
          <p style={{ fontWeight: 'bold' }}>Soluções</p>
          <p>App e Internet Banking</p>
          <p>BaaS para Adquirentes e Subadquirentes</p>
          <p>Banking as a Service</p>
          <p>Cartões Pré-pagos</p>
          <p>Hub de Pagamentos</p>
          <p>Payroll</p>
          <p>Smart Escrow</p>
          <p>Multibenefícios</p>
        </div>
        <div className='content'>
          <p style={{ fontWeight: 'bold' }}>Transparência</p>
          <p>Ética & Compliance</p>
          <p>Demonstrativos Financeiros</p>
          <p style={{ marginBottom: 30 }}>LGPD</p>
          <p>Ouvidoria:</p>
          <p style={{ fontSize: 14 }}><GoMail fontSize={22} style={{ marginRight: 6 }} />ouvidoria@fitbank.com.br</p>
          <p>Tratamento de Dados (DPO):</p>
          <p style={{ fontSize: 14 }}><GoMail fontSize={22} style={{ marginRight: 6 }} />dpo@fitbank.com.br</p>
        </div>
        <div className='content'>
          <p style={{ fontWeight: 'bold' }}>Fale conosco</p>
          <p>Dúvidas, sugestões ou reclamações:</p>
          <p style={{ fontSize: 14, marginBottom: 20 }}><GoMail fontSize={22} style={{ marginRight: 6 }} />suporte@fitbank.com.br</p>
          <p>Solicitação de vendas:</p>
          <p style={{ fontSize: 14, marginBottom: 20 }}><GoMail fontSize={22} style={{ marginRight: 6 }} />comercial@fitbank.com.br</p>
          <p>Assessoria de Imprensa:</p>
          <p style={{ fontSize: 14 }}><GoMail fontSize={22} style={{ marginRight: 6 }} />imprensa@fitbank.com.br</p>
        </div>
      </div>
      <div className='division2' />
      <div className='red-soci'>
        <div className='social'>
          <FaLinkedin />
        </div>
        <div className='social'>
          <FaFacebookF />
        </div>
        <div className='social'>
          <AiOutlineInstagram />
        </div>
      </div>
      <div className='FitFooter'>
        <p>FitBank © 2022, Todos os direitos reservados&nbsp; | By David Ric</p>
      </div>
    </div>

  );
}

