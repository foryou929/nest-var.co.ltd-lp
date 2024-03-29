type ServiceSubItem = {
    type: string;
    imageSrc: string;
    title: string;
    description: string;
}

type ServiceItem = {
    title: string;
    subtitle: string;
    content: Array<ServiceSubItem>;
};

type NewsItem = {
    imageSrc: string;
    badge: string;
    date: string;
    title: string;
    badgeColor: string;
}

type CtaItem = {
    type: string;
    href: string;
    frame: string;
    title: string;
    decription: string;
    button: string;
}

export {
    ServiceItem,
    NewsItem,
    CtaItem,
}