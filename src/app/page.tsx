import Image from 'next/image';

import Button from '@/components/button.component';

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
        <div className="relative z-50 mx-auto rotate-[24deg] xl:absolute">
          <Image
            src={StrawberryIceCream}
            alt="Strawberry Ice Cream"
            width={640}
            height={640}
            priority
            className="max-h-[640px] w-full max-w-[640px] drop-shadow-md"
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
                width={640}
                height={640}
                className="mx-auto object-contain drop-shadow-md"
              />
            </div>
          </div>
          <div className="flex-grow basis-[300px]">
            <div className="mx-auto max-w-[420px] border border-stone-600 p-[1px]">
              <div className="left-full flex h-full w-full flex-col gap-6 border-3 border-stone-600 p-6 xl:gap-9 xl:p-9">
                <div className="flex flex-col gap-1">
                  <div>
                    <div className="font-bold text-stone-700 2xl:!text-3xl">Calories</div>
                    <div className="text-[10px] font-medium text-stone-700 2xl:!text-lg">
                      per Serving
                    </div>
                  </div>
                  <hr className="mb-2 h-[2px] bg-stone-700" />
                  <div className="flex flex-wrap items-center gap-x-4">
                    <div className="min-w-[80px] basis-[80px] text-4xl font-black tracking-tighter text-stone-700 2xl:!min-w-32 2xl:!text-5xl">
                      200g
                    </div>
                    <p className="flex-grow basis-[117px] text-xs font-medium text-stone-700 2xl:!text-base">
                      It is lesser than normal ice cream. It tastes good and gives energy,
                      but won&apos;t make you fat.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div>
                    <div className="font-bold text-stone-700 2xl:!text-3xl">Fat</div>
                    <div className="text-[10px] font-medium text-stone-700 2xl:!text-lg">
                      per Serving
                    </div>
                  </div>
                  <hr className="mb-2 h-[2px] bg-stone-700" />
                  <div className="flex flex-wrap items-center gap-x-4">
                    <div className="min-w-[80px] basis-[80px] text-5xl font-black tracking-tighter text-stone-700 2xl:!min-w-32 2xl:!text-6xl">
                      7.6%
                    </div>
                    <p className="flex-grow basis-[117px] text-xs font-medium text-stone-700 2xl:!text-base">
                      Normal ice cream will give you more than 10% fat on each serving.
                      Lower fat will make you stay slim and healthy
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div>
                    <div className="font-bold text-stone-700 2xl:!text-3xl">Protein</div>
                    <div className="text-[10px] font-medium text-stone-700 2xl:!text-lg">
                      Compare than normal
                    </div>
                  </div>
                  <hr className="mb-2 h-[2px] bg-stone-700" />
                  <div className="flex flex-wrap items-center gap-x-4">
                    <div className="min-w-[80px] basis-[80px] text-5xl font-black tracking-tighter text-stone-700 2xl:!min-w-32 2xl:!text-6xl">
                      20%
                    </div>
                    <p className="flex-grow basis-[117px] text-xs font-medium text-stone-700 2xl:!text-base">
                      Have 20% higher protein from oat milk and soy milk. Eating this ice
                      cream helps you build your muscle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
