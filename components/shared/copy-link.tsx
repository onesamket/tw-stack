"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function CopyLinkButton() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("npx tw-stack create")
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
                <Label htmlFor="command" className="sr-only">
                    command
                </Label>
                <Input
                    id="command"
                    defaultValue="$_ npx tw-stack create"
                    readOnly
                />
            </div>
            <Button type="button" size="sm" className="px-3 cursor-pointer" onClick={handleCopy}>
                <span className="sr-only">Copy</span>
                {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon onClick={handleCopy} className="h-4 w-4 " />}
            </Button>
        </div>
    );
}
