import { ServiceItem, NewsItem, CtaItem } from "@/app/types/item";
import TRANSLATION from "@/app/constants/translates";

const SERVICE_LIST: Array<ServiceItem> = [
    {
        title: TRANSLATION.SERVICES.EDUCATION.TITLE,
        subtitle: TRANSLATION.SERVICES.EDUCATION.SUBTITLE,
        content: [
            {
                type: "primary",
                imageSrc: "/img/05.png",
                title: TRANSLATION.SERVICES.IT_SCHOOL_RARETECH.TITLE,
                description: TRANSLATION.SERVICES.IT_SCHOOL_RARETECH.DESCRIPTION,
            },
            {
                type: "secondary",
                imageSrc: "/img/06.png",
                title: TRANSLATION.SERVICES.INFRASTRUCTURE_LEARNING_SERVICE_ENVADER.TITLE,
                description: TRANSLATION.SERVICES.INFRASTRUCTURE_LEARNING_SERVICE_ENVADER.DESCRIPTION,
            },
        ]
    },
    {
        title: TRANSLATION.SERVICES.DEVELOPMENT.TITLE,
        subtitle: TRANSLATION.SERVICES.DEVELOPMENT.SUBTITLE,
        content: [
            {
                type: "primary",
                imageSrc: "/img/07.png",
                title: TRANSLATION.SERVICES.SYSTEM_APPLICATION_DEVELOPMENT.TITLE,
                description: TRANSLATION.SERVICES.SYSTEM_APPLICATION_DEVELOPMENT.DESCRIPTION,
            },
            {
                type: "secondary",
                imageSrc: "/img/08.png",
                title: TRANSLATION.SERVICES.WEB_PRODUCTION.TITLE,
                description: TRANSLATION.SERVICES.WEB_PRODUCTION.DESCRIPTION,
            },
        ]
    },
]

const NEWS_LIST: Array<NewsItem> = [
    {
        imageSrc: "/img/09.png",
        badge: TRANSLATION.NEWS.HOMEPAGE.BADGE,
        date: TRANSLATION.NEWS.HOMEPAGE.DATE,
        title: TRANSLATION.NEWS.HOMEPAGE.TITLE,
        badgeColor: "bg-black",
    },
    {
        imageSrc: "/img/10.png",
        badge: TRANSLATION.NEWS.TRAINING_PLAN.BADGE,
        date: TRANSLATION.NEWS.TRAINING_PLAN.DATE,
        title: TRANSLATION.NEWS.TRAINING_PLAN.TITLE,
        badgeColor: "bg-blue",
    },
    {
        imageSrc: "/img/11.png",
        badge: TRANSLATION.NEWS.ENVADER.BADGE,
        date: TRANSLATION.NEWS.ENVADER.DATE,
        title: TRANSLATION.NEWS.ENVADER.TITLE,
        badgeColor: "bg-aqua",
    },
    {
        imageSrc: "/img/12.png",
        badge: TRANSLATION.NEWS.SYSTEM_AND_APPLICATION_DEVELOPMENT.BADGE,
        date: TRANSLATION.NEWS.SYSTEM_AND_APPLICATION_DEVELOPMENT.DATE,
        title: TRANSLATION.NEWS.SYSTEM_AND_APPLICATION_DEVELOPMENT.TITLE,
        badgeColor: "bg-orange",
    },
    {
        imageSrc: "/img/13.png",
        badge: TRANSLATION.NEWS.WEB_PRODUCTION.BADGE,
        date: TRANSLATION.NEWS.WEB_PRODUCTION.DATE,
        title: TRANSLATION.NEWS.WEB_PRODUCTION.TITLE,
        badgeColor: "bg-purple",
    },
    {
        imageSrc: "/img/14.png",
        badge: TRANSLATION.NEWS.STUDENTS_ATTENDING.BADGE,
        date: TRANSLATION.NEWS.STUDENTS_ATTENDING.DATE,
        title: TRANSLATION.NEWS.STUDENTS_ATTENDING.TITLE,
        badgeColor: "bg-blue",
    },
]

const CTA_LIST: Array<CtaItem> = [
    {
        type: "primary",
        title: TRANSLATION.CTA.INQUIRY.TITLE,
        frame: TRANSLATION.CTA.INQUIRY.FRAME,
        href: "/contact",
        button: TRANSLATION.CTA.INQUIRY.BUTTON,
        decription: TRANSLATION.CTA.INQUIRY.DESCRIPTION,
    },
    {
        type: "secondary",
        title: TRANSLATION.CTA.MATERIAL_DOWNLOAD.TITLE,
        frame: TRANSLATION.CTA.MATERIAL_DOWNLOAD.FRAME,
        href: "/document",
        button: TRANSLATION.CTA.MATERIAL_DOWNLOAD.BUTTON,
        decription: TRANSLATION.CTA.MATERIAL_DOWNLOAD.DESCRIPTION,
    },
]

export {
    SERVICE_LIST,
    NEWS_LIST,
    CTA_LIST
}