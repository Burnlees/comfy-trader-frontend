import comfy from "@/api";
import { ApiKeys, BotSettings } from "./settingsTypes";

export const postApiKeys = async (apiKeys: ApiKeys) => {
  try {
    const { email, apiKey, privateKey } = apiKeys;
    const request = {
      email,
      apiKey,
      privateKey,
    };
    const path = `/api-keys/${apiKeys.username}`;
    const response = await comfy.post(path, request);
    return response
  } catch (error: any) {
    throw error
  }
};

export const getUserSettings = async (username: string | undefined) => {
  try {
    const path = `/user-settings/${username}`;
    const response = await comfy.get(path);
    return response;
  } catch (error) {
    throw error;
  }
};

export const postUserSettings = async (
  settings: BotSettings,
  username: string | undefined
) => {
  const { strategy, bot_on } = settings;
  const request = {
    strategy,
    bot_on,
  };
  try {
    const path = `/user-settings/${username}`;
    const response = await comfy.post(path, request);
    return response;
  } catch (error) {
    throw error;
  }
};

export const patchUserSettings = async (
  settings: BotSettings,
  username: string | undefined
) => {
  const { strategy, bot_on } = settings;
  const request = {
    strategy,
    bot_on,
  };
  try {
    const path = `/user-settings/${username}`;
    const response = await comfy.patch(path, request);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserAPI = async (username: string) => {
  try {
    const path = `/api-keys/${username}`;
    const response = await comfy.get(path);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteUserApi = async (username: string) => {
  try {
    const path = `/api-keys/${username}`;
    const response = await comfy.delete(path);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
