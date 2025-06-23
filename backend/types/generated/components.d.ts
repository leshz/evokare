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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'mercadopago.customer': MercadopagoCustomer;
      'mercadopago.fulfillment': MercadopagoFulfillment;
      'mercadopago.information': MercadopagoInformation;
      'mercadopago.promotion': MercadopagoPromotion;
    }
  }
}
