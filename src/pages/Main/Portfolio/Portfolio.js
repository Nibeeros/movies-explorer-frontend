const Portfolio = () => {
  return (
    <section className='portfolio' aria-label='Ссылки на другие проекты'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link'>
          <a
            className='link opacity07'
            href='https://nibeeros.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span>&#8599;</span>
          </a>
        </li>
        <li className='portfolio__link'>
          <a
            className='link opacity07'
            href='https://nibeeros.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span>&#8599;</span>
          </a>
        </li>
        <li className='portfolio__link'>
          <a
            className='link  opacity07'
            href='https://nibeeros.nomoreparties.co/'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span>&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
