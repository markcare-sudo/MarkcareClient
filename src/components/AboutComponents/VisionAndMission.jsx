import { motion } from "framer-motion";

export const VisionAndMission = () => {
    return (
        <div className="mt-12 grid gap-8 md:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 p-6">
                <h4 className="text-lg font-semibold">Our Vision</h4>
                <p className="mt-2 text-sm text-gray-600">Empower millions of professionals worldwide to deliver services at home like never experienced before.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 p-6">
                <h4 className="text-lg font-semibold">Our Mission</h4>
                <p className="mt-2 text-sm text-gray-600">Deliver standardised, high-quality home and industrial services through technology, training, and trusted partnerships — ensuring on-time, reliable experiences for customers.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 p-6">
                <h4 className="text-lg font-semibold">Core Values</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li>Customer-first — reliability & trust</li>
                    <li>Quality — certified partners & training</li>
                    <li>Safety — compliance & insurance-backed work</li>
                    <li>Sustainability — energy-efficient & green solutions</li>
                </ul>
            </motion.div>
        </div>
    );
}