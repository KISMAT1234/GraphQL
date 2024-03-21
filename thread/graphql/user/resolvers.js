const queries = {} 
const mutations = {
    createUser: async(_,CreateUserPayload)=>{
        const response = await UserService.createUser(payload);
        return response .id;
    }
}

export const resolvers = {queries, mutations};