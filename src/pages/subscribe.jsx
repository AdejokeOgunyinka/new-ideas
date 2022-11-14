import { useForm } from "react-hook-form";
import "../styles/subscribe.scss";

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    handleBlur,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(`${JSON.stringify(data)}`);

  return (
    <div className="subscribe-main">
      <h3>Subscribe to my Mailing List</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="subscribe-form">
        <div className="subscribe-form-input">
          <input
            type="text"
            placeholder="First name"
            onBlur={handleBlur}
            {...register("First name", { required: true, maxLength: 80 })}
          />
          {errors["First name"] && (
            <p className="subscribe-form-error">{errors["First name"].type}</p>
          )}
        </div>
        <div className="subscribe-form-input">
          <input
            type="text"
            placeholder="Last name"
            onBlur={handleBlur}
            {...register("Last name", { required: true, maxLength: 100 })}
          />
          {errors["Last name"] && (
            <p className="subscribe-form-error">{errors["Last name"].type}</p>
          )}
        </div>
        <div className="subscribe-form-input">
          <input
            type="text"
            placeholder="Email"
            onBlur={handleBlur}
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors["Email"] && (
            <p className="subscribe-form-error">{errors["Email"].type}</p>
          )}
        </div>
        <div className="subscribe-form-input">
          <input
            type="tel"
            placeholder="Mobile number"
            onBlur={handleBlur}
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          {errors["Mobile number"] && (
            <p className="subscribe-form-error">
              {errors["Mobile number"].type}
            </p>
          )}
        </div>
        <div className="subscribe-form-input">
          <select
            {...register("Title", { required: true })}
            onBlur={handleBlur}
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
          {errors["Title"] && (
            <p className="subscribe-form-error">{errors["Title"].type}</p>
          )}
        </div>

        <div className="subscribe-form-developer">
          <p>Are you a developer?</p>
          <div className="subscribe-form-radio">
            <input
              {...register("Developer", { required: true })}
              type="radio"
              value="Yes"
              onBlur={handleBlur}
            />
            <label>Yes</label>
          </div>
          <div className="subscribe-form-radio">
            <input
              {...register("Developer", { required: true })}
              type="radio"
              value="No"
            />
            <label>No</label>
          </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Subscribe;
