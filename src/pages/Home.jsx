import AnimatedBtn from "../components/AnimatedBtn";
import { homeData } from "../data/home";
import CourseCard from "../components/CourseCard";
import { courseData } from "../data/courses";

const Home = () => {
  const { hero, stats } = homeData;

  return (
    <div className="text-white selection:bg-red-500 selection:text-white">
      {/* hero */}
      <section className="pt-20 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="max-w-6xl mx-auto font-extrabold tracking-tight mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-3 text-center">
            {/* title 1 */}
            <span className="text-4xl md:text-5xl lg:text-6xl text-white md:whitespace-nowrap">
              {hero.title.line1}
            </span>

            {/* title 2 */}
            <span className="text-2xl md:text-3xl lg:text-4xl bg-clip-text text-white leading-relaxed py-2 md:whitespace-nowrap">
              {hero.title.line2}
            </span>
          </div>

          {/* title 3 */}
          <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-whiteleading-relaxed mt-2">
            <span className="text-red-600">{hero.title.line3Brand}</span>{" "}
            {hero.title.line3Suffix}
          </span>
        </div>

        {/* description */}
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
                  icon={<item.icon className="w-8 h-8 text-gray-400" />}
                  value={item.value}
                  label={item.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* course section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-800/50">
        {/* headeer */}
        <div className="mb-12 pb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Courses on{" "}
            <span className="text-red-500 font-bold">Study Right Now</span>
          </h1>
        </div>

        {/* course grid loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {courseData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

// components for stat
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
