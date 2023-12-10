export type FriendsType = {
  id: string
  name: string
  avatar: string
}
export type SidebarType = {
  friends: FriendsType[]
}

const initialState = {
  friends: [
    {
      id: "5",
      name: "Fortune Jeane",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&graphicType=Diamond&eyeType=WinkWacky&eyebrowType=Default&mouthType=Default&skinColor=Brown",
    },
    {
      id: "6",
      name: "Hattie Thurstan",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Dizzy&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow",
    },
    {
      id: "7",
      name: "Lora Burke",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Red&graphicType=Diamond&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Disbelief&skinColor=Light",
    },
  ],
}

export const sidebarReducer = (state: SidebarType = initialState, action: any): SidebarType => {
  switch (action.type) {
    default:
      return state
  }
}
