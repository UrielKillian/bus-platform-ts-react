
import { ChatInfoI } from "../../../interfaces/models/chat-info.interface";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";




export default function MessagesComponent({ messages }: { messages: ChatInfoI[] }) {

    return (
        <div className="flow-root p-8">
            <ul role="list" className="-mb-8">
                {messages.map((event: any, eventIdx) => (
                    <li key={eventIdx}>
                        <div className="relative pb-8">
                            {eventIdx !== messages.length - 1 ? (
                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                    <span
                                        className='bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                    >
                                        <ChatBubbleBottomCenterIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {event.message}{' '}<p className="font-medium text-gray-900">
                                                {event.email}
                                            </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


/*{     messages.map((message: any, index: any) => (
        <div key={index}>
            {message.email}:
            {message.message.value}
        </div>
    ))
} */