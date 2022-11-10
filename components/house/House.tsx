import React from "react";
import { BiHeart } from "react-icons/bi";
import { addLike } from "../../store/slices/houseSlice";
import { useDispatch, useSelector } from "react-redux";

export interface Props {
  house: {
    id: string | number;
    url: string;
    price: number;
    location: string;
  };
}

const House = ({ house: { id, url, price, location } }: Props) => {
  const dispatch = useDispatch();
  const likes = useSelector((state: any) => state.house.likes);

  console.log(likes);

  const onHandleLike = (id: any) => {
    dispatch(addLike(id));
  };
  return (
    <div key={id} className="image-container">
      <div>
        <img src={url} alt={url} className="grayscale" />
        <div className="like flex items-center" onClick={() => onHandleLike(id)}>
          <p className="text-sm">{likes[id] && likes[id].totalLikes}</p>
          <BiHeart size={"20px"} className="cursor-pointer" />
        </div>
        <div className="price-location flex justify-between w-full px-1">
          <p>${price}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default House;
