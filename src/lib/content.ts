/**
 * Centralized website content - strings, image paths, and configuration.
 * Components import from here to stay purely presentational.
 */

// =============================================================================
// SITE
// =============================================================================

export const SITE = {
  name: "Blue Fin Engineering Enterprises",
  tagline: "Material Handling & Assembly Solutions",
  description: "Leading Manufacturers Of Material Handling & Assembly Solutions",
  foundedYear: "2015",
} as const;

// =============================================================================
// HERO
// =============================================================================

export const HERO = {
  headline: "Leading Manufacturers Of",
  headlineAccent: "Material Handling",
  headlineSuffix: "& Assembly Solutions",
  subheadline:
    "Precision-engineered solutions for industrial automation, material handling systems, and assembly line excellence.",
  ctaPrimary: "Get Quote",
  ctaSecondary: "View Products",
  ctaPrimaryHref: "/contact",
  ctaSecondaryHref: "/#products",
  image: {
    src: "https://onepullwire.com/wp-content/uploads/2020/10/try-again-1-3.png",
    alt: "Industrial material handling and assembly solutions",
  },
} as const;

// =============================================================================
// ABOUT
// =============================================================================

export const ABOUT = {
  title: "About Our Company",
  paragraph1:
    "Blue Fin is a South wide distribution company engaged in providing Material Handling, assembly solutions through its innovative products. We are regarded as highly responsive to our customer's needs with strong supply chain system. Together it achieves complete customer satisfaction.",
  paragraph2:
    "Founded in Year 2015 as South India representatives to One Roof Solution today our application Engineers are present in all major industrial regions in the South India & we are strategically adding new technologies to our business.",
  image: {
    src: "/images/about.png",
    alt: "About",
  },
} as const;

// =============================================================================
// FEATURES (Services highlights)
// =============================================================================

export const FEATURES = {
  eyebrow: "What We Offer",
  title: "Our Core Strengths",
  items: [
    { id: 1, title: "Innovative Products", description: "Cutting-edge solutions built for industrial excellence.", iconKey: "gem" },
    { id: 2, title: "Team Of Experts", description: "Skilled engineers dedicated to your success.", iconKey: "users" },
    { id: 3, title: "Strong Supply Chain", description: "Reliable delivery across South India and beyond.", iconKey: "truck" },
  ],
} as const;

// =============================================================================
// PRODUCTS (Homepage products grid)
// =============================================================================

export const PRODUCTS = {
  title: "Our Range Of Products",
  images: [
    "product1.png",
    "product2.png",
    "product4.png",
    "product5.png",
    "product9.png",
    "product11.png",
  ],
  imagesBasePath: "/images/products",
} as const;

// =============================================================================
// WHY CHOOSE US
// =============================================================================

export const WHY_CHOOSE_US = {
  title: "Why Choose Us",
  items: [
    {
      title: "Expert Team",
      description: "We have the most experienced team of experts in the industry.",
      iconKey: "hardHat",
    },
    {
      title: "Competitive Price",
      description: "We offer competitive pricing in the market.",
      iconKey: "banknote",
    },
    {
      title: "Trusted Supplier",
      description: "We are well known in the market for our Quality Products.",
      iconKey: "userCheck",
    },
    {
      title: "Fast Feature Delivery",
      description: "We have a strong supply chain to deliver across Globe.",
      iconKey: "timer",
    },
  ],
} as const;

// =============================================================================
// TESTIMONIALS / CLIENTS
// =============================================================================

export const CLIENTS = {
  eyebrow: "Our Happy Clients",
  title: "Our Valuable",
  titleAccent: "Clients",
  images: [
    "cl.png",
    "cl1.png",
    "cl2.png",
    "cl3.png",
    "cl4.png",
    "cl5.png",
    "cl6.png",
    "cl7.png",
    "cl8.png",
    "cl9.png",
    "cl10.png",
    "cl11.png",
    "cl12.png",
    "cl13.png",
    "cl14.png",
    "cl15.png",
    "cl16.png",
    "cl17.png",
    "cl18.png",
  ],
  imagesBasePath: "/images/clients",
} as const;

// =============================================================================
// CTA
// =============================================================================

export const CTA = {
  title: "Have a Query? Talk To Us",
  primary: {
    text: "Enquiry Now!",
    href: "/contact",
  },
  whatsapp: {
    text: "Chat on WhatsApp",
    href: (number: string, message: string) =>
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
  },
} as const;

// =============================================================================
// CONTACT (Footer / Contact section)
// =============================================================================

export const CONTACT = {
  companyName: "Blue Fin Engineering Enterprises",
  followUs: "Follow Us :",
  reachUs: "Reach Us",
  getDirections: "Get Directions",
  address: {
    officeLine1: "Classic Homes — Matham Road, Outer Ring",
    officeLine2: "Road Hosur.",
    factoryLine1: "Factory: Thally road near Swastik packages",
    factoryLine2: "Karnoor, Hosur — 635110.",
  },
  phone: "+91 94865 93321 / +91 85675 87051",
  email: "bluefinengineeringenterprises@gmail.com",
  whatsapp: {
    number: "919486593321",
    defaultMessage: "Hi, I'm interested in your material handling and assembly solutions. Could you please help me?",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.68938502533!2d77.8097464!3d12.733675300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70ebc3aaaaab%3A0x39c8851896d6f43e!2sBLUEFIN%20ENGINEERING%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1772262443972!5m2!1sen!2sin",
  mapLink: "https://maps.google.com/?q=BLUEFIN+ENGINEERING+ENTERPRISES+Hosur",
  telLink: "tel:+919486593321",
  mailLink: "mailto:bluefinengineeringenterprises@gmail.com",
  logoPath: "/images/logo.png",
} as const;

// =============================================================================
// FOOTER
// =============================================================================

export const FOOTER = {
  copyright: "©2025. All Rights Reserved.",
  poweredBy: "Powered By",
  companyName: "BLUEFIN ENGINEERING ENTERPRISES",
} as const;

// =============================================================================
// CONTACT PAGE
// =============================================================================

export const CONTACT_PAGE = {
  hero: {
    title: "Reach",
    titleAccent: "Blue Fin",
    subtitle: "Get in touch with our team for inquiries and support",
  },
  card: {
    companyName: "Blue Fin Engineering Enterprises",
    tagline: "Material Handling & Assembly Solutions",
    officeLabel: "Office",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
  },
  form: {
    title: "Request a Call Back",
    subtitle: "Fill in your details and we'll get back to you shortly.",
  },
} as const;

// =============================================================================
// PRODUCTS PAGE
// =============================================================================

export const PRODUCTS_PAGE = {
  hero: {
    title: "Our",
    titleAccent: "Products",
    subtitle: "Material handling, automation machinery, and assembly solutions",
  },
  metadata: {
    title: "Products | Blue Fin Engineering Enterprises",
    description:
      "Explore our range of material handling, automation machinery, conveyors, fabrications, and industrial consumables.",
  },
} as const;

// =============================================================================
// PRODUCT DETAIL PAGE (ProductPageClient)
// =============================================================================

export const PRODUCT_DETAIL = {
  breadcrumb: {
    home: "Home",
    products: "Products",
  },
  sidebar: {
    moreIn: "More in",
    viewAllProducts: "View All Products",
  },
  intro: (subcategory: string) =>
    `Explore our range of ${subcategory.toLowerCase()} solutions designed for industrial automation and material handling excellence.`,
  cta: {
    title: "Need a custom solution?",
    description: (subcategory: string) =>
      `Get in touch for quotes and tailored ${subcategory} solutions.`,
    buttonText: "Request Quote",
    whatsappText: "Chat on WhatsApp",
  },
} as const;

// =============================================================================
// CONTACT FORM
// =============================================================================

export const CONTACT_FORM = {
  labels: {
    name: "Your Name",
    phone: "Mobile Number",
    email: "Email Address",
    message: "Your Message",
  },
  placeholders: {
    name: "Enter your name",
    phone: "+91 00000 00000",
    email: "your@email.com",
    message: "How can we help you?",
  },
  submitText: "Submit Request",
  sendingText: "Sending...",
  successMessage:
    "Thank you! Your request has been submitted. We'll get back to you shortly.",
  errorMessage:
    "Something went wrong. Please try again or contact us directly.",
} as const;

// =============================================================================
// NAVIGATION
// =============================================================================

export const NAV = {
  items: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  productsLabel: "Products",
  viewAllProducts: "View All Products",
  logo: {
    line1: "BLUEFIN",
    line2: "ENGINEERING ENTERPRISES",
  },
} as const;
