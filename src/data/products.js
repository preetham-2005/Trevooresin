export const PRODUCT_CATEGORIES = [
  'All Creations',
  'Festive & Pooja',
  'Custom Keychains',
  'Keepsakes',
  'Wall Clocks',
  'Floral Preservation',
  'Trays & Serveware',
  'Nameplates & Decor'
];

export const WHAT_WE_CREATE_CARDS = [
  {
    title: 'Festive & Pooja Essentials',
    subtitle: 'Auspicious Pooja Thalis, Mandir Swings & Hangings',
    description: 'Handmade turquoise, crimson & preserved rose petal pooja thalis with brass kumkum bowls, Krishna jhulas and divine Shubh Labh hangings.',
    image: '/assets/turquoise_pooja_thali_real.jpg',
    category: 'Festive & Pooja'
  },
  {
    title: 'Custom Keychains',
    subtitle: 'Alphabet Charms, Florals & Butterflies',
    description: 'Personalised initial alphabet keychains with glitter butterflies, real flowers, and couple milestone charms.',
    image: '/assets/initial_s_butterfly_keychain.jpg',
    category: 'Custom Keychains'
  },
  {
    title: 'Custom Keepsakes & Décor',
    subtitle: 'Fridge Magnets & Car Dashboard Idols',
    description: 'Antique photo frame fridge magnets, Flower Ganesha magnets, and custom heat-resistant devotional car dashboard idols.',
    image: '/assets/antique_blue_photo_magnet_real.jpg',
    category: 'Keepsakes'
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
  }
];

export const PRODUCTS = [
  // =========================================================================
  // 1. FESTIVE & POOJA (4 CONSOLIDATED TYPES)
  // =========================================================================
  
  // TYPE 1: Sacred Pooja Thalis (Turquoise, Rose Petal Ganesha, Red Om, Yellow Marigold)
  {
    id: 'prod-pooja-thalis-collection',
    name: 'Handcrafted Sacred Pooja Thalis (Turquoise, Rose Ganesha, Om & Haldi)',
    category: 'Festive & Pooja',
    priceText: 'Price depends on customisation',
    description: '100% Handmade Resin Art Pooja Thalis in vibrant auspicious designs. Perfect for Rakhi, Diwali, Weddings, Gruhapravesham & Festive Gifting 🎁. Each plate features brass katoris for Haldi-Kumkum, auspicious symbols (Swastik, Om, Ganesha), and floral gold leaf detailing. Waterproof, long-lasting & easy to clean.',
    images: [
      '/assets/turquoise_pooja_thali_real.jpg',
      '/assets/rose_petal_ganesha_pooja_thali.jpg',
      '/assets/red_om_pooja_thali.jpg',
      '/assets/yellow_ganesha_pooja_thali.jpg'
    ],
    imageDetails: [
      {
        title: '6 inch Pooja Thali – Turquoise Blue',
        description: 'Premium turquoise blue resin thali with golden border, 2 brass katoris for Haldi-Kumkum, Swastik symbol for good luck & positivity, and pearl flower detailing.',
        dimensions: '6-inch Diameter (Customizable)'
      },
      {
        title: 'Rose Petal & Ganesha Pooja Thali',
        description: 'Sacred ritual aarti plate featuring real preserved red rose petals encased in crystal-clear resin, crowned with a golden Lord Ganesha center motif and dual brass bowls.',
        dimensions: '7-inch Diameter'
      },
      {
        title: 'Red & Gold Om Aarti Thali',
        description: 'Rich auspicious crimson red resin thali highlighted with 24k gold foil swirl accents, an embossed central Om symbol, and attached brass diya holders.',
        dimensions: '6.5-inch Diameter'
      },
      {
        title: 'Yellow Floral Marigold Pooja Platter',
        description: 'Vibrant sunshine yellow thali embedded with dried festive florals, golden filigree accents, and twin brass katoris—ideal for Haldi ceremonies & return gifts.',
        dimensions: '6-inch Diameter'
      }
    ],
    features: ['2 Brass Katoris for Haldi-Kumkum', 'Swastik, Om & Ganesha Sacred Motifs', 'Preserved Rose Petals & Golden Leaf Detailing', 'Waterproof, Long-Lasting & Easy to Clean'],
    badge: 'Festive Bestseller 🎁',
    craftingTime: '3–5 Working Days',
    dimensions: '6 to 7-inch Diameters'
  },

  // TYPE 2: Krishna Jhula
  {
    id: 'prod-krishna-jhula',
    name: 'Handcrafted Krishna Jhula (Janmashtami Mandir Swings)',
    category: 'Festive & Pooja',
    priceText: 'Price depends on customisation',
    description: 'Make your Janmashtami home decor extra special with this beautiful handcrafted Krishna Jhula, created with intricate resin artwork, floral details, peacock accents and a charming swing for Kanha. 🪷 Perfect for Krishna decor, pooja room decor, mandir decor, home temple decor and Janmashtami decoration.',
    images: [
      '/assets/krishna_jhula_front.jpg',
      '/assets/radha_krishna_jhula_real.jpg',
      '/assets/krishna_jhula_real.jpg'
    ],
    imageDetails: [
      {
        title: 'Krishna Jhula (Peacock Finial & Golden Chains)',
        description: 'Handcrafted Krishna Jhula with intricate resin peacock crown, floral accents, and suspended brass swing chains for Kanha. Perfect for Janmashtami & home mandirs.',
        dimensions: 'Custom Size for Mandir'
      },
      {
        title: 'Radha Krishna Mandir Swing (Royal Crimson Arch)',
        description: 'Devotional swing featuring Radha Krishna idol set, royal floral pillars, and a glossy crystal resin base crafted with deep devotional care.',
        dimensions: 'Custom Size for Home Altar'
      },
      {
        title: 'Krishna Jhula Tabletop Devotional Showcase',
        description: 'Complete devotional tabletop swing setup with smooth resin surface, embedded florals, and elegant golden accents.',
        dimensions: 'Tabletop Display Size'
      }
    ],
    features: ['Intricate Resin Peacock Finial', 'Gold Gilded Swing Chains for Kanha', 'Mandir, Temple & Janmashtami Decor', 'Handmade with Devotional Love'],
    badge: 'Janmashtami Special 🦚',
    craftingTime: '5–7 Working Days',
    dimensions: 'Custom Size for Mandir'
  },

  // TYPE 3: Divine Wall Hangings
  {
    id: 'prod-divine-wall-hangings',
    name: 'Divine Wall Hangings – Shubh, Ganesh, Om & Shubh Labh',
    category: 'Festive & Pooja',
    priceText: 'Price depends on customisation',
    description: 'Bring positivity, prosperity and divine elegance to your home with our handcrafted spiritual wall hangings. Featuring sacred Shubh, Lord Ganesha & Om motifs alongside traditional Shubh Labh pairs, crafted with rich crimson and golden detailing, pearl embellishments, decorative leaves and elegant hanging accents.',
    images: [
      '/assets/shubh_labh_wall_hanging_real.jpg',
      '/assets/divine_wall_hanging_trio_real.jpg',
      '/assets/shubh_labh_discs_real.jpg',
      '/assets/divine_wall_hanging.jpg'
    ],
    imageDetails: [
      {
        title: 'Shubh Labh Door Hanging Pair (Crimson & Gold)',
        description: 'Traditional Shubh Labh resin disc pair with crimson floral background, golden calligraphy, and hanging pearl tassels for main entrance positivity.',
        dimensions: 'Pair: 5-inch Discs with Hanging Chains'
      },
      {
        title: 'Shubh, Ganesha & Om Hanging Trio',
        description: 'Auspicious 3-piece hanging set with sacred Om, Lord Ganesha, and Shubh motifs connected by gold gilded link chains and bells.',
        dimensions: 'Trio: 4.5-inch Discs'
      },
      {
        title: 'Circular Shubh Labh Mandir Accents',
        description: 'High-gloss resin discs featuring embossed golden script and delicate botanical borders for temple doorframes.',
        dimensions: 'Pair: 4.5-inch Discs'
      },
      {
        title: 'Ganesha & Om Sacred Wall Plaque',
        description: 'Devotional resin wall accent combining Lord Ganesha silhouette with 24k gold leaf swirl textures.',
        dimensions: '6-inch Wall Plaque'
      }
    ],
    features: ['Shubh, Lord Ganesha & Om Sacred Motifs', 'Traditional Shubh Labh Door Hangings', 'Gold Gilded Chains & Pearl Embellishments', 'Main Entrance, Pooja Room & Housewarming Gifts 🪔'],
    badge: 'Divine & Auspicious ❤️✨',
    craftingTime: '3–5 Working Days',
    dimensions: 'Pairs & Trios (4.5–5 Inch Discs with Chains)'
  },

  // TYPE 4: Festive T-Light Holders & Haldi Platters
  {
    id: 'prod-flower-tlight-haldi',
    name: 'Festive T-Light Holders & Custom Haldi Platters',
    category: 'Festive & Pooja',
    priceText: 'Price depends on customisation',
    description: 'Brighten your celebrations with handmade flower-shaped T-light holders and handcrafted Haldi ceremony platters. Designed with vibrant petals, golden detailing, embedded brass diya cups, and 3D standing "HALDI" block letters.',
    images: [
      '/assets/flower_tlight_lit.jpg',
      '/assets/haldi_platter_letters_real.jpg',
      '/assets/green_flower_tlight.jpg',
      '/assets/haldi_platter_landscape_real.jpg',
      '/assets/flower_tlight_empty.jpg'
    ],
    imageDetails: [
      {
        title: 'Flower T-Light Holder (Crimson & Gold Lit)',
        description: 'Handmade lotus/flower shape T-light holder with warm festive illumination and embedded brass candle cup.',
        dimensions: '4.5-inch Flower Diameter'
      },
      {
        title: 'Haldi Platter with 3D Standing "HALDI" Letters',
        description: 'Handmade resin Haldi ceremony platter with 3D golden block letters, pearl accents, and attached brass haldi bowl.',
        dimensions: '11-inch Diameter Platter'
      },
      {
        title: 'Turquoise Floral Tea-Light Diya',
        description: 'Vibrant ocean turquoise resin flower holder with golden petals and heat-resistant resin core.',
        dimensions: '4.5-inch Flower Diameter'
      },
      {
        title: 'Bridal Haldi Tray with Floral Gold Accents',
        description: 'Luxury marigold yellow and pearl rim resin platter custom-crafted for wedding rituals and bride-to-be celebrations.',
        dimensions: '12-inch Diameter Platter'
      },
      {
        title: 'Handcrafted Flower Diya Holder (Studio Craft)',
        description: 'Intricately scalloped flower resin diya holder with golden edge filigree detailing.',
        dimensions: '4.5-inch Flower Diameter'
      }
    ],
    features: ['Embedded Brass Diya Cups', '3D Standing "HALDI" Letters', 'Warm Festive Glow for Diyas & Candles', 'Diwali, Wedding & Return Gifting Essential 🪔'],
    badge: 'Festive & Wedding 🌼',
    craftingTime: '2–5 Working Days',
    dimensions: '4.5" Diya / 11–12" Platter'
  },

  // =========================================================================
  // 2. CUSTOM KEYCHAINS (SINGLE CONSOLIDATED CATEGORY & CARD)
  // =========================================================================
  {
    id: 'prod-custom-keychains-all',
    name: 'Custom Resin Keychains (Alphabet Letters, Florals & Butterflies)',
    category: 'Custom Keychains',
    priceText: 'Price depends on customisation',
    description: 'Make your keys uniquely yours! 🔑✨ Handmade custom resin keychains personalised with alphabet letters, initials, colour swirls, real dried flowers, holographic glitter and decorative butterfly charms. Perfect for gifting, couples, friends, return gifts or adding a personalised touch to your everyday essentials. 💖',
    images: [
      '/assets/initial_s_butterfly_keychain.jpg',
      '/assets/initial_s_yellow_teal_keychain.jpg',
      '/assets/heart_flower_keychain_real.jpg'
    ],
    imageDetails: [
      {
        title: 'Initial "S" Glitter Butterfly Keychain',
        description: 'Personalised initial alphabet keychain in crystal resin with holographic glitter butterfly charm and matching gold keyring.',
        dimensions: '1.5-inch Letter + Charm'
      },
      {
        title: 'Teal & Yellow Dual-Tone Botanical Keychain',
        description: 'Custom swirl letter keychain embedded with dried real floral petals and high-strength golden keyring.',
        dimensions: '1.5-inch Letter + Tassel'
      },
      {
        title: 'Pressed Flower Heart Keychain',
        description: 'Crystal-clear optical resin heart keychain containing natural preserved blooms, gold foil flakes, and name personalization.',
        dimensions: '1.8-inch Heart Charm'
      }
    ],
    features: ['Personalised Alphabet Letters & Names', 'Embedded Dried Botanicals & Glitter Butterflies', 'Crystal Clear Optical Finish & Gold Leaf', 'Perfect Return Gift & Couple Keepsake 🔑✨'],
    badge: 'Custom Letters 🔑✨',
    craftingTime: '1–2 Working Days',
    dimensions: '1.5 to 1.8-inch Charms'
  },

  // =========================================================================
  // 3. KEEPSAKES (FRIDGE MAGNETS & CAR DASHBOARD DÉCOR)
  // =========================================================================
  {
    id: 'prod-custom-fridge-magnets-collection',
    name: 'Custom Resin Fridge Magnets (Antique Frames, Flower Ganesha & Photos)',
    category: 'Keepsakes',
    priceText: 'Price depends on customisation',
    description: 'Turn your favourite memories, photos, divine idols and designs into beautiful handmade resin fridge magnets. Each magnet is carefully crafted with a glossy finish in diverse styles—from antique photo frames to Flower Ganesha floral magnets, Tilak shapes, and custom photo designs.',
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
    imageDetails: [
      {
        title: '2 × 1.5" Antique Blue Photo Frame Magnet',
        description: 'Vintage ornate frame fridge magnet in royal sapphire blue with sculpted gold filigree borders and high-gloss protective photo window.',
        dimensions: '2 × 1.5 Inch Frame'
      },
      {
        title: 'Handmade Flower Ganesha Magnets (Duo Set)',
        description: 'Handcrafted Lord Ganesha idols set upon blooming yellow and blue resin floral bases with strong neodymium magnets.',
        dimensions: '3-inch Flower Bases'
      },
      {
        title: 'Square Custom Family Photo Fridge Magnet',
        description: 'High-gloss scratchproof resin photo magnet preserving family portraits and cherished travel moments.',
        dimensions: '2.5 × 2.5 Inches'
      },
      {
        title: 'Flower Ganesha Idol Detail (Pooja & Fridge)',
        description: 'Intricate golden Lord Ganesha sculpture cast in crystal resin over real preserved botanicals.',
        dimensions: '3-inch Diameter'
      },
      {
        title: 'Sacred Tilak Namam Devotional Magnet',
        description: 'Auspicious Tirupati Balaji Tilak Namam resin magnet with shimmering gold leaf accents.',
        dimensions: '3.5 × 2 Inches'
      },
      {
        title: 'Bal Krishna Circular Devotional Magnet',
        description: 'Round devotional keepsake magnet with baby Krishna artwork and golden sunburst rim.',
        dimensions: '2.5-inch Round'
      },
      {
        title: 'Dual-Use Tabletop & Magnetic Flower Ganesha',
        description: 'Versatile floral resin keepsake piece suitable for refrigerators, work desks and prayer altars.',
        dimensions: '3-inch Base'
      },
      {
        title: 'Curated Divine Fridge Magnet Collection',
        description: 'Complete assortment of handcrafted devotional, floral and photo keepsake magnets.',
        dimensions: 'Assorted Sizes'
      }
    ],
    features: ['2 × 1.5 Inch Antique Blue Photo Frames with Gold Trim', 'Handcrafted Flower Ganesha Magnets (Yellow & Blue)', 'Custom Family Photos, Tilak & Devotional Motifs', 'High-Gloss Scratchproof Mirror Finish 💖'],
    badge: 'Keepsake Magnets 💖',
    craftingTime: '2–4 Working Days',
    dimensions: 'Various: 2×1.5" Frame, 3" Flower, Square'
  },
  {
    id: 'prod-dashboard-decor',
    name: 'Custom Resin Car Dashboard Décor',
    category: 'Keepsakes',
    priceText: 'Price depends on customisation',
    description: 'Personalize your car with handcrafted resin dashboard idols & décor, featuring your favourite Gods, photos, colours and designs. Perfect for car interiors, devotional décor, gifting & festive occasions.',
    images: [
      '/assets/car_dashboard_idols_row.jpg',
      '/assets/radha_krishna_pink_dashboard.jpg',
      '/assets/car_dashboard_yellow_krishna.jpg',
      '/assets/car_dashboard_red_krishna.jpg',
      '/assets/car_dashboard_balaji.jpg'
    ],
    imageDetails: [
      {
        title: 'Devotional Car Dashboard Idols Collection',
        description: 'Curated lineup of heat-resistant, non-yellowing devotional resin idols custom-crafted for car interiors.',
        dimensions: '3 × 3 Inches Base'
      },
      {
        title: 'Radha Krishna Rose Pink Dashboard Idol',
        description: 'Divine Radha Krishna resin sculpture on an auspicious rose-pink floral pedestal with heatproof base.',
        dimensions: '3.5 × 3 Inches'
      },
      {
        title: 'Bal Krishna Sunshine Yellow Dashboard Piece',
        description: 'Warm golden-yellow resin car dashboard idol radiating peace and auspicious blessings for daily journeys.',
        dimensions: '3 × 3 Inches'
      },
      {
        title: 'Lord Krishna Crimson Red Dashboard Accent',
        description: 'Vibrant crimson resin devotional sculpture with 24k gold accents and anti-slip automotive mounting.',
        dimensions: '3 × 3 Inches'
      },
      {
        title: 'Lord Venkateswara Balaji Car Dashboard Idol',
        description: 'Sacred Lord Balaji idol in glossy high-definition resin for vehicle dashboard protection and blessings.',
        dimensions: '3.5 × 3 Inches'
      }
    ],
    features: ['High Heat & UV Resistant Dashboard Base', 'Favourite Gods, Idols & Custom Photos', 'Devotional Car Interior Décor', 'Unique Gifting & Festive Occasions 🚗💫'],
    badge: 'Car Keepsake 🚗💫',
    craftingTime: '3–5 Working Days',
    dimensions: '3 × 3 Inches Base'
  },

  // =========================================================================
  // 4. WALL CLOCKS
  // =========================================================================
  {
    id: 'prod-wall-clocks',
    name: 'Custom Resin Wall Clocks',
    category: 'Wall Clocks',
    priceText: 'Price depends on customisation',
    description: 'Turn your favourite characters, photos and designs into a beautiful handmade statement clock. Each clock is crafted in resin with your choice of colours, marble effects, metallic accents and personalised elements.',
    images: [
      '/assets/shinchan_clock_table_real.jpg',
      '/assets/black_gold_roman_clock_real.jpg',
      '/assets/geode_clock.jpg'
    ],
    imageDetails: [
      {
        title: 'Shinchan 12-Expression Custom Resin Clock',
        description: 'Vibrant yellow resin clock with 12 hand-detailed Shinchan emotion hour expressions and silent sweep quartz movement.',
        dimensions: '10" & 12" Diameters'
      },
      {
        title: 'Luxury Black & 24k Gold Roman Numeral Clock',
        description: 'Mirror-finish black resin wall clock with gold foil river veins and raised golden Roman numeral markers.',
        dimensions: '12", 16", 24" Diameters'
      },
      {
        title: 'Crystal Geode Resin Statement Wall Clock',
        description: 'Artisanal geode clock with crushed quartz crystal textures, shimmering pigments and metallic hour hands.',
        dimensions: '12" & 16" Diameters'
      }
    ],
    features: ['Silent Sweep Precision Quartz Movement', 'Cartoon, Marble, Metallic & Roman Designs', 'Kids’ Rooms, Living Spaces & Bedrooms', 'Unique Personalised Statement Gifting ✨'],
    badge: 'Statement Clock ✨',
    craftingTime: '5–8 Working Days',
    dimensions: '10", 12", 16", 24" Diameters'
  },

  // =========================================================================
  // 5. FLORAL PRESERVATION & PHOTO FRAMES
  // =========================================================================
  {
    id: 'prod-photo-frames',
    name: 'Custom Resin Photo Frames – Memories, Made Beautiful',
    category: 'Floral Preservation',
    priceText: 'Price depends on customisation',
    description: 'Turn your favourite memories into unique handmade resin photo frames, beautifully crafted and personalised just for you. 💖 Choose from stunning finishes like marble effect, velvet effect, dried flowers, glitter, pearls, metallic accents, photo collages, personalised names and special dates.',
    images: [
      '/assets/purple_geode_photo_frame_real.jpg',
      '/assets/photo_collage_plaque_real.jpg',
      '/assets/swathi_sujan_anniversary_frame_real.jpg',
      '/assets/blue_silver_photo_plaque_real.jpg'
    ],
    imageDetails: [
      {
        title: 'Royal Purple Geode Floral Photo Frame',
        description: 'Bespoke photo frame featuring purple geode resin layering, crushed crystal borders and real preserved petals.',
        dimensions: '8 × 8 Inches'
      },
      {
        title: 'Multi-Photo Milestone Memories Plaque',
        description: 'Personalised high-gloss resin collage plaque celebrating birthdays, anniversaries and family moments.',
        dimensions: '10 × 8 Inches'
      },
      {
        title: 'Personalised Wedding Anniversary Keepsake Frame',
        description: 'Custom couple frame featuring marriage date, calligraphy names, gold leaf swirls and preserved florals.',
        dimensions: '9 × 9 Inches'
      },
      {
        title: 'Ocean Blue & Metallic Silver Photo Frame',
        description: 'Deep ocean blue and shimmering silver resin photo plaque with protective non-yellowing glass coating.',
        dimensions: '8 × 8 Inches'
      }
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
    description: 'Personalised birthday/anniversary calendars with photos, special dates, florals and names. Featuring marked special dates with gold heart charms, hanging crystal photo hearts, preserved florals, and pearl scalloped borders.',
    images: [
      '/assets/anniversary_calendar_aug21_real.jpg',
      '/assets/heart_birthday_calendar_pink_real.jpg',
      '/assets/birthday_vishista_plaque_real.jpg',
      '/assets/august_anniversary_calendar_real.jpg'
    ],
    imageDetails: [
      {
        title: 'Milestone Anniversary Date Calendar Plaque',
        description: 'Custom date calendar in resin with gold heart charm marking the anniversary day, couple photos and floral trim.',
        dimensions: '9" Scallop / Tabletop Stand'
      },
      {
        title: 'Pink Heart Birthday Calendar with Hanging Photo Heart',
        description: 'Shimmer pink resin heart calendar featuring custom birthday date, hanging crystal photo heart charm and easel stand.',
        dimensions: '8 × 7" Heart Stand'
      },
      {
        title: 'Personalised Birthday Plaque with Golden Calligraphy',
        description: 'Custom name and birthdate keepsake plaque with real preserved flowers and glossy finish.',
        dimensions: '8 × 8 Inches'
      },
      {
        title: 'Preserved Botanical Anniversary Date Plaque',
        description: 'Elegant calendar plaque featuring pressed wedding botanicals and precision-engraved special date marker.',
        dimensions: '9-inch Scallop'
      }
    ],
    features: ['Marked Special Date with Gold Charm', 'Preserved Dried Flowers & Gilded Pearls', 'Hanging Photo Heart & Tabletop Stand Included', 'Romantic Anniversary & Birthday Keepsake'],
    badge: 'Milestone Keepsake 💖',
    craftingTime: '5–7 Working Days',
    dimensions: '8 × 7" Heart Stand / 9" Scallop'
  },

  // =========================================================================
  // 6. TRAYS & SERVEWARE
  // =========================================================================
  {
    id: 'prod-serving-trays',
    name: 'Handcrafted Resin Serving & Décor Trays',
    category: 'Trays & Serveware',
    priceText: 'Price depends on customisation',
    description: 'Beautiful handmade resin trays featuring dried flowers, shimmer and elegant gold accents. Perfect for serving snacks, desserts & beverages, as well as organising jewellery, candles, keys and vanity essentials.',
    images: [
      '/assets/resin_serving_trays_pair_real.jpg',
      '/assets/resin_coasters.jpg'
    ],
    imageDetails: [
      {
        title: 'Botanical Resin Serving & Vanity Trays (Pair)',
        description: 'Pair of oval resin trays featuring dried flowers, gold leaf flakes and raised spill-resistant rims.',
        dimensions: 'Oval Trays: 10 × 5 Inches'
      },
      {
        title: 'Complementary Gilded Resin Coasters Set',
        description: 'Set of botanical resin coasters with hand-painted 24k gold leaf rims, heat-resistant for hot beverages.',
        dimensions: '4-inch Coasters (Set of 4/6)'
      }
    ],
    features: ['Serving Snacks, Desserts & Beverages', 'Organising Jewellery, Candles, Keys & Vanity', 'Preserved Dried Flowers & Shimmer Accents', 'Stylish Home Addition & Gifting Choice 💛'],
    badge: 'Serve & Decor 💛',
    craftingTime: '4–6 Working Days',
    dimensions: 'Oval Trays: 10 × 5 Inches'
  },

  // =========================================================================
  // 7. NAMEPLATES & DECOR
  // =========================================================================
  {
    id: 'prod-floral-nameplate',
    name: 'Floral & Marble Resin Nameplates',
    category: 'Nameplates & Decor',
    priceText: 'Price depends on customisation',
    description: 'Handmade bespoke entrance plaques with 3D gold calligraphy, sacred Om and peacock feather motifs, or pressed natural botanicals with durable weatherproof resin coating.',
    images: [
      '/assets/kasam_gold_nameplate.jpg',
      '/assets/wa0083_floral_nameplate.jpg',
      '/assets/resin_nameplate_clean.jpg'
    ],
    imageDetails: [
      {
        title: 'Bespoke Black Marble 3D Gold Nameplate',
        description: 'Luxury black marble resin entrance plaque with 3D mirror gold acrylic typography, house number and Om motif.',
        dimensions: '12 × 10 inch Plaque'
      },
      {
        title: 'Preserved Floral & Peacock Feather Nameplate',
        description: 'Custom entrance plaque embedded with real pressed wedding florals and iridescent peacock feather.',
        dimensions: '12 × 8 inch Plaque'
      },
      {
        title: 'Modern Minimalist Botanical Resin Nameplate',
        description: 'Weatherproof outdoor entrance plaque with crisp white typography and crystal resin finish.',
        dimensions: '10 × 8 inch Plaque'
      }
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
    description: 'Every piece is mixed, poured, and polished by hand in our studio — no automated molds, no mass production.'
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
