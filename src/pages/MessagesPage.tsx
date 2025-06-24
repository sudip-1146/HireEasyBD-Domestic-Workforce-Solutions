import React, { useState } from 'react';
import { 
  Search, 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical,
  Phone,
  Video,
  Star,
  Shield,
  Check,
  CheckCheck
} from 'lucide-react';

const MessagesPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number>(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Fatima Khan',
      role: 'House Cleaner',
      avatar: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      lastMessage: 'Thank you for hiring me! I\'ll be there tomorrow at 9 AM.',
      time: '2 min ago',
      unread: 1,
      online: true,
      verified: true
    },
    {
      id: 2,
      name: 'Rashida Ahmed',
      role: 'Employer',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      lastMessage: 'Could you please come an hour earlier tomorrow?',
      time: '1 hour ago',
      unread: 0,
      online: false,
      verified: true
    },
    {
      id: 3,
      name: 'Mohammad Rahman',
      role: 'Employer',
      avatar: 'https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      lastMessage: 'Are you available for weekend work?',
      time: '3 hours ago',
      unread: 2,
      online: true,
      verified: false
    },
    {
      id: 4,
      name: 'Nasreen Begum',
      role: 'Elder Care',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      lastMessage: 'I have experience with elderly care for 6 years.',
      time: '1 day ago',
      unread: 0,
      online: false,
      verified: true
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: 'Fatima Khan',
      content: 'Hello! I saw your job posting for house cleaning. I have 5 years of experience and excellent references.',
      time: '10:30 AM',
      sent: false,
      read: true
    },
    {
      id: 2,
      senderId: 'me',
      senderName: 'You',
      content: 'Hi Fatima! Thank you for your interest. Could you tell me more about your experience?',
      time: '10:35 AM',
      sent: true,
      read: true
    },
    {
      id: 3,
      senderId: 1,
      senderName: 'Fatima Khan',
      content: 'Of course! I\'ve been working as a house cleaner for 5 years. I specialize in deep cleaning, organizing, and I\'m very detail-oriented. I have references from 3 previous long-term clients.',
      time: '10:40 AM',
      sent: false,
      read: true
    },
    {
      id: 4,
      senderId: 'me',
      senderName: 'You',
      content: 'That sounds great! What are your rates and availability?',
      time: '10:42 AM',
      sent: true,
      read: true
    },
    {
      id: 5,
      senderId: 1,
      senderName: 'Fatima Khan',
      content: 'I charge ৳250 per hour or ৳9,000 per month for regular weekly cleaning. I\'m available Monday through Friday, 9 AM to 5 PM.',
      time: '10:45 AM',
      sent: false,
      read: true
    },
    {
      id: 6,
      senderId: 'me',
      senderName: 'You',
      content: 'Perfect! I\'d like to hire you for weekly cleaning. Can you start this Friday?',
      time: '11:00 AM',
      sent: true,
      read: true
    },
    {
      id: 7,
      senderId: 1,
      senderName: 'Fatima Khan',
      content: 'Thank you for hiring me! I\'ll be there tomorrow at 9 AM.',
      time: '11:05 AM',
      sent: false,
      read: false
    }
  ];

  const currentChat = conversations.find(c => c.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would normally send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-screen">
          {/* Conversations Sidebar */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <h1 className="text-xl font-semibold text-gray-900 mb-4">Messages</h1>
              <div className="relative">
                <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedChat === conversation.id ? 'bg-teal-50 border-teal-200' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={conversation.avatar}
                        alt={conversation.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                          {conversation.verified && (
                            <Shield className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{conversation.role}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <span className="bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {currentChat ? (
              <>
                {/* Chat Header */}
                <div className="bg-white border-b border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={currentChat.avatar}
                          alt={currentChat.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        {currentChat.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h2 className="font-semibold text-gray-900">{currentChat.name}</h2>
                          {currentChat.verified && (
                            <Shield className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {currentChat.online ? 'Online now' : 'Last seen 2 hours ago'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors">
                        <Phone className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors">
                        <Video className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.senderId === 'me'
                            ? 'bg-teal-600 text-white'
                            : 'bg-white text-gray-900 border border-gray-200'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div className={`flex items-center justify-between mt-1 ${
                          message.senderId === 'me' ? 'text-teal-100' : 'text-gray-500'
                        }`}>
                          <span className="text-xs">{message.time}</span>
                          {message.senderId === 'me' && (
                            <div className="ml-2">
                              {message.read ? (
                                <CheckCheck className="h-3 w-3" />
                              ) : (
                                <Check className="h-3 w-3" />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="bg-white border-t border-gray-200 p-4">
                  <div className="flex items-center space-x-3">
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
                      <Paperclip className="h-5 w-5" />
                    </button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-600 hover:text-gray-800 transition-colors">
                        <Smile className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="bg-gray-200 rounded-full p-8 mb-4 inline-block">
                    <MessageCircle className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-600">Choose a conversation from the sidebar to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;