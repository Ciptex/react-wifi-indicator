import React, { FC, ImgHTMLAttributes } from "react";
import { SignalStrength, StatusImages } from "./SignalStrength";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  strength: SignalStrength;
}

export const WifiIndicator: FC<Props> = ({ strength, ...rest }: Props) => {
	return (<img
		{...rest}
		src={StatusImages[strength]}
	/>);
}
