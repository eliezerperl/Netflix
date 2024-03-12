import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  GET_FAIL,
  GET_REQUEST,
  GET_SUCCESS,
  USER_SIGNIN,
} from '@/utils/actions/Actions';
import { useStoreContext } from '@/utils/context/StoreContext';
import {
  SubmitHandler,
  axios,
  toast,
  useForm,
  useNavigate,
  useReducer,
} from '@/utils/imports';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import classNames from 'classnames';
import fetchReducer from '@/utils/reducers/fetchReducer';
import { LoadingState } from '@/models/store';
import CompletAuthBtn from '@/utils/components/shared/CompletAuthBtn';

const UserLoginSchema = z.object({
  email: z.coerce
    .string()
    .min(1, { message: 'You must enter an email' })
    .email({ message: 'Invalid email address' }),
  password: z.coerce.string().min(1, { message: 'You must enter a password' }),
});

type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;

const LoginForm = () => {
  const { dispatch: storeDispatch } = useStoreContext();
  const navigate = useNavigate();

  const initialState: LoadingState = {
    loading: false,
    error: '',
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const onSubmit: SubmitHandler<UserLoginSchemaType> = async ({
    email,
    password,
  }) => {
    try {
      dispatch({ type: GET_REQUEST });
      const { data } = await axios.post('/api/v1/users/signin', {
        email,
        password,
      });
      dispatch({ type: GET_SUCCESS });

      storeDispatch({ type: USER_SIGNIN, payload: data });
      navigate('/browse');
    } catch (error) {
      dispatch({ type: GET_FAIL, payload: 'the request to login failed' });
      console.log(error);
      toast.error('Wrong Credenetials');
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserLoginSchemaType>({ resolver: zodResolver(UserLoginSchema) });

  return (
    <>
      <form
        className="flex flex-col gap-6 w-72 relative"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="text-3xl font-semibold py-3">Sign In</div>

        <section className="inputSection">
          <Input
            placeholder="Email"
            className={classNames({ ['errorInput']: errors.email })}
            {...register('email')}
          />
          {errors.email && (
            <span className={'errorSpan'}>{errors.email.message}</span>
          )}
        </section>

        <section className="inputSection">
          <Input
            type="password"
            placeholder="Password"
            className={classNames({ ['errorInput']: errors.password })}
            {...register('password')}
          />
          {errors.password && (
            <span className={'errorSpan'}>{errors.password.message}</span>
          )}
        </section>

        <CompletAuthBtn btnText="Sign In" loading={state.loading} />

        <a className="text-center" href="/forgot">
          Forgot password?
        </a>
      </form>
      <section className="flex flex-col gap-2 border p-4">
        <div>
          <strong>Email:</strong> demo@demo.com
        </div>
        <div>
          <strong>Password:</strong> 12345
        </div>
        <Button
          className="bg-red-600"
          onClick={() => {
            // Autofill form fields
            setValue('email', 'demo@demo.com');
            setValue('password', '12345');
          }}>
          Autofill
        </Button>
      </section>
    </>
  );
};

export default LoginForm;
