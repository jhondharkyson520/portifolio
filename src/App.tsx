import JmIcon from './assets/JmIcon.png'
import Computing01 from './assets/Computing01.jpg'
import './App.css'
import {FaGithub, FaWhatsapp, FaLinkedin} from 'react-icons/fa'

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
        
        <div className='projetos'>
          <div className='projeto01'>
              Barber
          </div>

          <div className='projeto02'>
              Sorveteria
          </div>

          <div className='projeto03'>
              Reserva
          </div>

          <div className='projeto04'>
              Finanças
          </div>

          <div className='projeto05'>
              Vendas
          </div>
        </div>
    </div>
    
  )
}

export default App
