import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

export const action =
  (store) =>
  async ({ request }) => {
    console.log(store);
    return store;
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 bg-base-100 shadow-xl p-8 flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          defaultValue="test@test.com"
          name="identifier"
          label="Email"
        />
        <FormInput
          type="password"
          defaultValue="secret"
          name="password"
          label="Password"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
