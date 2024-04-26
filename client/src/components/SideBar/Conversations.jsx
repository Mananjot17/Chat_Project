import React from 'react'
import Conversation from "./Conversation.jsx"
import useGetConversations from '../../hooks/UseGetConversations'
import { getRandomEmoji } from "../../utils/emojis.js";

function Conversations() {
    const { loading, conversations } = useGetConversations();
    // console.log("CONVERSATIONS", conversations);
    return (
        <div className='py-2 flex flex-col overflow-auto'>

            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIdx={idx === conversations.length - 1}
                    emoji={getRandomEmoji()}
                />
            ))}
            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    );
};

export default Conversations;

// STARTER CODE
// export default Conversations


// import React from 'react'
// import Conversation from './Conversation'

// function Conversations() {
//     return (
//         <div className='py-2 flex flex-col overflow-auto'>
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//         </div>
//     )
// }

// export default Conversations