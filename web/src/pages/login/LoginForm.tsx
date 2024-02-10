import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { USER_SIGNIN } from '@/utils/actions/Actions';
import { useStoreContext } from '@/utils/context/StoreContext';
import { axios, useNavigate } from '@/utils/imports';

const LoginForm = () => {
  const { dispatch: storeDispatch } = useStoreContext();
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      //dispatch get request
      const { data } = await axios.post('/api/v1/users/signin', {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      });
      //dispatch get succes
      localStorage.setItem('userInfo', JSON.stringify(data));
      storeDispatch({ type: USER_SIGNIN, payload: data });
      navigate('/browse');
    } catch (error) {
      //dispatch get fail
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3 w-72" onSubmit={submitHandler}>
      <div className="text-3xl font-semibold py-3">Sign In</div>

      <Input placeholder="Email" name="email" />

      <Input placeholder="Password" name="password" />

      <Button type="submit" className="bg-red-600">
        Sign In
      </Button>

      <a className="text-center" href="/forgot">
        Forgot password?
      </a>
    </form>
  );
};

export default LoginForm;
