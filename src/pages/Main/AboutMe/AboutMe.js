import student from '../../../images/student.jpg';

const AboutMe = () => {
  return (
    <section
      className='student'
      id='student'
      aria-label='Информация о студенте'
    >
      <h2 className='student__heading'>Студент</h2>
      <div className='student__info'>
        <div className='student__text'>
          <h3 className='student__name'>Виталий</h3>
          <p className='student__profession'>Фронтенд-разработчик, 30 лет</p>
          <p className='student__about'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='student__github link opacity07'
            href='https://github.com/Nibeeros'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <div className='student__image'>
          <img
            className='student__pic'
            src={student}
            alt='Фото студента'
          ></img>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
