import Conversations from "../models/Conversationmodel.js";
import Message from "../models/Messagemodel.js";
import { getReceiverSocketID, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id

        let conversation = await Conversations.findOne({
            participants: { $all: [senderId, recieverId] },
        });

        if (!conversation) {
            conversation = await Conversations.create({
                participants: [senderId, recieverId],
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        // await conversation.save();
        // await newMessage.save();

        //this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketID(recieverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)
    }
    catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversations.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}



