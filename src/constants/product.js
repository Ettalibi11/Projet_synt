// src/constants/product.js

// --- Import Image Assets ---
// Corrected to match the 12 actual files shown in the screenshot.
// Assumes .jpeg extension, adjust if needed (e.g., .jpg, .png)

import flowerVase from '../assets/Flowers/flowerVase.jpeg';     // [0] Hydrangea & Rose
import flowerVase1 from '../assets/Flowers/flowerVase1.jpeg';    // [1] Peony Mix
import flowerVase2 from '../assets/Flowers/flowerVase2.jpeg';    // [2] Snapdragon
import flowerVase3 from '../assets/Flowers/flowerVase3.jpeg';    // [3] Pink Tulips
import flowerVase4 from '../assets/Flowers/flowerVase4.jpeg';    // [4] White Stock Mix
import flowerVase5 from '../assets/Flowers/flowerVase5.jpeg';    // [5] White Irises
import flowerVase6 from '../assets/Flowers/flowerVase6.jpeg';    // [6] Sunset Tulips
import flowerVase7 from '../assets/Flowers/flowerVase7.jpeg';    // [7] Lush Peonies
// No flowerVase8.jpeg exists
import flowerVase9 from '../assets/Flowers/flowerVase9.jpeg';    // [8] Lavender Lisianthus (Matches screenshot for flowerVase9)
import flowerVase10 from '../assets/Flowers/flowerVase10.jpeg';   // [9] Peach Gladiolus (Matches screenshot for flowerVase10)
import flowerVase11 from '../assets/Flowers/flowerVase11.jpeg';   // [10] Coral Peonies (Matches screenshot for flowerVase11)
import flowerVase12 from '../assets/Flowers/flowerVase12.jpeg';   // [11] Pink Stargazer Lilies (Matches screenshot for flowerVase12)

// --- Product Data Array (Now correctly 12 items) ---

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
    id: 'prod_fv_002',
    name: 'Abundant Peony Mix',
    description: 'A generous bouquet of lush pink and white peonies, perfect for brightening any room.',
    price: 64.99,
    category: 'Flower Arrangements',
    type: 'Peonies',
    image: flowerVase1,
    altText: 'Pink and white peonies in a white pitcher and a clear glass vase on a kitchen counter.',
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
    id: 'prod_fv_004',
    name: 'Classic Pink Tulips',
    description: 'A charming collection of fresh light pink tulips displayed in a rustic ceramic pitcher.',
    price: 34.99,
    category: 'Flower Arrangements',
    type: 'Tulips',
    image: flowerVase3,
    altText: 'Light pink tulips arranged in a white and beige ceramic pitcher on a counter.',
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
    id: 'prod_fv_006',
    name: 'Graceful White Irises',
    description: 'A clean and modern arrangement of pure white irises, symbolizing purity and hope.',
    price: 39.99,
    category: 'Flower Arrangements',
    type: 'Irises',
    image: flowerVase5,
    altText: 'Clear glass vase filled with white irises on a marble table next to a coffee cup.',
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
  // Corresponds to flowerVase12.jpeg [11]
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
  // Removed the object that tried to use the non-existent flowerVase8
];

// --- Export the Data ---
export default products;