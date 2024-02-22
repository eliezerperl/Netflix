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
          <DropdownMenuItem
            onClick={() => {
              storeDispatch({
                type: 'TOKEN_TEST',
                payload: {
                  _id: '65c63e95377de65503bd20c0', // Provide a default value or handle it appropriately
                  username: 'Eliezer Per',
                  email: 'eliezerperl7@gmail.com',
                  profilePicture: undefined,
                  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM2M2U5NTM3N2RlNjU1MDNiZDIwYzAiLCJ1c2VybmFtZSI6IkVsaWV6ZXIgUGVybCIsImVtYWlsIjoiZWxpZXplcnBlcmw3QGdtYWlsLmNvbSIsImlhdCI6MTcwODYzMzcwMywiZXhwIjoxNzA4NjM0NjAzfQ.karUE_dNfAOhDX6_9i9iFBQlV7IHxUmtFYLDN4bf4Yc',
                },
              });
            }}>
            change Token to invalid user data
          </DropdownMenuItem>
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
