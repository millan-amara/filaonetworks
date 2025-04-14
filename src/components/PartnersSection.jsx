import React from 'react';
import { motion } from "framer-motion";
import DahuaImage from '../assets/images/dahua.png';
import HikvisionImage from '../assets/images/hikvision.png';
import MikrotikImage from '../assets/images/mikrotik.png';
import TplinkImage from '../assets/images/tplink.png';
import UbImage from '../assets/images/ub.png';
import BoschImage from '../assets/images/bosch.jpeg';
import CommImage from '../assets/images/commscope.png';
import DlinkImage from '../assets/images/dlink.png';
import NetgearImage from '../assets/images/netgear.png';

const partners = [
  {
    img: HikvisionImage,
    title: "HikvisionImage",
    desc: 'w-3/4 md:w-1/2',
  },
  {
    img: TplinkImage,
    title: "TplinkImage",
    desc: 'w-1/2 md:w-1/3',
  },
  {
    img: BoschImage,
    title: "BoschImage",
    desc: 'w-1/2 md:w-1/3',
  },
  {
    img: DlinkImage,
    title: "DlinkImage",
    desc: 'w-1/2 md:w-1/3',
  },
  {
    img: MikrotikImage,
    title: "MikrotikImage",
    desc: 'w-3/4 md:w-1/2',
  },
  {
    img: NetgearImage,
    title: "NetgearImage",
    desc: 'w-3/4 md:w-1/2',
  },
  {
    img: UbImage,
    title: "UbImage",
    desc: 'w-3/5 md:w-2/5',
  },
  {
    img: CommImage,
    title: "CommImage",
    desc: 'w-3/4 md:w-1/2',
  },
  {
    img: DahuaImage,
    title: "DahuaImage",
    desc: 'w-1/2 md:w-1/3',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function PartnersSection() {
  return (
    <section id='stacks' className='flex md:min-h-screen items-center py-8'>
        <div className='flex flex-col w-full justify-center py-10'> 
        <motion.h2
          className='text-2xl md:text-3xl font-semibold text-center py-2 mb-8'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          We Integrate With The Best
        </motion.h2>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8 md:gap-y-8 justify-items-center'>
                  {partners.map((partner, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col justify-center items-center"
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                    >
                      <img src={partner.img} alt={partner.title} className={partner.desc} />
                    </motion.div>
                  ))}
        </div>
        </div>
    </section>
  )
}

export default PartnersSection