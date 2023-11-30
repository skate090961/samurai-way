import {getRefactorTime} from "../../utils/date/getRefactorDateAndTime";

export type DialogsType = {
    id: string
    name: string
    avatar: string
}
export type MessagesType = {
    id: string
    message: string
    time: string
}
export type ChatPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
type ActionsTypes = ReturnType<typeof updateNewMessageTextCreator> | ReturnType<typeof addNewMessageCreator>

const initialState: ChatPageType = {
    dialogs: [
        {
            id: '1',
            name: 'Natalia Delores',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Sunglasses&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Hearts&eyebrowType=AngryNatural&mouthType=Eating&skinColor=Yellow'
        },
        {
            id: '2',
            name: 'Everett Nic',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Sunglasses&hairColor=PastelPink&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=Hoodie&clotheColor=PastelRed&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Eating&skinColor=Light'
        },
        {
            id: '3',
            name: 'Jessica Jarrod',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Kurt&hatColor=Pink&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Wink&eyebrowType=Angry&mouthType=Concerned&skinColor=Yellow'
        },
        {
            id: '4',
            name: 'Neil Clem',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Wayfarers&hairColor=Blue&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Heather&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Yellow'
        },
        {
            id: '5',
            name: 'Fortune Jeane',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&graphicType=Diamond&eyeType=WinkWacky&eyebrowType=Default&mouthType=Default&skinColor=Brown'
        },
        {
            id: '6',
            name: 'Hattie Thurstan',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Dizzy&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
        },
        {
            id: '7',
            name: 'Lora Burke',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Red&graphicType=Diamond&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Disbelief&skinColor=Light'
        },
    ],
    messages: [
        {id: '1', message: 'Elvis has left the building', time: '13:23'},
        {id: '2', message: 'Beating around the bush', time: '13:26'},
        {id: '3', message: 'A fool and his money are soon parted', time: '15:23'},
    ],
    newMessageText: ''
}

export const messageReducer = (state: ChatPageType = initialState, action: ActionsTypes): ChatPageType => {
    switch (action.type) {
        case 'SEND-NEW-MESSAGE':
            const newMessage = {
                id: String(new Date().getTime()),
                message: state.newMessageText,
                time: getRefactorTime()
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const updateNewMessageTextCreator = (newText: string) => (
    {type: 'UPDATE-NEW-MESSAGE-TEXT', newText} as const
)
export const addNewMessageCreator = () => ({type: 'SEND-NEW-MESSAGE'} as const)