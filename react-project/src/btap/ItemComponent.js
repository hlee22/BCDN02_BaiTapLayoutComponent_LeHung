import React, { Component } from "react";

export default class ItemComponent extends Component {
  render() {
    return (
      <div class="container ">
        <div class="row">
          <div class="col-3">
            <div class="card bg-light border-0 h-100">
            <i class="bi bi-collection"></i>

              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div class="feature t text-white rounded-3 mb-4 mt-n4">
                  <img src="" alt="..." />
                </div>
                <h2 class="fs-4 fw-bold">Card title</h2>
                <p class="mb-0">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ullam!
                </p>
                <div>
                <button className="btn btn-primary  "> Find out more</button>

                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card bg-light border-0 h-100">
              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <img src="" alt="..." />

                <div class="feature bg-primaryt text-white rounded-3 mb-4 mt-n4">
                  <i class="bi bi-cloud-download"></i>

                </div>
                <h2 class="fs-4 fw-bold">Free to download</h2>
                <p class="mb-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, magni?
                </p>
                <button className="btn btn-primary "> Find out more</button>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card bg-light border-0 h-100">
            <img src="" alt="..." />

              
              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div class="feature bg-primaryt text-white rounded-3 mb-4 mt-n4">
                  <i class="bi bi-card-heading"></i>
                </div>
                <h2 class="fs-4 fw-bold">Jumbotron hero header</h2>
                <p class="mb-0">
                  The heroic part of this template is the jumbotron hero header!
                </p>
                <button className="btn btn-primary "> Find out more</button>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card bg-light border-0 h-100">
            <img src="" alt="..." />

              <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div class="feature bg-primaryt text-white rounded-3 mb-4 mt-n4">
                  <i class="bi bi-bootstrap"></i>
                </div>
                <h2 class="fs-4 fw-bold">Feature boxes</h2>
                <p class="mb-0">
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
                <button className="btn btn-primary "> Find out more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
