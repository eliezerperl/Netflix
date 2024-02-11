import Header from '@/utils/components/header/Header';
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

const BrowseHeader = () => {
  const { state, dispatch: storeDispatch } = useStoreContext();

  const signoutHandler = () => {
    storeDispatch({ type: USER_SIGNOUT });
    localStorage.removeItem('userInfo');
  };

  return (
    <Header className="h-20">
      <div className="flex items-center gap-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="flex pl-2">
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
          <DropdownMenuTrigger className="cursor-pointer">
            {state.userInfo?.username}
            {/* <img
            className="w-1/12"
            src={state.userInfo?.profilePicture}
            alt={`${state.userInfo?.username}'s profile pictture`}
            /> */}
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
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-center">
              <Button onClick={signoutHandler}>Sign out</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Header>
  );
};

export default BrowseHeader;
