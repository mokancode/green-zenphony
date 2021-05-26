import { v4 as generateUniqueID } from "uuid";

const gourmet = [
  {
    id: generateUniqueID(),
    foodName: "G1. Wheel of Dharma",
    foodDescription:
      "Shitake mushrooms on a bed of mashed yams bordered with sweet peas & topped with almond slices in a golden aromatic sauce",
    foodPrice: "15.95",
  },
  {
    id: generateUniqueID(),
    foodName: "G2. Taro Veggie Chicken a la King",
    foodDescription:
      "A remarkable dish! Diced zucchini, soy protein chicken, black mushrooms, red bell peppers, fresh soy beans & jicama sautéed in our special light brown sauce, topped with cashew nuts and served on a mashed taro ring.",
    foodPrice: "14.75",
  },
  {
    id: generateUniqueID(),
    foodName: "G3. Sizzling Delight",
    foodDescription: "Portobello mushrooms, jicama, asparagus, soy chicken & pineapple stir fried in a basil brown sauce",
    foodPrice: "15.50",
  },
  {
    id: generateUniqueID(),
    foodName: "G4. West Lake",
    foodDescription:
      "Steamed shitake mushrooms, sliced soy chicken & shredded celery, simmered with chef special light brown sauce served on a bed of green vegetable.",
    foodPrice: "15.95",
  },
  {
    id: generateUniqueID(),
    foodName: "G5. Mango Madness",
    foodDescription: "Soy protein nuggets, fresh mango slices asparagus, red & green bell peppers sautéed in chef's tangy special sauce.",
    foodPrice: "14.95",
  },
  {
    id: generateUniqueID(),
    foodName: "G6. Phoenix Soong",
    foodDescription:
      "Finely diced soy ham, veggie steak, fresh mushrooms red bell peppers, jicama & sautéed on a bed of thin rice noodles topped with pine nuts served with fresh lettuce.",
    foodPrice: "14.75",
  },
  {
    id: generateUniqueID(),
    foodName: "G7. Pinapple Veggie Duck",
    foodDescription:
      "Fresh pineapple chunks, veggie duck, green & red bell peppers, zucchini, fresh soy beans served in chef's special sauce.",
    foodPrice: "15.50",
  },
  {
    id: generateUniqueID(),
    foodName: "G8. Sizzling Mushroom Steak",
    foodDescription:
      "Hearty mushroom steak topped with chef’ special sauce served with broccoli, snow peas, fresh mushrooms, zucchini, bell peppers, carrots, & potatoes.",
    foodPrice: "14.95",
  },
  {
    id: generateUniqueID(),
    foodName: "G9. Sizzling Wonder",
    foodDescription:
      "Roasted soy fish fillets nestled over a bed of fresh mushrooms tomatoes, snow peas, broccoli & bean sprouts in chef's special sauce",
    foodPrice: "14.75",
  },
  {
    id: generateUniqueID(),
    foodName: "G10. Bean Curd Delight",
    foodDescription:
      "A sizzling platter of bean curd, tomatoes, Chinese cabbage, snow peas, shitake mushrooms, bamboo shoots & basil, showered with Chinese barbecue sauce",
    foodPrice: "13.50",
  },
  {
    id: generateUniqueID(),
    foodName: "G11. Sizzling Mushrooms Infinity",
    foodDescription:
      "Strips Black mushrooms snow peas, carrots, jicama & basil in a sizzling sauce, served on a hot platter garnished with broccoli & bean sprouts",
    foodPrice: "14.75",
  },
  {
    id: generateUniqueID(),
    foodName: "G12. Sizzling King Oyster Mushrooms",
    foodDescription:
      "Organic king oyster mushrooms, soy chicken, zucchini, & fresh soy beans, jicama, red bell peppers in a basil black bean sauce",
    foodPrice: "14.75",
  },
  {
    id: generateUniqueID(),
    foodName: "G13. Asam Veggie Fish",
    foodDescription:
      "Layer of bean crepe wrapped around mushrooms seaweed & pine apple chunks, red & green bell peppers in a spicy Thai curry sauce.",
    foodPrice: "14.75",
    isSpicy: true,
  },
  {
    id: generateUniqueID(),
    foodName: "G14. Orange Infusion",
    foodDescription: "Soy veggie chicken, orange chunks, red & green bell peppers in a citrus sauce",
    foodPrice: "14.95",
  },
  {
    id: generateUniqueID(),
    foodName: "G15. Bean Curd Platter Supreme",
    foodDescription:
      "Bean curd, wheat veggie beef sun dried tomatoes, jalapeno peppers, basis & broccoli rabe in a chef's special seasoning.",
    foodPrice: "14.50",
  },
  {
    id: generateUniqueID(),
    foodName: "G16. Sesame Veggie Eel",
    foodDescription: "Crispy strips of black mushrooms in a brown sauce served on a bed of bean thread noodle topped with sesame seeds",
    foodPrice: "14.75",
  },
  {
    id: generateUniqueID(),
    foodName: "G17. Sesame Veggie Chicken",
    foodDescription:
      "Protein nuggets, broccoli, fresh mushrooms, red bell peppers in a brown sauce, served on a bed of bean thread noodle topped with sesame seeds",
    foodPrice: "14.75",
  },
  {
    id: generateUniqueID(),
    foodName: "G18. Sesame Veggie Beef",
    foodDescription: "Protein nuggets, asparagus, fresh mushrooms, string beans & red bell peppers in orange flavored sauce",
    foodPrice: "14.50",
  },
  {
    id: generateUniqueID(),
    foodName: "G19. Orange Flavored Veggie Chicken",
    foodDescription: "Protein nuggets, asparagus, fresh mushrooms, string beans & red bell peppers in orange flavored sauce",
    foodPrice: "14.75",
    isSpicy: true,
  },
  {
    id: generateUniqueID(),
    foodName: "G20. Orange Sensation",
    foodDescription:
      "A platter of crispy wheat seitan stirred fried in an orange flavored sauce w. asparagus fresh mushrooms string beans and red bell peppers",
    foodPrice: "14.50",
    isSpicy: true,
  },
  {
    id: generateUniqueID(),
    foodName: "G21. Portobello Deluxe",
    foodDescription: "Portobello mushrooms, lettuce, veggie seafood & wheat seitan, basil, ginger in a black pepper sauce",
    foodPrice: "14.75",
  },
  {
    id: generateUniqueID(),
    foodName: "G22. General Tso's",
    foodDescription: "Protein nuggets, broccoli, fresh mushrooms, dry pepper & green pepper in chef s special sauce",
    foodPrice: "14.75",
    isSpicy: true,
  },
  {
    id: generateUniqueID(),
    foodName: "G23. Three Cheers Casserole",
    foodDescription: "Soy protein chicken with black mushrooms, carrots, snow peas, ...basil & zucchini simmered on a hot clay pot",
    foodPrice: "13.95",
  },
  {
    id: generateUniqueID(),
    foodName: "G24. Spicy Veggie Prawns",
    foodDescription:
      "Veggie prawns, green peas, diced red bell peppers & jicama in a spicy chili sauce, with broccoli topped with sweet walnuts.",
    foodPrice: "14.95",
    isSpicy: true,
  },
];
export default gourmet;
