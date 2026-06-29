import { decodedToken } from "@/utils/jwt";
import { getFormLocaleStorage, removeFromLocaleStorage, setLocaleStorage } from "@/utils/localeStoratge";

export const storageUserInfo = (accessToken) => {
    return setLocaleStorage("accessToken", accessToken);
};

export const getUserInfo = () => {
    const authToken = getFormLocaleStorage("accessToken");
    if (authToken) {
        const token = decodedToken(authToken);
        return token;
    } else {
        console.log("No access token found");
    }
};

export const loggedInUser = () => {
    const authToken = getFormLocaleStorage("accessToken");
    return !!authToken;
};

export const removeUser = () => {
    return removeFromLocaleStorage("accessToken");
};
