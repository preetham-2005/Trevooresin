export const PRODUCT_CATEGORIES = [
  'All Creations',
  'Festive & Pooja',
  'Wall Clocks',
  'Floral Preservation',
  'Trays & Serveware',
  'Nameplates & Decor',
  'Keepsakes & Jewelry'
];

export const WHAT_WE_CREATE_CARDS = [
  {
    title: 'Festive & Pooja Essentials',
    subtitle: 'Auspicious Pooja Thalis & Mandir Swings',
    description: 'Handmade turquoise, crimson & preserved rose petal pooja thalis with brass kumkum bowls and Krishna jhulas.',
    image: '/assets/turquoise_pooja_thali_real.jpg',
    category: 'Festive & Pooja'
  },
  {
    title: 'Custom Resin Wall Clocks',
    subtitle: 'Shinchan, Roman & Luxury Geode Timepieces',
    description: 'Personalised character, photo, marble, metallic, spiritual and Roman numeral clocks with silent sweep movement.',
    image: '/assets/shinchan_clock_table_real.jpg',
    category: 'Wall Clocks'
  },
  {
    title: 'Milestone Calendars & Photo Frames',
    subtitle: 'Birthday Hearts & Pearl Keepsakes',
    description: 'Personalised birthday heart calendars with hanging crystal photo hearts, baby milestone plaques, and anniversary frames.',
    image: '/assets/heart_birthday_calendar_pink_real.jpg',
    category: 'Floral Preservation'
  },
  {
    title: 'Custom Nameplates & Home Décor',
    subtitle: 'Luxury Marble, Gold Calligraphy & Florals',
    description: 'Bespoke entrance plaques with 3D gold typography, Om motifs, Krishna flutes, and real pressed florals.',
    image: '/assets/kasam_gold_nameplate.jpg',
    category: 'Nameplates & Decor'
  },
  {
    title: 'Custom Haldi Platters & Swings',
    subtitle: 'Haldi Ceremonies & Janmashtami Swings',
    description: 'Handmade 3D letter Haldi trays with attached bowls for bridal rituals, and peacock Krishna swings.',
    image: '/assets/haldi_platter_letters_real.jpg',
    category: 'Festive & Pooja'
  },
  {
    title: 'Custom Letter Keychains & Trays',
    subtitle: 'Alphabet Charms & Shimmer Trays',
    description: 'Personalised initial alphabet keychains with glitter butterflies and real flowers, alongside vanity trays.',
    image: '/assets/initial_s_butterfly_keychain.jpg',
    category: 'Keepsakes & Jewelry'
  }
];

export const PRODUCTS = [
  {
    id: 'prod-pooja-thali',
    name: '6 inch Pooja Thali - Turquoise Blue',
    category: 'Festive & Pooja',
    priceText: 'Price depends on customisation',
    description: 'Perfect for Rakhi, Diwali, Weddings, Gruhapravesham & Festive Gifting 🎁 100% Handmade Resin Art in premium turquoise blue with golden border, 2 brass katoris for Haldi-Kumkum, Swastik symbol for good luck & positivity, and golden leaf & pearl flower detailing. Waterproof, long-lasting & easy to clean—bring home not just a platter, but a Vibe of positivity!',
    images: [
      '/assets/turquoise_pooja_thali_real.jpg',
      '/assets/rose_petal_ganesha_pooja_thali.jpg',
      '/assets/red_om_pooja_thali.jpg',
      '/assets/yellow_ganesha_pooja_thali.jpg'
    ],
    features: ['2 Brass Katoris for Haldi-Kumkum', 'Swastik Symbol for Good Luck & Positivity', 'Golden Leaf & Pearl Flower Detailing', 'Waterproof, Long-Lasting & Easy to Clean'],
    badge: 'Festive & Gifting 🎁',
    craftingTime: '3–5 Working Days',
    dimensions: '6-inch Diameter (Customizable)'
  },
  {
    id: 'prod-krishna-jhula',
    name: 'Krishna Jhula',
    category: 'Festive & Pooja',
    priceText: 'Price depends on customisation',
    description: 'Make your Janmashtami home decor extra special with this beautiful handcrafted Krishna Jhula, created with intricate resin artwork, floral details, peacock accents and a charming swing for Kanha. 🪷 Perfect for Krishna decor, pooja room decor, mandir decor, home temple decor and Janmashtami decoration. A handmade Krishna Swing that adds a devotional touch to your home and makes a thoughtful gift. 🦚💙✨',
    images: [
      '/assets/krishna_jhula_front.jpg',
      '/assets/radha_krishna_jhula_real.jpg',
      '/assets/krishna_jhula_real.jpg'
    ],
    features: ['Intricate Resin Peacock Finial', 'Gold Gilded Swing Chains for Kanha', 'Mandir, Temple & Janmashtami Decor', 'Handmade with Devotional Love'],
    badge: 'Janmashtami Special 🦚',
    craftingTime: '5–7 Working Days',
    dimensions: 'Custom Size for Mandir'
  },
  {
    id: 'prod-divine-wall-hangings',
    name: 'Divine Wall Hangings – Shubh, Ganesh, Om & Shubh Labh',
    category: 'Festive & Pooja',
    priceText: 'Price depends on customisation',
    description: 'Bring positivity, prosperity and divine elegance to your home with our handcrafted spiritual wall hangings. Featuring sacred Shubh, Lord Ganesha & Om motifs alongside traditional Shubh Labh pairs, crafted with rich crimson and golden detailing, pearl embellishments, decorative leaves and elegant hanging accents. Perfect for your main door entrance, living room, pooja room, Diwali festive décor and housewarming return gifts. ❤️✨ (Shubh: Auspiciousness & good beginnings | Labh: Prosperity, success & abundance).',
    images: [
      '/assets/shubh_labh_wall_hanging_real.jpg',
      '/assets/divine_wall_hanging_trio_real.jpg',
      '/assets/shubh_labh_discs_real.jpg',
      '/assets/divine_wall_hanging.jpg'
    ],
    features: ['Shubh, Lord Ganesha & Om Sacred Motifs', 'Traditional Shubh Labh Door Hangings', 'Gold Gilded Chains & Pearl Embellishments', 'Main Entrance, Pooja Room & Housewarming Gifts 🪔'],
    badge: 'Divine & Auspicious ❤️✨',
    craftingTime: '3–5 Working Days',
    dimensions: 'Pairs & Trios (4.5–5 Inch Discs with Chains)'
  },
  {
    id: 'prod-flower-tlight',
    name: 'Flower T-light Holder',
    category: 'Festive & Pooja',
    priceText: 'Price depends on customisation',
    description: 'Brighten your home with our handmade flower-shaped T-light holder, beautifully designed with vibrant red/orange petals and elegant golden detailing. Perfect for placing diyas, tealights and candles, this decorative flower diya holder adds a warm, festive glow to your home. Ideal for Diwali decoration, pooja room décor, festive home décor, return gifts and gifting.',
    images: [
      '/assets/flower_tlight_lit.jpg',
      '/assets/green_flower_tlight.jpg',
      '/assets/flower_tlight_empty.jpg'
    ],
    features: ['Vibrant Red/Orange & Turquoise Petals', 'Embedded Brass Diya Cups', 'Warm Festive Glow for Diyas & Candles', 'Diwali & Return Gifting Essential'],
    badge: 'Festive Glow 🪔',
    craftingTime: '2–3 Working Days',
    dimensions: '4.5-inch Flower Diameter'
  },
  {
    id: 'prod-haldi-platter',
    name: 'Custom Haldi Platter',
    category: 'Festive & Pooja',
    priceText: 'Price depends on customisation',
    description: 'A beautiful handcrafted resin Haldi tray with haldi bowl, perfect for Haldi ceremonies, weddings & bridal décor. Add a vibrant, elegant touch to your special day! 💫 Featuring 3D standing "HALDI" block letters, delicate pearl clusters, and floral gold accents.',
    images: [
      '/assets/haldi_platter_letters_real.jpg',
      '/assets/haldi_platter_landscape_real.jpg'
    ],
    features: ['Handcrafted Resin Tray with Haldi Bowl', '3D Standing "HALDI" Letters', 'Haldi Ceremonies, Weddings & Bridal Décor', 'Vibrant, Elegant & Easy to Clean 💫'],
    badge: 'Wedding Essential 🌼',
    craftingTime: '4–6 Working Days',
    dimensions: '10–12 inch Diameter Platter'
  },
  {
    id: 'prod-custom-fridge-magnets-collection',
    name: 'Custom Resin Fridge Magnets (Antique Frames, Flower Ganesha & Photos)',
    category: 'Nameplates & Decor',
    priceText: 'Price depends on customisation',
    description: 'Turn your favourite memories, photos, divine idols and designs into beautiful handmade resin fridge magnets. Each magnet is carefully crafted with a glossy finish in diverse styles—from 2 × 1.5 inch antique photo frames with gold detailing to vibrant handcrafted Flower Ganesha floral magnets, Tilak shapes, and custom photo designs. Perfect for personalized gifts, birthdays, weddings, anniversaries, return gifts and home décor. 💖 Custom-made • Handmade • Personalised • Made with Love 🫶',
    images: [
      '/assets/antique_blue_photo_magnet_real.jpg',
      '/assets/flower_ganesha_magnets_real.jpg',
      '/assets/custom_photo_square_magnet.jpg',
      '/assets/flower_ganesha_closeup.jpg',
      '/assets/tilak_namam_magnet.jpg',
      '/assets/krishna_circular_magnet.jpg',
      '/assets/flower_ganesha_table.jpg',
      '/assets/divine_fridge_magnets_real.jpg'
    ],
    features: ['2 × 1.5 Inch Antique Blue Photo Frames with Gold Trim', 'Handcrafted Flower Ganesha Magnets (Yellow & Blue)', 'Custom Family Photos, Tilak & Devotional Motifs', 'High-Gloss Scratchproof Mirror Finish 💖'],
    badge: 'Magnet Collection 💖',
    craftingTime: '2–4 Working Days',
    dimensions: 'Various: 2×1.5" Frame, 3" Flower, Square'
  },
  {
    id: 'prod-dashboard-decor',
    name: 'Custom Resin Car Dashboard Décor',
    category: 'Nameplates & Decor',
    priceText: 'Price depends on customisation',
    description: 'Personalize your car with handcrafted resin dashboard idols & décor, featuring your favourite Gods, photos, colours and designs. Perfect for car interiors, devotional décor, gifting & festive occasions. Handmade with love, each piece is uniquely yours. 🚗💫❤️',
    images: [
      '/assets/car_dashboard_idols_row.jpg',
      '/assets/radha_krishna_pink_dashboard.jpg',
      '/assets/car_dashboard_yellow_krishna.jpg',
      '/assets/car_dashboard_red_krishna.jpg',
      '/assets/car_dashboard_balaji.jpg'
    ],
    features: ['High Heat & UV Resistant Dashboard Base', 'Favourite Gods, Idols & Custom Photos', 'Devotional Car Interior Décor', 'Unique Gifting & Festive Occasions 🚗💫'],
    badge: 'Car Interior 🚗💫',
    craftingTime: '3–5 Working Days',
    dimensions: '3 × 3 Inches Base'
  },
  {
    id: 'prod-serving-trays',
    name: 'Handcrafted Resin Serving & Décor Trays',
    category: 'Trays & Serveware',
    priceText: 'Price depends on customisation',
    description: 'Beautiful handmade resin trays featuring dried flowers, shimmer and elegant gold accents. Perfect for serving snacks, desserts & beverages, as well as organising jewellery, candles, keys and vanity essentials. A stylish addition to any home and a beautiful gifting choice. 💛',
    images: [
      '/assets/resin_serving_trays_pair_real.jpg',
      '/assets/resin_coasters.jpg'
    ],
    features: ['Serving Snacks, Desserts & Beverages', 'Organising Jewellery, Candles, Keys & Vanity', 'Preserved Dried Flowers & Shimmer Accents', 'Stylish Home Addition & Gifting Choice 💛'],
    badge: 'Serve & Decor 💛',
    craftingTime: '4–6 Working Days',
    dimensions: 'Oval Trays: 10 × 5 Inches'
  },
  {
    id: 'prod-wall-clocks',
    name: 'Custom Resin Wall Clocks',
    category: 'Wall Clocks',
    priceText: 'Price depends on customisation',
    description: 'Turn your favourite characters, photos and designs into a beautiful handmade statement clock. Each clock is crafted in resin with your choice of colours, marble effects, metallic accents and personalised elements. Perfect for kids’ rooms, bedrooms, living spaces, birthdays and unique personalised gifting. ✨ Available Designs / Themes: Cartoon Characters, Family & Couple Photos, Kids’ Favourite Characters, Marble & Metallic Effects, Spiritual & Devotional Designs, Custom Names & Photos, Custom Colours & Themes.',
    images: [
      '/assets/shinchan_clock_table_real.jpg',
      '/assets/black_gold_roman_clock_real.jpg',
      '/assets/geode_clock.jpg'
    ],
    features: ['Silent Sweep Precision Quartz Movement', 'Cartoon, Marble, Metallic & Roman Designs', 'Kids’ Rooms, Living Spaces & Bedrooms', 'Unique Personalised Statement Gifting ✨'],
    badge: 'Statement Clock ✨',
    craftingTime: '5–8 Working Days',
    dimensions: '10", 12", 16", 24" Diameters'
  },
  {
    id: 'prod-photo-frames',
    name: 'Custom Resin Photo Frames – Memories, Made Beautiful',
    category: 'Floral Preservation',
    priceText: 'Price depends on customisation',
    description: 'Turn your favourite memories into unique handmade resin photo frames, beautifully crafted and personalised just for you. 💖 Choose from stunning finishes like marble effect, velvet effect, dried flowers, glitter, pearls, metallic accents, photo collages, personalised names and special dates. Perfect for birthdays, anniversaries, weddings, couples, family memories, baby milestones and special occasions, these customised resin frames make thoughtful gifts and elegant keepsakes for your home. 🌸📸 Your memories. Your style. Our handmade magic. ✨',
    images: [
      '/assets/purple_geode_photo_frame_real.jpg',
      '/assets/photo_collage_plaque_real.jpg',
      '/assets/swathi_sujan_anniversary_frame_real.jpg',
      '/assets/blue_silver_photo_plaque_real.jpg'
    ],
    features: ['Marble, Velvet, Glitter, Pearls & Metallic', 'Dried Flowers, Collages, Names & Dates', 'Birthdays, Anniversaries, Weddings & Milestones', 'Your Memories. Your Style. Our Handmade Magic. ✨'],
    badge: 'Handmade Magic 🌸📸',
    craftingTime: '4–7 Working Days',
    dimensions: '8 × 8" to 10 × 10" Custom Sizes'
  },
  {
    id: 'prod-calendars-keepsakes',
    name: 'Custom Resin Calendars & Milestone Keepsakes',
    category: 'Floral Preservation',
    priceText: 'Price depends on customisation',
    description: 'Personalised birthday/anniversary calendars with photos, special dates, florals and names. Featuring marked special dates with gold heart charms, hanging crystal photo hearts, preserved florals, and pearl scalloped borders—perfect for milestone anniversaries and birthday keepsakes. 💖',
    images: [
      '/assets/anniversary_calendar_aug21_real.jpg',
      '/assets/heart_birthday_calendar_pink_real.jpg',
      '/assets/birthday_vishista_plaque_real.jpg',
      '/assets/august_anniversary_calendar_real.jpg'
    ],
    features: ['Marked Special Date with Gold Charm', 'Preserved Dried Flowers & Gilded Pearls', 'Hanging Photo Heart & Tabletop Stand Included', 'Romantic Anniversary & Birthday Keepsake'],
    badge: 'Milestone Keepsake 💖',
    craftingTime: '5–7 Working Days',
    dimensions: '8 × 7" Heart Stand / 9" Scallop'
  },
  {
    id: 'prod-keychains',
    name: 'Custom Resin Keychains',
    category: 'Keepsakes & Jewelry',
    priceText: 'Price depends on customisation',
    description: 'Make your keys uniquely yours! 🔑✨ Handmade custom resin keychains personalised with names, initials, colours, dried flowers, glitter and decorative accents. Perfect for gifting, couples, friends, return gifts or adding a personalised touch to your everyday essentials. 💖',
    images: [
      '/assets/initial_s_butterfly_keychain.jpg',
      '/assets/initial_s_yellow_teal_keychain.jpg',
      '/assets/heart_flower_keychain_real.jpg'
    ],
    features: ['Personalised Names, Initials & Colours', 'Embedded Dried Flowers, Glitter & Accents', 'Gifting, Couples, Friends & Return Gifts', 'High-Strength Keyring Attachment 🔑✨'],
    badge: 'Uniquely Yours 🔑✨',
    craftingTime: '1–2 Working Days',
    dimensions: '1.5-inch Letter + Charm'
  },
  {
    id: 'prod-floral-nameplate',
    name: 'Floral & Marble Resin Nameplates',
    category: 'Nameplates & Decor',
    priceText: 'Price depends on customisation',
    description: 'Handmade bespoke entrance plaques with 3D gold calligraphy, sacred Om and peacock feather motifs, or pressed natural botanicals with durable weatherproof resin coating. Personalised with family names, house numbers, and custom themes.',
    images: [
      '/assets/kasam_gold_nameplate.jpg',
      '/assets/wa0083_floral_nameplate.jpg',
      '/assets/resin_nameplate_clean.jpg'
    ],
    features: ['3D Mirror Gold Acrylic Calligraphy', 'Real Pressed Botanicals & Gold Filigree', 'Om, Krishna Flute & Peacock Motifs', 'UV & Weatherproof Non-Yellowing Epoxy'],
    badge: 'Bespoke Entrance Plaque ✨',
    craftingTime: '4–6 Working Days',
    dimensions: '12 × 10 inch Plaque'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Poured by Hand in Studio',
    description: 'Every piece is mixed, poured, and polished by hand in our Hyderabad studio — no automated molds, no mass production.'
  },
  {
    title: '100% Personalised to You',
    description: 'Colours, flowers, personal photos, sacred dates, custom names, and dimensions — tailored to your exact story and space.'
  },
  {
    title: 'Built with Optical-Grade Resin',
    description: 'Food-safe sealants, UV-resistant non-yellowing epoxy, and precision curing ensure your memories stay vibrant for decades.'
  },
  {
    title: 'Insured Pan-India Delivery',
    description: 'Secure, shockproof wooden crated packaging delivered safely to doorsteps across all Indian cities.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Shinchan Custom Resin Table & Wall Clock',
    category: 'Wall Clocks',
    image: '/assets/shinchan_clock_table_real.jpg',
    caption: 'Vibrant yellow handcrafted resin clock with 12 hand-detailed Shinchan emotion hour expressions.'
  },
  {
    id: 2,
    title: 'Black & Gold Roman Luxury Resin Clock',
    category: 'Wall Clocks',
    image: '/assets/black_gold_roman_clock_real.jpg',
    caption: 'Mirror-finish black resin clock with 24k gold leaf river veins and gold Roman numerals.'
  },
  {
    id: 3,
    title: 'Personalized Birthday Heart Keepsake Calendar',
    category: 'Floral Preservation',
    image: '/assets/heart_birthday_calendar_pink_real.jpg',
    caption: 'Shimmer pink resin heart calendar with preserved flowers and hanging crystal photo heart.'
  },
  {
    id: 4,
    title: 'Bespoke Gold Calligraphy Entrance Nameplate',
    category: 'Nameplates & Decor',
    image: '/assets/kasam_gold_nameplate.jpg',
    caption: 'Luxury black marble acrylic nameplate with mirror gold 3D calligraphy and Om emblem.'
  },
  {
    id: 5,
    title: 'Janmashtami Krishna Jhula Swing',
    category: 'Festive & Pooja',
    image: '/assets/krishna_jhula_front.jpg',
    caption: 'Handmade devotional peacock resin swing with gold chains for Kanha.'
  },
  {
    id: 6,
    title: 'Sacred 6-inch Turquoise Pooja Thali',
    category: 'Festive & Pooja',
    image: '/assets/turquoise_pooja_thali_real.jpg',
    caption: '100% handmade resin pooja thali with 2 brass katoris and auspicious Swastik symbol.'
  }
];

export function getProductWhatsAppLink(productName) {
  const text = `Hi Trevooresin! I'm interested in ordering the "${productName}". Please share customization options, dimensions, and pricing details.`;
  return `https://wa.me/8639335031?text=${encodeURIComponent(text)}`;
}

export function getCustomEnquiryWhatsAppLink(category = 'Resin Art') {
  const text = `Hi Trevooresin! I would like to enquire about a custom ${category} piece. Please share details and portfolio examples.`;
  return `https://wa.me/8639335031?text=${encodeURIComponent(text)}`;
}
