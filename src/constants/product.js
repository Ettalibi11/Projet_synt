

import flowerVase from '../assets/Flowers/flowerVase.jpeg';     
import flowerVase1 from '../assets/Flowers/flowerVase1.jpeg';    // [1] Peony Mix
import flowerVase2 from '../assets/Flowers/flowerVase2.jpeg';    // [2] Snapdragon
import flowerVase3 from '../assets/Flowers/flowerVase3.jpeg';    // [3] Pink Tulips
import flowerVase4 from '../assets/Flowers/flowerVase4.jpeg';    // [4] White Stock Mix
import flowerVase5 from '../assets/Flowers/flowerVase5.jpeg';    // [5] White Irises
import flowerVase6 from '../assets/Flowers/flowerVase6.jpeg';    // [6] Sunset Tulips
import flowerVase7 from '../assets/Flowers/flowerVase7.jpeg';    // [7] Lush Peonies
import flowerVase9 from '../assets/Flowers/flowerVase9.jpeg';    // [8] Lavender Lisianthus (Matches screenshot for flowerVase9)
import flowerVase10 from '../assets/Flowers/flowerVase10.jpeg';   // [9] Peach Gladiolus (Matches screenshot for flowerVase10)
import flowerVase11 from '../assets/Flowers/flowerVase11.jpeg';   // [10] Coral Peonies (Matches screenshot for flowerVase11)
import flowerVase12 from '../assets/Flowers/flowerVase12.jpeg';   // [11] Pink Stargazer Lilies (Matches screenshot for flowerVase12)

// === NEW: Plant Image Imports  
import monsteraDeliciosa from '../assets/plants/andrew-reshetov-f8tr3-MJzhc-unsplash.jpg';        // Corresponds to image 1 (foreground) or 12
import smallCactus from '../assets/plants/feey-Ug5roZHlC78-unsplash.jpg';                  // Corresponds to image 2
import birdsNestFern from '../assets/plants/feey-ZQbpzgoWYrA-unsplash.jpg';              // Corresponds to image 3
import hangingPothos from '../assets/plants/leonie-vuilleumier-C_zMpjHZHMw-unsplash.jpg';              // Corresponds to image 4
import pileaPeperomioides from '../assets/plants/palm-tree-house-plant-pot.jpg';    // Corresponds to image 6
import fiddleLeafFig from '../assets/plants/peace-lily-plant-white-pot.jpg';              // Corresponds to image 9
import peaceLily from '../assets/plants/stephanie-harvey-T0inbt7nRME-unsplash.jpg';                      // Corresponds to image 17
import gasteriaSucculent from '../assets/plants/stephanie-harvey-vHkj3fX9wCk-unsplash.jpg';      // Corresponds to image 5
import rhaphidophoraTetrasperma from '../assets/plants/zobia-shakar-bLqX-KCQPMc-unsplash.jpg'; // Corresponds to image 8
import rhaphidophoraTetrasperma1 from '../assets/plants/feey-gTMnUAkPvlQ-unsplash.jpg'; // Corresponds to image 8
import rhaphidophoraTetrasperma2 from '../assets/plants/kara-eads-EEPhsCp5Mpc-unsplash.jpg'; // Corresponds to image 8
import rhaphidophoraTetrasperma3 from '../assets/plants/kari-shea-3_cyj5YkhTs-unsplash.jpg'; // Corresponds to image 8



const products = [
  // Corresponds to flowerVase.jpeg [0]
  {
    id: 'prod_fv_001',
    name: 'Hydrangea & Rose Dream',
    description: 'A stunning mix of soft roses and lush blue hydrangeas in a clear glass vase.',
    price: 59.99,
    category: 'Flower Arrangements',
    type: 'Mixed Bouquet',
    image: flowerVase,
    altText: 'Glass vase with pale pink roses and blue hydrangeas on a kitchen counter.',
  },
  // Corresponds to flowerVase1.jpeg [1]
 
   {
    id: 'prod_pl_008',
    name: 'Gasteria Succulent',
    description: 'A unique succulent with thick, tongue-shaped leaves often marked with interesting patterns.',
    price: 15.99,
    category: 'Plants',
    type: 'Succulent',
    image: gasteriaSucculent,
    altText: 'Gasteria succulent with speckled green leaves in a small white pot.',
  },
  // Corresponds to flowerVase2.jpeg [2]
  {
    id: 'prod_fv_003',
    name: 'Sunset Snapdragon Bouquet',
    description: 'Tall, vibrant snapdragons in warm sunset hues presented in a simple glass vase.',
    price: 45.99,
    category: 'Flower Arrangements',
    type: 'Snapdragons',
    image: flowerVase2,
    altText: 'Tall glass vase filled with peach and yellow snapdragons next to a vase of tulips.',
  },
  // Corresponds to flowerVase3.jpeg [3]
 
   {
    id: 'prod_pl_004',
    name: 'Hanging Pothos Plant',
    description: 'A versatile and trailing vine with heart-shaped, variegated leaves. Great for hanging baskets or shelves.',
    price: 22.00,
    category: 'Plants',
    type: 'Hanging Plant',
    image: hangingPothos,
    altText: 'Variegated pothos plant trailing from a white pot on a black hanging shelf.',
  },
  // Corresponds to flowerVase4.jpeg [4]
  {
    id: 'prod_fv_005',
    name: 'Elegant White Stock & Rose Mix',
    description: 'Tall stems of fragrant white stock complemented by delicate roses and peonies in a stylish vase.',
    price: 55.99,
    category: 'Flower Arrangements',
    type: 'Mixed Bouquet',
    image: flowerVase4,
    altText: 'White ribbed vase with tall white stock flowers, pale pink roses, and white peonies.',
  },
  // Corresponds to flowerVase5.jpeg [5]
 
   {
    id: 'prod_pl_009',
    name: 'Mini Monstera (Rhaphidophora)',
    description: 'A vining plant with split leaves resembling a smaller Monstera Deliciosa. Fast-growing and trendy.',
    price: 32.50,
    category: 'Plants',
    type: 'Vining Plant',
    image: rhaphidophoraTetrasperma,
    altText: 'Rhaphidophora tetrasperma plant with split leaves in a dark pot on a white table.',
  },
  // Corresponds to flowerVase6.jpeg [6]
  {
    id: 'prod_fv_007',
    name: 'Sunset Tulip Cascade',
    description: 'A vibrant cascade of tulips in warm sunset colours - pink, peach, and red.',
    price: 42.99,
    category: 'Flower Arrangements',
    type: 'Tulips',
    image: flowerVase6,
    altText: 'Glass vase overflowing with pink, peach, and red tulips catching sunlight on a counter.',
  },
  // Corresponds to flowerVase7.jpeg [7]
  {
    id: 'prod_fv_008',
    name: 'Lush Peony Bouquet',
    description: 'An abundant bouquet showcasing stunning, full blooms of pink and white peonies.',
    price: 62.99,
    category: 'Flower Arrangements',
    type: 'Peonies',
    image: flowerVase7,
    altText: 'Clear glass vase packed with large pink and white peony blooms on a kitchen counter.',
  },
  // Corresponds to flowerVase9.jpeg [8] (Skipped index 8 in filenames)
 
  // Corresponds to flowerVase10.jpeg [9]
  {
    id: 'prod_fv_010', // Renumbered ID
    name: 'Peach Gladiolus Grace', // Matches image flowerVase10.jpeg
    description: 'Tall, elegant stems of beautiful gladiolus flowers in a soft peach hue.',
    price: 44.99,
    category: 'Flower Arrangements',
    type: 'Gladiolus',
    image: flowerVase10, // Corrected import variable
    altText: 'Glass vase with tall stems of pale peach gladiolus flowers on a kitchen counter.',
  },
  // Corresponds to flowerVase11.jpeg [10]
 
  // Corresponds to flowerVase12.jpeg [11]
 
  {
    id: 'prod_pl_001',
    name: 'Monstera Deliciosa',
    description: 'Iconic and easy-care, this Swiss Cheese Plant brings a lush, tropical vibe to any space.',
    price: 38.99,
    category: 'Plants',
    type: 'Foliage Plant',
    image: monsteraDeliciosa,
    altText: 'Monstera deliciosa plant with large fenestrated leaves in a white pot.',
  },
   {
    id: 'prod_fv_011', // Renumbered ID
    name: 'Coral Charm Peonies', // Matches image flowerVase11.jpeg
    description: 'A captivating bunch of peonies displaying a vibrant and cheerful coral hue.',
    price: 54.99,
    category: 'Flower Arrangements',
    type: 'Peonies',
    image: flowerVase11, // Corrected import variable
    altText: 'Clear glass vase holding several vibrant coral-pink peony flowers on a counter.',
  },
  {
    id: 'prod_pl_002',
    name: 'Miniature Cactus',
    description: 'A charming little cactus, perfect for desktops or small shelves. Low maintenance and hardy.',
    price: 12.50,
    category: 'Plants',
    type: 'Cactus',
    image: smallCactus,
    altText: 'Small green cactus in a brown plastic pot against a white background.',
  },
  {
    id: 'prod_pl_003',
    name: 'Bird\'s Nest Fern',
    description: 'Features bright green, wavy fronds that unfurl from a central rosette, resembling a bird\'s nest.',
    price: 24.99,
    category: 'Plants',
    type: 'Fern',
    image: birdsNestFern,
    altText: 'Bird\'s nest fern with wide, wavy green fronds in a white pot on a wooden table.',
  },
   {
    id: 'prod_fv_012', // Renumbered ID
    name: 'Pink Stargazer Lily Spectacle', // Matches image flowerVase12.jpeg
    description: 'An impressive and fragrant display of large pink and white stargazer lilies.',
    price: 58.99,
    category: 'Flower Arrangements',
    type: 'Lilies',
    image: flowerVase12, // Corrected import variable
    altText: 'Large glass vase filled with pink and white stargazer lilies on a kitchen counter.',
  },
 
  {
    id: 'prod_pl_005',
    name: 'Pilea Peperomioides',
    description: 'Known as the Chinese Money Plant, its unique, coin-shaped leaves make it a popular choice.',
    price: 19.99,
    category: 'Plants',
    type: 'Foliage Plant',
    image: pileaPeperomioides,
    altText: 'Pilea Peperomioides plant with round green leaves in a white pot.',
  },
  {
    id: 'prod_pl_006',
    name: 'Fiddle Leaf Fig Tree',
    description: 'A statement plant with large, violin-shaped leaves. Adds a touch of drama and elegance.',
    price: 75.00,
    category: 'Plants',
    type: 'Tree',
    image: fiddleLeafFig,
    altText: 'Fiddle leaf fig tree with large green leaves in a woven basket.',
  },
   {
    id: 'prod_fv_009', // Renumbered ID
    name: 'Lavender Lisianthus Cloud', // Matches image flowerVase9.jpeg
    description: 'A soft and textured arrangement resembling a cloud of delicate lavender lisianthus blooms.',
    price: 48.99,
    category: 'Flower Arrangements',
    type: 'Lisianthus',
    image: flowerVase9, // Corrected import variable
    altText: 'Large glass vase filled with ruffled lavender lisianthus flowers on a kitchen counter.',
  },
  {
    id: 'prod_pl_007',
    name: 'Peace Lily Plant',
    description: 'An elegant plant known for its air-purifying qualities and graceful white spathe flowers.',
    price: 29.99,
    category: 'Plants',
    type: 'Flowering Plant',
    image: peaceLily,
    altText: 'Peace lily plant with dark green leaves and white flowers in a white cylindrical pot.',
  },
 
 
  {
    id: 'prod_pl_009',
    name: 'Mini Monstera (Rhaphidophora)',
    description: 'A vining plant with split leaves resembling a smaller Monstera Deliciosa. Fast-growing and trendy.',
    price: 32.50,
    category: 'Plants',
    type: 'Vining Plant',
    image: rhaphidophoraTetrasperma1,
    altText: 'Rhaphidophora tetrasperma plant with split leaves in a dark pot on a white table.',
  },
   {
    id: 'prod_fv_006',
    name: 'Graceful White Irises',
    description: 'A clean and modern arrangement of pure white irises, symbolizing purity and hope.',
    price: 39.99,
    category: 'Flower Arrangements',
    type: 'Irises',
    image: flowerVase5,
    altText: 'Clear glass vase filled with white irises on a marble table next to a coffee cup.',
  },
  {
    id: 'prod_pl_009',
    name: 'Mini Monstera (Rhaphidophora)',
    description: 'A vining plant with split leaves resembling a smaller Monstera Deliciosa. Fast-growing and trendy.',
    price: 32.50,
    category: 'Plants',
    type: 'Vining Plant',
    image: rhaphidophoraTetrasperma2,
    altText: 'Rhaphidophora tetrasperma plant with split leaves in a dark pot on a white table.',
  },
   {
    id: 'prod_fv_002',
    name: 'Abundant Peony Mix',
    description: 'A generous bouquet of lush pink and white peonies, perfect for brightening any room.',
    price: 64.99,
    category: 'Flower Arrangements',
    type: 'Peonies',
    image: flowerVase1,
    altText: 'Pink and white peonies in a white pitcher and a clear glass vase on a kitchen counter.',
  },
  {
    id: 'prod_pl_009',
    name: 'Mini Monstera (Rhaphidophora)',
    description: 'A vining plant with split leaves resembling a smaller Monstera Deliciosa. Fast-growing and trendy.',
    price: 32.50,
    category: 'Plants',
    type: 'Vining Plant',
    image: rhaphidophoraTetrasperma3,
    altText: 'Rhaphidophora tetrasperma plant with split leaves in a dark pot on a white table.',
  },
   {
    id: 'prod_fv_004',
    name: 'Classic Pink Tulips',
    description: 'A charming collection of fresh light pink tulips displayed in a rustic ceramic pitcher.',
    price: 34.99,
    category: 'Flower Arrangements',
    type: 'Tulips',
    image: flowerVase3,
    altText: 'Light pink tulips arranged in a white and beige ceramic pitcher on a counter.',
  },
  
];

// --- Export the Data ---
export default products;