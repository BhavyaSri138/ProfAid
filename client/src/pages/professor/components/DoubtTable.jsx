import { useNavigate } from "react-router-dom";

const DoubtTable = ({ doubts }) => {
  const navigate = useNavigate();

  const replyHandler = (doubtId) => {
    navigate(`/professor/reply/${doubtId}`);
  };

  if (!doubts.length) {
    return <p className="text-muted mt-3">No doubts assigned yet.</p>;
  }

  return (
    <div className="table-responsive mt-3">
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Student</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doubts.map((doubt) => (
            <tr key={doubt._id}>
              <td>{doubt.title}</td>
              <td>{doubt.description}</td>
              <td>{doubt.studentEmail}</td>
              <td>
                <span
                  className={`badge ${
                    doubt.status === "answered" ? "bg-success" : "bg-warning text-dark"
                  }`}
                >
                  {doubt.status}
                </span>
              </td>
              <td>
                {doubt.status === "pending" ? (
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => replyHandler(doubt._id)}
                  >
                    Reply
                  </button>
                ) : (
                  <span className="text-muted">Replied</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoubtTable;
