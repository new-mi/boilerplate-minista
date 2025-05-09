import type { Fancybox } from '@fancyapps/ui';
import type Swiper from 'swiper';
import type Inputmask from 'inputmask';

export {};

declare global {
  interface Window {
    testUtils: Record<string, any>;
    Swiper: typeof Swiper;
    Fancybox: typeof Fancybox;
    Inputmask: typeof Inputmask;
  }
}
