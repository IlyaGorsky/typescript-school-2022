/**
 * Intersection types
 * @description Пересечение типов
 *              Типы пересечения похожи на типы объединения, но используются для группировки не скольких типов в один общий
 */

interface Article {
    id: number;
    name: string;
}

interface Favorites {
    id: number
}

interface UserModel {
    favorites: Favorites[]
}

interface Articles {
    articles: Article[];
}

interface ErrorResponseData {
    Ok: boolean;
    error?: { message: string };
}

type PageResponse = UserModel & Articles & ErrorResponseData;

function getUserFavoriteArticles(response: PageResponse) : (Article | null)[] | never {
    if (!response.Ok) {
        console.error(response?.error?.message);
        throw new Error(response?.error?.message);
    }

    return response.favorites.map(({ id }) => {
        const article = response.articles.find((article) => article.id === id);
        if (article) {
            return article
        }
        return null;
    });
}

const responseData = {
    // Ok: true,
    Ok: false,
    error: {
        message: "Bad Request",
    },
    articles: [
        { id: 1, name: "Some article" },
        { id: 2, name: "Some article two" },
    ],
    favorites: [{ id: 1 }],
};

try {
    const favorites = getUserFavoriteArticles(responseData);
    if (Array.isArray(favorites)) {
        favorites.forEach((article) => {
            if (article?.name) {
                console.log(article.name);
            }
        });
    }
} catch (e: unknown) {
    if (e instanceof Error) {
        console.log(e.message);
    }
}
