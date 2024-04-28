import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaceIcon } from "@radix-ui/react-icons"
import { createSupabaseBrower } from "@/lib/supabase/client";
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { DialogClose } from "@radix-ui/react-dialog"




export function AnonymouslyModal() {
  const router=useRouter()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
     const fakeEmail=Math.floor(Math.random() * 101);
     const fakePassword=Math.floor(Math.random() *100)
    const supabase = createSupabaseBrower();
    async function signUpNewUser() {
      const { data, error } = await supabase.auth.signUp({
        email: email||"asrat"+fakeEmail+"@gmail.com",
        password: password||"12345oy"+fakePassword,
  
      })
      if(error){
        console.log(error)
      }else{
        console.log(data)
         router.push(location.origin +
					location.pathname,)
          window.location.reload()
        
      }
    }
  
    
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button
			variant="outline"
			className="flex items-center gap-2 border p-2 rounded-md border-zinc-400 hover:border-green-500 transition-all px-8 animate-fade"
			
		>
			<FaceIcon/> Join anonymously

		</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Join anonymously</DialogTitle>
          <DialogDescription>
            Use Fake Email and Password to Explore  all the Feature 
            or just click Login
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Fake Email
            </Label>
            <Input id="name" type="email" onChange={(e)=>{setEmail(e.target.value)}}  placeholder="example@gmail.com" value={email} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            Fake Password
            </Label>
            <Input id="username" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="12345678" type="password"  className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
         <DialogClose asChild>
         <Button onClick={signUpNewUser} type="submit">Login</Button>
         </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
