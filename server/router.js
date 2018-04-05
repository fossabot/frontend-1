const UniversalRouter = require( 'universal-router' );

const router = new UniversalRouter(
  {
    path: '',
    name: 'root',
    children: [
      {
        // Главная страница
        path: '',
        name: 'index',
        load: async () => await require( './routes/home' ),
      },
      {
        // Письмо успешно отправлено, заказ оплачен и т. д.
        path: '/thanks',
        name: 'thanks',
        load: async () => await require( './routes/thanks' ),
      },
      {
        // Покупка билета
        path: '/buy-tickets',
        children: [
          {
            // Заказ
            path: '',
            name: 'cart',
            load: async () => await require( './routes/cart' ),
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
        path: '/calendar',
        children: [
          {
            path: '',
            name: 'calendar-all',
            load: async () => await require( './routes/calendar' ),
          },
          {
            path: '/:tour',
            name: 'calendar-tour',
            load: async () => await require( './routes/calendar' ),
          }
        ]
      },
      {
        path: '/api',
        children: [
          {
            path: '/tour/:service/:id',
            children: [
              {
                path: '',
                name: 'api',
                load: async () => await require( './api' ),
              },
              {
                path: '/date',
                name: 'apiTourDate',
                load: async () => await require( './api/date' ),
              },
              {
                path: '/direction',
                name: 'apiTourDirection',
                load: async () => await require( './api/direction' ),
              },
              {
                path: '/pier',
                name: 'apiTourPier',
                load: async () => await require( './api/pier' ),
              },
              {
                path: '/time',
                name: 'apiTourTime',
                load: async () => await require( './api/time' ),
              },
              {
                path: '/tickets',
                name: 'apiTourTicket',
                load: async () => await require( './api/ticket' ),
              },
              {
                path: '/seat',
                name: 'apiTourSeat',
                load: async () => await require( './api/seat' ),
              },
              {
                path: '/order',
                name: 'apiTourOrder',
                load: async () => await require( './api/order' ),
              },
            ]
          }
        ]
      },
      {
        // Разделы
        path: '/:category',
        children: [
          {
            path: '',
            name: 'category',
            load: async () => await require( './routes/category' ),
          },
          {
            // Экскурсия
            path: '/:tour',
            name: 'tour',
            load: async () => await require( './routes/tour' ),
          },
        ],
      },

      {
        path: '*',
        name: '404',
        load: async () => await require( './routes/404' ),
      },
    ],

    async action( { next } ) {
      const route = ( await next() ) || {};
      return route;
    },
  },
  {
    resolveRoute( context, params ) {
      if ( typeof context.route.load === 'function' ) {
        return context.route.load().then( ( action ) => action( context, params ) );
      }
      if ( typeof context.route.action === 'function' ) {
        return context.route.action( context, params );
      }
      return undefined;
  },
} );

module.exports = router;

