import { Github } from 'lucide-react';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card } from '../ui/card';

interface Props {
    name: string;
    githubLink: string;
    imageSrc: string;
    twitterLink: string;
    twitterHandle: string;
    devType: string;
}

const Contributor = ({ name, githubLink, imageSrc, twitterLink, twitterHandle, devType }: Props) => {
    return (
        <Card id="avatar" className="py-10 flex flex-col items-center justify-center gap-3 text-center dark:border-gray-800 w-full max-w-xs mx-auto">
            <Avatar className='h-[60px] w-[60px]'>
                <AvatarImage src={imageSrc} alt={`@${twitterHandle}`} />
                <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center px-3">
                <p className="font-bold">{name}</p>
                <p className="text-gray-500 text-wrap break-words overflow-wrap">{devType}</p>
            </div>
            <div className="flex justify-center space-x-4 mt-3">
                <Link href={twitterLink} className="flex items-center space-x-1 text-indigo-800">
                    <FaXTwitter className="w-4 h-4" />
                </Link>
                <Link href={githubLink} className="flex items-center space-x-1 text-indigo-800">
                    <Github className="w-4 h-4" />
                </Link>
            </div>
        </Card>
    );
}

export default Contributor;
