import Button from "@/app/components/button";
import NewsItem from "@/app/components/item/news-item";
import ServiceItem from "@/app/components/item/service-item";
import ServiceSubItem from "@/app/components/item/service-sub-item";
import CtaItem from "@/app/components/item/cta-item";
import SectionTitle from "@/app/components/section/section-title";
import TRANSLATION from "@/app/constants/translates";
import { CTA_LIST, NEWS_LIST, SERVICE_LIST } from "@/app/constants/home-page";

export default function Home() {
  return (
    <main>
      <section className="h-[640px] xl:h-[1080px] px-[16px] md:px-[60px] xl:px-[120px] 2xl:px-[320px] bg-[url('/img/02.png')] sm:bg-[url('/img/01.png')] bg-center">
        <div className="h-full mx-[16px] flex flex-col justify-center">
          <h2 className="text-2xl xl:text-6xl font-bold">
            {TRANSLATION.HEADER.TITLE}
          </h2>
          <div className="mt-[24px] xl:text-xl">
            <h3 className="hidden xl:block">
              {TRANSLATION.HEADER.SUBTITLE_LP}
            </h3>
            <h3 className="xl:hidden">
              {TRANSLATION.HEADER.SUBTITLE_SP}
            </h3>
          </div>
          <div className="mt-[64px]">
            <Button className="hidden xl:block" type="primary" size="xl">
              {TRANSLATION.HEADER.VIEW_BUSINESS_DETAIL}
            </Button>
            <Button className="xl:hidden" type="primary">
              {TRANSLATION.HEADER.VIEW_BUSINESS_DETAIL}
            </Button>
          </div>
        </div>
      </section>
      <section className="px-[16px] md:px-[120px] xl:px-[240px] 2xl:px-[480px] py-[80px] bg-black">
        <SectionTitle
          title={TRANSLATION.SERVICES.TITLE}
          subtitle={TRANSLATION.SERVICES.SUBTITLE}
          description={TRANSLATION.SERVICES.DESCRIPTION}
        />
        {
          SERVICE_LIST.map((service_item, index) => {
            return (
              <ServiceItem
                key={index}
                title={service_item.title}
                subtitle={service_item.subtitle}
              >
                {
                  service_item.content.map((service_sub_item, index) => {
                    return (
                      <ServiceSubItem
                        key={index}
                        type={service_sub_item.type}
                        imageSrc={service_sub_item.imageSrc}
                        title={service_sub_item.title}
                        description={service_sub_item.description}
                      />
                    )
                  })
                }

              </ServiceItem>
            )
          })
        }
      </section>
      <section className="px-[16px] md:px-[60px] xl:px-[120px] 2xl:px-[320px] py-[80px] bg-gray-900">
        <SectionTitle
          title={TRANSLATION.NEWS.TITLE}
          subtitle={TRANSLATION.NEWS.SUBTITLE}
        />
        <div className="mt-[64px] xl:mt-[40px] block xl:grid xl:grid-cols-3 gap-[24px]">
          {
            NEWS_LIST.map((news, index) => {
              return (
                <NewsItem
                  key={index}
                  imageSrc={news.imageSrc}
                  badge={news.badge}
                  date={news.date}
                  title={news.title}
                  badgeColor={news.badgeColor}
                />
              )
            })
          }
        </div>
        <div className="flex justify-center mt-[64px]">
          <Button type="primary">
            {TRANSLATION.NEWS.SEE_LIST}
          </Button>
        </div>
      </section>
      <section className="relative h-[1082px] xl:h-[748px] px-[16px] md:px-[60px] xl:px-[120px] 2xl:px-[320px] bg-[url('/img/04.png')] sm:bg-[url('/img/03.png')]">
        <div className="py-[120px] flex flex-col gap-[64px] xl:gap-[80px]">
          <h1 className="text-xl xl:text-5xl font-bold text-white text-center">
            {TRANSLATION.CTA.TITLE}
          </h1>
          <div className="flex-grow xl:grid xl:grid-cols-2">
            {
              CTA_LIST.map((cta_item, index) => {
                return (
                  <CtaItem
                    key={index}
                    type={cta_item.type}
                    title={cta_item.title}
                    frame={cta_item.frame}
                    href={cta_item.href}
                    button={cta_item.button}
                  >
                    {cta_item.decription}
                  </CtaItem>
                )
              })
            }
          </div>
        </div>
      </section>
    </main >
  );
}