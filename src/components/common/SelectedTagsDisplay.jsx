import React from 'react';
import PropTypes from 'prop-types';

const SelectedTagsDisplay = ({ count }) => {
  if (count === 0) return null;

  return (
    <div 
      className="text-center mb-8 p-4 bg-rose-50 rounded-xl"
      role="status"
      aria-live="polite"
    >
      <p className="text-sm text-gray-600">
        <span className="font-semibold text-rose-600">{count}</span> preference(s) selected
      </p>
    </div>
  );
};

SelectedTagsDisplay.propTypes = {
  count: PropTypes.number.isRequired
};

export default React.memo(SelectedTagsDisplay);

