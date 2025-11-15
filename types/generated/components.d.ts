import type { Attribute, Schema } from '@strapi/strapi';

export interface ElementsCategory extends Schema.Component {
  collectionName: 'components_sections_categories';
  info: {
    description: '';
    displayName: 'Category Card';
  };
  attributes: {
    imgUrl: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementsContactInformation extends Schema.Component {
  collectionName: 'components_elements_contact_informations';
  info: {
    displayName: 'Contact Information';
  };
  attributes: {
    address: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    title: Attribute.String;
    workingHours: Attribute.String;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_sections_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    url: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    displayName: 'Notification banner';
  };
  attributes: {
    heading: Attribute.String;
    link: Attribute.Component<'links.link'>;
    show: Attribute.Boolean;
    text: Attribute.Text;
    type: Attribute.Enumeration<['info', 'alert', 'warning']>;
  };
}

export interface ElementsOrderProductDetails extends Schema.Component {
  collectionName: 'components_elements_order_product_details';
  info: {
    displayName: 'Order Product Details';
  };
  attributes: {
    code: Attribute.String;
    quantity: Attribute.Integer;
  };
}

export interface ElementsText extends Schema.Component {
  collectionName: 'components_sections_texts';
  info: {
    description: '';
    displayName: 'Text';
  };
  attributes: {
    description: Attribute.Text;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    categories: Attribute.Relation<
      'layout.footer',
      'oneToMany',
      'api::category.category'
    >;
    footerLogo: Attribute.Component<'layout.logo'>;
    legalLinks: Attribute.Component<'links.link', true>;
    menuLinks: Attribute.Component<'links.link', true>;
    socialMediaLinks: Attribute.Component<'links.social-media-link'>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logoImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
  };
  attributes: {
    button: Attribute.Component<'links.button-link'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
    navLinks: Attribute.Component<'links.link', true>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    newTab: Attribute.Boolean;
    text: Attribute.String;
    type: Attribute.Enumeration<['cta', 'primary', 'secondary', 'tertiary']>;
    url: Attribute.String;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    newTab: Attribute.Boolean;
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface LinksSocialMediaLink extends Schema.Component {
  collectionName: 'components_links_social_media_links';
  info: {
    displayName: 'Social Media Link';
  };
  attributes: {
    newTab: Attribute.Boolean;
    socialMedia: Attribute.Enumeration<['facebook', 'whatsapp', 'instagram']>;
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    metaDescription: Attribute.Text;
    metaTitle: Attribute.String;
  };
}

export interface SectionsContactForm extends Schema.Component {
  collectionName: 'components_sections_contact_forms';
  info: {
    description: '';
    displayName: 'Contact Form';
  };
  attributes: {
    contactInfo: Attribute.Component<'elements.contact-information'>;
    submitButton: Attribute.Component<'links.button'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    button: Attribute.Component<'links.button-link'>;
    description: Attribute.Text;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

export interface SectionsLocation extends Schema.Component {
  collectionName: 'components_sections_locations';
  info: {
    description: '';
    displayName: 'Location';
  };
  attributes: {
    contactInfo: Attribute.Component<'elements.contact-information'>;
    map: Attribute.Component<'shared.map-embed'>;
  };
}

export interface SectionsProductCategories extends Schema.Component {
  collectionName: 'components_sections_product_categories';
  info: {
    description: '';
    displayName: 'Product Categories';
  };
  attributes: {
    categories: Attribute.Relation<
      'sections.product-categories',
      'oneToMany',
      'api::category.category'
    >;
    heading: Attribute.Component<'elements.text'>;
  };
}

export interface SectionsShowcase extends Schema.Component {
  collectionName: 'components_sections_showcases';
  info: {
    description: '';
    displayName: 'Showcase';
  };
  attributes: {
    heading: Attribute.Component<'elements.text'>;
    products: Attribute.Relation<
      'sections.showcase',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface SharedCarousel extends Schema.Component {
  collectionName: 'components_shared_carousels';
  info: {
    description: '';
    displayName: 'Carousel';
  };
  attributes: {
    products: Attribute.Relation<
      'shared.carousel',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface SharedMapEmbed extends Schema.Component {
  collectionName: 'components_shared_map_embeds';
  info: {
    description: '';
    displayName: 'Map Embed';
  };
  attributes: {
    url: Attribute.Text;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.Required;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.category': ElementsCategory;
      'elements.contact-information': ElementsContactInformation;
      'elements.image': ElementsImage;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.order-product-details': ElementsOrderProductDetails;
      'elements.text': ElementsText;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'links.link': LinksLink;
      'links.social-media-link': LinksSocialMediaLink;
      'meta.metadata': MetaMetadata;
      'sections.contact-form': SectionsContactForm;
      'sections.hero': SectionsHero;
      'sections.location': SectionsLocation;
      'sections.product-categories': SectionsProductCategories;
      'sections.showcase': SectionsShowcase;
      'shared.carousel': SharedCarousel;
      'shared.map-embed': SharedMapEmbed;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
