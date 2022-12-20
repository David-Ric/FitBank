import Carousel from 'react-bootstrap/Carousel';
import '../../styles/components-styles/Carrousell.scss';

export default function CarouselHome() {
  return (
    <Carousel controls={false} variant="dark">
      <Carousel.Item interval={9000}>
        <div className='carrousel img-carrousell00'>
          <p className='p-title' style={{ color: '#fff' }}>_Mais do que um <span style={{ color: '#fcd669' }}>Banking as a Service</span> /</p>

          <h3>Poder de banco para a sua empresa com<br />
            soluções que vão além de BaaS.
          </h3>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <div className='carrousel img-carrousell01'>
          <div className='d-flex'>
            <p className='p-title' style={{ color: '#fff' }}>_APIs de <span style={{ color: '#fcd669' }}>PIX</span> /</p>
          </div>
          <h3>Implemente o PIX na sua empresa e ganhe<br />
            agilidade para ganhar mais vendas.
          </h3>
          <div>
            <div className='d-flex'>
              <div className='pix-logo' />
              <div className='d-flex text-pix'>
                <h1>PIX</h1>
              </div>

            </div>

            <button className='buttompix'>SAIBA MAIS</button>
            <div className='d-flex'>
              <h4 style={{ marginLeft: 15 }}>#SPB450</h4>
              <h4 style={{ marginLeft: 15 }}>#PIX</h4>
              <h4 style={{ marginLeft: 15 }}>#APIsPlug&Play</h4>
            </div>

          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <div className='carrousel img-carrousell02'>
          <div className='d-flex'>
            <p className='p-title' style={{ color: 'rgb(50, 56, 79)' }}>_Banking as a <span style={{ color: 'rgb(94, 128, 164)' }}>Service/</span> </p>
          </div>
          <h3 style={{ color: 'rgb(50, 56, 79)' }}>Serviços financeiros sem intermediários,<br />
            com <b>tecnologioa 100% proprietária.</b>
          </h3>
          <div>

            <button style={{ marginTop: 50 }} className='btn-gold'>CONHEÇA NOSSAS SOLUÇÕES</button>
            <div style={{ marginTop: 40 }} className='d-flex'>
              <h4 style={{ marginLeft: 15, color: 'rgb(50, 56, 79)' }}>#SPB450</h4>
              <h4 style={{ marginLeft: 15, color: 'rgb(50, 56, 79)' }}>#CloudNative</h4>
            </div>

          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <div className='carrousel img-carrousell03'>
          <div className='d-flex'>
            <p className='p-title' style={{ color: '#fff' }}>_Infratech <span style={{ color: 'rgb(94, 128, 164)' }}>Banking /</span> </p>

          </div>
          <h3 >Somos a única plataforma <b>100% nativa em</b><br />
            nuvem integrada no SPB
          </h3>
          <div>

            <button style={{ marginTop: 50 }} className='btn-gold'>CONHEÇA NOSSAS SOLUÇÕES</button>
            <div style={{ marginTop: 40 }} className='d-flex'>
              <h4 style={{ marginLeft: 15, color: 'rgb(94, 128, 164' }}>#SPB450</h4>
              <h4 style={{ marginLeft: 15, color: 'rgb(94, 128, 164' }}>#CloudNative</h4>
            </div>

          </div>

        </div>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <div className='carrousel img-carrousell04'>
          <p className='p-title' style={{ color: '#fff' }}>_ <span style={{ color: '#fcd669' }}>As melhores</span> soluções financeiras <span style={{ color: '#fcd669' }}>para o seu ERP</span> /</p>
          <h3 >Somos a única plataforma <b>100% nativa em</b><br />
            nuvem integrada no SPB
          </h3>
          <div>

            <button style={{ marginTop: 50 }} className='btn-gold'>CONHEÇA NOSSAS SOLUÇÕES</button>
            <div style={{ marginTop: 40 }} className='d-flex'>
              <h4 style={{ marginLeft: 15, color: 'rgb(94, 128, 164' }}>#SPB450</h4>
              <h4 style={{ marginLeft: 15, color: 'rgb(94, 128, 164' }}>#CloudNative</h4>
            </div>

          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
