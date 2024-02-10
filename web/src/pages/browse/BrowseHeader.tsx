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
import { Bell, Search } from 'lucide-react';

type Props = {};

const BrowseHeader = (props: Props) => {
  const { state } = useStoreContext();

  return (
    <Header>
      <div className="flex gap-2">
        <section>
          <Search />
        </section>
        <section>
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
        </section>
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Header>
  );
};

export default BrowseHeader;
