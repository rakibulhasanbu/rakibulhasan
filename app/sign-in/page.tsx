"use client";

import React from "react";
import { cn } from "@/lib/utils";;
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormData {
    email: string;
    password: string;
}

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        console.log("object");
        if (data.password.length < 8) {
            toast.error("minimum password value is 8");
        }
    };

    return (
        <div className='w-full bg-[#000319] dark:bg-grid-white/[0.03] flex items-center justify-center min-h-screen'>
            <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#000319]">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome to Rakibul&apos;s world
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Login to Dashboard if you can because we don&apos;t have a login credentials
                </p>

                <form className="my-8" onSubmit={handleSubmit(onSubmit)}>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            type="email"
                            name={"email"}
                            register={register}
                            id="email"
                            placeholder="rakibulhasanbu@gmail.com"
                            required
                        />
                        {errors.email && <p className="text-sm text-red-400">Email is Required</p>}

                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            register={register}
                            name="password"
                            required
                            id="password"
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="text-sm text-red-400">Password is Required</p>}
                    </LabelInputContainer>

                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Sign up &rarr;
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                </form>
            </div>
        </div>
    );
}

export default SignIn;

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
