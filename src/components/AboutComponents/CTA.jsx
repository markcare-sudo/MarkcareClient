export const CTA = () => {
    return (
        <div className="mt-12 rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold">Work with MarkCare</h3>
                    <p className="mt-1 text-sm text-gray-600">Interested in partnering, hiring, or requesting a case-study? We’d love to hear from you.</p>
                </div>
                <div className="flex gap-3">
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white">Contact Us</a>
                    <a href="/careers" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold">Join Our Team</a>
                </div>
            </div>
        </div>
    );
}