import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useAnimatedCounter } from '../../../hooks';

/**
 * Parses a stat value string into numeric value and suffix
 * @param {string} value - The stat value (e.g., "12,000+")
 * @returns {{ numericValue: number, suffix: string, hasComma: boolean }}
 */
const parseStatValue = (value) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9,]/g, '');
  const hasComma = value.includes(',');
  return { numericValue, suffix, hasComma };
};

/**
 * Formats a number with Indian locale if comma formatting is needed
 * @param {number} num - The number to format
 * @param {boolean} useComma - Whether to use comma formatting
 * @returns {string}
 */
const formatNumber = (num, useComma) => {
  if (useComma) {
    return num.toLocaleString('en-IN');
  }
  return String(num);
};

const AnimatedStat = ({ stat, index, visible }) => {
  const { numericValue, suffix, hasComma } = useMemo(
    () => parseStatValue(stat.value),
    [stat.value]
  );

  const count = useAnimatedCounter(numericValue, visible);
  const Icon = stat.icon;

  const animationStyle = useMemo(() => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.5s ease-out ${index * 0.1}s`
  }), [visible, index]);

  return (
    <div 
      className="flex flex-col items-center text-center group"
      style={animationStyle}
    >
      <div className="w-12 h-12 mb-2 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="text-xl font-bold text-gray-800">
        {formatNumber(count, hasComma)}{suffix}
      </div>
      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
    </div>
  );
};

AnimatedStat.propTypes = {
  stat: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired
};

export default React.memo(AnimatedStat);

