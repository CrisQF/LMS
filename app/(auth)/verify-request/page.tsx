"use client";

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { authClient } from '@/lib/auth-client';
import { useState, useTransition } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function VerifyRequest(){
        const searchParams = useSearchParams();
        const router = useRouter();
        const email = searchParams.get('email') || '';
        const [otp, setOtp] = useState("");
        const [emailPending, startTransition] = useTransition();

    function verifyOtp(){
        if (!otp || otp.length !== 6) {
            toast.error("Please enter a valid 6-digit code");
            return;
        }
        
        startTransition(async() => {
            await authClient.signIn.emailOtp({
                email,
                otp,
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Email verified successfully!");
                        router.push("/");
                    },
                    onError: () => {
                        toast.error("Invalid OTP code. Please try again.");
                    }
                }
            })
        })
    }    
    return (
        <Card className='w-full mx-auto'>
            <CardHeader className='text-center'>
                <CardTitle className="text-xl">Please check your email</CardTitle>
                <CardDescription>We have sent a verification email code to your email address. Please open the email and paste the code below.
                </CardDescription>
                <CardContent className='space-y-6'>
                    <div className='flex flex-col items-center space-y-2'>
                    <InputOTP
                     value={otp}
                     onChange={(value) => setOtp(value)}
                     maxLength={6}
                     className='gap-2'
                    >
                    <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                    </InputOTPGroup>
                    </InputOTP>
                    <p className='text-sm text-muted-foreground'>Enter the 6-digit code sent to your email</p>
                    </div>

                    <Button 
                        className='w-full' 
                        onClick={verifyOtp}
                        disabled={emailPending || otp.length !== 6}
                    >
                        {emailPending ? (
                        <> 
                        <Loader2 className='size-4 animate-spin' />
                        <span>Loading...</span>
                           
                        </>   
                        ): (
                            "Verify Account"
                        )}

                    </Button>
                </CardContent>
            </CardHeader>
        </Card>
    )
}