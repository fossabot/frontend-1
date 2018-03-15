block( 'page' )(
  def()( ( node ) => {
    return {
      ...applyNext(),
      styles: [
        {
          elem: 'css',
          url: '/assets/calendar/css/kendo.common.min.css',
        },
        {
          elem: 'css',
          url: '/assets/calendar/css/kendo.default.min.css',
        },
        {
          elem: 'css',
          url: '/assets/calendar/css/kendo.default.mobile.min.css',
        },
        {
          elem: 'css',
          url: '/assets/calendar/css/kendo.rtl.min.css',
        },
        {
          elem: 'css',
          content: `
            .trip-template {
              padding: 5px;
            }

            .k-scheduler-edit-form .k-edit-label {
              width: 30%;
            }

            .k-scheduler-edit-form .k-edit-field {
              width: 64%;
            }

            .k-autocomplete,
            .k-colorpicker,
            .k-combobox,
            .k-datepicker,
            .k-datetimepicker,
            .k-dropdown,
            .k-listbox,
            .k-numerictextbox,
            .k-selectbox,
            .k-textbox,
            .k-timepicker,
            .k-toolbar .k-split-button {
              width: 100%;
            }
          `
        }
      ],
      scripts: [
        {
          elem: 'js',
          url: '/assets/calendar/js/jquery.min.js'
        },
        {
          elem: 'js',
          url: '/assets/calendar/js/jszip.min.js'
        },
        {
          elem: 'js',
          url: '/assets/calendar/js/kendo.all.min.js'
        },
        {
          elem: 'js',
          url: '/assets/calendar/js/cultures/kendo.culture.ru-RU.min.js'
        },
        {
          elem: 'js',
          url: '/assets/calendar/js/messages/kendo.messages.ru-RU.min.js'
        },
        {
          tag: 'script',
          attrs: {
            id: 'event-template',
            type: 'text/x-kendo-template',
          },
          content: {
            html: `
              <div class="trip-template">
                #: kendo.toString(start, "hh:mm") # - #: kendo.toString(end, "hh:mm") # | #: title #
              </div>
            `
          }
        },
        {
          tag: 'script',
          attrs: {
            id: 'customEditorTemplate',
            type: 'text/x-kendo-template',
          },
          content: {
            html: `
              <div class="container">
                <div class="k-edit-label"><label for="title">Название рейса</label></div>
                <div data-container-for="title" class="k-edit-field">
                  <textarea name="title" class="k-textbox" data-bind="value:title" required="required"></textarea>
                </div>
                <div class="k-edit-label"><label for="isAllDay">Весь день</label></div>
                <div data-container-for="isAllDay" class="k-edit-field">
                  <input type="checkbox" name="isAllDay" data-type="boolean" data-bind="checked:isAllDay">
                </div>
                <div class="k-edit-label"><label for="start">Начало</label></div>
                <div data-container-for="start" class="k-edit-field">
                  <input type="text"
                    data-role="datetimepicker"
                    data-interval="15"
                    data-type="date"
                    data-bind="value:start,invisible:isAllDay"
                    name="start"/>
                  <input type="text" data-type="date" data-role="datepicker" data-bind="value:start,visible:isAllDay" name="start" />
                  <span data-bind="text: startTimezone"></span>
                  <span data-for="start" class="k-invalid-msg" style="display: none;"></span>
                </div>
                <div class="k-edit-label"><label for="end">Конец</label></div>
                <div data-container-for="end" class="k-edit-field">
                  <input type="text" data-type="date" data-role="datetimepicker" data-bind="value:end,invisible:isAllDay" name="end" data-datecompare-msg="End date should be greater than or equal to the start date" />
                  <input type="text" data-type="date" data-role="datepicker" data-bind="value:end,visible:isAllDay" name="end" data-datecompare-msg="End date should be greater than or equal to the start date" />
                  <span data-bind="text: endTimezone"></span>
                  <span data-bind="text: startTimezone, invisible: endTimezone"></span>
                  <span data-for="end" class="k-invalid-msg" style="display: none;"></span>
                </div>
                <div class="k-edit-label"><label for="buyTime">Прекратить продажу</label></div>
                <div data-container-for="buyTime" class="k-edit-field">
                  <input type="text"
                    data-role="datetimepicker"
                    data-interval="15"
                    data-type="date"
                    data-bind="value:buyTime,invisible:isAllDay"
                    name="buyTime"/>
                  <input type="text" data-type="date" data-role="datepicker" data-bind="value:buyTime,visible:isAllDay" name="buyTime" />
                  <span data-bind="text: startTimezone"></span>
                  <span data-for="buyTime" class="k-invalid-msg" style="display: none;"></span>
                </div>
                <div class="k-edit-label"><label for="recurrenceRule">Повторять</label></div>
                <div data-container-for="recurrenceRule" class="k-edit-field">
                  <div data-bind="value:recurrenceRule" name="recurrenceRule" data-role="recurrenceeditor"></div>
                </div>
                <div class="k-edit-label"><label for="ticketType">Тип времени</label></div>
                <div data-container-for="ticketType" class="k-edit-field">
                  <select id="ticketType" data-bind="value:ticketType" data-source="{transport: {read: getTicketType}}" data-role="dropdownlist" data-value-field="value" data-text-field="text"></select>
                </div>
                <div class="k-edit-label"><label for="pierStartId">Причал отправления</label></div>
                <div data-container-for="pierStartId" class="k-edit-field">
                  <select id="pierStartId" data-bind="value:pierStartId" data-role="dropdownlist"></select>
                </div>
                <div class="k-edit-label"><label for="pierFinishId">Причал прибытия</label></div>
                <div data-container-for="pierFinishId" class="k-edit-field">
                  <select id="pierFinishId" data-bind="value:pierFinishId" data-role="dropdownlist"></select>
                </div>
                <div class="k-edit-label"><label for="mapUrl">Карта маршрута</label></div>
                <div data-container-for="mapUrl" class="k-edit-field">
                  <input type="text" class="k-input k-textbox" name="mapUrl" data-bind="value:mapUrl">
                </div>
                <div class="k-edit-label"><label for="tripDirection">Направление</label></div>
                <div data-container-for="tripDirection" class="k-edit-field">
                  <input type="text" class="k-input k-textbox" name="tripDirection" data-bind="value:tripDirection">
                </div>
                <div class="k-edit-label"><label for="vehicleId">Транспортное средство</label></div>
                <div data-container-for="vehicleId" class="k-edit-field">
                  <select id="vehicleId" data-bind="value:vehicleId" data-role="dropdownlist"></select>
                </div>
                <div class="k-edit-label"><label for="vehicleFeaturesArray">На борту</label></div>
                <div data-container-for="vehicleFeaturesArray" class="k-edit-field">
                  <select id="vehicleFeaturesArray" data-bind="value:vehicleFeaturesArray" data-source="{transport: {read: getVehicleFeature}}" data-role="multiselect" multiple="multiple" data-value-field="value" data-text-field="text"></select>
                </div>
                <div class="k-edit-label"><label for="sightArray">Достопримечательности</label></div>
                <div data-container-for="sightArray" class="k-edit-field">
                  <select id="sightArray" data-bind="value:sightArray" multiple="multiple"></select>
                </div>
                <div class="k-edit-label"><label for="langArray">Язык экскурсии</label></div>
                <div data-container-for="langArray" class="k-edit-field">
                  <select id="langArray" data-bind="value:langArray" data-source="{transport: {read: getLang}}" data-role="multiselect" multiple="multiple" data-value-field="value" data-text-field="text"></select>
                </div>
                <div class="k-edit-label"><label for="tipBuy">Совет при покупке</label></div>
                <div data-container-for="tipBuy" class="k-edit-field">
                  <textarea name="tipBuy" class="k-textbox" data-bind="value:tipBuy" required="required"></textarea>
                </div>
                <div class="k-edit-label"><label for="tipTicket">Совет в билете</label></div>
                <div data-container-for="tipTicket" class="k-edit-field">
                  <textarea name="tipTicket" class="k-textbox" data-bind="value:tipTicket" required="required"></textarea>
                </div>
                <div class="k-edit-label"><label for="tagArray">Теги</label></div>
                <div data-container-for="tagArray" class="k-edit-field">
                  <select id="tagArray" data-bind="value:tagArray" data-source="{transport: {read: getTag}}" data-role="multiselect" multiple="multiple" data-value-field="value" data-text-field="text"></select>
                </div>
                <div class="k-edit-label"><label for="ticketPrint">Билет нужно распечатать</label></div>
                <div data-container-for="ticketPrint" class="k-edit-field">
                  <input type="checkbox" name="ticketPrint" data-type="boolean" data-bind="checked:ticketPrint">
                </div>
                <div class="k-edit-label"><label for="description">Описание</label></div>
                <div data-container-for="description" class="k-edit-field">
                  <textarea name="description" class="k-textbox" data-bind="value:description" rows="6"></textarea>
                </div>
                <div class="k-edit-label"><label for="count">Количество билетов</label></div>
                <div data-container-for="count" class="k-edit-field">
                  <input name="count" class="k-textbox" data-bind="value:count">
                </div>
              </div>
              <hr>
              <div class="container">
                <h3>Билеты</h3>
                <div id="grid-ticket"></div>
              </div>
              <hr>
              <div class="container">
                <h3>Доп. услуги</h3>
                <div id="grid-additional"></div>
              </div>
            `
          }
        },
        {
          tag: 'script',
          content: {
            html: `
              /*
               * Tour
               ************
              ${ JSON.stringify( node.api.result.tour.object, null, 2 ) }
              */

              // Получаем список языков
              const getLang = request => {
                request.success( [
                  { text: "русский", value: 1, color: "#108020" },
                  { text: "английский", value: 2, color: "#30A0F0" },
                  { text: "китайский", value: 3, color: "#F050A0" }
                ] );
              }

              // Получаем список тегов
              const getTag = request => {
                request.success( [
                  { text: "Тег #1", value: 1 },
                  { text: "Тег #2", value: 2 },
                  { text: "Тег #3", value: 3 }
                ] )
              }

              // Получаем список услуг транспортного средства
              const getVehicleFeature = request => {
                request.success( [
                  { text: "Бар", value: 1 },
                  { text: "Туалет", value: 2 },
                  { text: "Низкоорбитальная бластерная пушка", value: 3 }
                ] )
              }

              // Получаем список типов билетов
              const getTicketType = request => {
                request.success( [
                  { text: "Открытое", value: 1 },
                  { text: "Закрытое", value: 2 },
                  { text: "Гибридное", value: 3 },
                  { text: "С открытой датой", value: 4 },
                ] )
              }

              // Сюда передаём данные экскурсии — они будут подставляться в значения
              // по умолчанию для дальнейшего переопределения
              const tour = {
                name: "${ node.api.result.tour.object.longtitle }",
                description: 'Описание экскурсии',
                ticketType: 3,
                pierStartId: 2,
                pierFinishId: 1,
                mapUrl: 'https://maps.yandex.ru/23784659356',
                tripDirection: 'Москва — Петушки',
                vehicleId: 1,
                vehicleFeaturesArray: [ 2 ],
                sightArray: [ 1 ],
                langArray: [ 2 ],
                tipBuy: 'Купите этот билет',
                tipTicket: 'Распечатайте этот билет',
                buyTime: null,
                tagArray: [ 2, 3 ],
                ticketPrint: true,
                count: 100,
              }

              $(function() {
                kendo.culture("ru-RU");

                $("#scheduler").kendoScheduler({
                  date: new Date(),
                  startTime: new Date(),
                  height: 900,
                  eventTemplate: $("#event-template").html(),
                  editable: {
                    template: $("#customEditorTemplate").html(),
                  },
                  edit: function(e) {
                    e.event.set("isAllDay", false);

                    $("#pierStartId, #pierFinishId").kendoDropDownList({
                        dataTextField: "text",
                        dataValueField: "value",
                        dataSource: {
                          batch: true,
                          schema: {
                            type: "json",
                            data: "object",
                            model: {
                              id: "value",
                              fields: {
                                value: { field: "value", type: "number" },
                                text: { field: "text", type: "string" },
                              }
                            }
                          },
                          transport: {
                            read: {
                              url: "https://9836511c-0527-4059-ac18-7966ba3f6793.mock.pstmn.io/fake/pier/",
                              data: {
                                page: 1,
                                perPage: 0,
                                lang: "ru",
                              }
                            }
                          }
                        }
                    });

                    $("#vehicleId").kendoDropDownList({
                        dataTextField: "text",
                        dataValueField: "value",
                        dataSource: {
                          batch: true,
                          schema: {
                            type: "json",
                            data: "object",
                            model: {
                              id: "value",
                              fields: {
                                value: { field: "value", type: "number" },
                                text: { field: "text", type: "string" },
                              }
                            }
                          },
                          transport: {
                            read: {
                              url: "https://9836511c-0527-4059-ac18-7966ba3f6793.mock.pstmn.io/fake/vehicle/",
                              data: {
                                page: 1,
                                perPage: 0,
                                lang: "ru",
                              }
                            }
                          }
                        }
                    });

                    $("#sightArray").kendoMultiSelect({
                        dataTextField: "text",
                        dataValueField: "value",
                        dataSource: {
                          batch: true,
                          schema: {
                            type: "json",
                            data: "object",
                            model: {
                              id: "value",
                              fields: {
                                value: { field: "value", type: "number" },
                                text: { field: "text", type: "string" },
                              }
                            }
                          },
                          transport: {
                            read: {
                              url: "https://9836511c-0527-4059-ac18-7966ba3f6793.mock.pstmn.io/fake/sight/",
                              data: {
                                page: 1,
                                perPage: 0,
                                lang: "ru",
                              }
                            }
                          }
                        }
                    });

                    let event = JSON.stringify( e.event );

                    $('#grid-ticket').kendoGrid({
                      dataSource: new kendo.data.DataSource({
                        pageSize: 6,
                        data: e.event.tickets,
                        autoSync: true,
                        schema: {
                          model: {
                            id: "productID",
                            fields: {
                              productID: { editable: false, nullable: true },
                              productName: { defaultValue: "Взрослый", validation: { required: true } },
                              description: { defaultValue: "" },
                              price: { type: "number", validation: { required: true, min: 0 } },
                              buyed: { editable: false, type: "number", validation: { min: 0 } },
                            }
                          }
                        }
                      }),
                      pageable: false,
                      // height: 550,
                      toolbar: ["create"],
                      columns: [
                        { field:"productName",title:"Билет" },
                        // { field: "description", title: "Описание" },
                        { field: "price", title:"Стоимость", format: "{0:c}" },
                        { field: "buyed", title:"Продано" },
                        { command: "destroy", title: " " }],
                      editable: true
                    });

                    $('#grid-additional').kendoGrid({
                      dataSource: new kendo.data.DataSource({
                        pageSize: 6,
                        data: e.event.additional,
                        autoSync: true,
                        schema: {
                          model: {
                            id: "productID",
                            fields: {
                              productID: { editable: false, nullable: true },
                              productName: { defaultValue: "Товар", validation: { required: true } },
                              description: { defaultValue: "" },
                              price: { type: "number", validation: { required: true, min: 0 } }
                            }
                          }
                        }
                      }),
                      pageable: false,
                      // height: 550,
                      toolbar: ["create"],
                      columns: [
                        { field:"productName",title:"Билет" },
                        // { field: "description", title: "Описание" },
                        { field: "price", title:"Стоимость", format: "{0:c}" },
                        { command: "destroy", title: " " }],
                      editable: true
                    });
                  },
                  save: function(e) {
                    let tickets = $('#grid-ticket').data("kendoGrid").dataSource.data();
                    let additional = $('#grid-additional').data("kendoGrid").dataSource.data();
                    e.event.tickets = tickets;
                    e.event.additional = additional;
                  },
                  views: [
                    "day",
                    "week",
                    { type: "month", selected: true },
                    "agenda"
                  ],
                  timezone: "Etc/UTC",
                  dataSource: {
                    batch: true,
                    transport: {
                      read: {
                        url: "https://nevatrip.dev.compaero.ru/rest/tour/${ node.api.result.tour.object.id }/trip/getlist",
                        // url: "https://9836511c-0527-4059-ac18-7966ba3f6793.mock.pstmn.io/fake/tour/${ node.api.result.tour.object.id }/trip/getlist",
                        dataType: "json"
                      },
                      update: {
                        url: "https://nevatrip.dev.compaero.ru/rest/tour/${ node.api.result.tour.object.id }/trip/update",
                        dataType: "json"
                      },
                      create: {
                        url: "https://nevatrip.dev.compaero.ru/rest/tour/${ node.api.result.tour.object.id }/trip/create",
                        dataType: "json"
                      },
                      destroy: {
                        url: "https://nevatrip.dev.compaero.ru/rest/tour/${ node.api.result.tour.object.id }/trip/delete",
                        dataType: "json"
                      },
                      parameterMap: function(options, operation) {
                        if (operation !== "read" && options.models) {
                          return {models: kendo.stringify(options.models)};
                        }
                      }
                    },
                    schema: {
                      data: "object",
                      total: "total",
                      model: {
                        id: "taskId",
                        fields: {
                          // ID рейса
                          taskId: { from: "id", type: "number" },
                          // ID экскурсии
                          tourId: { from: "parent", type: "number", defaultValue: ${ node.api.result.tour.object.id } },
                          // Название экскурсии
                          title: { from: "pagetitle", defaultValue: tour.name, validation: { required: true } },
                          // Начало рейса
                          start: { from: "tv_tripDateTimeStart", type: "date" },
                          // Окончание рейса
                          end: { type: "date", from: "tv_tripDateTimeEnd" },
                          // Рейс длится весь день
                          isAllDay: { type: "boolean", from: "tv_isAllDay" },
                          // Повторение
                          recurrenceId: { from: "tv_recurrenceID" },
                          // Правило повторения
                          recurrenceRule: { from: "tv_recurrenceRule" },
                          // Исключение
                          recurrenceException: { from: "tv_recurrenceException" },
                          // В каком часовом поясе начинается рейс
                          startTimezone: { from: "tv_startTimezone" },
                          // В каком часовом поясе оканчивается рейс
                          endTimezone: { from: "tv_endTimezone" },
                          // Описание экскурсии
                          description: { from: "description", defaultValue: tour.description },
                          // Причал отправления
                          pierStartId: { from: "tv_pierStartId", defaultValue: tour.pierStartId },
                          // Причал прибытия
                          pierFinishId: { from: "tv_pierFinishId", defaultValue: tour.pierFinishId },
                          // Тип билета: открытое время, точное время, гибрид, открытая дата
                          ticketType: { from: "tv_ticketType", defaultValue: tour.ticketType },
                          // Ссылка на схему маршрута
                          mapUrl: { from: "tv_mapURL", defaultValue: tour.mapUrl },
                          // Направление
                          tripDirection: { from: "tv_tripDirection", defaultValue: tour.tripDirection },
                          // ID транспортного средства
                          vehicleId: { from: "tv_vehicleId", defaultValue: tour.vehicleId },
                          // Что есть на борту транспортного средства
                          vehicleFeaturesArray: { from: "tv_vehicleFeaturesArray", defaultValue: tour.vehicleFeaturesArray },
                          // Достопримечательности
                          sightArray: { from: "tv_sightArray", defaultValue: tour.sightArray },
                          // Языки экскурсии
                          langArray: { from: "tv_langArray", defaultValue: tour.langArray },
                          // Совет при покупке
                          tipBuy: { from: "tv_tipBuy", defaultValue: tour.tipBuy },
                          // Совет в билете
                          tipTicket: { from: "tv_tipTicket", defaultValue: tour.tipTicket },
                          // Время прекращения продажи билета
                          buyTime: { from: "tv_buyTime", defaultValue: tour.buyTime },
                          // Теги
                          tagArray: { from: "tv_tags", defaultValue: tour.tagArray },
                          // Билет нужно распечатать
                          ticketPrint: { from: "tv_ticketPrint", defaultValue: tour.ticketPrint },
                          // Количество билетов на продажу
                          count: { from: "tv_ticketCount", defaultValue: tour.count },
                          // Билеты
                          tickets: { from: "tv_tickets" },
                          // Доп. услуги
                          additional: { from: "tv_additional" },
                        }
                      }
                    },
                  }
                });

                function fitWidget() {
                  var widget = $("#scheduler").data("kendoScheduler");
                  var height = $(window).outerHeight();

                  //size widget to take the whole view
                  widget.element.height(height);
                  widget.resize(true);
                }

                $(window).resize(function() {
                  clearTimeout(window._resizeId);
                  window._resizeId = setTimeout(function() {
                    fitWidget();
                  }, 500);
                });

                fitWidget();
              });
            `
          }
        },
      ],
      content: {
        html: `
          <div id="scheduler"></div>
        `
      }
    }
  } )
);
