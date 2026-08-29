import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { publishedServices } from "@/content/services";
import { plainText } from "@/lib/typography";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { About } from "@/components/sections/About";
import { ObjectTypes } from "@/components/sections/ObjectTypes";
import { Services } from "@/components/sections/Services";
import { ServiceOptions } from "@/components/sections/ServiceOptions";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceBenefits } from "@/components/sections/ServiceBenefits";
import { ServiceCases } from "@/components/sections/ServiceCases";
import { Documents } from "@/components/sections/Documents";
import { Geography } from "@/components/sections/Geography";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/layout/Footer";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = publishedServices.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: plainText(
      service.seo?.title ?? service.hero?.title ?? service.title,
    ),
    description: plainText(
      service.seo?.description ??
        service.hero?.description ??
        service.description,
    ),
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = publishedServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="container-page flex flex-1 flex-col gap-5 lg:gap-12">
        <ServiceHero service={service} />
        <About
          rounded="rounded-[20px] lg:rounded-[40px]"
          highlights={service.aboutHighlights}
        />
        {service.objectTypes && (
          <ObjectTypes items={service.objectTypes} className="" />
        )}
        {service.solutions && <Services items={service.solutions} />}
        {service.options && <ServiceOptions options={service.options} />}
        {service.process && <ServiceProcess process={service.process} />}
        {service.benefits && <ServiceBenefits benefits={service.benefits} />}
        {service.cases && <ServiceCases cases={service.cases} />}
        <Documents />
        <Geography
          title={service.geography?.title}
          description={service.geography?.description}
        />
        <Reviews items={service.reviews} />
        <Faq items={service.faq} />
      </main>
      <Footer variant="feedback" feedback={service.feedback} />
    </>
  );
}
