import Link from "next/link";
import path from "path";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = [
  { icon: <FaGithub />, path: "https://github.com/hassaniqbal23" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/hassaniqbal_235/" },
  { icon: <FaLinkedinIn />, path: "" },
];
const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {SocialLinks.map((items, index) => (
        <Link href={items.path} key={index} className={iconStyle}>
          {items.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
