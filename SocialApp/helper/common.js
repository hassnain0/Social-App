import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
export const hp = (percetange) => {
  return (percetange * deviceHeight) / 100;
};
export const wp = (percetange) => {
  return (percetange * deviceWidth) / 100;
};
