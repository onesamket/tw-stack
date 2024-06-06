"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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
                    Command
                </Label>
                <Input
                    id="command"
                    defaultValue="$   npx tw-stack create"
                    readOnly
                />
            </div>
            <Button size='icon' className="px-2 cursor-pointer " onClick={handleCopy}>
                <span className="sr-only">Copy</span>
                {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
            </Button>
        </div>
    );
}
