module.exports = {
  path: '',
  name: 'root',
  children: [
    {
      // Главная страница
      path: '',
      name: 'index',
      load: async () => await require( './home' ),
    },
    {
      // Письмо успешно отправлено, заказ оплачен и т. д.
      path: '/thanks',
      name: 'thanks',
    },
    {
      // Покупка билета
      path: '/buy-tickets',
      children: [
        {
          // Заказ
          path: '',
          name: 'cart',
          load: async () => await require( './cart' ),
        },
        {
          // Перенаправление к платёжному шлюзу
          path: 'redirect',
        },
      ],
    },
    {
      // О проекте
      path: '/about',
      name: 'about',
    },
    {
      // Партнёрство
      path: '/partnership',
      name: 'partnership',
    },
    {
      // Разделы
      path: '/:category',
      children: [
        {
          path: '',
          name: 'category',
          load: async () => await require( './category' ),
        },
        {
          // Экскурсия
          path: '/:tour',
          name: 'tour',
          load: async () => await require( './tour' ),
        },
      ],
    },

    {
      path: '(.*)',
      name: '404',
      load: async () => await require( './404' ),
    },
  ],

  async action( { next } ) {
    const route = ( await next() ) || {};
    return route;
  },
};
