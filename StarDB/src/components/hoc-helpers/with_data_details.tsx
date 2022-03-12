import React, { useCallback, useEffect, useState } from 'react';
import { GeneralType } from '../../Types/types';
import { IDetailsProps } from '../details/Details';
import ErrorIndicator from '../error-indicator/Error-indicator';
import Spinner from '../spinner/Spinner';

type GetImageUrlType = ({ id }: GeneralType) => string;
type GetDataType = (id: string) => Promise<GeneralType>;
type ViewType = ({ item, imageUrl, children }: IDetailsProps) => JSX.Element;

interface IProps {
  id: string | undefined;
  children: JSX.Element[];
}

function withDataDetails(
  View: ViewType,
  getData: GetDataType,
  getImageUrl: GetImageUrlType,
) {
  return function ({ id, ...props }: IProps) {
    const [item, setItem] = useState<GeneralType | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    let cancelled = false;

    const updateDetails = useCallback(() => {
      if (id) {
        setLoading(true);
        getData(id)
          .then((res) => {
            if (!cancelled) {
              setItem(res);
              setImageUrl(getImageUrl(res));
            }
          })
          .catch(() => setError(true))
          .finally(() => setLoading(false));
      }
    }, [id]);

    useEffect(() => {
      updateDetails();

      return () => {
        cancelled = true;
      };
    }, [id]);

    const hasData = !(loading || error);
    const content = hasData ? (
      <View item={item} imageUrl={imageUrl} {...props} />
    ) : null;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className='card details border-dark'>
        {content}
        {spinner}
        {errorMessage}
      </div>
    );
  };
}

export default withDataDetails;
