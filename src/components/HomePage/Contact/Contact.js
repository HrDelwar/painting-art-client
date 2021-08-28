import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID } from "../../../env";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, data, YOUR_USER_ID).then(
      function (response) {
        setSuccess(true);
        e.target.reset();
      },
      function (error) {
        setSuccess(false);
      }
    );
  };

  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }
  return (
    <section id="contact" className="contact pt-4">
      <div className="container pt-5">
        <div className="text-center text-white mb-5">
          <h5 className="text-primary text-uppercase">Contact</h5>
          <h2 className="lined text-brand text-center text-capitalize pb-2">
            Let's talk about your painting
          </h2>
        </div>
        <div className="col-md-9 mx-auto">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
              <input
                {...register("name", { required: true })}
                type="text"
                class={
                  "form-control mt-x-0 " + (errors.name ? "form-error" : "")
                }
                required
                placeholder="Name *"
              />
              {errors.name && <p class="text-danger">Name is required</p>}
            </div>
            <div className="input-group mb-3">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "You must specify a email",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter correct email address",
                  },
                })}
                type="text"
                class={
                  "form-control mt-x-0 " + (errors.email ? "form-error" : "")
                }
                required
                placeholder="Email Address *"
              />
              {errors.email && (
                <p class="text-danger">{errors.email.message}</p>
              )}
            </div>
            <div className="input-group mb-3">
              <input
                {...register("subject", {
                  required: {
                    value: true,
                    message: "You must specify a subject",
                  },
                })}
                type="text"
                class={
                  "form-control mt-x-0 " + (errors.subject ? "form-error" : "")
                }
                required
                placeholder="Subject *"
              />
              {errors.subject && (
                <p class="text-danger">{errors.subject.message}</p>
              )}
            </div>
            <div class="col-sm-12">
              <textarea
                name="message"
                {...register("message", { required: true })}
                id="message"
                class={
                  "form-control mt-x-0 " + (errors.message ? "form-error" : "")
                }
                placeholder="Message"
                rows="10"
              ></textarea>
              {errors.name && <p class="text-danger">Message is required</p>}
            </div>
            <div className="input-group mt-3 mb-3 text-center">
              <button type="submit" className="btn-custom">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
          {success && (
            <p class="color-brand" style={{ fontSize: 25, marginTop: 10 }}>
              Message send successfully!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
