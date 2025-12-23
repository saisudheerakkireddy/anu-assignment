import React from 'react';
import { useIntersectionObserver } from '../../../hooks';
import { STATS } from '../../../constants/data';
import AnimatedStat from './AnimatedStat';

const StatsSection = () => {
  const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      ref={statsRef}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
      aria-label="Company statistics"
    >
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
        {STATS.map((stat, index) => (
          <AnimatedStat 
            key={stat.label} 
            stat={stat} 
            index={index}
            visible={statsVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(StatsSection);

