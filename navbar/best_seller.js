let data_best_seller = [
    {
        id:1,
        title: "Coffee Culture Lip Scrub",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
        image:'https://cdn.shopify.com/s/files/1/0906/2558/products/CCLipScrubWBG-3.jpg?v=1628610315',
        price: 499
    },
    {
        id: 2,
        title: "LIP ZIP MATTE TOPPER",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
        price: 499
    },
    {
        id: 3,
        title: "MATTE AS HELL CRAYON LIPISTICK",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1640791955",
        price: 799
    },
    {
        id: 3,
        title: "KOHL OF HONOUR INTENSE KAJAL",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513",
        price: 249
    },
    {
        title: "TIPSY LIPS MOISTURIZING BALM",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
        price: 199
    },
    {
        id: 4,
        title: "CONTOUR DE FORCE FACE PALLETE",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
        price: 799
    },
    {
        id: 5,
        title: "ACE OF FACE FOUNDATION STICK",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1639582652",
        price: 999
    },
    {
        id: 6,
        title: "Mettle Satin Lipstick Sophie [Bright Fuchsia Pink/Fuchsia]",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706264477779.jpg?v=1619116135",
        price: 499
    },
    {
        id: 7,
        title: "Eye Warned You So! Double Matte Eyeliner",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-eye-warned-you-so-double-matte-eyeliner-03-green-book-marsh-green-13954500100179.jpg?v=1619116854",
        price: 349
    },
    {
        id: 8,
        title:'Coffee Culture Lip Scrub',
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/CCLipScrubWBG-3.jpg?v=1628610315",
        title2: "Mettle Liquid Lipstick - 01 Lyra (Cool Toned Plum)",
        image2: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-liquid-lipstick-01-lyra-cool-toned-plum-12067404054611.jpg?v=1619109871",
        price: 599
    },
    {
        id: 9,
        title: "Mettle Matte Lipstick - 05 Hedone",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-05-hedone-orange-toned-red-12796087369811.jpg?v=1619110132",
        price: 549
    },
    {
        id: 10,
        title: "Matte As Hell Crayon Lipstick",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
        price: 799
    },
    {
        id: 11,
        title: "Matte Attack Transferproof Lipstick",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
        price: 699
    },
    {
        id: 12,
        title: "Smudge Me Not Liquid Lipstick Minis Set",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
        price: 799
    },
    {
        id: 13,
        title: "Smudge Me Not Liquid Lipstick",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",
        price: 499
    },
    {
        id: 14,
        title: "Smudge Me Not Minis Set - Black",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-minis-set-black-14964843151443.jpg?v=1620651368",
        price: 799
    },
    {
        id: 15,
        title: "Smudge Me Not Minis Set - Mint Green",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-mint-green-minis-set-14792910340179.jpg?v=1620652722",
        price: 799
    },
    {
        id: 16,
        title: "Mettle Satin Lipstick",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg?v=1619116113",
        price: 499
    },
    {
        id: 17,
        title: "Matte As Hell Crayon Lipstick Minis Set",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1623073051",
        price: 1099
    },
    {
        id: 18,
        title: "Blend Trend Eyeshadow Brush - 043…",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
        price: 399
    },
    {
        id: 19,
        title: "Blend Trend Face Brush - 003 Cont…",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        price: 399
    },
    {
        id: 20,
        title: "Blend Trend Foundation Brush - 052…",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
        price: 399
    },
    {
        id: 21,
        title: "Blend Trend Dual Face Brush - 075…",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
        price: 599
    },
    {
        id: 22,
        title: "Blend Trend Eyeshadow Brush - 042…",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
        price: 399
    },
    {
        id: 23,
        title: "EYES and FACE Combo",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1.jpg?v=1630683833",
        price: 649
    },
    {
        id: 25,
        title: "Blend Trend Face Brush - 006 Highl…",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        price: 399
    },
    {
        id: 26,
        title: "Blend Trend Face Brush - 007 Powder",
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
        price: 399
    }
];

localStorage.setItem("skin_care_data",JSON.stringify(data_best_seller))
export default data_best_seller;