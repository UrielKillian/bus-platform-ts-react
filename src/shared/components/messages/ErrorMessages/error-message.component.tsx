import { XCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

export interface ErrorMessage1ComponentI {
    message: string;
    item_1: string;
    item_2: string;
}
export default function ErrorMessage1Component({ message, item_1, item_2 }: ErrorMessage1ComponentI) {
    return (
        <>
            <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <XCircleIcon
                            className="h-5 w-5 text-red-400"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                            {message}
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                            <ul className="list-disc space-y-1 pl-5">
                                <li>{item_1}</li>
                                <li>{item_2}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}