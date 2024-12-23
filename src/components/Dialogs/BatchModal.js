"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function BatchModal() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = true // Replace with your media query logic if needed.

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Batch</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Batch</DialogTitle>
                    </DialogHeader>
                    <BatchForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">Add Batch</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Add Batch</DrawerTitle>
                    <DrawerDescription>You can add batch details here.</DrawerDescription>
                </DrawerHeader>
                <BatchForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function BatchForm({ className }) {
    // Mock data for trainers and courses
    const trainers = ["John Doe", "Jane Smith", "Alice Johnson"]
    const courses = ["Web Development", "App Development", "Python Programming"]

    return (
        <form className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="batch-name">Batch Name</Label>
                <Input required type="text" id="batch-name" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="merged">Merged</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="trainer">Trainer</Label>
                <Select required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Trainer" />
                    </SelectTrigger>
                    <SelectContent>
                        {trainers.map((trainer, index) => (
                            <SelectItem key={index} value={trainer}>
                                {trainer}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="students">No of Students</Label>
                <Input required type="number" id="students" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="course">Course</Label>
                <Select required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent>
                        {courses.map((course, index) => (
                            <SelectItem key={index} value={course}>
                                {course}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Button type="submit">Add Batch</Button>
        </form>
    )
}
