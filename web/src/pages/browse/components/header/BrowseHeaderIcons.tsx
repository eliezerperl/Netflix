import { useStoreContext } from '@/utils/context/StoreContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Bell, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { USER_SIGNOUT } from '@/utils/actions/Actions';

const BrowseHeaderIcons = () => {
  const { state, dispatch: storeDispatch } = useStoreContext();
  const { userInfo } = state;

  const signoutHandler = () => {
    storeDispatch({ type: USER_SIGNOUT });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('myList');
  };

  return (
    <section className="flex items-center justify-end gap-2">
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="flex data-[state=open]:border border-red-600 data-[state=open]:pl-2">
          <AccordionTrigger>
            <Search />
          </AccordionTrigger>
          <AccordionContent>
            <Input className="border-none" placeholder="Titles, genres" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Bell />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="cursor-default">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${!userInfo?.profilePicture ? 'min-' : ''}w-1/12`}>
          {userInfo?.profilePicture ? (
            <img
              src={userInfo?.profilePicture}
              alt={`${userInfo?.username}'s profile pictture`}
            />
          ) : (
            <div>{userInfo?.username}</div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {userInfo?.profilePicture ? (
              <>
                <div>{userInfo?.username}</div>
                <div>{userInfo?.email}</div>
              </>
            ) : (
              <div>{userInfo?.email}</div>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log(state)}>
            Print State
          </DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex justify-center">
            <Button onClick={signoutHandler}>Sign out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default BrowseHeaderIcons;
