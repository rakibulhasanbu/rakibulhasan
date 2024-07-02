import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserRole } from "@/types/common";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOut } from "@/redux/features/auth/authSlice";
import AppLoading from "../ui/AppLoading";

interface TPrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout = ({ children }: TPrivateLayoutProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (!user?.email) {
    router.push("/sign-in");
    return (
      <div className="flex justify-center">
        <AppLoading />
      </div>
    );
  }

  if (user.role !== UserRole.SUPER_ADMIN) {
    return (
      <div className="text-center h-screen  flex-col flex justify-center items-center text-xl font-bold">
        <h2 className="2xl:text-5xl text-textSecondary pb-4">Opps! You are not Valid!</h2>
        <Link
          href="sign-in"
          onClick={() => dispatch(logOut())}
          className="block border px-4 lg:px-8 text-md py-2 mt-5 text-red-600 border-red-600 rounded-full"
        >
          Sign in
        </Link>
      </div>
    );
  }

  return <>{children}</>;
};

export default PrivateLayout;
