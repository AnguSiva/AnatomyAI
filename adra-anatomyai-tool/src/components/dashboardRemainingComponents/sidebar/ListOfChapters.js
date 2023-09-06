import React from 'react'

const ListOfChapters = () => {
  return (
    <>
    <div className="card p-2 text-center" style={{color:'#ff6c95'}}>AnatomyandPhysiology-OP</div>
        <ol
          class="list-group list-chapters"
          style={{ maxHeight: "65vh", overflow: "auto", scrollbarWidth:'thin' }}
        >
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center text-secondary rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="true"
              >
                Chapter 1
              </button>
              <div class="collapse show" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div class="fw-bold"></div>
              Cras justo odio */}
            </div>
            <span class="badge  rounded-pill">1</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Chapter 2
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start ">
            <div class="me-auto">
              <button
                class="btn btn-toggle align-items-center rounded collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse1"
                aria-expanded="false"
              >
                Chapter 3
              </button>
              <div class="collapse" id="dashboard-collapse1">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 2
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 3
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" rounded">
                      Sub Chapter 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span class="badge  rounded-pill rounded-pills">12</span>
          </li>
        </ol>
    </>
  )
}

export default ListOfChapters