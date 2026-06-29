"use client"

import { useEffect, useState } from "react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ModalForStart() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const hasClosedModal = sessionStorage.getItem("modalClosed")
        if (!hasClosedModal) {
            setOpen(true)
        }
    }, [])

    const handleClose = () => {
        setOpen(false)
        sessionStorage.setItem("modalClosed", "true")
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:min-w-[630px] ">
                <DialogHeader>
                    <DialogTitle className="text-2xl! font-bold">Get 10 <span className="text-[#7CAE4D]">Free Email Templates</span> for Expo Invitations.</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input id="name-1" name="name" placeholder="Full Name" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="username-1">Buisness Email</Label>
                        <Input id="username-1" name="username" placeholder="Enter Your Buisness Email" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="username-1">Phone</Label>
                        <Input id="username-1" name="username" placeholder="Enter Your Buisness Phone" />
                    </div>
                </div>
                {/* <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" onClick={handleClose}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogFooter> */}
                <Button className="bg-[#7CAE4D] hover:bg-[#7CAE4D]" type="submit">Get Template</Button>
                <div className="text-gray-700">By submitting this form, you are agreeing to BestDataNet <span className="text-[#7CAE4D]!">Privacy Policy</span> and <span className="text-[#7CAE4D]!">Terms of Use</span></div>
            </DialogContent>
        </Dialog>
    )
}
