const DoubtStats = ({ total, pending, answered }) => {
  const stats = [
    { label: "Total Doubts", value: total, color: "#6B4EA0" },
    { label: "Pending Doubts", value: pending, color: "#5C4380" },
    { label: "Answered Doubts", value: answered, color: "#4B3869" },
  ];

  return (
    <div className="row g-3 mb-4">
      {stats.map((s, i) => (
        <div className="col-md-4" key={i}>
          <div className="p-3 rounded shadow-sm text-white" style={{ backgroundColor: s.color }}>
            <h5>{s.label}</h5>
            <h3>{s.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoubtStats;
