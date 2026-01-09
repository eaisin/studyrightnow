import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedBtn from "../components/AnimatedBtn"; // Make sure your component file name matches (AnimatedBtn vs AnimatedButton)
import { homeData } from "../data/home";

const Home = () => {
  const { hero, stats } = homeData;

  return (
    <div className="bg-black min-h-screen text-white selection:bg-red-500 selection:text-white">
      {/* bg eff */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-250 h-125 bg-red-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-200 h-100 bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* hero */}
      <section className="relative pt-20 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="max-w-6xl mx-auto font-extrabold tracking-tight mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-3">
            {/* 1 */}
            <span className="text-4xl md:text-5xl lg:text-6xl text-white whitespace-nowrap">
              {hero.title.line1}
            </span>

            {/* 2 */}
            <span className="text-2xl md:text-3xl lg:text-4xl bg-clip-text text-white leading-relaxed py-2 whitespace-nowrap">
              {hero.title.line2}
            </span>
          </div>

          {/* 3 */}
          <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-whiteleading-relaxed mt-2">
            <span className="text-red-600">{hero.title.line3Brand}</span>{" "}
            {hero.title.line3Suffix}
          </span>
        </h1>

        {/* desc */}
        <p className="max-w-3xl mt-4 mx-auto text-lg text-white leading-loose font-light mb-12">
          {hero.description}
        </p>

        {/* btn */}
        <div className="mb-20">
          <AnimatedBtn to="/courses">START LEARNING</AnimatedBtn>
        </div>

        {/* info br nyr */}
        <div className="w-full max-w-4xl border-t border-gray-800 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            {stats.map((item) => (
              <div key={item.id} className="py-6 md:py-0 px-4">
                <StatItem
                  // CHANGE 1: Increased icon size from w-5 h-5 to w-8 h-8
                  icon={<item.icon className="w-8 h-8 text-gray-400" />}
                  value={item.value}
                  label={item.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// stat comp
const StatItem = ({ icon, value, label }) => (
  <div className="flex items-center justify-center gap-6 group cursor-default text-left px-2">
    <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors shrink-0">
      {icon}
    </div>

    <div className="flex flex-col">
      <h3 className="text-4xl font-bold text-white tracking-tight leading-none">
        {value}
      </h3>
      <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mt-1">
        {label}
      </p>
    </div>
  </div>
);

export default Home;
