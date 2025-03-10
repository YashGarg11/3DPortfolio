import React from 'react';
import CustomButton from './CustomButton';

const ButtonContainer = ({ style, text, onClick }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '80%',
      transform: 'translateY(-50%)',
      zIndex: 1999,
      pointerEvents: 'auto',
      ...style
    }}>
      <CustomButton 
        text={text}
        onClick={onClick}
      />
    </div>
  );
};

export default ButtonContainer; 