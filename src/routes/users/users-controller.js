const controller = {
    getAllUsers: async function(usersRepository) {
        const allUsers = await usersRepository.getAllUsers();
        return allUsers;
    }
};

module.exports = controller;