import Image from 'next/image';

import Button from '@/components/button.component';

import {
  ICE_CREAMS,
  IceCream,
  NUTRITION_FACTS,
  NutritionFact,
} from '@/constants/content.constant';

import SplashMaroon from '@/public/images/splash-maroon.png';
import SplashRed from '@/public/images/splash-red.png';
import StrawberryIceCream from '@/public/images/strawberry-icecream.png';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1600px] overflow-x-hidden px-[5vw]">
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
        <div className="relative z-50 mx-auto !max-h-[640px] rotate-[24deg] xl:absolute">
          <Image
            src={StrawberryIceCream}
            alt="Strawberry Ice Cream"
            width={600}
            height={600}
            priority
            className="drop-shadow-md"
          />
        </div>
      </section>
      <section id="featured" className="py-[6vh] xl:py-[12vh]">
        <div className="flex flex-wrap items-center justify-center gap-y-8">
          <div className="flex flex-grow basis-[300px] flex-col items-start gap-y-6">
            <div className="font-title text-sm tracking-wide text-secondary xl:text-2xl">
              Taste Better
            </div>
            <h2 className="bg-secondary text-textured-[url(/images/nice-snow.png)] text-5xl font-black tracking-tight xl:text-7xl">
              BERRY <br />
              NICE CREAM
            </h2>
            <p className="text-xs font-medium lg:text-sm 2xl:!text-xl">
              Berry Nice Cream was our first gluten-free Ice cream, which we created back
              then on 2010. The recipe was formulated with oat and soy milk so it gives
              higher protein and lower fat. It is also high in dietary fiber so it will
              help your stomach digest foods after eating this ice cream.{' '}
              <span className="font-semibold text-secondary">
                So what do you waiting for? This is your first healthy Ice cream
              </span>
              .
            </p>
            <Button type="link" href="/">
              Buy Now!
            </Button>
          </div>
          <div className="flex-grow basis-[480px]">
            <div className="relative mx-auto flex-grow">
              <Image
                src={StrawberryIceCream}
                alt="Strawberry Ice Cream"
                width={600}
                height={600}
                className="mx-auto object-contain drop-shadow-md"
              />
            </div>
          </div>
          <div className="flex-grow basis-[300px]">
            <div className="mx-auto max-w-[420px] border border-stone-600 p-[1px]">
              <div className="flex h-full w-full flex-col gap-6 border-3 border-stone-600 p-6 xl:gap-9 xl:p-9">
                {NUTRITION_FACTS.map((nutritionFact: NutritionFact, idx: number) => (
                  <div className="flex flex-col gap-1" key={nutritionFact.name}>
                    <div>
                      <div className="text-xl font-bold text-stone-700 2xl:!text-3xl">
                        {nutritionFact.name}
                      </div>
                      <div className="text-xs font-medium text-stone-700 2xl:!text-lg">
                        {nutritionFact.subName}
                      </div>
                    </div>
                    <hr className="mb-2 h-[2px] bg-stone-700" />
                    <div className="flex flex-wrap items-center gap-x-4">
                      <div
                        className={`min-w-[80px] basis-[80px] ${idx === 0 ? 'text-4xl' : 'text-5xl'} font-black tracking-tighter text-stone-700 2xl:!min-w-32 2xl:!text-6xl`}
                      >
                        {nutritionFact.value}
                      </div>
                      <p className="flex-grow basis-[117px] text-xs font-medium text-stone-700 2xl:!text-base">
                        {nutritionFact.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ingredient" className="py-[6vh] xl:py-[12vh]">
        <h3 className="bg-primary text-textured-[url(/images/nice-snow.png)] text-center text-[min(16vw,240px)] !leading-[1] font-black tracking-tighter uppercase">
          DELICIOUS
        </h3>
        <div className="flex flex-wrap justify-center gap-y-6 pb-12 lg:gap-y-8">
          <div className="order-2 flex-grow basis-[160px] xs:hidden xl:order-1 xl:block">
            <div className="relative flex aspect-square flex-col items-center justify-center p-8 lg:p-12">
              <Image
                src={SplashMaroon}
                alt="Splash Maroon"
                fill
                className="-z-1 w-full"
              />
              <div className="relative -top-1/5 left-1/8">
                <div className="text-center font-semibold text-white underline md:text-xl 2xl:text-4xl">
                  Oat Milk
                </div>
                <p className="mt-2 text-center text-xs font-medium text-white md:text-base 2xl:text-xl">
                  High protein to maintain your body muscle.
                </p>
              </div>
            </div>
            <div className="relative aspect-square flex-col items-center justify-center p-8 lg:p-12 xl:left-1/2 xl:w-4/5">
              <Image
                src={SplashMaroon}
                alt="Splash Maroon"
                fill
                className="-z-1 w-full"
              />
              <div className="relative -top-1/7 left-1/8 md:-top-[0.3vw]">
                <div className="text-center font-semibold text-white underline md:text-xl 2xl:text-4xl">
                  Soy Milk
                </div>
                <p className="mt-2 text-center text-xs font-medium text-white md:text-base 2xl:text-xl">
                  High dietary fiber and high protein for your body.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 flex-grow basis-[350px] xl:order-2">
            <div className="relative mx-auto">
              <Image
                src={StrawberryIceCream}
                alt="Strawberry Ice Cream"
                width={540}
                height={540}
                className="xl: mx-auto drop-shadow-md"
              />
            </div>
          </div>
          <div className="order-3 flex flex-grow basis-[160px] items-center xs:hidden xl:flex">
            <div className="relative flex aspect-square flex-col items-center justify-center p-8 md:p-14 xl:-left-1/5">
              <Image src={SplashRed} alt="Splash Red" fill className="-z-1 w-full" />
              <div className="relative -top-1/5 left-1/8">
                <div className="text-center font-semibold text-white underline md:text-xl 2xl:text-4xl">
                  Dates
                </div>
                <p className="mt-2 text-center text-xs font-medium text-white md:text-base 2xl:text-xl">
                  Dates used to make your ice cream feels sweet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-m-[2vw] hidden items-center justify-between xs:flex xl:hidden">
          <div className="relative flex aspect-square basis-1/3 flex-col items-center justify-center p-8 lg:p-12">
            <Image src={SplashRed} alt="Splash Red" fill className="-z-1 w-full" />
            <div className="relative -top-1/5 left-1/8">
              <div className="text-center font-semibold text-white underline md:text-xl 2xl:text-4xl">
                Oat Milk
              </div>
              <p className="mt-2 text-center text-xs font-medium text-white md:text-base 2xl:text-xl">
                High protein to maintain your body muscle.
              </p>
            </div>
          </div>
          <div className="relative flex aspect-square basis-1/3 flex-col items-center justify-center p-8 lg:p-12">
            <Image src={SplashRed} alt="Splash Red" fill className="-z-1 w-full" />
            <div className="relative -top-1/5 left-1/8">
              <div className="text-center font-semibold text-white underline md:text-xl 2xl:text-4xl">
                Soy Milk
              </div>
              <p className="mt-2 text-center text-xs font-medium text-white md:text-base 2xl:text-xl">
                High dietary fiber and high protein for your body.
              </p>
            </div>
          </div>
          <div className="relative flex aspect-square basis-1/3 flex-col items-center justify-center p-8 lg:p-12">
            <Image src={SplashRed} alt="Splash Red" fill className="-z-1 w-full" />
            <div className="relative -top-1/5 left-1/8">
              <div className="text-center font-semibold text-white underline md:text-xl 2xl:text-4xl">
                Dates
              </div>
              <p className="mt-2 text-center text-xs font-medium text-white md:text-base 2xl:text-xl">
                Dates used to make your ice cream feels sweet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="variant"
        className="mx-auto my-[8vh] flex max-w-[1600px] flex-col items-center justify-center"
      >
        <div>
          <div className="flex flex-col items-center justify-center gap-y-8">
            <div>
              <div className="mb-2 text-center font-title text-xl text-secondary xl:text-3xl">
                Look at our
              </div>
              <h4 className="bg-secondary text-textured-[url(/images/nice-snow.png)] text-center text-6xl font-black tracking-tighter uppercase md:text-8xl">
                VARIANT
              </h4>
            </div>
            <div className="flex w-full flex-wrap justify-center">
              {ICE_CREAMS.map((ice: IceCream, idx: number) => {
                return (
                  <div
                    key={ice.name}
                    className="flex min-w-[200px] basis-1/5 flex-col items-center px-2"
                  >
                    <div className="flex flex-grow basis-[274px] flex-col items-end">
                      <Image
                        src={ice.img}
                        alt={ice.name}
                        width={400}
                        className="flex-grow object-contain drop-shadow-md"
                      />
                    </div>
                    <div className="basis-[72px]">
                      <div className="text-center font-title text-base font-semibold text-secondary md:text-lg 2xl:!text-2xl 2xl:!text-3xl">
                        {ice.name}
                      </div>
                      <p className="text-center text-xs font-medium text-secondary md:text-sm xl:text-lg 2xl:text-2xl">
                        {ice.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center pt-[5vh]">
            <Button type="link" href="/">
              Buy Now!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
