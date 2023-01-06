import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>

      <p class="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will reach out to you within a matter of hours to
        help.
      </p>
      <div className="row">
        <div className="col-md-4 offset-md-3">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Full Name</label>
              <input
                type="email"
                placeholder="John Doe"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="form-control btn btn-success my-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
