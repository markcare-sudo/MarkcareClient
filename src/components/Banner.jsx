import React from 'react'
import { motion } from "framer-motion";
import Button from './Button'

const Banner = () => {
  return (
      <section id="banner" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
              <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/assets/Images/Markcare16.jpg"
              >
                  <source src="/assets/Videos/Markcare Banglore Video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/0" />
          </div>
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-black ring-1 ring-white/20">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" /> ISO‑grade SOPs
                  </span>
                  <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-black drop-shadow">Mark Care — Reliable Home & Industrial Services</h1>
                  <p className="mt-3 text-lg text-black/90 max-w-2xl drop-shadow">
                      Water Treatment Plants(WTP), AC, RO / Effluent Treatment Plants(ETP) / Sewage Treatment Plants(STP), Deasel Generator(DG), Solar, Lifts, Power Systems and more. Pan‑India engineers. On‑time delivery.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                      <a href="#services"><Button>Explore Services</Button></a>
                      <a href="#contact"><Button variant="outline" className="backdrop-blur">Get Quote</Button></a>
                  </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="hidden lg:block">
                  <div className="rounded-3xl overflow-hidden ring-1 ring-white/30 shadow-2xl">
                      <img src="/assets/Images/Markcare20.jpg" alt="Technician at work" className="w-full h-[420px] object-cover" loading="lazy" />
                  </div>
              </motion.div>
          </div>
      </section>
  )
}

export default Banner
