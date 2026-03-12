const ServiceCard = ({ Icon, title, onClick }) => {
  return (
    <div
      onClick={() => onClick(title)}
      className="group h-full min-h-[160px] bg-[#0f172a] border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition hover:border-white-500 hover:shadow-lg hover:shadow-white-500/20"
    >
      <Icon
        size={40}
        className="text-white-400 mb-3 transition group-hover:scale-140"
      />

      <p className="text-gray-300 text-sm font-medium leading-snug">
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;