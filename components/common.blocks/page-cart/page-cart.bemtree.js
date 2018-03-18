block( 'page-cart' ).replace()( ( node ) => {
  return [
    {
      tag: 'pre',
      content: JSON.stringify( node.api.result.cart, null, 2 )
    },
    {
      html: `
        <div class="divider"></div>
        <div class="container">
          <h1>Купить билет онлайн</h1>
          <h2 class="h3">
            Экскурсия <a href="http://nevatrip.ru/night/nochnaya-ekskursiya-pod-razvod-mostov">«АКЦИЯ - Экскурсия под развод мостов на 2-палубном теплоходе»</a>
          </h2>
          <form action="https://nevatrip.ru/payment/go" method="post" id="BuyForm">
            <div class="row">
              <div class="col-md-5 col-md-offset-1">
                <hr>
                <input name="trip_id" value="27" type="hidden">
                <input name="sum" value="750" id="BuyFormSum" type="hidden">
                <div class="form-group">
                  <label for="BuyFormTripDate">Выберите дату рейса</label>
                  <div id="BuyFormTripDate" class="input-group date" data-date-format="dd.mm.yyyy" data-date-start-date="22.04.2018" data-date-end-date="14.10.2018" data-date-days-of-week-disabled="[  ]" data-date-dates-disabled="[&quot;23.04.2018&quot;,&quot; 24.04.2018&quot;,&quot; 25.04.2018&quot;,&quot; 26.04.2018&quot;,&quot; 27.04.2018&quot;,&quot; 02.05.2018&quot;,&quot; 10.05.2018&quot;,&quot;13.06.2018&quot;,&quot; 23.06.2018&quot;,&quot;24.06.2018&quot;]">
                    <input name="trip_date" class="form-control" placeholder="дд.мм.гггг" required="" maxlength="10" type="text">
                    <span class="input-group-addon" _vimium-has-onclick-listener=""><i class="fa fa-calendar"></i></span>
                  </div>
                </div>
                <div class="form-group">
                  <label for="trip_time">Время отправления</label>
                  <select name="trip_time" class="form-control">
                    <option value="00:55">00:55</option>
                  </select>
                </div>
                <fieldset class="form-group" id="nevatravel" disabled="" style="display: none">
                  <ul class="nav nav-tabs nav-justified" id="time__select">
                    <li role="presentation" class="active">
                      <a href="#time_open" data-toggle="tab">Открытое время</a>
                    </li>
                    <li role="presentation">
                      <a href="#time_fix" data-toggle="tab">Фиксированное время</a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div role="tabpanel" class="tab-pane  active" id="time_open">
                      <br>
                      <p>Билет будет действовать в течение дня. Начало движения в <span id="time-inline__start"></span>, последний отходит в <span id="time-inline__finish"></span>.</p>
                    </div>
                    <fieldset role="tabpanel" class="tab-pane" id="time_fix" disabled="">
                      <br>
                      <label for="time__type">Время отправления</label>
                      <select name="trip_time" id="trip__time" class="form-control"></select>
                      <input name="trip_points_nevatravel[]" id="program_id" type="hidden">
                      <br>
                      <fieldset id="backtrip" disabled="" style="display: none;">
                        <label for="trip__time_back">Обратное отправление</label>
                        <select name="trip_time_back" id="trip__time_back" class="form-control"></select>
                        <input name="trip_points_nevatravel[]" id="program_id_back" type="hidden">
                      </fieldset>
                    </fieldset>
                  </div>
                </fieldset>
                <div class="form-group" id="BuyFormMainTickets">
                  <label>Билеты</label>
                  <div class="row">
                    <div class="col-sm-7">
                      <label class="h5">
                      <span class="text-primary">
                      Взрослый,
                      <span class="buy-form-ticket-price" data-ticket-price="750">750</span> <i class="fa fa-rub"></i>
                      </span>
                      </label>
                    </div>
                    <div class="col-sm-5">
                      <input name="tickets[ticket_1_adult][price]" value="750" class="form-control text-center buy-form-ticket-input" data-ticket-price="750" type="hidden">
                      <div class="input-group">
                        <span class="input-group-addon buy-form-ticket-minus" _vimium-has-onclick-listener=""><i class="fa fa-minus"></i></span>
                        <input name="tickets[ticket_1_adult][c]" value="1" class="form-control text-center buy-form-ticket" data-ticket-price="750" data-ticket-type="adult" style="z-index: 0;" type="text">
                        <span class="input-group-addon buy-form-ticket-plus" _vimium-has-onclick-listener=""><i class="fa fa-plus"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-7">
                      <label class="h5">
                      <span class="text-primary">
                      Льготный,
                      <span class="buy-form-ticket-price" data-ticket-price="690">690</span> <i class="fa fa-rub"></i>
                      </span>
                      <button type="button" class="btn-link" title="" data-toggle="popover" data-content="Школьники, пенсионеры, инвалиды. Необходимо предъявить подтверждающие документы в кассе." data-placement="top" _vimium-has-onclick-listener="" data-original-title="Льготный билет">
                      <i class="fa fa-question-circle"></i>
                      </button>
                      </label>
                    </div>
                    <div class="col-sm-5">
                      <input name="tickets[ticket_1_discount][price]" value="690" class="form-control text-center buy-form-ticket-input" data-ticket-price="690" type="hidden">
                      <div class="input-group">
                        <span class="input-group-addon buy-form-ticket-minus" _vimium-has-onclick-listener=""><i class="fa fa-minus"></i></span>
                        <input name="tickets[ticket_1_discount][c]" value="0" class="form-control text-center buy-form-ticket" data-ticket-price="690" data-ticket-type="discount" style="z-index: 0;" type="text">
                        <span class="input-group-addon buy-form-ticket-plus" _vimium-has-onclick-listener=""><i class="fa fa-plus"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-7">
                      <label class="h5">
                      <span class="text-primary">
                      Детский,
                      <span class="buy-form-ticket-price" data-ticket-price="450">450</span> <i class="fa fa-rub"></i>
                      </span>
                      <button type="button" class="btn-link" title="" data-toggle="popover" data-content="Дети 3-12 лет или 4-7 лет (для Акция-Метеор в Петергоф) . До 3 - бесплатно без представления отдельного места. Необходимо предъявить подтверждающие документы в кассе." data-placement="top" _vimium-has-onclick-listener="" data-original-title="Детский билет">
                      <i class="fa fa-question-circle"></i>
                      </button>
                      </label>
                    </div>
                    <div class="col-sm-5">
                      <input name="tickets[ticket_1_child][price]" value="450" class="form-control text-center buy-form-ticket-input" data-ticket-price="450" type="hidden">
                      <div class="input-group">
                        <span class="input-group-addon buy-form-ticket-minus" _vimium-has-onclick-listener=""><i class="fa fa-minus"></i></span>
                        <input name="tickets[ticket_1_child][c]" value="0" class="form-control text-center buy-form-ticket" data-ticket-price="450" data-ticket-type="child" style="z-index: 0;" type="text">
                        <span class="input-group-addon buy-form-ticket-plus" _vimium-has-onclick-listener=""><i class="fa fa-plus"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <script type="text/javascript" async="" src="https://top-fwz1.mail.ru/js/code.js"></script><script async="" src="//www.google-analytics.com/analytics.js"></script><script type="text/javascript" async="" src="https://mc.yandex.ru/metrika/watch.js"></script><script src="/assets/js/form.js"></script><script>
                  var ticketPriceDouble = '';
                </script>
                <div class="well">
                  <i class="fa fa-2x fa-cc-mastercard"></i> <i class="fa fa-2x fa-cc-visa"></i><br>
                  Наш сайт использует защищенное соединение согласно рекомендациям международных платёжных систем.
                </div>
              </div>
              <div class="col-md-5">
                <hr>
                <div class="form-group">
                  <label for="order_email">E-mail</label>
                  <input name="cps_email" class="form-control" required="" maxlength="100" type="email">
                </div>
                <div class="form-group">
                  <label for="order_fullname">Фамилия Имя</label>
                  <input name="fullname" class="form-control" maxlength="255" type="text">
                </div>
                <div class="form-group">
                  <label for="order_phone">Номер мобильного телефона</label>
                  <input pattern="" placeholder="В формате +79ХХХХХХХХХ" name="cps_phone" class="form-control" required="" maxlength="15" type="tel">
                </div>
                <div class="form-group">
                  <label for="order_phone">Вариант оплаты</label>
                  <div>
                    <div class="radio">
                      <label>
                      <input name="paymentType" value="AC" checked="" type="radio">
                      <i class="fa fa-credit-card"></i> <b>Банковской картой</b>
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                      <input name="paymentType" value="PC" type="radio">
                      <i class="fa fa-yahoo"></i> Из кошелька в <b>Яндекс.Деньгах</b>
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                      <input name="paymentType" value="GP" type="radio">
                      <i class="fa fa-money"></i> <b>Наличными</b> через Сбербанк, Связной и&nbsp;терминалы
                      </label>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="order_phone">Промокод (если есть)</label>
                  <input id="BuyFormPromocode" name="promocode" class="form-control" maxlength="255" type="text">
                </div>
                <script>
                  var p = {"маша":"10","велохостел":"100","твой друг":"10","байк":"2","байк2":"2","династия":"2","спасибо":"5","династия":"2","группа":"7","офис303":"100"};
                </script>
                <div class="form-group" id="BuyFormTotal" style="display: block;">
                  <span class="h4">Итого к оплате:</span>
                  <span class="h4 text-primary"><span id="BuyFormShowSum">750</span> <i class="fa fa-rub"></i></span>
                </div>
                <p id="BuyFormCountError" class="text-center text-danger lead" style="display: none;">
                  <i class="fa fa-exclamation"></i> Выберите хотя бы один билет.
                </p>
                <label class="checkbox" style="padding-left: 20px;">
                <input required="" type="checkbox">
                Я согласен(на) с <a href="https://nevatrip.ru/oferta" target="_blank">пользовательским соглашением</a> и даю своё согласие на обработку моих персональных данных.
                </label>
                <div class="form-group text-center">
                  <button class="btn btn-warning btn-lg" id="BuyFormSubmit" onsubmit="yaCounter28914540.reachGoal ('PerehodkOplate'); return true;">Перейти к оплате</button>
                </div>
              </div>
              <div class="col-md-10 col-md-offset-1">
                <hr>
                <p>
                  Оплата билетов осуществляется через сервис Яндекс.Касса. Это современный и абсолютно безопасный метод. Контактные данные конфиденциальны и используются только для связи по данной прогулке.
                </p>
                <p>
                  Вы можете осуществить покупку без комиссии любым удобным вам способом внесения платежа.
                  Обратите внимание, что Выбор оплаты наличными не бронирует для вас места, они будут забронированы только после осуществления оплаты. При оплате наличными через Связной, Евросеть и Сбербанк комиссия 0%.
                </p>
                <p>
                  Осуществление оплаты означает Ваше согласие <a href="https://nevatrip.ru/oferta" target="_blank">с правилами покупки билета</a>. Возврат билетов по инициативе клиентов более, чем за 24 часа - комиссия платежной системы 5% от суммы заказа и 25 рублей за банковский перевод при возврате,  менее 24 часов - 50% от стоимости билетов и 25 рублей, менее 12 часов - 100%.
                </p>
                <p>
                  После оплаты нажмите "Вернуться в магазин". Вы будете перенаправлены на страницу с вашим номером билета. Пожалуйста, запишите его.
                  Ваш электронный билет также будет отправлен вам на электронную почту, которую вы укажете на данной странице. По этому билету вы сможете осуществить посадку на теплоход.
                </p>
                <p>
                  Если у вас возникли вопросы по покупке билета, пожалуйста, позвоните в нашу круглосуточную службу поддержки и мы обязательно поможем Вам.
                </p>
              </div>
            </div>
          </form>
        </div>

      `,
    },
  ];
} );
