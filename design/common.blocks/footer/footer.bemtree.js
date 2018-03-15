block( 'footer' ).content()( ( node ) => {
  console.log( node );
  let items = [];
  // if ( node.api && node.api.result ) {
  //   items = Object.keys( node.api.result.structure.object[ 61 ].children ).map( id => {
  //     const resource = node.api.result.structure.object[ 61 ].children[ id ];
  //     return {
  //       block: 'link',
  //       url: resource.alias,
  //       text: resource.pagetitle
  //     };
  //   } );
  // }
  return [
    { elem: 'header' },
    {
      elem: 'content',
      content: {
        block: 'list',
        mods: { of: 'compilation' },
        items: items
      }
    },
    {
      elem: 'content',
      content: {
        html: `
          <div class="row">
            <div class="col-sm-5 text-left">
              <div class="media">
                <div class="media-left">
                  <img class="media-object" src="/assets/img/golden-light.png" width="64" alt="1-е место">
                </div>
                <div class="media-body">
                  <p>Лучшая компания 2014 года всероссийской программы «Ты&nbsp;— предприниматель» в&nbsp;Санкт-Петербурге</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 text-left">
              <div class="media">
                <div class="media-left">
                  <img class="media-object" src="/assets/img/golden-light.png" width="64" alt="1-е место">
                </div>
                <div class="media-body">
                  <p>1 место «Молодой предприниматель России 2015» в номинации «Сфера услуг»</p>
                </div>
              </div>
            </div>
            <div class="col-sm-3 footer__contacts text-right" style="margin-top: 0;">
              <p itemprop="email"><a href="mailto:info@nevatrip.ru" class="footer__link" target="_blank">info@nevatrip.ru</a></p>
              <p itemprop="telephone"><a href="tel:88129653404" class="footer__link">8 812 965-34-04</a></p>
            </div>
          </div>
        `
      }
    },
    {
      elem: 'footer',
      content: {
        elem: 'contacts',
        content: {
          html: `
              <div class="container clearfix">
                <div class="pull-right">
                  <i class="fa fa-2x fa-inverse text-s fa-expeditedssl" title="Secure SSL"></i>
                  <i class="fa fa-2x fa-inverse text-s fa-cc-mastercard" title="MasterCard"></i>
                  <i class="fa fa-2x fa-inverse text-s fa-cc-visa" title="Visa"></i>
                </div>
                <ul class="list-inline">
                  <li>© 2014-2017 Санкт-Петербург, ул Малая Морская 11</li>
                  <li><a href="/#nevatrip" class="footer__link">О нас</a></li>
                  <li><a href="/oferta" class="footer__link">Оферта</a></li>
                  <li><a href="/sotrudnichestvo" class="footer__link">Сотрудничество</a></li>
                  <li><a href="//vk.com/neva.trip" class="footer__link" target="_blank" rel="nofollow"><i class="fa fa-fw fa-vk"></i> Мы в ВКонтакте</a></li>
                  <li><a href="//www.instagram.com/nevatrip.ru/" class="footer__link" target="_blank" rel="nofollow"><i class="fa fa-fw fa-instagram"></i> Instagram</a></li>
                  <li><a href="//moskvatrip.ru" class="footer__link">Прогулки в Москве</a></li>
                </ul>
                <ol class="breadcrumb">
                </ol>
              </div>
          `
        },
      },
    },
  ];
} );
