export const PRODUCT_IMAGES = {
  DOLPHIN: import.meta.env.VITE_RO_DOLPHIN || "",
  AQUA_MARS: import.meta.env.VITE_RO_AQUAMARS || "",
  MERLIN: import.meta.env.VITE_RO_MERLIN || "",
  MATRIX_AQUA: import.meta.env.VITE_RO_MATRIX_AQUA || "",
  AQUA_PEARL: import.meta.env.VITE_RO_AQUA_PEARL || "",
  AQUA_XL: import.meta.env.VITE_RO_AQUA_XL || "",
  AQUA_JADE: import.meta.env.VITE_RO_AQUA_JADE || "",
  AQUA_WATE_LILY: import.meta.env.VITE_RO_AQUA_WATE_LILY || "",
  AQUA_ONIX: import.meta.env.VITE_RO_AQUA_ONIX || "",
  AQUA_LEXZON: import.meta.env.VITE_RO_AQUA_LEXZON || "",
  AQUA_2090: import.meta.env.VITE_RO_AQUA_2090 || "",
  LX_ONE_TITANIUM: import.meta.env.VITE_RO_LX_ONE_TITANIUM || "",
  HI_FLO: import.meta.env.VITE_RO_HI_FLO || "",
  AQUA_ROMA: import.meta.env.VITE_RO_AQUA_ROMA || "",
  AQUA_LIBRA: import.meta.env.VITE_RO_AQUA_LIBRA || "",
  SONNET: import.meta.env.VITE_RO_SONNET || "",
  AQUA_QUEEN: import.meta.env.VITE_RO_AQUA_QUEEN || "",
};

export const RO_WATER_PURIFIERS = [

{
id:1,
slug:"dolphin-purosis-ro-aqua-grand-plus",
category:"Domestic",
name:"Dolphin Purosis RO Aqua Grand Plus",
image:PRODUCT_IMAGES.DOLPHIN,
description:"Advanced 5-stage RO water purifier delivering pure and safe drinking water with high purification efficiency.",

pricing:{
basePrice:11499,
currency:"INR",
unit:"Unit",
originalPrice:13299
},

specifications:{
purificationMethod:"RO",
purificationStages:"5 Stages",
storageTankCapacity:"11 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
generalService:{available:true,frequency:"Once every 6 months (Free)"},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:2,
slug:"aqua-mars-ro-water-purifier",
category:"Domestic",
name:"Aqua Mars RO Water Purifier",
image:PRODUCT_IMAGES.AQUA_MARS,
description:"7-stage RO + UV + UF + Mineral Balance purification system ensuring safe and mineral-rich drinking water.",

pricing:{
basePrice:9500,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UV + UF + Mineral Balance",
purificationStages:"7 Stages",
storageTankCapacity:"10 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
generalService:{available:true,frequency:"Once every 6 months"},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:3,
slug:"merlin-ro-copper-mineral-water-purifier",
category:"Domestic",
name:"Merlin RO Copper Mineral Water Purifier",
image:PRODUCT_IMAGES.MERLIN,
description:"High performance RO + UV + UF water purifier with copper and mineral technology for healthier drinking water.",

pricing:{
basePrice:15000,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UV + UF + Minerals + Copper",
purificationStages:"7 Stages",
storageTankCapacity:"10 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:4,
slug:"matrix-aqua-2029-ro-water-purifier",
category:"Domestic",
name:"Matrix Aqua 2029",
image:PRODUCT_IMAGES.MATRIX_AQUA,
description:"Premium RO purifier with copper enhancement delivering pure mineral enriched drinking water.",

pricing:{
basePrice:12500,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UF + Copper",
purificationStages:"7 Stages",
storageTankCapacity:"12 Liters",
purificationCapacity:"13–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:5,
slug:"aqua-pearl-ro-uv-alkaline",
category:"Domestic",
name:"Aqua Pearl RO UV Alkaline",
image:PRODUCT_IMAGES.AQUA_PEARL,
description:"7-stage RO + UV + Alkaline purification system providing healthy pH balanced drinking water.",

pricing:{
basePrice:11300,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UV + Alkaline",
purificationStages:"7 Stages",
storageTankCapacity:"10 Liters",
purificationCapacity:"12 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:6,
slug:"aqua-xl-ro-water-purifier",
category:"Domestic",
name:"Aqua XL",
image:PRODUCT_IMAGES.AQUA_XL,
description:"Powerful RO purifier designed for large family water consumption with advanced filtration.",

pricing:{
basePrice:11800,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UF",
purificationStages:"7 Stages",
storageTankCapacity:"12 Liters",
purificationCapacity:"13–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:7,
slug:"aqua-jade-ro-alkaline-water-purifier",
category:"Domestic",
name:"Aqua Jade",
image:PRODUCT_IMAGES.AQUA_JADE,
description:"Advanced RO purifier with alkaline technology delivering mineral rich drinking water.",

pricing:{
basePrice:11700,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UV + UF + TDS + Alkaline",
purificationStages:"7 Stages",
storageTankCapacity:"12 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:8,
slug:"aqua-wate-lily-ro-uv-uf-copper",
category:"Domestic",
name:"Aqua Wate Lily",
image:PRODUCT_IMAGES.AQUA_WATE_LILY,
description:"Premium RO + UV + UF + Copper purification system delivering mineral enriched drinking water.",

pricing:{
basePrice:12000,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UV + UF + Copper",
purificationStages:"7 Stages",
storageTankCapacity:"11 Liters",
purificationCapacity:"13 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:9,
slug:"aqua-onix-ro-water-purifier",
category:"Domestic",
name:"Aqua Onix",
image:PRODUCT_IMAGES.AQUA_ONIX,
description:"Modern RO purifier with mineral technology ensuring healthy drinking water.",

pricing:{
basePrice:10700,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UF + Minerals",
purificationStages:"7 Stages",
storageTankCapacity:"12 Liters",
purificationCapacity:"11 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:10,
slug:"aqua-lexzon-ro-water-purifier",
category:"Domestic",
name:"Aqua Lexzon",
image:PRODUCT_IMAGES.AQUA_LEXZON,
description:"Efficient 5 stage RO purifier designed for reliable home water purification.",

pricing:{
basePrice:9700,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO",
purificationStages:"5 Stages",
storageTankCapacity:"11 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:11,
slug:"aqua-2090-ro-copper-alkaline",
category:"Domestic",
name:"Aqua 2090",
image:PRODUCT_IMAGES.AQUA_2090,
description:"RO purifier with active copper and alkaline filter for healthier drinking water.",

pricing:{
basePrice:12500,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + Active Copper + Alkaline Filter",
purificationStages:"7 Stages",
storageTankCapacity:"10 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:12,
slug:"lx-one-titanium-series",
category:"Domestic",
name:"LX One Titanium Series",
image:PRODUCT_IMAGES.LX_ONE_TITANIUM,
description:"BIS Certified RO + UV + UF + TDS + Alkaline + Copper purifier with premium purification technology.",

pricing:{
basePrice:13200,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UV + UF + TDS + Alkaline + Copper",
purificationStages:"7 Stages",
storageTankCapacity:"8 Liters",
purificationCapacity:"13 Liters / Hour",
certification:"BIS IS 16240:2023"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:13,
slug:"hi-flo-ro-water-purifier",
category:"Domestic",
name:"Hi Flo",
image:PRODUCT_IMAGES.HI_FLO,
description:"High flow RO purifier with copper and alkaline filtration for superior water quality.",

pricing:{
basePrice:11400,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + Copper + Alkaline",
purificationStages:"7 Stages",
storageTankCapacity:"12 Liters",
purificationCapacity:"15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:14,
slug:"aqua-roma-ro-water-purifier",
category:"Domestic",
name:"Aqua Roma",
image:PRODUCT_IMAGES.AQUA_ROMA,
description:"RO purifier with TDS controller and alkaline filter for balanced drinking water.",

pricing:{
basePrice:11800,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UF + TDS Controller + Alkaline Filter",
purificationStages:"7 Stages",
storageTankCapacity:"10 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:15,
slug:"aqua-libra-ro-water-purifier",
category:"Domestic",
name:"Aqua Libra",
image:PRODUCT_IMAGES.AQUA_LIBRA,
description:"Advanced RO purifier with alkaline technology and TDS controller.",

pricing:{
basePrice:12100,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UF + TDS Controller + Alkaline Filter",
purificationStages:"7 Stages",
storageTankCapacity:"10 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:16,
slug:"sonnet-ro-water-purifier",
category:"Domestic",
name:"Sonnet RO Water Purifier",
image:PRODUCT_IMAGES.SONNET,
description:"Affordable RO purifier with TDS controller providing safe drinking water.",

pricing:{
basePrice:6800,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + UF + TDS Controller",
purificationStages:"7 Stages",
storageTankCapacity:"10 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
},

{
id:17,
slug:"aqua-queen-ro-water-purifier",
category:"Domestic",
name:"Aqua Queen RO Water Purifier",
image:PRODUCT_IMAGES.AQUA_QUEEN,
description:"Reverse Osmosis water purifier with carbon filtration ensuring clean and safe drinking water.",

pricing:{
basePrice:6800,
currency:"INR",
unit:"Unit"
},

specifications:{
purificationMethod:"RO + Carbon Filtration",
purificationStages:"7 Stages",
storageTankCapacity:"10 Liters",
purificationCapacity:"12–15 Liters / Hour"
},

services:{
installation:{available:true,free:true},
warranty:{available:true,period:"1 Year"},
customerSupport:"24/7 Customer Service"
}
}

];