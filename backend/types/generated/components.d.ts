import type { Schema, Struct } from '@strapi/strapi';

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
    ogType: Schema.Attribute.String;
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
      'mercadopago.customer': MercadopagoCustomer;
      'mercadopago.fulfillment': MercadopagoFulfillment;
      'mercadopago.information': MercadopagoInformation;
      'mercadopago.promotion': MercadopagoPromotion;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
