import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralBarraDeNavegacion extends Struct.ComponentSchema {
  collectionName: 'components_general_barra_de_navegacions';
  info: {
    displayName: 'Barra de navegacion';
    icon: 'brush';
  };
  attributes: {
    icono: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface GeneralColumna extends Struct.ComponentSchema {
  collectionName: 'components_general_columnas';
  info: {
    displayName: 'Columna';
    icon: 'apps';
  };
  attributes: {
    contenido: Schema.Attribute.Blocks & Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralDerechosDeAutor extends Struct.ComponentSchema {
  collectionName: 'components_general_derechos_de_autors';
  info: {
    displayName: 'Derechos de autor';
    icon: 'user';
  };
  attributes: {
    autor: Schema.Attribute.Blocks;
  };
}

export interface GeneralInvitacion extends Struct.ComponentSchema {
  collectionName: 'components_general_invitacions';
  info: {
    displayName: 'Invitacion';
  };
  attributes: {
    contenido: Schema.Attribute.Blocks;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralPieDePagina extends Struct.ComponentSchema {
  collectionName: 'components_general_pie_de_paginas';
  info: {
    displayName: 'Columnas';
  };
  attributes: {
    autor: Schema.Attribute.Blocks;
    columnas: Schema.Attribute.Component<'general.columna', true>;
    invitacion: Schema.Attribute.Component<'general.invitacion', false>;
  };
}

export interface InicioAcerca extends Struct.ComponentSchema {
  collectionName: 'components_inicio_acercas';
  info: {
    displayName: 'acerca';
  };
  attributes: {
    botones: Schema.Attribute.Component<'shared.accion', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    descripcion: Schema.Attribute.Text;
    destacado: Schema.Attribute.Component<'inicio.destacados', true>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InicioApoyo extends Struct.ComponentSchema {
  collectionName: 'components_inicio_apoyos';
  info: {
    displayName: 'apoyo';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images'>;
    item: Schema.Attribute.Component<'shared.items', true>;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InicioBanner extends Struct.ComponentSchema {
  collectionName: 'components_inicio_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    botones: Schema.Attribute.Component<'shared.accion', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    contenido: Schema.Attribute.String & Schema.Attribute.Required;
    imagen: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InicioDestacados extends Struct.ComponentSchema {
  collectionName: 'components_inicio_destacados';
  info: {
    displayName: 'destacados';
  };
  attributes: {
    dato: Schema.Attribute.String & Schema.Attribute.Required;
    descripcion: Schema.Attribute.String;
  };
}

export interface InicioEntendiendo extends Struct.ComponentSchema {
  collectionName: 'components_inicio_entendiendos';
  info: {
    displayName: 'Entendiendo';
  };
  attributes: {
    punto: Schema.Attribute.Component<'inicio.puntos', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InicioPuntos extends Struct.ComponentSchema {
  collectionName: 'components_inicio_puntos';
  info: {
    displayName: 'puntos';
  };
  attributes: {
    icono: Schema.Attribute.Enumeration<
      ['AlertCircle', 'CloudRain', 'BrainCircuit', 'Heart', 'Zap', 'Shield']
    >;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface InicioSistemaintegral extends Struct.ComponentSchema {
  collectionName: 'components_inicio_sistemaintegrals';
  info: {
    displayName: 'sistemaintegral';
  };
  attributes: {
    contenido: Schema.Attribute.Blocks;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MercadopagoCustomer extends Struct.ComponentSchema {
  collectionName: 'components_mercadopago_customer';
  info: {
    displayName: 'Customer';
    icon: 'emotionHappy';
  };
  attributes: {
    dni: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    last_name: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.BigInteger & Schema.Attribute.Required;
  };
}

export interface MercadopagoFulfillment extends Struct.ComponentSchema {
  collectionName: 'components_mercadopago_fulfillment';
  info: {
    description: '';
    displayName: 'fulfillment';
    icon: 'exit';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    department: Schema.Attribute.String & Schema.Attribute.Required;
    message: Schema.Attribute.Text;
    postal_code: Schema.Attribute.BigInteger;
  };
}

export interface MercadopagoInformation extends Struct.ComponentSchema {
  collectionName: 'components_mercadopago_product_information';
  info: {
    description: '';
    displayName: 'information';
    icon: 'bell';
  };
  attributes: {
    information: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MercadopagoPromotion extends Struct.ComponentSchema {
  collectionName: 'components_mercadopago_promotion';
  info: {
    description: '';
    displayName: 'Promotion';
    icon: 'walk';
  };
  attributes: {
    best_seller: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    discount_tag: Schema.Attribute.String;
    new: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price_with_discount: Schema.Attribute.Integer;
    recommended: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    with_discount: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedAccion extends Struct.ComponentSchema {
  collectionName: 'components_shared_accions';
  info: {
    displayName: 'accion';
  };
  attributes: {
    boton: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    texto: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBannerComp extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_comps';
  info: {
    displayName: 'BannerComp';
  };
  attributes: {
    banners: Schema.Attribute.Component<'inicio.banner', true>;
  };
}

export interface SharedItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    contenido: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.Enumeration<
      [
        'website',
        'article',
        'blog',
        'book',
        'profile',
        'video.movie',
        'video.episode',
        'video.tv_show',
        'video.other',
        'music.song',
        'music.album',
        'music.playlist',
        'music.radio_station',
      ]
    >;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.barra-de-navegacion': GeneralBarraDeNavegacion;
      'general.columna': GeneralColumna;
      'general.derechos-de-autor': GeneralDerechosDeAutor;
      'general.invitacion': GeneralInvitacion;
      'general.pie-de-pagina': GeneralPieDePagina;
      'inicio.acerca': InicioAcerca;
      'inicio.apoyo': InicioApoyo;
      'inicio.banner': InicioBanner;
      'inicio.destacados': InicioDestacados;
      'inicio.entendiendo': InicioEntendiendo;
      'inicio.puntos': InicioPuntos;
      'inicio.sistemaintegral': InicioSistemaintegral;
      'mercadopago.customer': MercadopagoCustomer;
      'mercadopago.fulfillment': MercadopagoFulfillment;
      'mercadopago.information': MercadopagoInformation;
      'mercadopago.promotion': MercadopagoPromotion;
      'shared.accion': SharedAccion;
      'shared.banner-comp': SharedBannerComp;
      'shared.items': SharedItems;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
