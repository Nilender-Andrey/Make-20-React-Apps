import React, { useEffect, useState } from 'react';

import { GeneralType } from '../../Types/types';
import Spinner from '../spinner/Spinner';
import noImage from '../../assets/no_image.jpg';

export interface IDetailsProps {
  item: GeneralType | null;
  imageUrl: string | null;
  children: JSX.Element[];
}

function Details({ item, imageUrl, children }: IDetailsProps) {
  const content = item
    ? detailsRender(item, PreparingImg(imageUrl, item.name), children)
    : nothingSelected();

  return <div className='card details border-dark'>{content}</div>;
}

function PreparingImg(
  imageUrl: string | null,
  name: string,
): JSX.Element | null {
  const [url, setUrl] = useState<JSX.Element>(<Spinner />);

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        setUrl(
          <img className='img-fluid rounded-3' src={imageUrl} alt={name} />,
        );
      };

      img.onerror = () => {
        setUrl(
          <img className='img-fluid rounded-3' src={noImage} alt='{name}' />,
        );
      };
    }
  }, [imageUrl, name]);

  return url;
}

function detailsRender(
  object: GeneralType,
  PreparedImg: JSX.Element | null,
  list: JSX.Element[],
) {
  const { name } = object;

  return (
    <>
      <div className='card-header'>{name}</div>
      <div className='card-body d-flex'>
        <div className='card-body__img'>{PreparedImg}</div>
        <div className='card-body__info'>
          <ul className='list-group list-group-flush'>
            {React.Children.map(list, (child) => {
              return React.cloneElement(child, { object });
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

function nothingSelected() {
  return (
    <>
      <div className='card-header'>
        <span className='fs-5'>⇦ </span>
        <span>Select from the list</span>
      </div>
    </>
  );
}

export default Details;
