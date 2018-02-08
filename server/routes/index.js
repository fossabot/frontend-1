module.exports = {
  path: '',
  name: 'root',
  children: [
    { // Главная страница
      path: '',
      name: 'index',
      load: async () => await require('./home')
    },
    { // Письмо успешно отправлено, заказ оплачен и т. д.
      path: '/thanks',
      name: 'thanks',
    },
    { // Покупка билета
      path: '/buy-tickets',
      children: [
        { // Заказ
          path: '',
          name: 'order',
        },
        { // Перенаправление к платёжному шлюзу
          path: 'redirect'
        }
      ]
    },
    { // О проекте
      path: '/about',
      name: 'about'
    },
    { // Партнёрство
      path: '/partnership',
      name: 'partnership'
    },
    { // Разделы
      path: '/:section',
      children: [
        {
          path: '',
          name: 'section'
        },
        { // Экскурсия
          path: '/:trip',
          name: 'trip'
        }
      ]
    },

    {
      path: '(.*)',
      name: '404',
      load: async () => await require('./404')
    }
  ],

  async action( { next } ) {
    const route = await next() || {};
    return route;
  }
};
