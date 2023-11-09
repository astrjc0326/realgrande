const Footer = () => {
  return (
    <footer class="bg-warning text-center text-white">
      <div class="container p-4">
        <section class="mb-4">
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
        </section>

        <section class="">
          <form action="">
            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div class="col-md-5 col-12">
                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    class="form-control"
                  />
                  <label class="form-label" for="form5Example21">
                    Email address
                  </label>
                </div>
              </div>

              <div class="col-1">
                <button type="submit" class="btn btn-outline-light ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>

        <section class="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section class="">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Join us</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Become an Agent
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">About us</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Why RealGrande?
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Community Impact
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Diversity & Inclusion
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Life at Redfin
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Real Estate News
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Find us</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Subsidiaries</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Rent
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Bay Equity Home Loans
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Title Forward
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div
        class="text-center p-3"
        style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:RealGrande
        <a class="text-white" href="https://mdbootstrap.com/"></a>
      </div>
    </footer>
  );
};

export default Footer;
