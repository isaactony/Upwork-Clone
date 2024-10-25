import React from 'react';
import { Search, MoreHorizontal, Camera, Image, Clock, Smile, Send, ChevronDown } from 'lucide-react';
import MessageSidebar from '../components/messages/MessageSidebar';
import MessageThread from '../components/messages/MessageThread';
import MessageDetails from '../components/messages/MessageDetails';

export default function MessagesPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <MessageSidebar />
      <MessageThread />
      <MessageDetails />
    </div>
  );
}