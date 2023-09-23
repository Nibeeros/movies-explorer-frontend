import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = (props) => {
  const navigate = useNavigate();

  return (
    <main className={`popup`} aria-label='Модальное окно'>
      <section className='not-found'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
        <Link className='not-found__link opacity07' to={navigate(-1)}>
          Назад
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
