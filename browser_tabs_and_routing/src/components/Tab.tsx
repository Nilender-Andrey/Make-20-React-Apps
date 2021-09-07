/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';

type TabPropsType={
  children:React.ReactNode
}

export default function Tab({ children }:TabPropsType) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e:React.MouseEvent) {
    setHighlightStyle({ left: e.nativeEvent.offsetX - 175, opacity: 0.2 });
  }

  function hideHighlight(e:React.MouseEvent) {
    setHighlightStyle({ left: e.nativeEvent.offsetX - 175, opacity: 0 });
  }

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
}
