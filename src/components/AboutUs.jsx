import React from 'react'

const AboutUs = ({ features, cities }) => {
  return (
      <section id="about" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Mark Care</h2>
                  <p className="mt-3 text-slate-600">
                      Mark Care is a technology platform offering a variety of services at home and for enterprises. Customers
                      use our platform to book services like beauty, haircuts, massage therapy, cleaning, plumbing, carpentry,
                      appliance repair, painting and more — delivered at their preferred time, with a reliable, standardized
                      experience.
                  </p>
                  <p className="mt-3 text-slate-600">
                      We work closely with hand‑picked service partners and enable them with technology, training, products,
                      tools, financing, insurance and brand support — helping them succeed and deliver quality every time.
                  </p>
                  <div className="mt-4 p-4 rounded-2xl bg-red-50 border border-slate-200">
                      <div className="font-semibold">Our Vision</div>
                      <p className="text-slate-600 text-sm mt-1">
                          Empower millions of professionals worldwide to deliver services at home like never experienced before.
                      </p>
                  </div>
              </div>
              <div>
                  <div className="rounded-3xl p-4 md:p-6 bg-white ring-1 ring-slate-200 shadow-sm">
                      <div className="grid sm:grid-cols-2 gap-4">
                          {features.map((f) => (
                              <div key={f.title} className="rounded-2xl p-4 bg-red-50 ring-1 ring-slate-200">
                                  <f.icon className="w-6 h-6" />
                                  <div className="mt-2 font-semibold">{f.title}</div>
                                  <div className="text-sm text-slate-600">{f.text}</div>
                              </div>
                          ))}
                      </div>
                      <div className="mt-6">
                          <div className="text-xs uppercase tracking-wide text-slate-500">We operate in</div>
                          <div className="mt-2 flex flex-wrap gap-2">
                              {cities.map((c) => (
                                  <span key={c} className="px-3 py-1 rounded-full bg-red-100 text-slate-700 text-sm">
                                      {c}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default AboutUs
