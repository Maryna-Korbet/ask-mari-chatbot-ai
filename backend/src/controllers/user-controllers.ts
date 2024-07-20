export const getAllUsers = async () => {
    try {
        const users = await User.find({});

    } catch (error) {
    }
};