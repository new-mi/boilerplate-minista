import { DefaultLayout } from '@/layouts/DefaultLayout';
import type { IMetadata, IPageProps } from '@/types';

export const metadata: IMetadata = {
  title: 'Home',
};

export default function (props: IPageProps) {
  return (
    <DefaultLayout>
      {JSON.stringify(props)}
      <h1>Hello Home Page!</h1>
      <div className="swiper" style={{ width: 600, height: 300 }}>
        <div className="swiper-wrapper">
          {Array(5)
            .fill(null)
            .map((_, i) => 60 + i)
            .map((id, index) => {
              return (
                <div key={id + index} className="swiper-slide">
                  <img
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    src={`https://lipsum.app/id/${id}/1600x1200`}
                  />
                </div>
              );
            })}
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {Array(12)
          .fill(null)
          .map((_, i) => 40 + i)
          .map((id) => {
            return (
              <a key={id} data-fancybox="gallery" href={`https://lipsum.app/id/${id}/1600x1200`}>
                <img className="rounded" src={`https://lipsum.app/id/${id}/200x150`} />
              </a>
            );
          })}
      </div>
    </DefaultLayout>
  );
}
