import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      position: "",
      experience: "",
      skills: [],
      workAuthorization: "",
      remote: "",
      coverLetter: "",
      terms: false,
    },
  });

  // Simulate loading existing data from an API
  useEffect(() => {
    const applicationData = {
      firstName: "CJ",
      lastName: "Sibanda",
      email: "cjsibs@example.com",
      phone: "576-123-4567",
      age: 98,
      position: "Frontend-Developer",
      experience: 5,
      skills: ["react", "javascript", 'typeScript'],
      workAuthorization: "yes",
      remote: "hybrid",
      coverLetter:
        "I am excited to apply for this position and contribute",
      terms: true,
    };

    for (const field in applicationData) {
      setValue(field, applicationData[field]);
    }
  }, [setValue]);

  // Watch the position field
  const selectedPosition = watch("position");

  function submitForm(data) {
    console.log("Application submitted:");
    console.log(data);

    alert("Application submitted! Check the browser console for the form data.");
  }

  return (
    <div className="page">
      <div className="form-container">
        <header className="form-header">
          <p className="eyebrow">Career Application</p>
          <h1>Join our team</h1>
          <p>
            Tell us about yourself and your experience. Submit all required fields.
          </p>
        </header>

        <form onSubmit={handleSubmit(submitForm)} noValidate>

          {/* Personal Information */}
          <section>
            <h2>Personal Information</h2>

            <div className="grid">
              <div className="field">
                <label>First Name *</label>

                <input
                  className={errors.firstName ? "inputError" : ""}
                  {...register("firstName", {
                    required: "First name is required",
                    maxLength: {
                      value: 20,
                      message: "First name cannot exceed 20 characters",
                    },
                  })}
                />

                {errors.firstName && (
                  <span className="error">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className="field">
                <label>Last Name *</label>

                <input
                  className={errors.lastName ? "inputError" : ""}
                  {...register("lastName", {
                    required: "Last name is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Last name must contain letters only",
                    },
                  })}
                />

                {errors.lastName && (
                  <span className="error">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid">
              <div className="field">
                <label>Email *</label>

                <input
                  type="email"
                  className={errors.email ? "inputError" : ""}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />

                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>

              <div className="field">
                <label>Phone *</label>

                <input
                  type="tel"
                  className={errors.phone ? "inputError" : ""}
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 characters",
                    },
                  })}
                />

                {errors.phone && (
                  <span className="error">{errors.phone.message}</span>
                )}
              </div>
            </div>

            <div className="field">
              <label>Age *</label>

              <input
                type="number"
                className={errors.age ? "inputError" : ""}
                {...register("age", {
                  required: "Age is required",
                  valueAsNumber: true,
                  min: {
                    value: 18,
                    message: "You must be at least 18",
                  },
                  max: {
                    value: 99,
                    message: "Age must be 99 or less",
                  },
                })}
              />

              {errors.age && (
                <span className="error">{errors.age.message}</span>
              )}
            </div>
          </section>

          {/* Position */}
          <section>
            <h2>Position</h2>

            <div className="field">
              <label>Position you're applying for *</label>

              <select
                className={errors.position ? "inputError" : ""}
                {...register("position", {
                  required: "Please select a position",
                })}
              >
                <option value="">Select a position</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">AI Engineer</option>
                <option value="designer">Project Manager</option>
              </select>

              {errors.position && (
                <span className="error">{errors.position.message}</span>
              )}
            </div>

            <div className="field">
              <label>Years of Experience *</label>

              <input
                type="number"
                className={errors.experience ? "inputError" : ""}
                {...register("experience", {
                  required: "Experience is required",
                  valueAsNumber: true,
                  min: {
                    value: 0,
                    message: "Experience cannot be negative",
                  },
                  max: {
                    value: 50,
                    message: "Please enter a realistic experience value",
                  },
                })}
              />

              {errors.experience && (
                <span className="error">
                  {errors.experience.message}
                </span>
              )}
            </div>

            {/* watch() example */}
            {selectedPosition === "frontend" && (
              <div className="field conditional">
                <strong>Frontend applicant</strong>
                <p>
                  Since you selected Frontend Developer, make sure React is
                  included in your skills.
                </p>
              </div>
            )}

            <div className="field">
              <label>Skills *</label>

              <select
                multiple
                className={errors.skills ? "inputError" : ""}
                {...register("skills", {
                  validate: (value) =>
                    value.length > 0 || "Select at least one skill",
                })}
              >
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="css">CSS</option>
                <option value="node">Node.js</option>
                <option value="figma">Figma</option>
              </select>

              <small>Hold Ctrl/Cmd to select multiple skills.</small>

              {errors.skills && (
                <span className="error">{errors.skills.message}</span>
              )}
            </div>
          </section>

          {/* Work Preferences */}
          <section>
            <h2>Work Preferences</h2>

            <div className="field">
              <label>Are you legally authorized to work? *</label>

              <label className="radio">
                <input
                  type="radio"
                  value="yes"
                  {...register("workAuthorization", {
                    required: "Please select an option",
                  })}
                />
                Yes
              </label>

              <label className="radio">
                <input
                  type="radio"
                  value="no"
                  {...register("workAuthorization")}
                />
                No
              </label>

              {errors.workAuthorization && (
                <span className="error">
                  {errors.workAuthorization.message}
                </span>
              )}
            </div>

            <div className="field">
              <label>Preferred work arrangement *</label>

              <label className="radio">
                <input
                  type="radio"
                  value="remote"
                  {...register("remote", {
                    required: "Please select a work arrangement",
                  })}
                />
                Remote
              </label>

              <label className="radio">
                <input
                  type="radio"
                  value="hybrid"
                  {...register("remote")}
                />
                Hybrid
              </label>

              <label className="radio">
                <input
                  type="radio"
                  value="office"
                  {...register("remote")}
                />
                Office
              </label>

              {errors.remote && (
                <span className="error">{errors.remote.message}</span>
              )}
            </div>
          </section>

          {/* Cover Letter */}
          <section>
            <h2>About You</h2>

            <div className="field">
              <label>Cover Letter *</label>

              <textarea
                rows="7"
                className={errors.coverLetter ? "inputError" : ""}
                {...register("coverLetter", {
                  required: "Cover letter is required",
                  minLength: {
                    value: 50,
                    message: "Cover letter must be at least 50 characters",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Cover letter cannot exceed 1000 characters",
                  },
                })}
              />

              {errors.coverLetter && (
                <span className="error">
                  {errors.coverLetter.message}
                </span>
              )}
            </div>
          </section>

          {/* Terms */}
          <section>
            <label className="checkbox">
              <input
                type="checkbox"
                {...register("terms", {
                  validate: (value) =>
                    value || "You must agree before submitting",
                })}
              />
              I confirm that the information provided is accurate.
            </label>

            {errors.terms && (
              <span className="error">{errors.terms.message}</span>
            )}
          </section>

          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}