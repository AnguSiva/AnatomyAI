import React, { useState } from "react";

const ListofQuestions = () => {
  const [answer, setAnswer] = useState(false);

  const getAnswerDiv = () => {
    setAnswer(true);
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h5 className="mt-4 brand-color">
            Chapter 1 -<span className="text-secondary">List of Questions</span>
          </h5>
          <hr />
          <div className="card border-0 listOfQuestions">
            <div className="card-body overflow-auto w-100">              
                <h5 className="card-title brand-color mt-3">
                  Question 1
                </h5>
                <p className="card-text">
                  Which of the following is a true statement about the
                  protective structures of the spinal cord?
                </p>
                <div className="options">
                  <ol className="list-group list-group-numbered list-of-options">
                    <li className="list-group-item">
                      The Spinal Cord is protected by the verterbal column
                    </li>
                    <li className="list-group-item">
                      The meninges are two coverings composed of connective
                      tissue that connect around the spinal cord.
                    </li>
                    <li className="list-group-item">
                      The outermost layer of the meninges is the archnoid
                    </li>
                    <li className="list-group-item">
                      The cerebrospinal flud provides a bony covering to the
                      spinal cord
                    </li>
                  </ol>
                </div>
                {answer ? (
                  <div className="card mt-3">
                    <div className="card-body py-0 shadow">
                      <p className="m-2 typing-demo" id="answer">                        
                        The Spinal Cord is protected by the verterbal column
                      </p>
                      <span
                        className="position-absolute top-0 start-50 translate-middle badge rounded-pill rounded-pills bg-danger"
                        id="showAnswerBadge"
                      >
                        Answer
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="card mt-2">
                    <div
                      className="card-body text-center py-2"
                      id="showAnswerDiv"
                      onClick={getAnswerDiv}
                    >
                      <label id="showAnswer">Show Answer</label>
                    </div>
                  </div>
                )}

                <h5 className="card-title brand-color mt-3">
                  Question 2
                </h5>
                <p className="card-text">
                  Which of the following is a true statement about the
                  protective structures of the spinal cord?
                </p>
                <div className="options">
                  <ol className="list-group list-group-numbered list-of-options">
                    <li className="list-group-item">
                      The Spinal Cord is protected by the verterbal column
                    </li>
                    <li className="list-group-item">
                      The meninges are two coverings composed of connective
                      tissue that connect around the spinal cord.
                    </li>
                    <li className="list-group-item">
                      The outermost layer of the meninges is the archnoid
                    </li>
                    <li className="list-group-item">
                      The cerebrospinal flud provides a bony covering to the
                      spinal cord
                    </li>
                  </ol>
                </div>
                {answer ? (
                  <div className="card mt-3">
                    <div className="card-body py-0 shadow">
                      <p className="m-2 typing-demo" id="answer">
                        {" "}
                        The Spinal Cord is protected by the verterbal column
                      </p>
                      <span
                        className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
                        id="showAnswerBadge"
                      >
                        Answer
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="card mt-2">
                    <div
                      className="card-body text-center py-2"
                      id="showAnswerDiv"
                      onClick={getAnswerDiv}
                    >
                      <label id="showAnswer">Show Answer</label>
                    </div>
                  </div>
                )}
                <h5 className="card-title brand-color mt-3">
                  Question 3
                </h5>
                <p className="card-text">
                  Which of the following is a true statement about the
                  protective structures of the spinal cord?
                </p>
                <div className="options">
                  <ol className="list-group list-group-numbered list-of-options">
                    <li className="list-group-item">
                      The Spinal Cord is protected by the verterbal column
                    </li>
                    <li className="list-group-item">
                      The meninges are two coverings composed of connective
                      tissue that connect around the spinal cord.
                    </li>
                    <li className="list-group-item">
                      The outermost layer of the meninges is the archnoid
                    </li>
                    <li className="list-group-item">
                      The cerebrospinal flud provides a bony covering to the
                      spinal cord
                    </li>
                  </ol>
                </div>
                {answer ? (
                  <div className="card mt-3">
                    <div className="card-body py-0 shadow">
                      <p className="m-2 typing-demo" id="answer">
                        {" "}
                        The Spinal Cord is protected by the verterbal column
                      </p>
                      <span
                        className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
                        id="showAnswerBadge"
                      >
                        Answer
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="card mt-2">
                    <div
                      className="card-body text-center py-2"
                      id="showAnswerDiv"
                      onClick={getAnswerDiv}
                    >
                      <label id="showAnswer">Show Answer</label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ListofQuestions;
