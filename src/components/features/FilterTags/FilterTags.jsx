import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';
import { FILTER_TAGS } from '../../../constants/data';

const FilterTags = ({ 
  selectedTags, 
  onTagToggle, 
  onNext, 
  showError, 
  errorRef 
}) => {
  const handleTagClick = useCallback((tag) => {
    onTagToggle(tag);
  }, [onTagToggle]);

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
      <div 
        className="flex flex-wrap justify-center gap-3" 
        role="group" 
        aria-label="Filter preferences"
      >
        {FILTER_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            aria-pressed={selectedTags.includes(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300 ${
              selectedTags.includes(tag)
                ? 'tag-selected'
                : 'bg-white border-gray-200 text-gray-700 hover:border-rose-300 hover:text-rose-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Validation Error */}
      {showError && (
        <div 
          ref={errorRef}
          id="pref-error"
          role="alert"
          aria-live="assertive"
          className="mt-4 text-center text-sm font-medium"
          style={{ color: '#c62828' }}
        >
          Minimum of one choice is required to proceed
        </div>
      )}

      {/* Next Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={onNext}
          className="btn-next px-10 py-3 rounded-full text-white font-semibold flex items-center space-x-2"
          aria-describedby={showError ? 'pref-error' : undefined}
        >
          <span>Next</span>
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

FilterTags.propTypes = {
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagToggle: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  showError: PropTypes.bool.isRequired,
  errorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

FilterTags.defaultProps = {
  errorRef: null
};

export default React.memo(FilterTags);

