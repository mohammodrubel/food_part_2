

import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { getFormLocaleStorage, removeFromLocaleStorage } from "@/utils/localeStoratge";
import useTranslation from "@/hooks/useTranslation";

function UserDropDown({ labels }) {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const tokenInfo = getFormLocaleStorage("accessToken");
    setToken(tokenInfo);
  }, []);

  // Handle logout
  const logout = () => {
    removeFromLocaleStorage("accessToken");
    setToken(null);
    router.push("/login");
  };
const t = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">
          <CircleUserRound
            size={22}
            className="text-gray-500 hover:text-green-600"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 shadow-xl border" align="end">
        {token ? (
          <>
            <DropdownMenuItem asChild>
              <Link
                href="/profile"
                className="w-full px-2 py-1.5 rounded-md hover:bg-gray-100 text-gray-700"
              >
                {labels.profile}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <div className="px-2 pb-2">
              <Button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white w-full"
              >
                {labels.logout}
              </Button>
            </div>
          </>
        ) : (
          <div className="px-2 py-2 space-y-2">
            <Link href="/login">
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                {/* {labels.login} */} {t("login.login_btn", "Login")}
              </Button>
            </Link>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropDown;
