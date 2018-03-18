block( 'page-tour' ).replace()( ( node ) => {
  return [
    // {
    //   tag: 'pre',
    //   content: JSON.stringify( node.api, null, 2 ),
    // },
    {
      content: {
        html: `
          <div class="jumbotron img-bg" style="background-image: url('https://nevatrip.ru/assets/img/e/${
            node.api.result.tour.object.uri
          }_bg.jpg');">
             <p>&nbsp;</p>
             <div class="container">
                <div class="alpha-bg">
                   <h1>${node.api.result.tour.object.pagetitle}</h1>
                </div>
             </div>
             <p>&nbsp;</p>
          </div>
          <!-- time_range  -->
          <div class="container">
             <div class="row">
                <div class="col-sm-8">
                   <ul class="fa-ul">
                      <li>
                         <i class="fa-li fa fa-circle text-warning"></i>
                         &nbsp;
                         <span class="lead">
                         <b>Длительность:</b> 1 ч 30 мин
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-circle text-warning"></i>
                         &nbsp;
                         <span class="lead">
                         <b>Расписание:</b> 0:55
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-circle text-warning"></i>
                         &nbsp;
                         <span class="lead">
                         <b>Отправление:</b> <a href="https://yandex.ru/maps/-/CVTA6Npn">и прибытия - Дворцовая наб. 18</a>
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-circle text-warning"></i>
                         &nbsp;
                         <span class="lead">
                         <b>Теплоход:</b> Комфортабельный отапливаемый двухпалубный теплоход с закрытой и открытой палубой класса "Москва"
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-circle text-warning"></i>
                         &nbsp;
                         <span class="lead">
                         <b>Язык экскурсии:</b> <span class="flag-icon flag-icon-ru" title="Русский"></span>&nbsp;
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-circle text-warning"></i>
                         &nbsp;
                         <span class="lead">
                         <b>На борту:</b> <small><span class="fa-stack" title="Туалет" style="margin-left: 0;">
                         <i class="fa fa-square fa-stack-2x text-warning"></i>
                         <i class="fa icon-wc fa-stack-1x"></i>
                         </span><span class="fa-stack" title="Экскурсия" style="margin-left: 0;">
                         <i class="fa fa-square fa-stack-2x text-warning"></i>
                         <i class="fa icon-microphone fa-stack-1x"></i>
                         </span></small>
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-circle text-warning"></i>
                         &nbsp;
                         <span class="lead">
                         <b><a href="night/nochnaya-ekskursiya-pod-razvod-mostov#route">Посмотреть маршрут прогулки</a></b>
                         </span>
                      </li>
                   </ul>
                </div>
                <div class="col-sm-4">
                   <ul class="fa-ul">
                      <li>
                         <i class="fa-li fa fa-circle text-warning"></i>
                         &nbsp;
                         <span class="lead">
                         <b>Скидки:</b> 20% при бронировании онлайн! Есть <button type="button" class="btn-link inner"
                            data-toggle="tooltip"
                            title="Школьники, пенсионеры, инвалиды. Необходимо предъявить подтверждающие документы в кассе."
                            >льготный</button> (690р) и <button type="button" class="btn-link inner"
                            data-toggle="tooltip"
                            title="Дети 3-12 лет или 5-12 лет (см. конкр.экск.). До 3 или 5 - бесплатно без представления отдельного места. Необходимо предъявить подтверждающие документы в кассе.">
                         детский
                         </button>
                         (450р) билет. До 3 лет - бесплатно. Для групп - индив.
                         </span>
                      </li>
                   </ul>
                   <div style="margin-top: 20px;margin-bottom: 34px;">
                      <div class="pull-left">
                         <span class="price">${
                           node.api.result.tour.object.e_price
                         } <i class="fa fa-rub fa-xs"></i></span>
                         <small class="sub-price">не реализуется <i class="fa fa-rub fa-xs"></i> на причале</small>
                      </div>
                      &nbsp;&nbsp;
                      <form action="/buy-tickets" method="POST">
                        <input name="_csrf" value="${ node.data.csrf }">
                        <input name="id" value="${ node.api.result.tour.object.id }">
                        <button href="https://nevatrip.ru/buy-tickets" class="btn btn-warning btn-lg"style="font-size: 20px"style="font-size: 20px">Выбрать дату</button>
                      </form>
                   </div>
                </div>
             </div>
             <hr/>
             <div class="row">
                <div class="col-sm-4 col-sm-push-8">
                   <h3 class="h4">Галерея</h3>
                   <div id="links">
                   </div>
                   <h3 class="h4">Вы увидите:</h3>
                   <ul class="fa-ul">
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Дворцовый мост
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Биржевой мост
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Троицкий мост
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Литейный мост
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Большеохтинский мост
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Медный Всадник
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Кунсткамера
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Адмиралтейство
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Эрмитаж
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Мраморный дворец
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Стрелка Васильевского острова
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Петропавловская крепость
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Летний сад
                         </span>
                      </li>
                      <li>
                         <i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">Смольный Собор</span>
                      </li>
                   </ul>
                   <div class="divider"></div>
                   <h3 class="h4">Незабываемые виды разводных мостов всего за</h3>
                   <div style="margin-top: 10px;margin-bottom: 20px;">
                      <div class="pull-left">
                         <span class="price">750 <i class="fa fa-rub fa-xs"></i></span>
                      </div>
                      &nbsp;&nbsp;
                      <a href="https://nevatrip.ru/buy-tickets?id=27" class="btn btn-warning btn-lg">Купить</a>
                   </div>
                   <hr>
                   <p class="lead hidden-xs">Другие наши экскурсии:</p>
                   <div class="row hidden-xs">
                      <div class="col-sm-12">
                         <a href="/meteors/otkritie-fontanov-v-petergofe" title="Метеор на открытие фонтанов в Петергофе" class="thumbnail">
                            <img src="https://nevatrip.ru/assets/img/e/meteors/otkritie-fontanov-v-petergofe.jpg" srcset="https://nevatrip.ru/assets/img/e/meteors/otkritie-fontanov-v-petergofe_x2.jpg 2x" alt="" class="img-responsive img-rounded"/>
                            <p class="caption lead">Метеор на открытие фонтанов в Петергофе</p>
                         </a>
                      </div>
                      <div class="col-sm-12">
                         <a href="/day/finski-zaliv" title="Прогулка по Неве с выходом в Финский залив" class="thumbnail">
                            <img src="https://nevatrip.ru/assets/img/e/day/finski-zaliv.jpg" srcset="https://nevatrip.ru/assets/img/e/day/finski-zaliv_x2.jpg 2x" alt="" class="img-responsive img-rounded"/>
                            <p class="caption lead">Прогулка по Неве с выходом в Финский залив</p>
                         </a>
                      </div>
                      <div class="col-sm-12">
                         <a href="/night/nochnaya-progulka-pod-razvod-mostov" title="Ночная прогулка на 2-палубном теплоходе" class="thumbnail">
                            <img src="https://nevatrip.ru/assets/img/e/night/nochnaya-progulka-pod-razvod-mostov.jpg" srcset="https://nevatrip.ru/assets/img/e/night/nochnaya-progulka-pod-razvod-mostov_x2.jpg 2x" alt="" class="img-responsive img-rounded"/>
                            <p class="caption lead">Ночная прогулка на 2-палубном теплоходе</p>
                         </a>
                      </div>
                      <div class="col-sm-12">
                         <a href="/day/salut-na-teplohode-9-maya" title="Салют на теплоходе 9 мая" class="thumbnail">
                            <img src="https://nevatrip.ru/assets/img/e/day/salut-na-teplohode-9-maya.jpg" srcset="https://nevatrip.ru/assets/img/e/day/salut-na-teplohode-9-maya_x2.jpg 2x" alt="" class="img-responsive img-rounded"/>
                            <p class="caption lead">Салют на теплоходе 9 мая</p>
                         </a>
                      </div>
                   </div>
                </div>
                <div class="col-sm-8 col-sm-pull-4">
                  <h3 class="h4">Об экскурсии</h3>
                  <div class="lead">
                    ${node.api.result.tour.object.content}
                  </div>
                  <hr class="short"/ id="route">
                  <h3 class="h4">Карта маршрута</h3>
                    {node.api.result.tour.object.e_map}
                  <div class="divider"></div>
                  <div class="well">
                    <h3 class="h4">Совет от организатора</h3>
                    <div class="lead">${node.api.result.tour.object.e_advice}</div>
                  </div>
                </div>
             </div>
          </div>
          <hr/>
          <p class="lead text-center">
             <a href="/">Посмотреть все водные экскурсии по Санкт-Петербургу &rarr;</a>
          </p>
        `,
      },
    },
  ];
} );
