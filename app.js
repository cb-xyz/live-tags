const explorerData = [
  {
    id: "eat",
    title: "Eat",
    subcategories: [
      {
        id: "eat-start-here",
        title: "Start here",
        tags: [
          { name: "Food", url: "https://share.livexyz.com/?theme=dark&tags=59ea276af86351000446c403&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be633d42bd000300064e&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Coffee & Tea", url: "https://share.livexyz.com/?theme=dark&tags=58193af11c464c000357b1cc&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Bakery", url: "https://share.livexyz.com/?theme=dark&tags=5511be3f37345d00030005d6&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Bagel Shop", url: "https://share.livexyz.com/?theme=dark&tags=5511be6537345d0003000689&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Food Hall", url: "https://share.livexyz.com/?theme=dark&tags=5537c683a1df780003000009&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Food Truck", url: "https://share.livexyz.com/?theme=dark&tags=5511be7137345d00030006c4&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Ice Cream Shop", url: "https://share.livexyz.com/?theme=dark&tags=5511be543d42bd0003000603&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      },
      {
        id: "eat-quick-bites",
        title: "Quick bites",
        tags: [
          { name: "Juice & Smoothies", url: "https://share.livexyz.com/?theme=dark&tags=5565be424052000003000011&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Burger Joint", url: "https://share.livexyz.com/?theme=dark&tags=5511be7e37345d00030006f5&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Deli", url: "https://share.livexyz.com/?theme=dark&tags=59c18724e41d550e7ccd7793&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Food Stand", url: "https://share.livexyz.com/?theme=dark&tags=55537b96774dae0003000077&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      },
      {
        id: "eat-cuisines",
        title: "Cuisines",
        tags: [
          { name: "Italian Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be743d42bd00030006a2&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Chinese Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be7737345d00030006df&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Mexican Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be4b3d42bd00030005e1&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Japanese Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be7637345d00030006d8&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Indian Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be8737345d0003000720&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Thai Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be6e37345d00030006b8&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Korean Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be5e3d42bd0003000634&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Middle Eastern Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be3c3d42bd00030005a0&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Caribbean Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be653d42bd000300065e&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Dominican Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be8337345d0003000709&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Colombian Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be863d42bd0003000700&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Argentine Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be5a3d42bd000300061f&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Brazilian Restaurant", url: "https://share.livexyz.com/?theme=dark&tags=5511be553d42bd0003000605&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      }
    ]
  },
  {
    id: "drink-nightlife",
    title: "Drink & Nightlife",
    subcategories: [
      {
        id: "drink-game-day",
        title: "Game day",
        tags: [
          { name: "Sports Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be4737345d0003000601&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be4f3d42bd00030005f4&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Irish Pub", url: "https://share.livexyz.com/?theme=dark&tags=5511be5c37345d0003000666&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Beer Halls & Beer Gardens", url: "https://share.livexyz.com/?theme=dark&tags=5511be783d42bd00030006bd&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Hotel Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be7e3d42bd00030006da&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      },
      {
        id: "drink-after-dark",
        title: "After dark",
        tags: [
          { name: "Cocktail Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be6737345d0003000693&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Wine Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be683d42bd000300066c&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Dive Bar", url: "https://share.livexyz.com/?theme=dark&tags=5511be6737345d0003000692&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Speakeasy", url: "https://share.livexyz.com/?theme=dark&tags=5511be5137345d0003000631&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Lounge", url: "https://share.livexyz.com/?theme=dark&tags=5511be4137345d00030005e3&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      }
    ]
  },
  {
    id: "things-to-do",
    title: "Things to Do",
    subcategories: [
      {
        id: "todo-see-nyc",
        title: "See NYC",
        tags: [
          { name: "Museum", url: "https://share.livexyz.com/?theme=dark&tags=5511be433d42bd00030005bc&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Art Gallery", url: "https://share.livexyz.com/?theme=dark&tags=5511be5337345d0003000639&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Landmarks & Historical Places", url: "https://share.livexyz.com/?theme=dark&tags=58193a2e03074200033b441c&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Tours & Visitor Info", url: "https://share.livexyz.com/?theme=dark&tags=55944185683c1a0003000155&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Zoos & Aquariums", url: "https://share.livexyz.com/?theme=dark&tags=56fd4c381c803a00030001ca&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      },
      {
        id: "todo-night-fun",
        title: "Shows & fun",
        tags: [
          { name: "Music Venue", url: "https://share.livexyz.com/?theme=dark&tags=5511be5037345d000300062b&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Theatre", url: "https://share.livexyz.com/?theme=dark&tags=5511be6e3d42bd0003000687&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Performing Arts Center", url: "https://share.livexyz.com/?theme=dark&tags=59e262e85602780004745802&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Movie Theater", url: "https://share.livexyz.com/?theme=dark&tags=5511be5d3d42bd000300062d&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Comedy Club", url: "https://share.livexyz.com/?theme=dark&tags=5511be423d42bd00030005bb&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Arcade", url: "https://share.livexyz.com/?theme=dark&tags=5511be5537345d0003000645&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Bowling Alley", url: "https://share.livexyz.com/?theme=dark&tags=5511be4f37345d0003000627&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      }
    ]
  },
  {
    id: "shopping",
    title: "Shopping",
    subcategories: [
      {
        id: "shopping-style",
        title: "Style & gifts",
        tags: [
          { name: "Clothing Store", url: "https://share.livexyz.com/?theme=dark&tags=56dd9db9f89aa300030006ed&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Thrift Store", url: "https://share.livexyz.com/?theme=dark&tags=5511be583d42bd0003000615&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Gift Shop", url: "https://share.livexyz.com/?theme=dark&tags=59c1871de41d550e7ccd775c&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Jewelry Store", url: "https://share.livexyz.com/?theme=dark&tags=56254d5b0d55a700030013e7&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Bags, Leather & Accessories", url: "https://share.livexyz.com/?theme=dark&tags=58193c7a03074200033b4426&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Sportswear Store", url: "https://share.livexyz.com/?theme=dark&tags=56fc08abf58106000300303b&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      },
      {
        id: "shopping-discovery",
        title: "Discovery shopping",
        tags: [
          { name: "Bookstore", url: "https://share.livexyz.com/?theme=dark&tags=5511be5f37345d0003000675&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Record Store", url: "https://share.livexyz.com/?theme=dark&tags=5511be483d42bd00030005d3&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Arts & Crafts Store", url: "https://share.livexyz.com/?theme=dark&tags=5511be633d42bd0003000653&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Flea Market", url: "https://share.livexyz.com/?theme=dark&tags=5511be553d42bd0003000606&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Home Goods Store", url: "https://share.livexyz.com/?theme=dark&tags=56250dab0d55a70003000583&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Sporting Goods Store", url: "https://share.livexyz.com/?theme=dark&tags=59c18720e41d550e7ccd7774&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      }
    ]
  },
  {
    id: "food-markets",
    title: "Food Markets",
    subcategories: [
      {
        id: "markets-core",
        title: "Core markets",
        tags: [
          { name: "Grocery Store", url: "https://share.livexyz.com/?theme=dark&tags=562514b9a61e5400030006bb&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Food Market", url: "https://share.livexyz.com/?theme=dark&tags=59f21bbd920cc20004f67a27&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Farmers Market", url: "https://share.livexyz.com/?theme=dark&tags=5612e996c8d34d000300288a&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Specialty Foods Store", url: "https://share.livexyz.com/?theme=dark&tags=59e786c253b8ce0004c33646&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Groceries & Convenience", url: "https://share.livexyz.com/?theme=dark&tags=58193a7c1c464c000357b1c8&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      },
      {
        id: "markets-specialty",
        title: "Specialty finds",
        tags: [
          { name: "Butcher", url: "https://share.livexyz.com/?theme=dark&tags=59c186fbe41d550e7ccd76a0&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Cheese Shop", url: "https://share.livexyz.com/?theme=dark&tags=5511be4537345d00030005f7&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Fruit Stand", url: "https://share.livexyz.com/?theme=dark&tags=59e4fc5984f44000049dce1a&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Seafood Market", url: "https://share.livexyz.com/?theme=dark&tags=59c186fbe41d550e7ccd76a1&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Spice Shop", url: "https://share.livexyz.com/?theme=dark&tags=5546992a9be0fc000300007b&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      }
    ]
  },
  {
    id: "wellness-beauty",
    title: "Wellness & Beauty",
    subcategories: [
      {
        id: "wellness-refresh",
        title: "Refresh",
        tags: [
          { name: "Spa", url: "https://share.livexyz.com/?theme=dark&tags=5592ee8807047d0003000511&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Massage & Relaxation", url: "https://share.livexyz.com/?theme=dark&tags=56dc73c2c55a626ccde58420&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Barber Shop", url: "https://share.livexyz.com/?theme=dark&tags=559e9a4fb647aa0003000030&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Hair Salon", url: "https://share.livexyz.com/?theme=dark&tags=559e99d6c30a3b000300004c&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Nail Salon", url: "https://share.livexyz.com/?theme=dark&tags=5511be4237345d00030005e6&pinSize=&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      },
      {
        id: "wellness-move",
        title: "Move",
        tags: [
          { name: "Yoga Studio", url: "https://share.livexyz.com/?theme=dark&tags=5592ad5b066c4b0003000334&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Pilates Studio", url: "https://share.livexyz.com/?theme=dark&tags=5592ad50066c4b0003000333&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Gym", url: "https://share.livexyz.com/?theme=dark&tags=5511be4a37345d000300060c&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" },
          { name: "Fitness Studio", url: "https://share.livexyz.com/?theme=dark&tags=5625029ea61e540003000235&pinSize=large&pinColor=&zoom=10.25&bearing=&lat=40.741598&lng=-73.943009&showSubwayLines=" }
        ]
      }
    ]
  },
  {
    id: "lodging",
    title: "Lodging",
    subcategories: [
      {
        id: "lodging-boroughs",
        title: "Boroughs",
        tags: [
          { name: "Manhattan", url: "#manhattan-lodging" },
          { name: "Brooklyn", url: "#brooklyn-lodging" },
          { name: "Queens", url: "#queens-lodging" },
          { name: "Bronx", url: "#bronx-lodging" },
          { name: "Staten Island", url: "#staten-island-lodging" }
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
const detailTitleEl = document.getElementById("detailTitle");
const statsEl = document.getElementById("stats");
const searchInput = document.getElementById("search");
const versionAHeaderEl = document.getElementById("versionAHeader");
const versionATabsEl = document.getElementById("versionATabs");
const versionATagGridEl = document.getElementById("versionATagGrid");
const versionBHeaderEl = document.getElementById("versionBHeader");
const versionBColumnsEl = document.getElementById("versionBColumns");

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function getTagEmoji(categoryId, tagName) {
  const name = normalize(tagName);
  if (categoryId === "eat") {
    if (name.includes("coffee") || name.includes("tea")) return "☕";
    if (name.includes("ice cream")) return "🍦";
    if (name.includes("juice") || name.includes("smoothies")) return "🧃";
    if (name.includes("bagel")) return "🥯";
    if (name.includes("bakery")) return "🥐";
    if (name.includes("burger")) return "🍔";
    if (name.includes("deli")) return "🥪";
    if (name.includes("food truck")) return "🚚";
    if (name.includes("food hall")) return "🍽️";
    if (name.includes("food stand")) return "🥡";
    if (name.includes("restaurant")) return "🍴";
    return "🍽️";
  }
  if (categoryId === "drink-nightlife") {
    if (name.includes("sports")) return "📣";
    if (name.includes("wine")) return "🍷";
    if (name.includes("cocktail")) return "🍸";
    if (name.includes("beer")) return "🍺";
    if (name.includes("irish")) return "☘️";
    if (name.includes("hotel")) return "🏨";
    if (name.includes("speakeasy")) return "🕯️";
    if (name.includes("lounge")) return "🛋️";
    return "🍸";
  }
  if (categoryId === "things-to-do") {
    if (name.includes("museum")) return "🏛️";
    if (name.includes("gallery")) return "🖼️";
    if (name.includes("landmarks")) return "📍";
    if (name.includes("tours")) return "🗺️";
    if (name.includes("music")) return "🎵";
    if (name.includes("theatre") || name.includes("performing")) return "🎭";
    if (name.includes("movie")) return "🎬";
    if (name.includes("comedy")) return "🎤";
    if (name.includes("arcade")) return "🕹️";
    if (name.includes("bowling")) return "🎳";
    if (name.includes("zoo") || name.includes("aquariums")) return "🐠";
    return "✨";
  }
  if (categoryId === "shopping") {
    if (name.includes("book")) return "📚";
    if (name.includes("record")) return "💿";
    if (name.includes("gift")) return "🎁";
    if (name.includes("jewelry")) return "💍";
    if (name.includes("sportswear") || name.includes("sporting")) return "👟";
    if (name.includes("flea")) return "🛍️";
    if (name.includes("home")) return "🏠";
    if (name.includes("arts")) return "🎨";
    if (name.includes("bags")) return "👜";
    return "🛍️";
  }
  if (categoryId === "food-markets") {
    if (name.includes("farmers")) return "🥕";
    if (name.includes("grocery")) return "🛒";
    if (name.includes("market")) return "🍎";
    if (name.includes("butcher")) return "🥩";
    if (name.includes("cheese")) return "🧀";
    if (name.includes("fruit")) return "🍓";
    if (name.includes("seafood")) return "🐟";
    if (name.includes("spice")) return "🌶️";
    return "🧺";
  }
  if (categoryId === "wellness-beauty") {
    if (name.includes("spa")) return "🧖";
    if (name.includes("massage")) return "💆";
    if (name.includes("barber")) return "💈";
    if (name.includes("hair")) return "✂️";
    if (name.includes("nail")) return "💅";
    if (name.includes("yoga")) return "🧘";
    if (name.includes("pilates")) return "🤸";
    if (name.includes("gym") || name.includes("fitness")) return "🏋️";
    return "✨";
  }
  if (categoryId === "lodging") {
    if (name.includes("manhattan")) return "🏙️";
    if (name.includes("brooklyn")) return "🌉";
    if (name.includes("queens")) return "👑";
    if (name.includes("bronx")) return "⚾";
    if (name.includes("staten")) return "⛴️";
    return "🏨";
  }
  return "📍";
}

function matchesQuery(category, query) {
  if (!query) return true;
  const q = normalize(query);
  return [
    category.title,
    ...category.subcategories.flatMap((subcategory) => [
      subcategory.title,
      ...subcategory.tags.map((tag) => tag.name)
    ])
  ].some((value) => normalize(value).includes(q));
}

function getVisibleCategories() {
  return explorerData.filter((category) => matchesQuery(category, state.query));
}

function getActiveCategory(visibleCategories) {
  return visibleCategories.find((category) => category.id === state.activeCategoryId) || visibleCategories[0] || explorerData[0];
}

function getActiveSubcategory(category) {
  return category.subcategories.find((subcategory) => subcategory.id === state.activeSubcategoryId) || category.subcategories[0];
}

function updateStats(visibleCategories) {
  const totalTags = visibleCategories.reduce(
    (count, category) => count + category.subcategories.reduce((sum, subcategory) => sum + subcategory.tags.length, 0),
    0
  );
  statsEl.textContent = `${visibleCategories.length} categories • ${totalTags} maps`;
}

function renderRail(visibleCategories) {
  railEl.innerHTML = "";
  visibleCategories.forEach((category) => {
    const tagCount = category.subcategories.reduce((sum, subcategory) => sum + subcategory.tags.length, 0);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-card${category.id === state.activeCategoryId ? " is-active" : ""}`;
    button.innerHTML = `
      <div class="category-topline">
        <span class="category-name">${category.title}</span>
        <span class="category-count">${tagCount}</span>
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

function renderTagCard(categoryId, tag) {
  const emoji = getTagEmoji(categoryId, tag.name);
  return `
    <a class="tag-card" href="${tag.url}" target="_blank" rel="noreferrer">
      <h3>${emoji} ${tag.name}</h3>
    </a>
  `;
}

function renderVersionA(category, activeSubcategory) {
  versionAHeaderEl.textContent = "Version A";
  versionATabsEl.innerHTML = "";
  category.subcategories.forEach((subcategory) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `subcategory-tab${subcategory.id === activeSubcategory.id ? " is-active" : ""}`;
    button.textContent = subcategory.title;
    button.addEventListener("click", () => {
      state.activeSubcategoryId = subcategory.id;
      render();
    });
    versionATabsEl.appendChild(button);
  });
  versionATagGridEl.innerHTML = activeSubcategory.tags.map((tag) => renderTagCard(category.id, tag)).join("");
}

function renderVersionB(category) {
  versionBHeaderEl.textContent = "Version B";
  versionBColumnsEl.innerHTML = category.subcategories
    .map((subcategory) => {
      return `
        <section class="subcategory-column">
          <h3 class="subcategory-column-title">${subcategory.title}</h3>
          <div class="tag-grid split-grid">
            ${subcategory.tags.map((tag) => renderTagCard(category.id, tag)).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function render() {
  const visibleCategories = getVisibleCategories();
  const activeCategory = getActiveCategory(visibleCategories);

  state.activeCategoryId = activeCategory.id;
  state.activeSubcategoryId = getActiveSubcategory(activeCategory).id;

  renderRail(visibleCategories);
  updateStats(visibleCategories);

  const activeSubcategory = getActiveSubcategory(activeCategory);
  detailTitleEl.textContent = activeCategory.title;
  renderVersionA(activeCategory, activeSubcategory);
  renderVersionB(activeCategory);
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

render();
