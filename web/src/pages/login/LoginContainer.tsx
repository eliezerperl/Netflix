import LoginForm from './LoginForm';

const LoginContainer = () => {
  return (
    <section className="bg-black opacity-70 flex flex-col gap-16 p-16 ">
      <LoginForm />
      <div>
        <span>New to Netflix? </span>
        <a href="/">Sign up now.</a>
      </div>
    </section>
  );
};

export default LoginContainer;
