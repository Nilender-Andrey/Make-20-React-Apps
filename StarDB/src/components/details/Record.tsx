import React from 'react';

type ObjectType = {
  [key: string]: string;
};
type ObjectKey<I> = keyof I;

interface IRecordProps {
  object?: ObjectType;
  field: ObjectKey<ObjectType>;
  label: string;
}

function Record({ object, field, label }: IRecordProps) {
  if (object) {
    return (
      <li className='list-group-item'>
        {label} {object[field]}
      </li>
    );
  }
  return <li className='list-group-item'>{label}</li>;
}

export default Record;
