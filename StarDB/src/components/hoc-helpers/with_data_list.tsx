import React, { useEffect, useState } from 'react';
import { DisplayOptionsType, GeneralType } from '../../Types/types';
import ErrorIndicator from '../error-indicator/Error-indicator';
import { ItemListProps } from '../item-list/Item-list';
import Spinner from '../spinner/Spinner';

type ViewType = ({
  items,
  onObjectSelected,
  displayOptions,
}: ItemListProps) => JSX.Element;

type GetDataType = () => Promise<GeneralType[]>;

interface ISelected {
  onObjectSelected: (id: string) => void;
}

function withDataList(View: ViewType, getData: GetDataType) {
  return function (displayOptions: DisplayOptionsType) {
    return function ({ onObjectSelected }: ISelected) {
      const [items, setItem] = useState<GeneralType[]>([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);

      useEffect(() => {
        setLoading(true);
        getData()
          .then((items) => {
            setItem(items);
          })
          .catch(() => setError(true))
          .finally(() => setLoading(false));
      }, []);

      const hasData = !(loading || error);
      const content = hasData ? (
        <View
          items={items}
          onObjectSelected={onObjectSelected}
          displayOptions={displayOptions}
        />
      ) : null;
      const spinner = loading ? <Spinner /> : null;
      const errorMessage = error ? <ErrorIndicator /> : null;

      return (
        <div className='card item-list border-dark p-2 bd-highlight'>
          {content}
          {spinner}
          {errorMessage}
        </div>
      );
    };
  };
}

export default withDataList;
