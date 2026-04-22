const explorerData = [
  {
    id: "eat",
    title: "Eat",
    audience: "25 tags",
    seasonSignal: "",
    description: "",
    curationNote: "",
    subcategories: [
      {
        id: "eat-start-here",
        title: "Start here",
        blurb: "",
        tags: [
          { name: "Food", url: "https://share.livexyz.com/?theme=dark&tags=59ea276af86351000446c403&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "broad", reason: "Best all-purpose food browse" },
          { name: "Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be633d42bd000300064e&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "broad", reason: "Straightforward default entry point" },
          { name: "Coffee & Tea", url: "https://share.livexyz.com/?theme=dark&tags=58193af11c464c000357b1cc&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "all day", reason: "Strong for daytime city movement" },
          { name: "Bakery", url: "https://share.livexyz.com/?theme=dark&tags=5511be3f37345d00030005d6&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "all day", reason: "High-density and low-friction" },
          { name: "Bagel Shop", url: "https://share.livexyz.com/?theme=dark&tags=5511be6537345d0003000689&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "classic NYC", reason: "Immediately recognizable visitor behavior" },
          { name: "Food Hall", url: "https://share.livexyz.com/?theme=dark&tags=5537c683a1df780003000009&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "group-friendly", reason: "Strong for mixed groups and browsing" },
          { name: "Food Truck", url: "https://share.livexyz.com/?theme=dark&tags=5511be7137345d00030006c4&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "summer", reason: "Outdoor circulation fit" },
          { name: "Ice Cream Shop", url: "https://share.livexyz.com/?theme=dark&tags=5511be543d42bd0003000603&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "summer", reason: "Seasonally intuitive" }
        ]
      },
      {
        id: "eat-quick-bites",
        title: "Quick bites",
        blurb: "",
        tags: [
          { name: "Juice & Smoothies", url: "https://share.livexyz.com/?theme=dark&tags=5565be424052000003000011&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "summer", reason: "Heat-friendly daytime behavior" },
          { name: "Burger Joint", url: "https://share.livexyz.com/?theme=dark&tags=5511be7e37345d00030006f5&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "casual", reason: "Broad appeal without over-fragmenting" },
          { name: "Deli", url: "https://share.livexyz.com/?theme=dark&tags=59c18724e41d550e7ccd7793&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "classic NYC", reason: "Locals and visitors both understand it" },
          { name: "Food Stand", url: "https://share.livexyz.com/?theme=dark&tags=55537b96774dae0003000077&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "street food", reason: "Good match for wandering behavior" }
        ]
      },
      {
        id: "eat-cuisines",
        title: "Cuisines",
        blurb: "",
        tags: [
          { name: "Italian Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be743d42bd00030006a2&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "global", reason: "High familiarity" },
          { name: "Chinese Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be7737345d00030006df&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "global", reason: "Dense and intuitive" },
          { name: "Mexican Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be4b3d42bd00030005e1&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "global", reason: "Broad visitor demand" },
          { name: "Japanese Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be7637345d00030006d8&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "global", reason: "Broad visitor demand" },
          { name: "Indian Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be8737345d0003000720&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "global", reason: "Strong citywide recognition" },
          { name: "Thai Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be6e37345d00030006b8&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "global", reason: "Popular and legible" },
          { name: "Korean Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be5e3d42bd0003000634&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "global", reason: "Broad recognition" },
          { name: "Middle Eastern Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be3c3d42bd00030005a0&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "global", reason: "Useful for visitors and groups" },
          { name: "Caribbean Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be653d42bd000300065e&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "NYC fit", reason: "Strong local relevance" },
          { name: "Dominican Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be8337345d0003000709&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "NYC fit", reason: "Strong local relevance" },
          { name: "Colombian Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be863d42bd0003000700&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "NYC fit", reason: "Broad enough to browse" },
          { name: "Argentine Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be5a3d42bd000300061f&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "match season", reason: "Strong World Cup tie-in" },
          { name: "Brazilian Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be553d42bd0003000605&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "match season", reason: "Strong World Cup tie-in" }
        ]
      }
    ]
  },
  {
    id: "drink-nightlife",
    title: "Drink & Nightlife",
    audience: "10 tags",
    seasonSignal: "",
    description: "",
    curationNote: "",
    subcategories: [
      {
        id: "drink-game-day",
        title: "Game day",
        blurb: "",
        tags: [
          { name: "Sports Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be4737345d0003000601&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "hero", reason: "Best match-viewing browse" },
          { name: "Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be4f3d42bd00030005f4&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "broad", reason: "Wide funnel entry point" },
          { name: "Irish Pub", url: "https://share.livexyz.com/?theme=dark&tags=5511be5c37345d0003000666&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "classic", reason: "Intuitive sports-watch behavior" },
          { name: "Beer Halls & Beer Gardens", url: "https://share.livexyz.com/?theme=dark&tags=5511be783d42bd00030006bd&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "summer", reason: "Strong group and outdoor fit" },
          { name: "Hotel Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be7e3d42bd00030006da&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "visitor", reason: "Useful for travelers staying nearby" }
        ]
      },
      {
        id: "drink-after-dark",
        title: "After dark",
        blurb: "",
        tags: [
          { name: "Cocktail Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be6737345d0003000693&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "night out", reason: "High-intent evening planning" },
          { name: "Wine Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be683d42bd000300066c&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "night out", reason: "Broad and elegant" },
          { name: "Dive Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be6737345d0003000692&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "night out", reason: "Distinct flavor without being too niche" },
          { name: "Speakeasy", url: "https://share.livexyz.com/?theme=dark&tags=5511be5137345d0003000631&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "night out", reason: "Strong tourist discovery appeal" },
          { name: "Lounge", url: "https://share.livexyz.com/?theme=dark&tags=5511be4137345d00030005e3&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "night out", reason: "Broad enough for launch" }
        ]
      }
    ]
  },
  {
    id: "things-to-do",
    title: "Things to Do",
    audience: "12 tags",
    seasonSignal: "",
    description: "",
    curationNote: "",
    subcategories: [
      {
        id: "todo-see-nyc",
        title: "See NYC",
        blurb: "",
        tags: [
          { name: "Museum", url: "https://share.livexyz.com/?theme=dark&tags=5511be433d42bd00030005bc&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "hero", reason: "Core tourist behavior" },
          { name: "Art Gallery", url: "https://share.livexyz.com/?theme=dark&tags=5511be5337345d0003000639&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "culture", reason: "Strong city identity signal" },
          { name: "Landmarks & Historical Places", url: "https://share.livexyz.com/?theme=dark&tags=58193a2e03074200033b441c&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "hero", reason: "Easy tourist browse" },
          { name: "Tours & Visitor Info", url: "https://share.livexyz.com/?theme=dark&tags=55944185683c1a0003000155&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "orientation", reason: "Useful for active trip planning" },
          { name: "Zoos & Aquariums", url: "https://share.livexyz.com/?theme=dark&tags=56fd4c381c803a00030001ca&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "family", reason: "Strong visitor relevance" }
        ]
      },
      {
        id: "todo-night-fun",
        title: "Shows & fun",
        blurb: "",
        tags: [
          { name: "Music Venue", url: "https://share.livexyz.com/?theme=dark&tags=5511be5037345d000300062b&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "live", reason: "Strong nightly planning value" },
          { name: "Theatre", url: "https://share.livexyz.com/?theme=dark&tags=5511be6e3d42bd0003000687&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "live", reason: "Broadly recognizable" },
          { name: "Performing Arts Center", url: "https://share.livexyz.com/?theme=dark&tags=59e262e85602780004745802&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "live", reason: "Cultural anchor map" },
          { name: "Movie Theater", url: "https://share.livexyz.com/?theme=dark&tags=5511be5d3d42bd000300062d&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "casual", reason: "Low-friction evening browse" },
          { name: "Comedy Club", url: "https://share.livexyz.com/?theme=dark&tags=5511be423d42bd00030005bb&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "night out", reason: "Distinct but mainstream" },
          { name: "Arcade", url: "https://share.livexyz.com/?theme=dark&tags=5511be5537345d0003000645&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "group", reason: "Good for mixed-age fun" },
          { name: "Bowling Alley", url: "https://share.livexyz.com/?theme=dark&tags=5511be4f37345d0003000627&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "group", reason: "Broad planning appeal" }
        ]
      }
    ]
  },
  {
    id: "shopping",
    title: "Shopping",
    audience: "12 tags",
    seasonSignal: "",
    description: "",
    curationNote: "",
    subcategories: [
      {
        id: "shopping-style",
        title: "Style & gifts",
        blurb: "",
        tags: [
          { name: "Clothing Store", url: "https://share.livexyz.com/?theme=dark&tags=56dd9db9f89aa300030006ed&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "broad", reason: "Simple wardrobe browse" },
          { name: "Thrift Store", url: "https://share.livexyz.com/?theme=dark&tags=5511be583d42bd0003000615&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "browseable", reason: "Distinct NYC shopping behavior" },
          { name: "Gift Shop", url: "https://share.livexyz.com/?theme=dark&tags=59c1871de41d550e7ccd775c&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "visitor", reason: "Low-friction tourist browse" },
          { name: "Jewelry Store", url: "https://share.livexyz.com/?theme=dark&tags=56254d5b0d55a700030013e7&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "style", reason: "Broad enough to browse" },
          { name: "Bags, Leather & Accessories", url: "https://share.livexyz.com/?theme=dark&tags=58193c7a03074200033b4426&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "style", reason: "Good travel-use case" },
          { name: "Sportswear Store", url: "https://share.livexyz.com/?theme=dark&tags=56fc08abf58106000300303b&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "summer", reason: "Useful seasonal browse" }
        ]
      },
      {
        id: "shopping-discovery",
        title: "Discovery shopping",
        blurb: "",
        tags: [
          { name: "Bookstore", url: "https://share.livexyz.com/?theme=dark&tags=5511be5f37345d0003000675&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "culture", reason: "Good wander behavior" },
          { name: "Record Store", url: "https://share.livexyz.com/?theme=dark&tags=5511be483d42bd00030005d3&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "culture", reason: "Distinct NYC browse value" },
          { name: "Arts & Crafts Store", url: "https://share.livexyz.com/?theme=dark&tags=5511be633d42bd0003000653&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "culture", reason: "Broad enough to browse" },
          { name: "Flea Market", url: "https://share.livexyz.com/?theme=dark&tags=5511be553d42bd0003000606&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "weekend", reason: "Seasonally strong and social" },
          { name: "Home Goods Store", url: "https://share.livexyz.com/?theme=dark&tags=56250dab0d55a70003000583&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "broad", reason: "Legible, mainstream browse" },
          { name: "Sporting Goods Store", url: "https://share.livexyz.com/?theme=dark&tags=59c18720e41d550e7ccd7774&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "summer", reason: "Useful seasonal shopping" }
        ]
      }
    ]
  },
  {
    id: "food-markets",
    title: "Food Markets",
    audience: "10 tags",
    seasonSignal: "",
    description: "",
    curationNote: "",
    subcategories: [
      {
        id: "markets-core",
        title: "Core markets",
        blurb: "",
        tags: [
          { name: "Grocery Store", url: "https://share.livexyz.com/?theme=dark&tags=562514b9a61e5400030006bb&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "broad", reason: "Everyday utility" },
          { name: "Food Market", url: "https://share.livexyz.com/?theme=dark&tags=59f21bbd920cc20004f67a27&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "broad", reason: "Good general entry point" },
          { name: "Farmers Market", url: "https://share.livexyz.com/?theme=dark&tags=5612e996c8d34d000300288a&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "summer", reason: "Strong seasonal signal" },
          { name: "Specialty Foods Store", url: "https://share.livexyz.com/?theme=dark&tags=59e786c253b8ce0004c33646&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "browseable", reason: "Good food discovery layer" },
          { name: "Groceries & Convenience", url: "https://share.livexyz.com/?theme=dark&tags=58193a7c1c464c000357b1c8&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "everyday", reason: "Useful for visitors staying nearby" }
        ]
      },
      {
        id: "markets-specialty",
        title: "Specialty finds",
        blurb: "",
        tags: [
          { name: "Butcher", url: "https://share.livexyz.com/?theme=dark&tags=59c186fbe41d550e7ccd76a0&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "specialty", reason: "Strong specialty food mental model" },
          { name: "Cheese Shop", url: "https://share.livexyz.com/?theme=dark&tags=5511be4537345d00030005f7&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "specialty", reason: "Distinct and giftable" },
          { name: "Fruit Stand", url: "https://share.livexyz.com/?theme=dark&tags=59e4fc5984f44000049dce1a&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "summer", reason: "Great seasonal fit" },
          { name: "Seafood Market", url: "https://share.livexyz.com/?theme=dark&tags=59c186fbe41d550e7ccd76a1&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "specialty", reason: "Broad enough to recognize" },
          { name: "Spice Shop", url: "https://share.livexyz.com/?theme=dark&tags=5546992a9be0fc000300007b&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "specialty", reason: "Strong browsing character" }
        ]
      }
    ]
  },
  {
    id: "wellness-beauty",
    title: "Wellness & Beauty",
    audience: "9 tags",
    seasonSignal: "",
    description: "",
    curationNote: "",
    subcategories: [
      {
        id: "wellness-refresh",
        title: "Refresh",
        blurb: "",
        tags: [
          { name: "Spa", url: "https://share.livexyz.com/?theme=dark&tags=5592ee8807047d0003000511&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "reset", reason: "Broad self-care entry point" },
          { name: "Massage & Relaxation", url: "https://share.livexyz.com/?theme=dark&tags=56dc73c2c55a626ccde58420&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "reset", reason: "Useful for visitors and locals" },
          { name: "Barber Shop", url: "https://share.livexyz.com/?theme=dark&tags=559e9a4fb647aa0003000030&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "maintenance", reason: "Clear and practical" },
          { name: "Hair Salon", url: "https://share.livexyz.com/?theme=dark&tags=559e99d6c30a3b000300004c&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "maintenance", reason: "Clear and practical" },
          { name: "Nail Salon", url: "https://share.livexyz.com/?theme=dark&tags=5511be4237345d00030005e6&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "maintenance", reason: "Broad enough for launch" }
        ]
      },
      {
        id: "wellness-move",
        title: "Move",
        blurb: "",
        tags: [
          { name: "Yoga Studio", url: "https://share.livexyz.com/?theme=dark&tags=5592ad5b066c4b0003000334&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "movement", reason: "Broad and approachable" },
          { name: "Pilates Studio", url: "https://share.livexyz.com/?theme=dark&tags=5592ad50066c4b0003000333&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "movement", reason: "Recognizable studio format" },
          { name: "Gym", url: "https://share.livexyz.com/?theme=dark&tags=5511be4a37345d000300060c&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "movement", reason: "Broadest fitness entry point" },
          { name: "Fitness Studio", url: "https://share.livexyz.com/?theme=dark&tags=5625029ea61e540003000235&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=", label: "movement", reason: "Flexible, mainstream category" }
        ]
      }
    ]
  },
  {
    id: "lodging",
    title: "Lodging",
    audience: "5 tags",
    seasonSignal: "",
    description: "",
    curationNote: "",
    subcategories: [
      {
        id: "lodging-boroughs",
        title: "Boroughs",
        blurb: "",
        tags: [
          { name: "Manhattan", url: "#manhattan-lodging", label: "placeholder", reason: "Coming soon" },
          { name: "Brooklyn", url: "#brooklyn-lodging", label: "placeholder", reason: "Coming soon" },
          { name: "Queens", url: "#queens-lodging", label: "placeholder", reason: "Coming soon" },
          { name: "Bronx", url: "#bronx-lodging", label: "placeholder", reason: "Coming soon" },
          { name: "Staten Island", url: "#staten-island-lodging", label: "placeholder", reason: "Coming soon" }
        ]
      }
    ]
  }
];

const state = {
  query: "",
  activeCategoryId: "eat",
  activeSubcategoryId: null
};

const railEl = document.getElementById("categoryRail");
const tabsEl = document.getElementById("subcategoryTabs");
const tagGridEl = document.getElementById("tagGrid");
const detailTitleEl = document.getElementById("detailTitle");
const detailKickerEl = document.getElementById("detailKicker");
const detailDescriptionEl = document.getElementById("detailDescription");
const detailBadgesEl = document.getElementById("detailBadges");
const statsEl = document.getElementById("stats");
const searchInput = document.getElementById("search");

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function matchesQuery(category, query) {
  if (!query) return true;
  const q = normalize(query);
  return [
    category.title,
    ...category.subcategories.flatMap((subcategory) => [
      subcategory.title,
      ...subcategory.tags.flatMap((tag) => [tag.name, tag.label, tag.reason])
    ])
  ].some((value) => normalize(value).includes(q));
}

function getVisibleCategories() {
  return explorerData.filter((category) => matchesQuery(category, state.query));
}

function getActiveCategory(visibleCategories) {
  const active = visibleCategories.find((category) => category.id === state.activeCategoryId);
  return active || visibleCategories[0] || explorerData[0];
}

function getActiveSubcategory(category) {
  if (!category) return null;
  return (
    category.subcategories.find((subcategory) => subcategory.id === state.activeSubcategoryId) ||
    category.subcategories[0] ||
    null
  );
}

function updateStats(visibleCategories) {
  const totalTags = visibleCategories.reduce(
    (count, category) =>
      count + category.subcategories.reduce((subCount, subcategory) => subCount + subcategory.tags.length, 0),
    0
  );

  statsEl.textContent = `${visibleCategories.length} categories • ${totalTags} launch tags`;
}

function renderRail(visibleCategories) {
  railEl.innerHTML = "";

  visibleCategories.forEach((category) => {
    const tagCount = category.subcategories.reduce((count, subcategory) => count + subcategory.tags.length, 0);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-card${category.id === state.activeCategoryId ? " is-active" : ""}${tagCount === 0 ? " is-muted" : ""}`;
    button.innerHTML = `
      <div class="category-topline">
        <span class="category-name">${category.title}</span>
        <span class="category-count">${tagCount} tags</span>
      </div>
    `;
    button.addEventListener("click", () => {
      state.activeCategoryId = category.id;
      state.activeSubcategoryId = category.subcategories[0]?.id || null;
      render();
    });
    railEl.appendChild(button);
  });
}

function renderBadges(category, activeSubcategory) {
  detailBadgesEl.innerHTML = "";

  [activeSubcategory?.title].filter(Boolean).forEach((label) => {
    const badge = document.createElement("span");
    badge.textContent = label;
    detailBadgesEl.appendChild(badge);
  });
}

function renderTabs(category) {
  tabsEl.innerHTML = "";

  category.subcategories.forEach((subcategory) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `subcategory-tab${subcategory.id === state.activeSubcategoryId ? " is-active" : ""}`;
    button.textContent = `${subcategory.title} • ${subcategory.tags.length}`;
    button.addEventListener("click", () => {
      state.activeSubcategoryId = subcategory.id;
      render();
    });
    tabsEl.appendChild(button);
  });
}

function renderTags(category, subcategory) {
  tagGridEl.innerHTML = "";

  if (!subcategory || subcategory.tags.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <strong>Not launched in V1</strong>
      <p>${category.curationNote}</p>
    `;
    tagGridEl.appendChild(empty);
    return;
  }

  subcategory.tags.forEach((tag) => {
    const card = document.createElement("a");
    card.className = "tag-card";
    card.href = tag.url;
    card.target = "_blank";
    card.rel = "noreferrer";
    card.innerHTML = `
      <div class="tag-meta">
        <span>${tag.label}</span>
      </div>
      <h3>${tag.name}</h3>
      <p>${tag.reason}</p>
    `;
    tagGridEl.appendChild(card);
  });
}

function render() {
  const visibleCategories = getVisibleCategories();
  const activeCategory = getActiveCategory(visibleCategories);

  state.activeCategoryId = activeCategory?.id || explorerData[0].id;
  state.activeSubcategoryId = getActiveSubcategory(activeCategory)?.id || null;

  renderRail(visibleCategories);
  updateStats(visibleCategories);

  if (!activeCategory) {
    detailKickerEl.textContent = "";
    detailTitleEl.textContent = "Try a broader search";
    detailDescriptionEl.textContent = "";
    detailBadgesEl.innerHTML = "";
    tabsEl.innerHTML = "";
    tagGridEl.innerHTML = "";
    return;
  }

  const activeSubcategory = getActiveSubcategory(activeCategory);

  detailKickerEl.textContent = "";
  detailTitleEl.textContent = activeCategory.title;
  detailDescriptionEl.textContent = "";

  renderBadges(activeCategory, activeSubcategory);
  renderTabs(activeCategory);
  renderTags(activeCategory, activeSubcategory);
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

render();
