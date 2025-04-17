import Image from 'next/image';

import StrawberryIceCream from '@/public/images/strawberry-icecream.png';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1600px] overflow-x-hidden">
      <section
        id="hero"
        className="relative flex min-h-[72vh] flex-col flex-wrap items-center justify-center py-[5vh]"
      >
        <h1 className="bg-primary text-textured-[url(/images/nice-snow.png)] text-center text-[14vw] leading-none font-black tracking-tighter md:text-[min(12vw,200px)]">
          YOUR{' '}
          <span className="bg-secondary text-textured-[url(/images/nice-snow.png)]">
            HEALTHY
          </span>{' '}
          <br />
          ICE CREAM
        </h1>
        <div className="relative z-50 mx-auto max-h-[640px] w-[unset] max-w-[640px] rotate-[24deg] xl:absolute">
          <Image
            src={StrawberryIceCream}
            alt="Strawberry Ice Cream"
            width={640}
            height={640}
            priority
            className="drop-shadow-md"
          />
        </div>
      </section>
    </div>
  );
}
