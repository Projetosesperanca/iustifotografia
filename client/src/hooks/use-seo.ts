import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  keywords?: string;
  twitterSite?: string;
  twitterCreator?: string;
  ogType?: string;
  siteName?: string;
  locale?: string;
  themeColor?: string;
};

function updateMeta(attribute: "name" | "property", key: string, value?: string) {
  if (!value) return;
  const selector = `${attribute}='${key}'`;
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${selector}]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = value;
}

function updateLink(rel: string, href?: string) {
  if (!href) return;
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

export function useSeo({
  title,
  description,
  image,
  imageAlt,
  url,
  keywords,
  twitterSite,
  twitterCreator,
  ogType,
  siteName,
  locale,
  themeColor,
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    updateMeta("name", "description", description);
    updateMeta(
      "name",
      "keywords",
      keywords ??
        "fotografia de casamento, cinema de casamento, fotos de casamento, ensaio gestante, portfólio de casamento, vídeo de casamento"
    );
    updateMeta("name", "robots", "index, follow");
    updateMeta("name", "author", "Iusti Produções");
    updateMeta("name", "application-name", "Iusti Produções");
    updateMeta("name", "apple-mobile-web-app-title", "Iusti Produções");
    updateMeta("name", "theme-color", themeColor ?? "#000000");

    updateMeta("property", "og:type", ogType ?? "website");
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:image", image ?? "../attached_assets/stock_images/alincascasamento.jpg");
    updateMeta("property", "og:image:alt", imageAlt ?? title);
    updateMeta("property", "og:locale", locale ?? "pt_BR");
    updateMeta("property", "og:site_name", siteName ?? "Iusti Produções");

    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", image ??"../attached_assets/stock_images/alincascasamento.jpg");
    updateMeta("name", "twitter:image:alt", imageAlt ?? title);
    updateMeta("name", "twitter:site", twitterSite ?? "@iustifotografia");
    updateMeta("name", "twitter:creator", twitterCreator ?? "@iustifotografia");

    if (url) {
      updateMeta("property", "og:url", url);
      updateLink("canonical", url);
    }
  }, [title, description, image, imageAlt, url, keywords, twitterSite, twitterCreator, ogType, siteName, locale, themeColor]);
}
