const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Digital Products' },
  { value: '4.9', label: 'Avg Rating' },
];

function Stats() {
  return (
    <section className="bg-gradient-to-r from-[#6D28F9] to-[#B620F2] py-7 text-white">
      <div className="section-shell grid gap-8 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-3xl font-extrabold md:text-[34px]">{item.value}</div>
            <div className="mt-1 text-xs font-medium text-white/80">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
