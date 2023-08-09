import JmIcon from './assets/JmIcon.png'
import Computing01 from './assets/Computing01.jpg'
import { SiTypescript } from 'react-icons/si'
import './App.css'
import {FaGithub, FaWhatsapp, FaLinkedin, FaEye, FaHtml5, FaCss3, FaSass, FaReact} from 'react-icons/fa'

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
                <FaGithub size={30}/>
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
        
        <div className='projetos'>
          <div className='projeto01'>
              <h1>Barbearia</h1>
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

          <div className='projeto02'>
            <h1>Sorveteria</h1>
          <p>Desenvolver</p>

              <a href="#" target='_blank'>
                <button className='button-barber'>
                  Visualizar <FaEye size={20}/>
                </button>
              </a>

              <a href="#" target='_blank'>
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
                TypeScript <SiTypescript style={{color: '#007acc'}}/>
                <br />
                ReactJS <FaReact size={20} style={{color: '#61dbfb'}}/>
                <br />
                GitHub <FaGithub/>
                <br />
                </strong>
              </p>
          </div>

          <div className='projeto03'>
            <h1>Reserva</h1>
          <p>Desenvolver</p>

              <a href="#" target='_blank'>
                <button className='button-barber'>
                  Visualizar <FaEye size={20}/>
                </button>
              </a>

              <a href="#" target='_blank'>
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
                TypeScript <SiTypescript style={{color: '#007acc'}}/>
                <br />
                ReactJS <FaReact size={20} style={{color: '#61dbfb'}}/>
                <br />
                GitHub <FaGithub/>
                <br />
                </strong>
              </p>
          </div>

          <div className='projeto02'>
            <h1>Finanças</h1>
          <p>Desenvolver</p>

              <a href="#" target='_blank'>
                <button className='button-barber'>
                  Visualizar <FaEye size={20}/>
                </button>
              </a>

              <a href="#" target='_blank'>
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
                TypeScript <SiTypescript style={{color: '#007acc'}}/>
                <br />
                ReactJS <FaReact size={20} style={{color: '#61dbfb'}}/>
                <br />
                GitHub <FaGithub/>
                <br />
                </strong>
              </p>
          </div>

          <div className='projeto02'>
            <h1>Vendas</h1>
          <p>Desenvolver</p>

              <a href="#" target='_blank'>
                <button className='button-barber'>
                  Visualizar <FaEye size={20}/>
                </button>
              </a>

              <a href="#" target='_blank'>
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
                TypeScript <SiTypescript style={{color: '#007acc'}}/>
                <br />
                ReactJS <FaReact size={20} style={{color: '#61dbfb'}}/>
                <br />
                GitHub <FaGithub/>
                <br />
                </strong>
              </p>
          </div>
        </div>

        <footer className='container-footer'>
            <div className='footer-contact'>
                <a 
                className='footer-button' 
                href="https://www.linkedin.com/in/jhon-mendon%C3%A7a-203925163/"
                target='_blank'
                >
                  <FaLinkedin size={30} style={{color: '#0e76a8'}}/>
                </a>

                <a 
                className='footer-button' 
                href="https://github.com/jhondharkyson520"
                target='_blank'
                >
                  <FaGithub size={30}/>
                </a>

                <a 
                className='footer-button' 
                href="https://api.whatsapp.com/send?phone=5534998277081&text=Olá, Jhon"
                target='_blank'
                >
                  <FaWhatsapp size={30} style={{color: '#25d366'}}/>
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

        </footer>

    </div>
    
  )
}

export default App
