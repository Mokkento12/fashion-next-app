// types/react-slick.d.ts

declare module "react-slick" {
  import { ComponentType } from "react";

  interface SliderSettings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    responsive?: Array<{
      breakpoint: number;
      settings: {
        slidesToShow: number;
      };
    }>;
  }

  const Slider: ComponentType<SliderSettings>;
  export default Slider;
}
