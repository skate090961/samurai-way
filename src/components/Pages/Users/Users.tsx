import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../../store/reducers/users-reducer/users-reducer";
import User from "./User/User";

type UsersPropsType = {
    users: UserType[]
    changeSubscriptionStatus: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             changeSubscriptionStatus,
                                             setUsers
                                         }) => {

    if (users.length === 0) {
        setUsers([
        {
            id: '1',
            fullName: 'Max P.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=Default&mouthType=Disbelief&skinColor=Yellow',
            location: {
                country: 'Russia',
                city: 'Moscow'
            },
            isFollow: false,
            status: 'lorem ipsum lorem'
        },
        {
            id: '2',
            fullName: 'Michael F.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&hairColor=PastelPink&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Pink&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Vomit&skinColor=Brown',
            location: {
                country: 'USA',
                city: 'Nebraska'
            },
            isFollow: true,
            status: 'Im a boss'
        },
        {
            id: '3',
            fullName: 'Viktor P.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Squint&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Brown',
            location: {
                country: 'Russia',
                city: 'Saint-Petersburg'
            },
            isFollow: true,
            status: 'Life is like'
        },
        {
            id: '4',
            fullName: 'Morgen A.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Wayfarers&hatColor=PastelYellow&hairColor=Black&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=PastelOrange&eyeType=Hearts&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
            location: {
                country: 'Germany',
                city: 'Berlin'
            },
            isFollow: false,
            status: 'I like beer'
        },
        {
            id: '5',
            fullName: 'Jack R.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=EyeRoll&eyebrowType=UnibrowNatural&mouthType=ScreamOpen&skinColor=DarkBrown',
            location: {
                country: 'Canada',
                city: 'Vancouver'
            },
            isFollow: true,
            status: 'I like hockey'
        },
        {
            id: '6',
            fullName: 'Misha W.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Blue&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Hearts&eyebrowType=FlatNatural&mouthType=ScreamOpen&skinColor=Yellow',
            location: {
                country: 'Russia',
                city: 'Ivanovo'
            },
            isFollow: false,
            status: 'Like a boss'
        },
    ])
    }

    const usersList = users.map(u =>
        <User
            key={u.id}
            user={u}
            changeSubscriptionStatus={changeSubscriptionStatus}
        />
    )

    return (
        <ul className={s.users}>
            {usersList}
        </ul>
    );
};

export default Users;