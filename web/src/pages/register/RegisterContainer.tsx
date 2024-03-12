import { Input } from '@/components/ui/input';
import { ChevronRight } from 'lucide-react';
import {
  SubmitHandler,
  axios,
  toast,
  useForm,
  useNavigate,
  useReducer,
} from '@/utils/imports';
import { z } from 'zod';
import classNames from 'classnames';
import { zodResolver } from '@hookform/resolvers/zod';
import CompletAuthBtn from '@/utils/components/shared/CompletAuthBtn';
import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from '@/utils/actions/Actions';
import fetchReducer from '@/utils/reducers/fetchReducer';
import { LoadingState } from '@/models/store';

const UserStartRegistrationSchema = z.object({
  email: z.coerce
    .string()
    .min(1, { message: 'Please enter an email' })
    .email({ message: 'Invalid email address' }),
});

type UserStartRegistrationSchemaType = z.infer<
  typeof UserStartRegistrationSchema
>;

const RegisterContainer = () => {
  const navigate = useNavigate();

  const initialState: LoadingState = {
    loading: false,
    error: '',
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const onSubmit: SubmitHandler<UserStartRegistrationSchemaType> = async ({
    email,
  }) => {
    //check if email exists in db
    try {
      dispatch({ type: GET_REQUEST });
      await axios.post(`/api/v1/users/doesexist`, {
        email,
      });
      dispatch({ type: GET_SUCCESS });
    } catch (error) {
      dispatch({
        type: GET_FAIL,
        payload: 'the request to start register failed',
      });
      toast.error(`${email} is already registered with an existing account`);
      return;
    }

    navigate(`/register?email=${email}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserStartRegistrationSchemaType>({
    resolver: zodResolver(UserStartRegistrationSchema),
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 p-9 z-10 h-full">
        <h1 className="text-3xl text-center font-bold">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="font-semibold">Watch anywhere. Cancel anytime.</p>
        <p className="text-center font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex gap-3 relative" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email"
            className={classNames({ ['errorInput']: errors.email })}
            {...register('email')}
          />
          {errors.email && (
            <span className={'errorSpan left-4'}>{errors.email.message}</span>
          )}

          <CompletAuthBtn btnText="Get Started" loading={state.loading}>
            <ChevronRight />
          </CompletAuthBtn>
        </form>
      </div>
    </>
  );
};

export default RegisterContainer;
