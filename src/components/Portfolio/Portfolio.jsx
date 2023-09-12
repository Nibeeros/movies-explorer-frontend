import Title from '../singleComponents/Title/Title';
import ListItem from '../singleComponents/ListItem/ListItem';

import './Portfolio.css';

function Portfolio(props) {
  return (
    <section className='portfolio'>
      <Title text='Портфолио' additionalClass='portfolio__title' />
      <ul className='portfolio__list'>
        <ListItem
          text='Статичный сайт'
          link='https://nibeeros.github.io/how-to-learn/'
          additionalClass='portfolio__list-item'
        />
        <ListItem
          text='Адаптивный сайт'
          link='https://nibeeros.github.io/russian-travel/'
          additionalClass='portfolio__list-item'
        />
        <ListItem
          text='Одностраничное приложение'
          link='https://nibeeros.nomoreparties.co/'
          additionalClass='portfolio__list-item'
        />
      </ul>
    </section>
  );
}

export default Portfolio;
