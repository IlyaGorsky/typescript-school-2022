/**
 * Optional Properties
 * @description Опциональные поля
 *              Интефрейсы с не обязательными свойствами помечаются знаком ?
 */
interface UserConfig {
    name: string;
    age?: number;
}

function createUserConfig(userConfig: UserConfig) {
    return {
        ...userConfig,
        id: "u1",
    };
}

createUserConfig({ name: "Ilya" });
createUserConfig({ age: 20, name: "Ilya" });
