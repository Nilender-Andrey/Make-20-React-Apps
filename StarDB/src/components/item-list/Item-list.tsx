import React from 'react';
import { DisplayOptionsType, GeneralType } from '../../Types/types';

export interface ItemListProps {
  items: GeneralType[];
  onObjectSelected: (id: string) => void;
  displayOptions: DisplayOptionsType;
}

function ItemList({ items, onObjectSelected, displayOptions }: ItemListProps) {
  return (
    <ul className='list-group'>
      {items.map((item) => {
        const { id } = item;
        const label = displayOptions(item);
        return (
          <li
            className='list-group-item list-group-item-action'
            key={id}
            onClick={() => onObjectSelected(id)}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
}

export default ItemList;
