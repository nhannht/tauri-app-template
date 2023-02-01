import React from 'react';
import {Input} from './component/Input';
import {Button, buttonVariants} from './component/Button';

export default function App() {
    const [count, setCount] = React.useState(0);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Input
                className={"bg-gray-200 rounded-md p-4 w-1/2 text-center"}
                placeholder="Hello world"/>
            <Button
                className={"bg-fuchsia-600 rounded-md p-4 m-5"}
                variant={"outline"}
                onClick={() => setCount(count + 1)

                }
            >
                Click me
            </Button>
            <div>{count}</div>


        </div>
    )
}