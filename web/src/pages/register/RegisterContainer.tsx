import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from '@/utils/imports';

const RegisterContainer = () => {
  const navigate = useNavigate();

  const registerRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.currentTarget.email.value) {
      console.log('error');
      return;
    }

    navigate(`/register?email=${e.currentTarget.email.value}`);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-9">
        <h1 className="text-3xl text-center font-bold">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="font-semibold">Watch anywhere. Cancel anytime.</p>
        <p className="text-center font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex gap-3" onSubmit={registerRedirect}>
          <Input placeholder="Email" name="email" />
          <Button className="bg-red-600" type="submit">
            Get Started <ChevronRight />
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterContainer;
