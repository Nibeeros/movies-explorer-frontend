const Footer = () => {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__bottom'>
        <p className='footer__copyrights'>&#169; {new Date().getFullYear()}</p>
        <ul className='footer__links'>
          <li className='footer__link'>
            <a
              className='link opacity07'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link'>
            <a
              className='link opacity07'
              href='https://github.com/Nibeeros'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
