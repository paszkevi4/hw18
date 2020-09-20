import React from 'react';
import './photos.css';

const Photos: React.FC = () => {
  return (
    <div>
      <div className="photos">
        {new Array(15).fill(null).map((_, i) => {
          return <img src={`https://picsum.photos/300/300?random=${i}`} alt="img" key={i} />;
        })}
      </div>
    </div>
  );
};

export default Photos;
