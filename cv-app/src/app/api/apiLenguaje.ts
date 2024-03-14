interface ApiLenguaje {
    id: string,
    lenguaje: string
};

const lenguajes: ApiLenguaje[] = [
    {
        id: "1",
        lenguaje: "español",
    },
];

const api = {
    list: async (): Promise<ApiLenguaje[]> => {
        // await sleep(7500);
        return lenguajes
    },
    fetch: async (id: ApiLenguaje["id"]): Promise<ApiLenguaje> => {
        // await sleep(7500);

        const lenguaje = lenguajes.find((leng) => leng.id === id);

        if (!lenguaje) {
            throw new Error("lenguaje id not found");
        }

        return lenguaje;
    }
}

export default api
