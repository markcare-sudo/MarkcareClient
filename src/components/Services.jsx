import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, SectionHeader } from './HelperComponents'
import { CheckCircle2 } from 'lucide-react'

const Services = ({services}) => {
  return (
      <section id="services" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
              <SectionHeader
                  kicker="What we do"
                  title="Our Services"
                  subtitle="Comprehensive, standardized, and reliable — tailored for homes, businesses, and industry."
              />
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((s) => (
                      <Card key={s.title} className="hover:shadow-md transition">
                          <CardHeader>
                              <div className="w-12 h-12 rounded-2xl bg-red-100 grid place-items-center">
                                  <s.icon className="w-6 h-6 text-red-700" />
                              </div>
                              <CardTitle className="mt-3">{s.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-slate-600 text-sm">{s.short}</p>
                              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                                  {s.bullets.map((b, i) => (
                                      <li key={i} className="flex gap-2 items-start">
                                          <CheckCircle2 className="mt-0.5 w-4 h-4 text-red-500" />
                                          <span>{b}</span>
                                      </li>
                                  ))}
                              </ul>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Services
