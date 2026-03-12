// components/ServiceCard.jsx

const ServiceCard = ({ Icon, title, onClick  }) => {
  return (
    <div onClick={() => onClick(title)} className="group bg-[#0f172a] border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center transition hover:border-red-500 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
      
      <Icon
        size={48}
        className="text-red-600 mb-4 transition group-hover:scale-110"
      />

      <p className="text-gray-300 text-sm font-medium">
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;