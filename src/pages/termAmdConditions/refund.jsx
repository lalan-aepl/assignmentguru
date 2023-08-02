const Refund = () => {
  return (
    <div className="p-4 text-black  max-w-screen-2xl mx-auto pt-16">
      <a
        className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
        href="/"
      >
        Back to Home
      </a>
      <div style={{ maxWidth: "1400px", margin: "auto" , marginTop:"5rem"}}>
        <h3 style={{ color: "black", fontSize: "22px", fontWeight: "bold" }}>
          Refund policy for Client
        </h3>
        <div>
          <div>
            <div>
              <div style={{ color: "black", padding: "8px" }}>
                We understand that occasionally, situations may arise where a
                client may request a refund for the work that has been provided.
                We strive to maintain a fair and transparent approach to
                resolving such matters. This Refund policy outlines terms and
                conditions for requesting a refund as a client for services
                provided. Please carefully review the following information
              </div>
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "bold" }}
              >
                Eligibility for refunds
              </h3>
              <div>
                <p style={{ color: "black", padding: "8px" }}>
                  The Client are eligible for Full/Partial/No refund based on
                  conditions mentioned below
                </p>
                <h4
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Full Refund
                </h4>
                <p style={{ color: "black", padding: "8px" }}>
                  {" "}
                  A full refund can be requested under following cases
                </p>
                <ul>
                  <li style={{ color: "black", padding: "8px" }}>
                    If the delivered assignment does not meet the agreed-upon
                    specifications and requirements as outlined in the initial
                    assignment description or instruction provided
                  </li>
                  <li style={{ color: "black", padding: "8px" }}>
                    If the assignment is failed to delivered within agreed-upon
                    deadline.
                  </li>
                  <li style={{ color: "black", padding: "8px" }}>
                    If the work is cancelled before a tutor is assigned /
                    assigned tutor has not started working on the assignment.
                  </li>
                </ul>

                <h4
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Partial Refund
                </h4>
                <p style={{ color: "black", padding: "8px" }}>
                  A Partial refund is can be requested under following cases
                </p>
                <ul>
                  <li style={{ color: "black", padding: "8px" }}>
                    Client decided to cancel the task before the deadline.
                  </li>
                  <li style={{ color: "black", padding: "8px" }}>
                    If a client receive low score in the assignment depending on
                    how much lower from the agreed-upon marks client receive,
                    the client is entitled to partial refund up-to 30%.
                  </li>
                </ul>
                <h4
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  No refund
                </h4>
                <p style={{ color: "black", padding: "8px" }}>
                  No refund will be provided to the client under the following
                  cases
                </p>
                <ul>
                  <li style={{ color: "black", padding: "8px" }}>
                    The request for refund is put more than 30days after the
                    task delivery.{" "}
                  </li>
                  <li style={{ color: "black", padding: "8px" }}>
                    Plagiarism is more than agreed-upon limits.(we put all the
                    assignment through various plagiarism check to make sure
                    plagiarism is within the agreed-upon limit, but in case
                    plagiarism level is more than satisfactory level for the
                    client they are entitled to unlimited revisions to bring the
                    plagiarism level within their satisfactory level.)
                  </li>
                  <li style={{ color: "black", padding: "8px" }}>
                    If the client has already approved and accepted the task
                  </li>
                  <li style={{ color: "black", padding: "8px" }}>
                    The client has used the delivered work or portion of it for
                    their intended purposes
                  </li>
                  <li style={{ color: "black", padding: "8px" }}>
                    In case full payment for a task is done and client decide to
                    cancel the task, no refund will be provided but client can
                    get any another work of same monetary value done without any
                    additional cost.
                  </li>
                  <li style={{ color: "black", padding: "8px" }}>
                    A task is delayed due to last minute change requested by the
                    client.
                  </li>
                  <li style={{ color: "black", padding: "8px" }}>
                    The client change the task requirement post task delivered.
                    Client can request for changes until the final task is
                    delivered to them. Any changes post delivery will be
                    subjected to level of change requested and cost extra
                    depending of change required.
                  </li>
                </ul>
                <h4
                  style={{
                    color: "black",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Refund Process
                </h4>
                <p style={{ color: "black", padding: "8px" }}>
                  {" "}
                  A refund can be requested by client and will be provided
                  within 10-15 working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
