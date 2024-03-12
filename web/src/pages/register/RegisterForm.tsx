import {
  axios,
  useLocation,
  useNavigate,
  SubmitHandler,
  useForm,
  useState,
  useReducer,
} from '@/utils/imports';
import { Input } from '@/components/ui/input';
import { useStoreContext } from '@/utils/context/StoreContext';
import {
  GET_FAIL,
  GET_REQUEST,
  GET_SUCCESS,
  USER_SIGNIN,
} from '@/utils/actions/Actions';
import AuthLayout from '@/utils/components/shared/AuthLayout';
// import { CustomError, getError, AxiosError } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import classNames from 'classnames';
import Title from '@/utils/components/shared/Title';
import fetchReducer from '@/utils/reducers/fetchReducer';
import { LoadingState } from '@/models/store';
import CompletAuthBtn from '@/utils/components/shared/CompletAuthBtn';

const UserRegisterSchema = z.object({
  username: z.coerce.string().min(1, { message: 'You must enter a username' }),
  email: z.coerce
    .string()
    .min(1, { message: 'You must enter an email' })
    .email({ message: 'Invalid email address' }),
  password: z.coerce.string().min(1, { message: 'You must enter a password' }),
  profilePicture: z
    .string()
    .url({ message: 'Invalid url' })
    .or(z.literal(''))
    .transform((val) => (val === '' ? null : val)),
});

type UserRegisterSchemaType = z.infer<typeof UserRegisterSchema>;

const RegisterForm = () => {
  const [duplicateEmail, setDuplicateEmail] = useState<boolean>(false);

  const { dispatch: storeDispatch } = useStoreContext();
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  const initialState: LoadingState = {
    loading: false,
    error: '',
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const onSubmit: SubmitHandler<UserRegisterSchemaType> = async ({
    username,
    email,
    password,
    profilePicture,
  }) => {
    try {
      dispatch({ type: GET_REQUEST });
      const { data } = await axios.post('/api/v1/users/signup', {
        username,
        email,
        password,
        profilePicture,
      });
      dispatch({ type: GET_SUCCESS });

      storeDispatch({ type: USER_SIGNIN, payload: data });
      navigate('/browse');
    } catch (error) {
      dispatch({ type: GET_FAIL, payload: 'the request to register failed' });
      //Error that can happen here is only duplicated email
      setDuplicateEmail(true);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterSchemaType>({
    resolver: zodResolver(UserRegisterSchema),
  });

  return (
    <>
      <Title title="Register" />
      <AuthLayout className="bg-white">
        <article className="flex justify-center z-10 bg-black rounded-md shadow-2xl">
          <form
            className="flex flex-col gap-7 w-80 p-12"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="text-3xl font-semibold py-3">Sign Up</div>

            <section className="inputSection">
              {email && (
                <Input
                  onClick={() => setDuplicateEmail(false)}
                  defaultValue={email}
                  disabled
                  className={classNames({ ['errorInput']: errors.email })}
                  {...register('email')}
                />
              )}
              {errors.email && (
                <span className={'errorSpan'}>{errors.email.message}</span>
              )}
              {duplicateEmail && (
                <span className={'errorSpan'}>Email already exists</span>
              )}
            </section>

            <section className="inputSection">
              <Input
                placeholder="Name"
                className={classNames({ ['errorInput']: errors.username })}
                {...register('username')}
              />
              {errors.username && (
                <span className={'errorSpan'}>{errors.username.message}</span>
              )}
            </section>

            <section className="inputSection">
              <Input
                type="password"
                placeholder="Choose Password"
                className={classNames({ ['errorInput']: errors.password })}
                {...register('password')}
              />
              {errors.password && (
                <span className={'errorSpan'}>{errors.password.message}</span>
              )}
            </section>

            <section className="inputSection">
              <Input
                placeholder="Profile Picture URL"
                className={classNames({
                  ['errorInput']: errors.profilePicture,
                })}
                {...register('profilePicture')}
              />
              {errors.profilePicture && (
                <span className={'errorSpan'}>
                  {errors.profilePicture.message}
                </span>
              )}
            </section>

            <CompletAuthBtn btnText="Sign Up" loading={state.loading} />
          </form>
        </article>
      </AuthLayout>
    </>
  );
};

export default RegisterForm;
