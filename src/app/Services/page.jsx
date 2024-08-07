"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We create robust and scalable web applications using the latest technologies, ensuring high performance and a seamless user experience. Our services include front-end and back-end development, API integrations, and more.",
    href: "",
  },

  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Our UI/UX design services focus on creating intuitive and visually appealing interfaces that enhance user engagement. We conduct thorough research and testing to ensure our designs meet your users' needs.",
    href: "",
  },

  {
    num: "03",
    title: "Logo Design",
    description:
      "Our logo design service helps you establish a strong brand identity with unique and memorable logos. We work closely with you to understand your brand's values and create a logo that resonates with your target audience.",
    href: "",
  },

  {
    num: "04",
    title: "SEO",
    description:
      "Our SEO services improve your website's visibility on search engines, driving more organic traffic to your site. We use proven strategies and techniques to optimize your content and boost your search engine rankings.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text_outline text-transparent group-hover:text_outline_hover">
                  {service.num}
                </div>
                <Link href={service.href}>
                  <BsArrowDownRight />
                </Link>
              </div>

              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
