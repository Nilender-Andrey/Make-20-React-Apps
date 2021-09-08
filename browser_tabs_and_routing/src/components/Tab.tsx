/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import * as React from 'react';
import { useState } from 'react';

/* правильный тип для children
type TabPropsType={
  children:ReactElement
  // children:ReactNode
}
*/
export default function Tab(props: { name: string }) {
  const { name } = props;
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e: React.MouseEvent) {
    setHighlightStyle({ left: e.nativeEvent.offsetX - 150, opacity: 0.2 });
  }

  function hideHighlight(e: React.MouseEvent) {
    setHighlightStyle({ left: e.nativeEvent.offsetX - 150, opacity: 0 });
  }

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={highlightStyle} />

      {name}
    </div>
  );
}
