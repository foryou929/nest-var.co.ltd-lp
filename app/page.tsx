import Button from "@/app/components/button";
import NewsItem from "@/app/components/item/news-item";
import ServiceItem from "@/app/components/item/service-item";
import ServiceSubItem from "@/app/components/item/service-sub-item";
import CtaItem from "@/app/components/item/cta-item";
import SectionTitle from "@/app/components/section/section-title";
import TRANSLATION from "@/app/constants/translates";

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
        <div>
          <ServiceItem
            title={TRANSLATION.SERVICES.EDUCATION.TITLE}
            subtitle={TRANSLATION.SERVICES.EDUCATION.SUBTITLE}
          >
            <ServiceSubItem
              type="primary"
              imageSrc="/img/05.png"
              title={TRANSLATION.SERVICES.IT_SCHOOL_RARETECH.TITLE}
              description={TRANSLATION.SERVICES.IT_SCHOOL_RARETECH.DESCRIPTION}
            />
            <ServiceSubItem
              type="secondary"
              imageSrc="/img/06.png"
              title={TRANSLATION.SERVICES.INFRASTRUCTURE_LEARNING_SERVICE_ENVADER.TITLE}
              description={TRANSLATION.SERVICES.INFRASTRUCTURE_LEARNING_SERVICE_ENVADER.DESCRIPTION}
            />
          </ServiceItem>
          <ServiceItem
            title={TRANSLATION.SERVICES.DEVELOPMENT.TITLE}
            subtitle={TRANSLATION.SERVICES.DEVELOPMENT.SUBTITLE}
          >
            <ServiceSubItem
              type="primary"
              imageSrc="/img/07.png"
              title={TRANSLATION.SERVICES.SYSTEM_APPLICATION_DEVELOPMENT.TITLE}
              description={TRANSLATION.SERVICES.SYSTEM_APPLICATION_DEVELOPMENT.DESCRIPTION}
            />
            <ServiceSubItem
              type="secondary"
              imageSrc="/img/08.png"
              title={TRANSLATION.SERVICES.WEB_PRODUCTION.TITLE}
              description={TRANSLATION.SERVICES.WEB_PRODUCTION.DESCRIPTION}
            />
          </ServiceItem>
        </div>
      </section>
      <section className="px-[16px] md:px-[60px] xl:px-[120px] 2xl:px-[320px] py-[80px] bg-gray-900">
        <SectionTitle
          title={TRANSLATION.NEWS.TITLE}
          subtitle={TRANSLATION.NEWS.SUBTITLE}
        />
        <div className="mt-[64px] xl:mt-[40px] block xl:grid xl:grid-cols-3 gap-[24px]">
          <NewsItem
            imageSrc="/img/09.png"
            badge={TRANSLATION.NEWS.HOMEPAGE.BADGE}
            date={TRANSLATION.NEWS.HOMEPAGE.DATE}
            title={TRANSLATION.NEWS.HOMEPAGE.TITLE}
            badgeClass="bg-black"
          />
          <NewsItem
            imageSrc="/img/10.png"
            badge={TRANSLATION.NEWS.TRAINING_PLAN.BADGE}
            date={TRANSLATION.NEWS.TRAINING_PLAN.DATE}
            title={TRANSLATION.NEWS.TRAINING_PLAN.TITLE}
            badgeClass="bg-blue"
          />
          <NewsItem
            imageSrc="/img/11.png"
            badge={TRANSLATION.NEWS.ENVADER.BADGE}
            date={TRANSLATION.NEWS.ENVADER.DATE}
            title={TRANSLATION.NEWS.ENVADER.TITLE}
            badgeClass="bg-aqua"
          />
          <NewsItem
            imageSrc="/img/12.png"
            badge={TRANSLATION.NEWS.SYSTEM_AND_APPLICATION_DEVELOPMENT.BADGE}
            date={TRANSLATION.NEWS.SYSTEM_AND_APPLICATION_DEVELOPMENT.DATE}
            title={TRANSLATION.NEWS.SYSTEM_AND_APPLICATION_DEVELOPMENT.TITLE}
            badgeClass="bg-orange"
          />
          <NewsItem
            imageSrc="/img/13.png"
            badge={TRANSLATION.NEWS.WEB_PRODUCTION.BADGE}
            date={TRANSLATION.NEWS.WEB_PRODUCTION.DATE}
            title={TRANSLATION.NEWS.WEB_PRODUCTION.TITLE}
            badgeClass="bg-purple"
          />
          <NewsItem
            imageSrc="/img/14.png"
            badge={TRANSLATION.NEWS.STUDENTS_ATTENDING.BADGE}
            date={TRANSLATION.NEWS.STUDENTS_ATTENDING.DATE}
            title={TRANSLATION.NEWS.STUDENTS_ATTENDING.TITLE}
            badgeClass="bg-blue"
          />
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
            <CtaItem
              type="primary"
              title={TRANSLATION.CTA.INQUIRY.TITLE}
              frame={TRANSLATION.CTA.INQUIRY.FRAME}
              href="/contact"
              button={TRANSLATION.CTA.INQUIRY.BUTTON}
            >
              {TRANSLATION.CTA.INQUIRY.DESCRIPTION}
            </CtaItem>
            <CtaItem
              type="secondary"
              title={TRANSLATION.CTA.MATERIAL_DOWNLOAD.TITLE}
              frame={TRANSLATION.CTA.MATERIAL_DOWNLOAD.FRAME}
              href="/document"
              button={TRANSLATION.CTA.MATERIAL_DOWNLOAD.BUTTON}
            >
              {TRANSLATION.CTA.MATERIAL_DOWNLOAD.DESCRIPTION}
            </CtaItem>
          </div>
        </div>
      </section>
    </main >
  );
}