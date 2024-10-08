import { useDispatch } from "react-redux";
import { setOpenMenu } from "../store/features/menu/menuSlice";

export const useMenu = () => {
  const dispatch = useDispatch();

  const changeOpenMenu = (v) => {
    console.log(v)
    dispatch(setOpenMenu(v));
  };

  return { changeOpenMenu };
};
