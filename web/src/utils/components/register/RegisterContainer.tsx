import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const RegisterContainer = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 p-9">
        <h1 className="text-3xl">Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <article className="flex gap-3">
          <Input placeholder="Email" />
          <Button className="bg-red-600">Get Started</Button>
        </article>
      </div>
    </>
  );
};

export default RegisterContainer;
