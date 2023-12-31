import JmIcon from './assets/JmIcon.png'
import Computing01 from './assets/Computing01.jpg'
import { SiTypescript } from 'react-icons/si'
import './App.css'
import {FaGithub, FaWhatsapp, FaLinkedin, FaEye, FaHtml5, FaCss3, FaSass, FaReact} from 'react-icons/fa'
import {BiLogoFirebase, BiLogoTailwindCss} from 'react-icons/bi'

function App() {
  

  return (
    <div className='container'>
        <header className='header'>
            <img 
              src= {JmIcon}
              alt="Logo"
              className='logo' 
            />

            <nav>

              <a 
              className='header-button' 
              href="https://www.linkedin.com/in/jhon-mendon%C3%A7a-203925163/"
              target='_blank'
              >
                LinkedIn 
                <FaLinkedin size={30} style={{color: '#0e76a8'}}/>
              </a>

              <a 
              className='header-button' 
              href="https://github.com/jhondharkyson520"
              target='_blank'
              >
                GitHub
                <FaGithub size={30} style={{color: '#000000'}}/>
              </a>

              <a 
              className='header-button' 
              href="https://api.whatsapp.com/send?phone=5534998277081&text=Olá, Jhon"
              target='_blank'
              >
                WhatsApp 
                <FaWhatsapp size={30} style={{color: '#25d366'}}/>
              </a>

            </nav>
        </header>
        
        <div className='container-about'>
          <div className='about'>
            <h1>Sobre</h1>
            <p>
              Olá, me chamo Jhon Mendonça, sou <strong>desenvolvedor Front-End</strong> formado em Sistemas de informação pela 
              UEMG - Universidade do Estado de Minas Gerais, Pós Graduado em Projetos de Cloud Computing e 
              Projetos de Aplicativos Móveis Multiplataforma pela UNIAMERICA. Tenho experiência em 
              <strong> HTML5, CSS3, TypeScript, ReactJS e React Native. </strong> 
              Abaixo disponibilizei alguns projetos desenvolvidos por mim. 
            </p>
          </div>

          <div className='imagem01'>
            <img 
              src={Computing01} 
              alt="Dev codes"
              className='computing01' 
            />
          </div>
        </div>
        
        <section className='projetos'>
          <div className='projeto01'>
              <h1>Barbearia</h1>
              <br />
              <p>Landing page de apresentação de uma barbearia.</p>

              <a href="https://projeto-barberdev-glij.vercel.app/" target='_blank'>
                <button className='button-barber'>
                  Visualizar <FaEye size={20}/>
                </button>
              </a>

              <a href="https://github.com/jhondharkyson520/projeto-barberdev" target='_blank'>
                <button className='button-barber-github'>
                  GitHub <FaGithub size={20}/>
                </button>
              </a>

              <br />
              <br />
              <p><strong>Tecnologias utilizadas: </strong></p>
              <br />
              <p>
                <strong>
                HTML5 <FaHtml5 style={{color: '#ec6231'}}/> 
                <br />
                CSS3 <FaCss3 style={{color: '#264de4'}}/> 
                <br />
                Sass <FaSass size={20} style={{color: '#cc6699'}}/>
                <br /> 
                GitHub <FaGithub/>
                <br />
                </strong>
              </p>
          </div>

          <div className='projeto01'>
            <h1>Sorveteria</h1>
            <br />
          <p>Landing page de apresentação de uma sorveteria, com campo de contato funcional.</p>

              <a href="https://sorveteria-three.vercel.app/" target='_blank'>
                <button className='button-barber'>
                  Visualizar <FaEye size={20}/>
                </button>
              </a>

              <a href="https://github.com/jhondharkyson520/sorveteria" target='_blank'>
                <button className='button-barber-github'>
                  GitHub <FaGithub size={20}/>
                </button>
              </a>

              <br />
              <br />
              <p><strong>Tecnologias utilizadas: </strong></p>
              <br />
              <p>
                <strong>
                HTML5 <FaHtml5 style={{color: '#ec6231'}}/> 
                <br />
                CSS3 <FaCss3 style={{color: '#264de4'}}/> 
                <br />
                TypeScript <SiTypescript style={{color: '#007acc'}}/>
                <br />
                ReactJS <FaReact size={20} style={{color: '#61dbfb'}}/>
                <br />
                GitHub <FaGithub/>
                <br />
                </strong>
              </p>
          </div>

          <div className='projeto01'>
            <h1>Criptomoedas</h1>
            <br />
            <p>Trás uma lista de criptomoedas consumindo a API da coinlib.</p>

              <a href="https://cripto-umber.vercel.app/" target='_blank'>
                <button className='button-barber'>
                  Visualizar <FaEye size={20}/>
                </button>
              </a>

              <a href="https://github.com/jhondharkyson520/cripto" target='_blank'>
                <button className='button-barber-github'>
                  GitHub <FaGithub size={20}/>
                </button>
              </a>

              <br />
              <br />
              <p><strong>Tecnologias utilizadas: </strong></p>
              <br />
              <p>
                <strong>
                HTML5 <FaHtml5 style={{color: '#ec6231'}}/> 
                <br />
                CSS3 <FaCss3 style={{color: '#264de4'}}/> 
                <br />
                TypeScript <SiTypescript style={{color: '#007acc'}}/>
                <br />
                ReactJS <FaReact size={20} style={{color: '#61dbfb'}}/>
                <br />
                GitHub <FaGithub/>
                <br />
                </strong>
              </p>
          </div>

          <div className='projeto01'>
            <h1>Borracharia</h1>
            <br />
            <p>Aplicação web vendida para uma borracharia, em produção.</p>

              <a href="https://cripto-umber.vercel.app/" target='_blank'>
                <button className='button-barber'>
                  Visualizar <FaEye size={20}/>
                </button>
              </a>

              <a href="https://github.com/jhondharkyson520/cripto" target='_blank'>
                <button className='button-barber-github'>
                  GitHub <FaGithub size={20}/>
                </button>
              </a>

              <br />
              <br />
              <p><strong>Tecnologias utilizadas: </strong></p>
              <br />
              <p>
                <strong>
                HTML5 <FaHtml5 style={{color: '#ec6231'}}/> 
                <br />
                Tailwind Css <BiLogoTailwindCss style={{color: '#264de4'}}/> 
                <br />
                TypeScript <SiTypescript style={{color: '#007acc'}}/>
                <br />
                ReactJS <FaReact size={20} style={{color: '#61dbfb'}}/>
                <br />
                Firebase <BiLogoFirebase size={20} style={{color: '#F5820C'}}/>
                <br />
                GitHub <FaGithub/>
                <br />
                </strong>
              </p>
          </div>
          
        </section>

          <div className='container-footer'>
              <div className='footer-contact'>
                  <a 
                  className='footer-button' 
                  href="https://www.linkedin.com/in/jhon-mendon%C3%A7a-203925163/"
                  target='_blank'
                  >
                    <FaLinkedin class='FaLinkedin' size={30} style={{color: '#0e76a8'}}/>
                  </a>

                  <a 
                  className='footer-button' 
                  href="https://github.com/jhondharkyson520"
                  target='_blank'
                  >
                    <FaGithub class='FaGithub' size={30} style={{color: '#000000'}}/>
                  </a>

                  <a 
                  className='footer-button' 
                  href="https://api.whatsapp.com/send?phone=5534998277081&text=Olá, Jhon"
                  target='_blank'
                  >
                    <FaWhatsapp class='FaWhatsapp' size={30} style={{color: '#25d366'}}/>
                  </a>
              </div>

              <div className='logo-footer'>
                <img 
                  src= {JmIcon}
                  alt="Logo"
                  className='logo' 
                />
              </div>

              <p className='footer-text'>Copyright | Jhon Mendonça - Todos direitos reservados.</p>

          </div>

    </div>
    
  )
}

export default App
