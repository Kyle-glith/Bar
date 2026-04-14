import { useEffect, useRef, useState } from "react";

const categories = [
  {
    name: "Small Bite",
    items: [
      { name: "French Fries", desc: "Crispy golden fries with a sprinkle of sea salt", price: "Rp 85.000" },
      { name: "Truffle Mac & Cheese", desc: "Creamy mac & cheese with a hint of truffle oil", price: "Rp 145.000" },
      { name: "Grilled Chicken Sliders", desc: "Juicy chicken sliders with aioli and pickles", price: "Rp 165.000" },
      { name: "Spicy Buffalo Wings", desc: "Crispy wings tossed in our signature buffalo sauce", price: "Rp 125.000" },
      { name: "Loaded Nachos", desc: "Tortilla chips topped with cheese, jalapeños, and sour cream", price: "Rp 145.000" },
    ]
  },
  {
    name: "Classic Cocktails",
    items: [
      { name: "Old Fashioned", desc: "Bourbon, bitters, sugar, orange zest", price: "Rp 185.000" },
      { name: "Negroni", desc: "Gin, Campari, sweet vermouth", price: "Rp 175.000" },
      { name: "Manhattan", desc: "Rye whiskey, sweet vermouth, Angostura", price: "Rp 195.000" },
      { name: "Martini", desc: "London dry gin, dry vermouth, olive", price: "Rp 185.000" },
      { name: "Whiskey Sour", desc: "Bourbon, lemon juice, simple syrup, egg white", price: "Rp 175.000" },
      { name: "Bloody Mary", desc: "Vodka, tomato juice, spices, celery", price: "Rp 165.000" },
    ],
  },
  {
    name: "Contemporary",
    items: [
      { name: "Midnight Bloom", desc: "Mezcal, elderflower, activated charcoal, lime", price: "Rp 225.000" },
      { name: "Golden Hour", desc: "Saffron-infused vodka, passion fruit, champagne", price: "Rp 245.000" },
      { name: "Velvet Smoke", desc: "Smoked bourbon, cherry, black walnut bitters", price: "Rp 235.000" },
      { name: "Jade Garden", desc: "Matcha gin, cucumber, shiso leaf", price: "Rp 215.000" },
    ],
  },
  {
    name: "Non-Alcoholic",
    items: [
      { name: "Garden Spritz", desc: "Cucumber, elderflower, sparkling water", price: "Rp 125.000" },
      { name: "Citrus Ceremony", desc: "Yuzu, ginger, honey, tonic", price: "Rp 135.000" },
      { name: "Berry Ritual", desc: "Mixed berries, rosemary, soda", price: "Rp 125.000" },
      { name: "Virgin Mojito", desc: "Lime, mint, sugar, soda", price: "Rp 115.000" },
      { name: "Virgin Vina Colada", desc: "Pineapple, coconut cream, lime", price: "Rp 125.000" },
    ],
  },
  {
    name: "Beer",
    items: [
      { name: "Heineken", desc: "Crisp and refreshing lager", price: "Rp 85.000" },
      { name: "Guinness", desc: "Rich and creamy stout", price: "Rp 95.000" },
      { name: "Corona", desc: "Light and zesty Mexican lager", price: "Rp 85.000" },
      { name: "Stella Artois", desc: "Crisp Belgian pilsner", price: "Rp 95.000" },
    ]
  },
  {
    name: "Wine",
    items: [
      { name: "Chardonnay", desc: "Buttery and oaky white wine", price: "Rp 125.000/glass" },
      { name: "Sauvignon Blanc", desc: "Crisp and citrusy white wine", price: "Rp 115.000/glass" },
      { name: "Pinot Noir", desc: "Light and fruity red wine", price: "Rp 135.000/glass" },
      { name: "Cabernet Sauvignon", desc: "Bold and full-bodied red wine", price: "Rp 145.000/glass" },
    ]
  },
  {
    name: "Drinks",
    items: [
      { name: "Sparkling Water", desc: "Refreshing and bubbly", price: "Rp 55.000" },
      { name: "House Lemonade", desc: "Freshly squeezed with a hint of mint", price: "Rp 75.000" },
      { name: "Tea Hot/Iced", desc: "Brewed with a blend of herbs and citrus", price: "Rp 65.000" },
      { name: "Coffee Hot/Iced", desc: "Rich and aromatic, served hot or iced", price: "Rp 45.000" },
    ]
  }
];

const MenuSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(categories[0].name);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const activeCategory = categories.find((c) => c.name === activeTab)!;

  return (
    <section id="menu" ref={ref} className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Our Selection</p>
          <h2 className="font-serif text-4xl md:text-5xl gold-text-gradient mb-4">The Menu</h2>
          <div className="gold-divider" />
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-sans transition-all duration-300 border ${
                activeTab === cat.name
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items */}
        <div
          key={activeTab}
          className="space-y-6 animate-fade-in"
        >
          {activeCategory.items.map((item) => (
            <div key={item.name} className="flex items-baseline gap-4 group">
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                  <span className="flex-1 border-b border-dotted border-border/50" />
                  <span className="text-primary font-sans text-sm">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
