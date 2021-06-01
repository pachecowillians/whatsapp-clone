const IMAGE_URL = 'https://picsum.photos/200';

const Chats = {
    getChats: () => {
        return [
            {
                name: 'Carla',
                profilePicture: `${IMAGE_URL}?random=1`,
                lastMessage: 'How are you?',
                lastMessageTime: '12:41',
                messages: [
                    {
                        text: 'Hi!',
                        type: 'sent',
                        time: '12:10',
                        status: 'visualized'
                    },
                    {
                        text: 'Hi! How are you?',
                        type: 'recived',
                        time: '12:19',
                        status: ''
                    },
                    {
                        text: 'I am fine... how about you?',
                        type: 'sent',
                        time: '13:10',
                        status: 'recived'
                    }
                ]
            },
            {
                name: 'Pedro',
                profilePicture: `${IMAGE_URL}?random=2`,
                lastMessage: 'Hi!! This is a test message that is sent to you to test the api',
                lastMessageTime: '00:41',
                messages: [
                    {
                        text: 'How can i concatenate a variable in a string in Javascript?',
                        type: 'recived',
                        time: '00:10',
                        status: 'visualized'
                    },
                    {
                        text: 'Hi!',
                        type: 'sent',
                        time: '00:19',
                        status: 'visualized'
                    },
                    {
                        text: 'There are so many ways, but the simplest is just use the following syntax:',
                        type: 'sent',
                        time: '00:19',
                        status: 'visualized'
                    },
                    {
                        text: '`this is my variable value: ${variable}`',
                        type: 'sent',
                        time: '00:20',
                        status: 'visualized'
                    },
                    {
                        text: 'Hmm, i did not knew it',
                        type: 'recived',
                        time: '00:25',
                        status: 'sent'
                    },
                    {
                        text: 'Thanks!',
                        type: 'recived',
                        time: '00:26',
                        status: 'visualized'
                    }
                ]
            },
            {
                name: 'Lara',
                profilePicture: `${IMAGE_URL}?random=3`,
                lastMessage: 'Hi!! This is a test message that is sent to you to test the api',
                lastMessageTime: '00:41',
                messages: [
                    {
                        text: 'Hi!!!',
                        type: 'recived',
                        time: '12:10',
                        status: 'visualized'
                    },
                    {
                        text: 'Do you remember me? from school',
                        type: 'recived',
                        time: '12:10',
                        status: 'visualized'
                    },
                    {
                        text: 'I think so... From the High School?',
                        type: 'sent',
                        time: '12:19',
                        status: ''
                    },
                    {
                        text: 'Yes, i found your number in my cellphone and decided to send a message',
                        type: 'recived',
                        time: '12:20',
                        status: 'recived'
                    },
                    {
                        text: 'I hope that you are not busy now...',
                        type: 'recived',
                        time: '12:20',
                        status: 'recived'
                    }
                ]
            },
            {
                name: 'André',
                profilePicture: `${IMAGE_URL}?random=4`,
                lastMessage: 'Hi!! This is a test message that is sent to you to test the api',
                lastMessageTime: '00:41',
                messages: [
                    {
                        text: 'Did you call me?',
                        type: 'recived',
                        time: '09:15',
                        status: ''
                    }
                ]
            },
            {
                name: 'Maria',
                profilePicture: `${IMAGE_URL}?random=5`,
                lastMessage: 'Hi!! This is a test message that is sent to you to test the api',
                lastMessageTime: '00:41',
                messages: [
                    {
                        text: 'Hi! Can you help me with a problem?',
                        type: 'sent',
                        time: '17:14',
                        status: 'sent'
                    }
                ]
            }
        ];
    }
}

export default Chats;