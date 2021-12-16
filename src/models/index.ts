interface IUser {
    id: string,
    username: string
}

const users: IUser[] = [
    {
        id: '1',
        username: 'JaimeAmate'
    },
    {
        id: '2',
        username: 'RosaBerned'
    },
   {
       id: '3',
       username: 'Marene'
   },
   {
       id: '4',
       username: 'LucasMachado'
   }
]

export { IUser, users }