import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

function Conversation({ conversation, lastIdx, emoji }) {

    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);


    return <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
            onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic} />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200 '>
                        {conversation.fullName}
                    </p>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </div>

        {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
}

export default Conversation;


// STARTER CODE
// export default Conversation


// import React from 'react'

// function Conversation() {
//     return <>
//         <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer '>
//             <div className='avatar online'>
//                 <div className='w-12 rounded-full'>
//                     <img src="data:image/png;base64,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" alt="user avatar" />
//                 </div>
//             </div>

//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-3 justify-between'>
//                     <p className='font-bold text-gray-200 '>
//                         John Doe
//                     </p>
//                     <span className='text-xl'>
//                         🐅
//                     </span>
//                 </div>
//             </div>
//         </div>

//         <div className='divider my-0 py-0 h-1' />
//     </>
// }

// export default Conversation