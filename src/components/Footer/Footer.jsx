import Title from '../singleComponents/Title/Title';
import ListItem from '../singleComponents/ListItem/ListItem';
import './Footer.css';

function Footer(props) {
  return (
    <footer className='footer'>
      <Title
        additionalClass='footer__title'
        text='Учебный проект Яндекс.Практикум х BeatFilm.'
      />
      <div className='footer__content'>
        <div className='footer__coptright'>&copy; {new Date().getFullYear()}</div>
        <ul className='footer__links'>
          <ListItem
            text='Яндекс.Практикум'
            additionalClass='footer__list-item'
            link='https://practicum.yandex.ru/'
          />
          <ListItem
            text='Github'
            additionalClass='footer__list-item'
            link='https://github.com/'
          />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
