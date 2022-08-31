const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');

jest.mock('../user_client.js');
describe('userService', () => {
    const login = jest.fn(async (id, password) => { });
    UserClient.mockImplementation(() => {
        return {
            login
        };
    });

    let userService;
    beforeEach(() => {
        userService = new UserService(new UserClient());
        login.mockClear();
        UserClient.mockClear();
    });

    it('userService login isLogedIn value false', () => {
        expect(userService.isLogedIn).toBe(false);
    });

    it('userService login isLogedIn value true', async () => {
        await userService.login("id", "password");
        expect(userService.isLogedIn).toBe(true);
    });

    it('userService login several call, isLogedIn value true', async () => {
        await userService.login("id", "password");
        await userService.login("id", "password");
        expect(login).toHaveBeenCalledTimes(1);
        expect(login.mock.calls.length).toBe(1);
        expect(userService.isLogedIn).toBe(true);
    });
})